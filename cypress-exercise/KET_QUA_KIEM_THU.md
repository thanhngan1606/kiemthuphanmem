# KẾT QUẢ KIỂM THỬ TỰ ĐỘNG VỚI CYPRESS

## Thông tin chung
- **Ngày thực hiện**: 27/02/2026
- **Trang web kiểm thử**: https://www.saucedemo.com
- **Framework**: Cypress 15.11.0
- **Trình duyệt**: Electron 138 (headless)
- **Node.js**: v22.18.0

## Tổng quan kết quả

### Tổng kết
- **Tổng số test cases**: 14
- **Passed**: 14 ✅
- **Failed**: 0 ❌
- **Thời gian thực thi**: ~20 giây

## Chi tiết kết quả từng test suite

### 1. Login Test (login_spec.cy.js)
**Thời gian**: 4 giây | **Tests**: 4/4 passed ✅

| STT | Test Case | Kết quả | Thời gian |
|-----|-----------|---------|-----------|
| 1 | Đăng nhập thành công với thông tin hợp lệ | ✅ PASS | 1448ms |
| 2 | Hiển thị lỗi khi đăng nhập với thông tin không hợp lệ | ✅ PASS | 994ms |
| 3 | Hiển thị lỗi khi username trống | ✅ PASS | 1066ms |
| 4 | Hiển thị lỗi khi password trống | ✅ PASS | 474ms |

**Mô tả**: Kiểm tra các kịch bản đăng nhập bao gồm đăng nhập thành công và các trường hợp lỗi.

---

### 2. Cart Test (cart_spec.cy.js)
**Thời gian**: 7 giây | **Tests**: 5/5 passed ✅

| STT | Test Case | Kết quả | Thời gian |
|-----|-----------|---------|-----------|
| 1 | Thêm sản phẩm vào giỏ hàng | ✅ PASS | 2746ms |
| 2 | Sắp xếp sản phẩm theo giá (thấp đến cao) | ✅ PASS | 1000ms |
| 3 | Xóa sản phẩm khỏi giỏ hàng | ✅ PASS | 1537ms |
| 4 | Thêm nhiều sản phẩm vào giỏ hàng | ✅ PASS | 1043ms |
| 5 | Kiểm tra sản phẩm hiển thị đúng trong giỏ hàng | ✅ PASS | 959ms |

**Mô tả**: Kiểm tra các chức năng liên quan đến giỏ hàng bao gồm thêm, xóa sản phẩm và sắp xếp.

---

### 3. Checkout Test (checkout_spec.cy.js)
**Thời gian**: 9 giây | **Tests**: 5/5 passed ✅

| STT | Test Case | Kết quả | Thời gian |
|-----|-----------|---------|-----------|
| 1 | Hoàn tất quy trình thanh toán thành công | ✅ PASS | 2398ms |
| 2 | Hoàn tất đơn hàng và hiển thị trang xác nhận | ✅ PASS | 2330ms |
| 3 | Hiển thị lỗi khi thiếu thông tin First Name | ✅ PASS | 1472ms |
| 4 | Quay lại giỏ hàng khi nhấn nút Cancel | ✅ PASS | 1110ms |
| 5 | Hiển thị đúng tổng giá trong trang overview | ✅ PASS | 1748ms |

**Mô tả**: Kiểm tra quy trình thanh toán từ giỏ hàng đến hoàn tất đơn hàng.

---

## Các kịch bản đã thực hiện

### ✅ Kịch bản bắt buộc (theo yêu cầu bài tập)

1. **Kịch bản 1**: Kiểm tra đăng nhập thành công ✅
2. **Kịch bản 2**: Kiểm tra đăng nhập thất bại ✅
3. **Kịch bản 3**: Kiểm tra thêm sản phẩm vào giỏ hàng ✅
4. **Kịch bản 4**: Kiểm tra sắp xếp sản phẩm theo giá ✅
5. **Bài tập yêu cầu 1**: Kiểm tra xóa sản phẩm khỏi giỏ hàng ✅
6. **Bài tập yêu cầu 2**: Kiểm tra quy trình thanh toán ✅

### ✅ Kịch bản bổ sung (mở rộng)

7. Kiểm tra đăng nhập với username trống ✅
8. Kiểm tra đăng nhập với password trống ✅
9. Kiểm tra thêm nhiều sản phẩm vào giỏ hàng ✅
10. Kiểm tra sản phẩm hiển thị đúng trong giỏ hàng ✅
11. Kiểm tra hoàn tất toàn bộ quy trình mua hàng ✅
12. Kiểm tra validation khi thiếu thông tin checkout ✅
13. Kiểm tra nút Cancel trong checkout ✅
14. Kiểm tra hiển thị tổng giá ✅

---

## Cấu trúc dự án

```
cypress-exercise/
├── cypress/
│   ├── e2e/
│   │   ├── login_spec.cy.js      # 4 test cases
│   │   ├── cart_spec.cy.js       # 5 test cases
│   │   └── checkout_spec.cy.js   # 5 test cases
│   ├── support/
│   │   ├── commands.js           # Custom commands
│   │   └── e2e.js               # Support configuration
│   └── videos/                   # Video recordings
├── cypress.config.js             # Cypress configuration
├── package.json
└── README.md
```

---

## Các tính năng đã sử dụng

### Cypress Features
- ✅ E2E Testing
- ✅ Automatic waiting
- ✅ Video recording
- ✅ Screenshot on failure
- ✅ Custom commands
- ✅ beforeEach hooks
- ✅ Multiple assertions

### Best Practices
- ✅ Sử dụng data-test attributes
- ✅ Tổ chức code theo Page Object pattern
- ✅ Tạo custom commands để tái sử dụng
- ✅ Sử dụng beforeEach để setup
- ✅ Test cases độc lập với nhau
- ✅ Assertions rõ ràng và cụ thể

---

## Cách chạy test

### Chạy tất cả test (headless mode)
```bash
npm test
```

### Mở Cypress Test Runner
```bash
npm run cypress:open
```

### Chạy test với trình duyệt hiển thị
```bash
npm run test:headed
```

### Chạy test với Chrome
```bash
npm run test:chrome
```

---

## Video recordings

Các video ghi lại quá trình test được lưu tại:
- `cypress/videos/login_spec.cy.js.mp4`
- `cypress/videos/cart_spec.cy.js.mp4`
- `cypress/videos/checkout_spec.cy.js.mp4`

---

## Kết luận

✅ **Tất cả 14 test cases đều PASS thành công**

Dự án đã hoàn thành đầy đủ các yêu cầu:
- ✅ Cài đặt và cấu hình Cypress
- ✅ Thực hiện 4 kịch bản kiểm thử bắt buộc
- ✅ Hoàn thành 2 bài tập yêu cầu thêm
- ✅ Bổ sung thêm 8 test cases mở rộng
- ✅ Tạo custom commands để tái sử dụng
- ✅ Ghi lại video quá trình test
- ✅ Tài liệu hóa đầy đủ

**Chất lượng code**: Tốt
**Coverage**: Đầy đủ các chức năng chính
**Maintainability**: Dễ bảo trì và mở rộng
