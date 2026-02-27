# Bài tập thực hành kiểm thử tự động End-to-End với Cypress

## Mô tả
Dự án này thực hiện kiểm thử tự động end-to-end cho trang web mẫu [SauceDemo](https://www.saucedemo.com) sử dụng Cypress.

## Cài đặt

### Yêu cầu
- Node.js (phiên bản 14 hoặc cao hơn)
- npm hoặc yarn

### Các bước cài đặt
1. Clone repository này
2. Cài đặt dependencies:
```bash
npm install
```

## Chạy kiểm thử

### Mở Cypress Test Runner (giao diện)
```bash
npm run cypress:open
```

### Chạy tất cả test trong chế độ headless
```bash
npm test
```

### Chạy test với trình duyệt hiển thị
```bash
npm run test:headed
```

### Chạy test với Chrome
```bash
npm run test:chrome
```

## Cấu trúc dự án

```
cypress-exercise/
├── cypress/
│   ├── e2e/
│   │   ├── login_spec.cy.js      # Test đăng nhập
│   │   ├── cart_spec.cy.js       # Test giỏ hàng
│   │   └── checkout_spec.cy.js   # Test thanh toán
│   ├── support/
│   │   ├── commands.js           # Custom commands
│   │   └── e2e.js               # Support file
├── cypress.config.js             # Cấu hình Cypress
├── package.json
└── README.md
```

## Các kịch bản kiểm thử

### 1. Login Test (login_spec.cy.js)
- ✅ Đăng nhập thành công với thông tin hợp lệ
- ✅ Hiển thị lỗi khi đăng nhập với thông tin không hợp lệ
- ✅ Hiển thị lỗi khi username trống
- ✅ Hiển thị lỗi khi password trống

### 2. Cart Test (cart_spec.cy.js)
- ✅ Thêm sản phẩm vào giỏ hàng
- ✅ Sắp xếp sản phẩm theo giá (thấp đến cao)
- ✅ Xóa sản phẩm khỏi giỏ hàng
- ✅ Thêm nhiều sản phẩm vào giỏ hàng
- ✅ Kiểm tra sản phẩm hiển thị đúng trong giỏ hàng

### 3. Checkout Test (checkout_spec.cy.js)
- ✅ Hoàn tất quy trình thanh toán
- ✅ Xác nhận đơn hàng và hiển thị trang hoàn tất
- ✅ Kiểm tra validation khi thiếu thông tin
- ✅ Kiểm tra nút Cancel
- ✅ Kiểm tra hiển thị tổng giá

## Thông tin đăng nhập test

### Username hợp lệ:
- `standard_user`
- `problem_user`
- `performance_glitch_user`

### Password:
- `secret_sauce`

## Kết quả

Sau khi chạy test, kết quả sẽ được lưu tại:
- Video: `cypress/videos/`
- Screenshots (nếu test fail): `cypress/screenshots/`

## Tác giả
Bài tập thực hành môn Kiểm thử phần mềm
