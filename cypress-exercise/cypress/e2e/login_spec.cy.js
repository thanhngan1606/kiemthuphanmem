describe('Login Test', () => {
  // Kịch bản 1: Kiểm tra đăng nhập thành công
  it('Should login successfully with valid credentials', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });

  // Kịch bản 2: Kiểm tra đăng nhập thất bại
  it('Should show error message with invalid credentials', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('invalid_user');
    cy.get('#password').type('wrong_password');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
  });

  // Test thêm: Kiểm tra đăng nhập với username trống
  it('Should show error message when username is empty', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('contain', 'Username is required');
  });

  // Test thêm: Kiểm tra đăng nhập với password trống
  it('Should show error message when password is empty', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('contain', 'Password is required');
  });
});
