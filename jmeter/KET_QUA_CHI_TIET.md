# Kết quả Kiểm thử Hiệu năng - Chi tiết

**Ngày thực hiện**: 28/02/2026  
**Website kiểm thử**: https://www.saucedemo.com  
**Công cụ**: Apache JMeter 5.6.3

## Tổng quan

- **Tổng số requests**: 6,845
- **Số requests thành công**: 155
- **Số requests lỗi**: 6,690
- **Tỷ lệ lỗi tổng**: 97.74%
- **Thời gian chạy**: ~60 giây
- **Throughput**: 113.7 requests/giây

## Thread Group 1 - Kịch bản cơ bản

### Cấu hình
- **Số lượng người dùng (Threads)**: 10
- **Ramp-up Period**: 10 giây
- **Loop Count**: 5 lần lặp
- **Tổng số request**: 50

### Kết quả

| Label | Count | Avg (ms) | Min (ms) | Max (ms) | Error % |
|-------|-------|----------|----------|----------|---------|
| GET - Trang chủ | 50 | 94 | 50 | 788 | 0.00% |

### Phân tích
✅ **Kết quả tốt**: Thread Group 1 chạy hoàn toàn thành công với 0% lỗi.

- Thời gian phản hồi trung bình: 94ms (rất tốt, < 100ms)
- Thời gian phản hồi tối thiểu: 50ms
- Thời gian phản hồi tối đa: 788ms
- Trang chủ phản hồi nhanh và ổn định với tải nhẹ (10 users)

---

## Thread Group 2 - Kịch bản tải nặng

### Cấu hình
- **Số lượng người dùng (Threads)**: 50
- **Ramp-up Period**: 30 giây
- **Loop Count**: 3 lần lặp
- **Tổng số request**: 300

### Kết quả

| Label | Count | Avg (ms) | Min (ms) | Max (ms) | Error % |
|-------|-------|----------|----------|----------|---------|
| GET - Trang chủ | 150 | 128 | 50 | 782 | 30.00% |
| GET - Trang Inventory | 150 | 100 | 50 | 350 | 100.00% |

### Phân tích
⚠️ **Kết quả hỗn hợp**: 

**GET - Trang chủ**:
- Thời gian phản hồi trung bình: 128ms (tốt)
- Tỷ lệ lỗi: 30% (có vấn đề)
- Một số requests bị lỗi do tải cao hoặc rate limiting

**GET - Trang Inventory**:
- Thời gian phản hồi trung bình: 100ms (nhanh)
- Tỷ lệ lỗi: 100% (tất cả đều lỗi)
- Lý do: Trang `/inventory.html` yêu cầu đăng nhập trước
- Lỗi 404 Not Found vì chưa authenticate

---

## Thread Group 3 - Kịch bản tùy chỉnh (User Journey)

### Cấu hình
- **Số lượng người dùng (Threads)**: 20
- **Ramp-up Period**: 20 giây
- **Duration**: 60 giây
- **Tổng số request**: 6,495

### Kết quả

| Label | Count | Avg (ms) | Min (ms) | Max (ms) | Error % |
|-------|-------|----------|----------|----------|---------|
| POST - Login | 2,171 | 143 | 49 | 592 | 100.00% |
| GET - Cart | 2,165 | 184 | 151 | 1,147 | 100.00% |
| GET - Checkout Step One | 2,159 | 141 | 50 | 609 | 100.00% |

### Phân tích
❌ **Kết quả không thành công**: Tất cả requests đều bị lỗi

**POST - Login**:
- Lỗi 405 Method Not Allowed
- Lý do: Website SauceDemo không hỗ trợ POST trực tiếp đến `/`
- Cần sử dụng form submission hoặc API endpoint đúng

**GET - Cart và GET - Checkout Step One**:
- Lỗi 404 Not Found
- Lý do: Các trang này yêu cầu session đăng nhập
- Không thể truy cập trực tiếp mà không có authentication

---

## Nhận xét tổng quan

### Điểm mạnh
✅ **Hiệu năng tốt với tải nhẹ**:
- Trang chủ phản hồi rất nhanh (94ms trung bình)
- Không có lỗi khi chỉ có 10 users đồng thời
- Thời gian phản hồi ổn định

✅ **Throughput cao**:
- Đạt 113.7 requests/giây
- Server xử lý được nhiều requests đồng thời

### Điểm yếu
❌ **Vấn đề với authentication**:
- Website yêu cầu đăng nhập để truy cập hầu hết các trang
- POST login không hoạt động với cấu hình hiện tại
- Cần implement đúng flow đăng nhập (cookies, session)

❌ **Tỷ lệ lỗi cao**:
- 97.74% requests bị lỗi do vấn đề authentication
- Chỉ có trang chủ (public page) hoạt động tốt

❌ **Rate limiting**:
- 30% requests đến trang chủ bị lỗi khi có 50 users
- Website có thể có cơ chế chống spam/DDoS

### Nguyên nhân lỗi

1. **Lỗi 404 Not Found** (inventory.html, cart.html, checkout-step-one.html):
   - Các trang này yêu cầu session đăng nhập
   - Không thể truy cập trực tiếp qua GET request đơn giản

2. **Lỗi 405 Method Not Allowed** (POST Login):
   - Endpoint `/` không chấp nhận POST method
   - Cần tìm đúng endpoint login API hoặc sử dụng form submission

3. **Rate Limiting**:
   - Website có thể chặn quá nhiều requests từ cùng một IP
   - Cần giảm số lượng threads hoặc tăng delay giữa các requests

### Khuyến nghị cải thiện

#### Cho Test Plan
1. **Implement đúng flow đăng nhập**:
   - Sử dụng HTTP Cookie Manager để lưu session
   - Thêm Regular Expression Extractor để lấy CSRF token
   - POST đến đúng endpoint login

2. **Giảm tải để tránh rate limiting**:
   - Giảm số threads xuống 20-30
   - Tăng ramp-up period lên 60 giây
   - Thêm Timer giữa các requests (1-2 giây)

3. **Test các trang public trước**:
   - Chỉ test trang chủ và các trang không cần login
   - Hoặc sử dụng website khác không yêu cầu authentication

#### Cho Website (nếu là dự án của bạn)
1. **Tối ưu hóa hiệu năng**:
   - Caching cho static resources
   - CDN cho images và assets
   - Database query optimization

2. **Cải thiện khả năng chịu tải**:
   - Load balancing
   - Horizontal scaling
   - Connection pooling

3. **Monitoring và alerting**:
   - Theo dõi response time
   - Alert khi error rate > 5%
   - Track throughput và resource usage

---

## Kết luận

Kiểm thử đã cho thấy:
- ✅ Website có hiệu năng tốt với trang public (trang chủ)
- ❌ Test plan cần được cải thiện để xử lý authentication đúng cách
- ⚠️ Cần giảm tải để tránh vi phạm rate limiting

**Bài học rút ra**:
- Kiểm thử hiệu năng cần hiểu rõ flow của ứng dụng
- Authentication là thách thức lớn trong performance testing
- Cần test có trách nhiệm để không làm quá tải server

---

*Báo cáo được tạo tự động từ kết quả JMeter*
