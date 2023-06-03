describe('browser action', () => {
    it('should load books website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout : 10000})
        cy.url().should('include', 'login.html')
    
    })

    it('should on click travel category', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    });
});