describe('login-form', () => {
    it('should keep me sign in', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
        cy.get("#user_login").type('user_login')
        cy.get("#user_password").type('password')
        cy.get("#user_remember_me").check()
    });
});