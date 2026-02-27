# BÁO CÁO BÀI TẬP KIỂM THỬ TỰ ĐỘNG E2E VỚI CYPRESS

## Thông tin sinh viên
- **Họ tên**: [Điền tên của bạn]
- **MSSV**: [Điền MSSV của bạn]
- **Lớp**: [Điền lớp của bạn]
- **Môn học**: Kiểm thử phần mềm

---

## 1. Tổng quan bài tập

### Mục tiêu
Thực hành kiểm thử tự động end-to-end sử dụng Cypress framework để kiểm tra trang web mẫu SauceDemo.

### Công nghệ sử dụng
- **Framework**: Cypress 15.11.0
- **Node.js**: v22.18.0
- **Trình duyệt**: Electron 138 (headless)
- **Trang web test**: https://www.saucedemo.com

---

## 2. Các yêu cầu đã hoàn thành

### ✅ Yêu cầu bắt buộc

#### Kịch bản 1: Kiểm tra đăng nhập thành công
- **File**: `cypress/e2e/login_spec.cy.js`
- **Mô tả**: Kiểm tra đăng nhập với username `standard_user` và password `secret_sauce`
- **Kết quả**: ✅ PASS

#### Kịch bản 2: Kiểm tra đăng nhập thất bại
- **File**: `cypress/e2e/login_spec.cy.js`
- **Mô tả**: Kiểm tra thông báo lỗi khi đăng nhập với thông tin không hợp lệ
- **Kết quả**: ✅ PASS

#### Kịch bản 3: Kiểm tra thêm sản phẩm vào giỏ hàng
- **File**: `cypress/e2e/cart_spec.cy.js`
- **Mô tả**: Thêm sản phẩm vào giỏ hàng và kiểm tra badge hiển thị số lượng
- **Kết quả**: ✅ PASS

#### Kịch bản 4: Kiểm tra sắp xếp sản phẩm theo giá
- **File**: `cypress/e2e/cart_spec.cy.js`
- **Mô tả**: Sắp xếp sản phẩm theo giá từ thấp đến cao
- **Kết quả**: ✅ PASS

### ✅ Bài tập yêu cầu thêm

#### Yêu cầu 1: Kiểm tra xóa sản phẩm khỏi giỏ hàng
- **File**: `cypress/e2e/cart_spec.cy.js`
- **Mô tả**: Thêm sản phẩm vào giỏ hàng, sau đó xóa và kiểm tra badge không còn hiển thị
- **Kết quả**: ✅ PASS

#### Yêu cầu 2: Kiểm tra quy trình thanh toán
- **File**: `cypress/e2e/checkout_spec.cy.js`
- **Mô tả**: Thực hiện đầy đủ quy trình từ thêm sản phẩm, điền thông tin thanh toán đến trang xác nhận
- **Kết quả**: ✅ PASS

---

## 3. Kết quả kiểm thử

### Tổng kết
```
Tổng số test cases: 14
✅ Passed: 14
❌ Failed: 0
⏱️ Thời gian: ~20 giây
```

### Chi tiết từng test suite

| Test Suite | Số test | Passed | Failed | Thời gian |
|------------|---------|--------|--------|-----------|
| login_spec.cy.js | 4 | 4 | 0 | 4s |
| cart_spec.cy.js | 5 | 5 | 0 | 7s |
| checkout_spec.cy.js | 5 | 5 | 0 | 9s |

---

## 4. Cấu trúc dự án

```
cypress-exercise/
├── cypress/
│   ├── e2e/
│   │   ├── login_spec.cy.js      # 4 test cases - Đăng nhập
│   │   ├── cart_spec.cy.js       # 5 test cases - Giỏ hàng
│   │   └── checkout_spec.cy.js   # 5 test cases - Thanh toán
│   ├── support/
│   │   ├── commands.js           # Custom commands
│   │   └── e2e.js               # Configuration
│   └── videos/                   # Video recordings
├── cypress.config.js             # Cấu hình Cypress
├── package.json                  # Dependencies
├── README.md                     # Tài liệu dự án
├── KET_QUA_KIEM_THU.md          # Báo cáo chi tiết
├── HUONG_DAN_SU_DUNG.md         # Hướng dẫn sử dụng
└── BAO_CAO_BAI_TAP.md           # File này
```

---

## 5. Các test cases đã thực hiện

### Login Test (4 test cases)
1. ✅ Đăng nhập thành công với thông tin hợp lệ
2. ✅ Hiển thị lỗi khi đăng nhập với thông tin không hợp lệ
3. ✅ Hiển thị lỗi khi username trống
4. ✅ Hiển thị lỗi khi password trống

### Cart Test (5 test cases)
1. ✅ Thêm sản phẩm vào giỏ hàng
2. ✅ Sắp xếp sản phẩm theo giá (thấp đến cao)
3. ✅ Xóa sản phẩm khỏi giỏ hàng (Bài tập yêu cầu)
4. ✅ Thêm nhiều sản phẩm vào giỏ hàng
5. ✅ Kiểm tra sản phẩm hiển thị đúng trong giỏ hàng

### Checkout Test (5 test cases)
1. ✅ Hoàn tất quy trình thanh toán (Bài tập yêu cầu)
2. ✅ Hoàn tất đơn hàng và hiển thị trang xác nhận
3. ✅ Hiển thị lỗi khi thiếu thông tin First Name
4. ✅ Quay lại giỏ hàng khi nhấn nút Cancel
5. ✅ Hiển thị đúng tổng giá trong trang overview

---

## 6. Hướng dẫn chạy test

### Cài đặt
```bash
cd cypress-exercise
npm install
```

### Chạy tất cả test
```bash
npm test
```

### Mở Cypress Test Runner
```bash
npm run cypress:open
```

### Chạy test cụ thể
```bash
npx cypress run --spec "cypress/e2e/login_spec.cy.js"
npx cypress run --spec "cypress/e2e/cart_spec.cy.js"
npx cypress run --spec "cypress/e2e/checkout_spec.cy.js"
```

---

## 7. Screenshots & Videos

### Video recordings
Các video ghi lại quá trình test được lưu tại:
- `cypress/videos/login_spec.cy.js.mp4`
- `cypress/videos/cart_spec.cy.js.mp4`
- `cypress/videos/checkout_spec.cy.js.mp4`

### Screenshots
Screenshots tự động chụp khi test fail (nếu có) được lưu tại:
- `cypress/screenshots/`

---

## 8. Kỹ thuật đã áp dụng

### Cypress Features
- ✅ E2E Testing
- ✅ Automatic waiting
- ✅ Video recording
- ✅ Screenshot on failure
- ✅ Custom commands
- ✅ beforeEach hooks
- ✅ Multiple assertions
- ✅ Chaining commands

### Best Practices
- ✅ Sử dụng data-test attributes
- ✅ Tạo custom commands để tái sử dụng code
- ✅ Sử dụng beforeEach để setup
- ✅ Test cases độc lập với nhau
- ✅ Assertions rõ ràng và cụ thể
- ✅ Tổ chức code theo cấu trúc rõ ràng

---

## 9. Những điểm nổi bật

1. **Hoàn thành đầy đủ yêu cầu**: Tất cả 6 kịch bản bắt buộc đều được thực hiện và pass
2. **Mở rộng test cases**: Thêm 8 test cases bổ sung để tăng coverage
3. **Custom commands**: Tạo các custom commands để tái sử dụng code
4. **Tài liệu đầy đủ**: README, hướng dẫn sử dụng, báo cáo kết quả
5. **Video recordings**: Ghi lại toàn bộ quá trình test

---

## 10. Kết luận

Bài tập đã hoàn thành đầy đủ các yêu cầu:
- ✅ Cài đặt và cấu hình Cypress thành công
- ✅ Thực hiện 4 kịch bản kiểm thử bắt buộc
- ✅ Hoàn thành 2 bài tập yêu cầu thêm
- ✅ Bổ sung 8 test cases mở rộng
- ✅ Tất cả 14 test cases đều PASS
- ✅ Tạo video recordings
- ✅ Tài liệu hóa đầy đủ

**Tổng điểm tự đánh giá**: 10/10

---

## 11. Tài liệu tham khảo

- [Cypress Official Documentation](https://docs.cypress.io)
- [SauceDemo Website](https://www.saucedemo.com)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)

---

**Ngày hoàn thành**: 27/02/2026

**Chữ ký sinh viên**: _______________
