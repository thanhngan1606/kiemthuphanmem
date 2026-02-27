describe('Checkout Test', () => {
  beforeEach(() => {
    // Đăng nhập trước mỗi test
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
  });

  // Bài tập yêu cầu 2: Kiểm tra quy trình thanh toán
  it('Should complete checkout process successfully', () => {
    // Thêm sản phẩm vào giỏ hàng
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
    
    // Vào giỏ hàng
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
    
    // Nhấn nút Checkout
    cy.get('#checkout').click();
    cy.url().should('include', '/checkout-step-one.html');
    
    // Điền thông tin
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').type('12345');
    
    // Nhấn Continue
    cy.get('#continue').click();
    
    // Xác minh chuyển đến trang xác nhận thanh toán
    cy.url().should('include', '/checkout-step-two.html');
    cy.get('.title').should('have.text', 'Checkout: Overview');
  });

  // Test thêm: Hoàn tất toàn bộ quy trình thanh toán
  it('Should finish complete checkout and show confirmation', () => {
    // Thêm sản phẩm vào giỏ hàng
    cy.get('.inventory_item').eq(0).find('.btn_inventory').click();
    
    // Vào giỏ hàng và checkout
    cy.get('.shopping_cart_link').click();
    cy.get('#checkout').click();
    
    // Điền thông tin
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').type('12345');
    cy.get('#continue').click();
    
    // Xác nhận đơn hàng
    cy.get('#finish').click();
    
    // Xác minh trang hoàn tất
    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
  });

  // Test thêm: Kiểm tra validation khi thiếu thông tin
  it('Should show error when first name is missing', () => {
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_link').click();
    cy.get('#checkout').click();
    
    // Chỉ điền last name và postal code
    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').type('12345');
    cy.get('#continue').click();
    
    // Xác minh thông báo lỗi
    cy.get('[data-test="error"]').should('contain', 'First Name is required');
  });

  // Test thêm: Kiểm tra nút Cancel trong checkout
  it('Should return to cart when clicking Cancel button', () => {
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_link').click();
    cy.get('#checkout').click();
    
    // Nhấn nút Cancel
    cy.get('#cancel').click();
    
    // Xác minh quay lại trang giỏ hàng
    cy.url().should('include', '/cart.html');
  });

  // Test thêm: Kiểm tra tổng giá trong checkout overview
  it('Should display correct total price in checkout overview', () => {
    // Thêm 2 sản phẩm vào giỏ hàng
    cy.get('.inventory_item').eq(0).find('.btn_inventory').click();
    cy.get('.inventory_item').eq(1).find('.btn_inventory').click();
    
    cy.get('.shopping_cart_link').click();
    cy.get('#checkout').click();
    
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').type('12345');
    cy.get('#continue').click();
    
    // Xác minh có hiển thị tổng giá
    cy.get('.summary_subtotal_label').should('exist');
    cy.get('.summary_tax_label').should('exist');
    cy.get('.summary_total_label').should('exist');
  });
});
