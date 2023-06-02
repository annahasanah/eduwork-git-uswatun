describe('my first test' () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()
        cy.url().should('include', '/commands/action')
        
        cy.get('.action-email')
        .type('uswatun@gmail.com')
        .should('have value', 'uswatun@gmail.com')
    })
})