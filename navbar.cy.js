describe('navbar test', () => {
    before (() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });
        
        it('should display online banking content', () => {
            cy.get('#onlineBankingMenu').click()
            cy.url().should('include', 'online-banking.html')
            cy.get('h1').should('be.visible')
            cy.get('#feedback').click()
            cy.url().should('include', 'feedback.html') 
            cy.contains('Zero Bank').click()
            cy.url().should('include', 'index.html')
            cy.get('#transfer_funds_link').click()
            cy.get('#user_login').clear()
            cy.get('#user_login').type('username')
            cy.get('#user_password').clear()
            cy.get('#user_password').type('password')
            cy.get('input[name="submit"]').click()

            cy.contains('Zero Bank').click()
            cy.get('#money_map_link').click()
        
        });
            
});