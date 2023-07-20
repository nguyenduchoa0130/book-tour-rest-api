require('dotenv').config();
const stripe = require('stripe');
const { catchAsync } = require('../../utils');
const db = require('./../../database');
const { ModelEnum, TourStatusEnum, BookingStatusEnum } = require('../../enums');
const AppError = require('../../models/error.model');

const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);
const LichSuThanhToans = db.getModel(ModelEnum.LichSuThanhToans);
const ChiTietThanhToans = db.getModel(ModelEnum.ChiTietThanhToans);
const KhachHangs = db.getModel(ModelEnum.KhachHang);
const Tours = db.getModel(ModelEnum.Tours);
const HuongDanViens = db.getModel(ModelEnum.HuongDanVien);

module.exports = {
  handleSetUpPaymentIntent: catchAsync(async (req, res, next) => {
    const { amount } = req.body;
    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount: +amount,
      currency: 'vnd',
      payment_method_types: ['card'],
    });
    return res.send(paymentIntent);
  }),

  handleCreatePayment: catchAsync(async (req, res, next) => {
    const { customers, ...payload } = req.body;
    // Check KhachHang
    const [customer, tour] = await Promise.all([
      KhachHangs.findByPk(payload.NguoiDatId),
      Tours.findOne({
        where: {
          id: payload.TourId,
        },
      }),
    ]);
    // Validate customer
    if (!customer) {
      return next(
        AppError.createNotFoundError(
          'Không tìm thấy khách hàng, hoặc không thể đặt tour với vai trò hiện tại của bạn',
        ),
      );
    }
    // Validate tour
    if (!tour) {
      return next(
        AppError.createNotFoundError(
          'Không tìm thấy tour hoặc tour đã có người đặt trước. Xin lỗi vì sự bất tiện này !',
        ),
      );
    }
    const payment = await LichSuThanhToans.create(payload);
    const promises = customers.map((customer) =>
      ChiTietThanhToans.create({
        MaThanhToan: payment.id,
        KhachHang: customer.name,
        Sdt: customer.phone,
      }),
    );
    await Promise.all([...promises]);
    return res.status(201).send({
      status: 'OK',
    });
  }),

  handleGetPaymentHistories: catchAsync(async (req, res, next) => {
    const { userId } = req.params;
    const paymentHistories = await LichSuThanhToans.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      where: {
        NguoiDatId: +userId,
      },
      include: [
        {
          model: KhachHangs,
          attributes: ['HoVaTen'],
        },
        {
          model: Tours,
          attributes: ['TenTour', 'Gia', 'NgayBatDau', 'NgayKetThuc', 'ChiTietThoiGian', 'DiaDiem'],
        },
        {
          model: ChiTietThanhToans,
          attributes: ['KhachHang', 'Sdt'],
        },
        {
          model: HuongDanViens,
          attributes: ['id', 'HoVaTen', 'Sdt'],
        },
      ],
    });
    return res.status(200).json({
      status: 'OK',
      value: paymentHistories,
    });
  }),

  handleGetPaymentHistoriesByCategory: catchAsync(async (req, res, next) => {
    const { requestType } = req.params;
    const paymentStatusMap = {
      'cho-xac-nhan': BookingStatusEnum.ChoXacNhan,
      'thanh-cong': BookingStatusEnum.ThanhCong,
      'yeu-cau-huy': BookingStatusEnum.YeuCauHuy,
      'da-huy': BookingStatusEnum.KhongThanhCong,
    };
    const trangThai = paymentStatusMap[requestType];
    if (!trangThai) {
      return next(AppError.createBadRequestError('Trạng thái của đơn đặt tour không hợp lệ'));
    }
    const paymentHistories = await LichSuThanhToans.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      order: [['id', 'desc']],
      where: {
        TrangThai: trangThai,
      },
      include: [
        {
          model: KhachHangs,
          attributes: ['HoVaTen'],
        },
        {
          model: Tours,
          attributes: ['TenTour', 'Gia', 'NgayBatDau', 'NgayKetThuc', 'ChiTietThoiGian', 'DiaDiem'],
        },
        {
          model: ChiTietThanhToans,
          attributes: ['KhachHang', 'Sdt'],
        },
        {
          model: HuongDanViens,
          attributes: ['id', 'HoVaTen', 'Sdt'],
        },
      ],
    });
    return res.status(200).json({
      status: 'OK',
      value: paymentHistories,
    });
  }),

  handleUpdatePayment: catchAsync(async (req, res, next) => {
    const { paymentId } = req.params;
    const payment = await LichSuThanhToans.findByPk(+paymentId);
    if (!payment) {
      return next(AppError.createNotFoundError('Không tìm thấy đơn đặt tour'));
    }
    const { isSuccess, ...rest } = req.body;
    await payment.update({
      ...rest,
      NgayXuLy: new Date().toJSON(),
      TrangThai: isSuccess ? BookingStatusEnum.ThanhCong : BookingStatusEnum.KhongThanhCong,
    });
    return res.status(200).json({
      status: 'OK',
      value: {
        message: 'Xử lý đơn đặt tour thành công',
      },
    });
  }),

  handleGetAssignedTours: catchAsync(async (req, res, next) => {
    const { userId } = req.params;
    const assignedTours = await LichSuThanhToans.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      where: {
        HuongDanVienId: +userId,
      },
      order: [['id', 'desc']],
      include: [
        {
          model: KhachHangs,
          attributes: ['HoVaTen'],
        },
        {
          model: Tours,
          attributes: ['TenTour', 'Gia', 'NgayBatDau', 'NgayKetThuc', 'ChiTietThoiGian', 'DiaDiem'],
        },
        {
          model: ChiTietThanhToans,
          attributes: ['KhachHang', 'Sdt'],
        },
        {
          model: HuongDanViens,
          attributes: ['id', 'HoVaTen', 'Sdt'],
        },
      ],
    });
    return res.status(200).json({
      status: 'OK',
      value: assignedTours,
    });
  }),
};
