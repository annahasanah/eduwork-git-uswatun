describe('login-form', () => {
    it('should keep me sign in', () => {
        cy.visit('http://zero.webappsecurity.com/signin.html', {timeout : 10000})
        cy.url().should('include', 'signin.html')
    
    })

    it('should on click label', () => {
        cy.get('.btn').click()
        cy.get('checkbox').contains('user-remember-me')
    });
});