module.exports = `
<!DOCTYPE html>
<html>

<head>
  <title>Xác nhận Đặt Tour - Trải nghiệm du lịch</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    h1 {
      color: #007BFF;
    }

    p {
      margin: 10px 0;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    table,
    th,
    td {
      border: 1px solid #ccc;
    }

    th,
    td {
      padding: 10px;
      text-align: left;
    }

    .cta-button {
      display: inline-block;
      background-color: #007BFF;
      color: #fff;
      text-decoration: none;
      padding: 10px 15px;
      border-radius: 5px;
      margin-top: 20px;
    }
  </style>
</head>

<body>
  <div class="container">
    <h1>Xác nhận Đặt Tour - Trải nghiệm du lịch</h1>
    <p>Kính gửi quý khách hàng [Tên khách hàng],</p>
    <p>Chúc mừng! Chúng tôi xin trân trọng thông báo rằng đơn đặt tour của quý khách cho <span class="bold">[Tên
        Tour]</span> đã được xác nhận thành công. Chúng tôi hân hạnh mang đến cho quý khách một trải nghiệm đáng nhớ tại
      điểm đến đã chọn.</p>

    <table class="details">
      <tr>
        <th colspan="2" class="bold">Chi tiết Tour</th>
      </tr>
      <tr>
        <td><span class="bold">Tên Tour:</span></td>
        <td>[Tên Tour]</td>
      </tr>
      <tr>
        <td><span class="bold">Ngày và Giờ:</span></td>
        <td>[Ngày] vào lúc [Giờ]</td>
      </tr>
      <tr>
        <td><span class="bold">Điểm Hẹn:</span></td>
        <td>[Địa chỉ điểm hẹn]</td>
      </tr>
      <tr>
        <td><span class="bold">Thời gian Tour:</span></td>
        <td>[Thời gian diễn ra Tour]</td>
      </tr>
      <tr>
        <td><span class="bold">Số Lượng Nhóm:</span></td>
        <td>[Số lượng người tham gia]</td>
      </tr>
      <tr>
        <td colspan="2">
          <p><span class="bold">Tổng quan về Tour:</span></p>
          <p>[Cung cấp mô tả ngắn về tour và
          <p>những gì người tham gia có thể mong đợi]</p>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <p><span class="bold">Ghi Chú Thêm:</span></p>
          <p>[Đưa ra bất kỳ hướng dẫn hoặc lời khuyên quan trọng nào cho tour]</p>
        </td>
      </tr>
    </table>

    <p>Chúng tôi muốn đảm bảo rằng quý khách có một trải nghiệm tốt nhất, vì vậy xin đừng ngần ngại liên hệ với chúng
      tôi nếu có bất kỳ câu hỏi hoặc cần hỗ trợ thêm.</p>

    <p>Nếu quý khách cần thay đổi đặt tour hoặc hủy bỏ vì bất kỳ lý do gì, xin vui lòng thông báo cho chúng tôi ít nhất
      [số ngày] trước để thuận tiện cho việc sắp xếp.</p>

    <p>Chúng tôi trân trọng đánh giá cao sự tin tưởng của quý khách vào dịch vụ của chúng tôi và mong chờ mang đến cho
      quý khách một trải nghiệm tour tuyệt vời. Nếu quý khách có bất kỳ yêu cầu hoặc mong muốn cụ thể nào, xin vui lòng
      thông báo cho chúng tôi trước, chúng tôi sẽ cố gắng hỗ trợ tốt nhất.</p>

    <p>Một lần nữa, cảm ơn quý khách đã chọn [Tên Công ty Tour của Bạn]. Chúng tôi rất mong chờ được đón quý khách và
      trình diễn vẻ đẹp và kỳ quan của [Điểm đến Tour].</p>

    <p>Hẹn gặp quý khách sớm, hãy sẵn sàng cho một cuộc phiêu lưu hấp dẫn!</p>

    <a class="cta-button" href="[Link đến Trang Web Của Bạn hoặc Trang Liên Hệ]">Ghé Thăm Trang Web Của Chúng Tôi</a>

    <p>Trân trọng,</p>
    <p>[Tên của Bạn]</p>
    <p>[Tên Công ty Tour của Bạn]</p>
    <p>[Thông tin liên hệ]</p>
  </div>
</body>

</html>
`;
