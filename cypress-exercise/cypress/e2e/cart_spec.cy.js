describe('Cart Test', () => {
  beforeEach(() => {
    // Đăng nhập trước mỗi test
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
  });

  // Kịch bản 3: Kiểm tra chức năng thêm sản phẩm vào giỏ hàng
  it('Should add a product to the cart', () => {
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
  });

  // Kịch bản 4: Kiểm tra chức năng sắp xếp sản phẩm theo giá
  it('Should sort products by price low to high', () => {
    cy.get('.product_sort_container').select('lohi');
    cy.get('.inventory_item_price').first().should('have.text', '$7.99');
  });

  // Bài tập yêu cầu 1: Kiểm tra chức năng xóa sản phẩm khỏi giỏ hàng
  it('Should remove a product from the cart', () => {
    // Thêm sản phẩm vào giỏ hàng
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
    
    // Xóa sản phẩm khỏi giỏ hàng
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    
    // Xác minh biểu tượng giỏ hàng không còn hiển thị số lượng
    cy.get('.shopping_cart_badge').should('not.exist');
  });

  // Test thêm: Kiểm tra thêm nhiều sản phẩm vào giỏ hàng
  it('Should add multiple products to the cart', () => {
    cy.get('.inventory_item').eq(0).find('.btn_inventory').click();
    cy.get('.inventory_item').eq(1).find('.btn_inventory').click();
    cy.get('.inventory_item').eq(2).find('.btn_inventory').click();
    cy.get('.shopping_cart_badge').should('have.text', '3');
  });

  // Test thêm: Kiểm tra xem giỏ hàng hiển thị đúng sản phẩm
  it('Should display correct product in cart', () => {
    // Lấy tên sản phẩm đầu tiên
    cy.get('.inventory_item').first().find('.inventory_item_name').invoke('text').then((productName) => {
      // Thêm sản phẩm vào giỏ hàng
      cy.get('.inventory_item').first().find('.btn_inventory').click();
      
      // Vào giỏ hàng
      cy.get('.shopping_cart_link').click();
      
      // Xác minh sản phẩm trong giỏ hàng
      cy.get('.cart_item').should('have.length', 1);
      cy.get('.inventory_item_name').should('have.text', productName);
    });
  });
});
