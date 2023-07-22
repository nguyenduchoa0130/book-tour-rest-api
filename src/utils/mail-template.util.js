const moment = require('moment');

module.exports = {
  createSuccessMailTemplate: (
    customerName,
    tourName,
    startDate,
    endDate,
    dateDetail,
    numberOfUsers,
    place,
    host,
  ) => {
    return `
    <!DOCTYPE html>
    <html>
    
    <head>
      <title>Đặt Tour Thành Công- Trải nghiệm du lịch</title>
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

        .bold {
          font-weight: 700;
        }
      </style>
    </head>
    
    <body>
      <div class="container">
        <h1>Xác nhận Đặt Tour Thành Công - Trải nghiệm du lịch</h1>
        <p>Kính gửi quý khách hàng <strong>${customerName}</strong>,</p>
        <p>Chúc mừng! Chúng tôi xin trân trọng thông báo rằng đơn đặt tour của quý khách cho <strong>${tourName}</strong> đã được xác nhận thành công. Chúng tôi hân hạnh mang đến cho quý khách một trải nghiệm đáng nhớ tại
          điểm đến đã chọn.</p>
    
        <table class="details">
          <tr>
            <th colspan="2" class="bold">Chi tiết Tour</th>
          </tr>
          <tr>
            <td><span class="bold">Tên Tour:</span></td>
            <td>${tourName}</td>
          </tr>
          <tr>
            <td><span class="bold">Từ ngày:</span></td>
            <td>${moment(startDate).format('DD-MM-YYYY')}</td>
          </tr>
          <tr>
          <td><span class="bold">Đến ngày:</span></td>
          <td>${moment(endDate).format('DD-MM-YYYY')}</td>
        </tr>
          <tr>
            <td><span class="bold">Điểm Hẹn:</span></td>
            <td>Hướng dẫn viên sẽ  trực tiếp liên hệ</td>
          </tr>
          <tr>
            <td><span class="bold">Thời gian Tour:</span></td>
            <td>${dateDetail}</td>
          </tr>
          <tr>
            <td><span class="bold">Số Lượng người đi:</span></td>
            <td>${numberOfUsers}</td>
          </tr>
          
          <tr>
            <td colspan="2">
              <p><span class="bold">Ghi Chú Thêm:</span></p>
              <p>Quý khách vui lòng để ý điện thoại từ hướng dẫn viên</p>
            </td>
          </tr>
        </table>
    
        <p>Chúng tôi muốn đảm bảo rằng quý khách có một trải nghiệm tốt nhất, vì vậy xin đừng ngần ngại liên hệ với chúng
          tôi nếu có bất kỳ câu hỏi hoặc cần hỗ trợ thêm.</p>
    
        <p>Nếu quý khách cần thay đổi đặt tour hoặc hủy bỏ vì bất kỳ lý do gì, xin vui lòng thông báo cho chúng tôi ít nhất
          3 trước để thuận tiện cho việc sắp xếp.</p>
    
        <p>Chúng tôi trân trọng đánh giá cao sự tin tưởng của quý khách vào dịch vụ của chúng tôi và mong chờ mang đến cho
          quý khách một trải nghiệm tour tuyệt vời. Nếu quý khách có bất kỳ yêu cầu hoặc mong muốn cụ thể nào, xin vui lòng
          thông báo cho chúng tôi trước, chúng tôi sẽ cố gắng hỗ trợ tốt nhất.</p>
    
        <p>Một lần nữa, cảm ơn quý khách đã chọn IVIVU. Chúng tôi rất mong chờ được đón quý khách và
          trình diễn vẻ đẹp và kỳ quan của ${place}.</p>
    
        <p>Hẹn gặp quý khách sớm, hãy sẵn sàng cho một cuộc phiêu lưu hấp dẫn!</p>
    
        <a class="cta-button" href="${host}" style="color: #fff;">Ghé Thăm Trang Web Của Chúng Tôi</a>
    
        <p>Trân trọng,</p>
        <p>IVIVU</p>
      </div>
    </body>
    
    </html>
    `;
  },
  createFailedEmailTemplate: (customerName, tourName, reason, host) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Từ Chối Đặt Tour - Trải nghiệm du lịch</title>
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
                color: #FF0000;
            }
            p {
                margin: 10px 0;
            }
            .reason {
                background-color: #f5f5f5;
                padding: 15px;
                border-radius: 5px;
            }
            .bold {
                font-weight: bold;
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
            <h1>Từ Chối Đặt Tour - Trải nghiệm du lịch</h1>
            <p>Kính gửi quý khách hàng <strong>${customerName}</strong>,</p>
            <p>Chúng tôi thành thật xin thông báo rằng yêu cầu đặt tour của quý khách cho <strong>${tourName}</strong> đã bị từ chối do lý do sau đây:</p>
    
            <div class="reason">
                <p>${reason}</p>
            </div>
    
            <p>Chúng tôi hiểu rằng điều này có thể gây thất vọng và thành thật xin lỗi vì bất kỳ sự bất tiện nào. Nếu quý khách có bất kỳ câu hỏi hoặc muốn được giải thích thêm về lý do từ chối, xin vui lòng liên hệ với chúng tôi.</p>
    
            <p>Đội ngũ chúng tôi cam kết mang đến dịch vụ khách hàng xuất sắc và hy vọng có thể hỗ trợ quý khách với các tùy chọn tour khác hoặc giải quyết mọi vấn đề mà quý khách có thể gặp phải.</p>
    
            <p>Cảm ơn quý khách đã xem xét dịch vụ của chúng tôi, và chúng tôi rất trân trọng sự quan tâm của quý khách đến IVIVU. Nếu quý khách muốn khám phá các tour khác hoặc có bất kỳ yêu cầu đặt tour trong tương lai, xin vui lòng liên hệ với chúng tôi hoặc truy cập trang web của chúng tôi.</p>
    
            <a class="cta-button" href="${host}">Ghé Thăm Trang Web Của Chúng Tôi</a>
    
            <p>Một lần nữa, chúng tôi thành thật xin lỗi vì bất kỳ sự bất tiện nào và hy vọng có cơ hội được phục vụ quý khách trong tương lai.</p>
    
            <p>Trân trọng,</p>
            <p>IVIVU</p>
        </div>
    </body>
    </html>
    `;
  },
};
