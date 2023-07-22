module.exports = `
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
        <p>Kính gửi quý khách hàng {customerName},</p>
        <p>Chúng tôi thành thật xin thông báo rằng yêu cầu đặt tour của quý khách cho <span class="bold">{tourName}</span> đã bị từ chối do lý do sau đây:</p>

        <div class="reason">
            <p>{reason}</p>
        </div>

        <p>Chúng tôi hiểu rằng điều này có thể gây thất vọng và thành thật xin lỗi vì bất kỳ sự bất tiện nào. Nếu quý khách có bất kỳ câu hỏi hoặc muốn được giải thích thêm về lý do từ chối, xin vui lòng liên hệ với chúng tôi.</p>

        <p>Đội ngũ chúng tôi cam kết mang đến dịch vụ khách hàng xuất sắc và hy vọng có thể hỗ trợ quý khách với các tùy chọn tour khác hoặc giải quyết mọi vấn đề mà quý khách có thể gặp phải.</p>

        <p>Cảm ơn quý khách đã xem xét dịch vụ của chúng tôi, và chúng tôi rất trân trọng sự quan tâm của quý khách đến [Tên Công ty Tour của Bạn]. Nếu quý khách muốn khám phá các tour khác hoặc có bất kỳ yêu cầu đặt tour trong tương lai, xin vui lòng liên hệ với chúng tôi hoặc truy cập trang web của chúng tôi.</p>

        <a class="cta-button" href="[Link đến Trang Web Của Bạn hoặc Trang Liên Hệ]">Ghé Thăm Trang Web Của Chúng Tôi</a>

        <p>Một lần nữa, chúng tôi thành thật xin lỗi vì bất kỳ sự bất tiện nào và hy vọng có cơ hội được phục vụ quý khách trong tương lai.</p>

        <p>Trân trọng,</p>
        <p>IVIVU</p>
    </div>
</body>
</html>
`;
