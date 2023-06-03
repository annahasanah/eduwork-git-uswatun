describe('browser action', () => {
    it('should load books website', () => {
        cy.visit('https://books.toscrape.com/index.html', {timeout : 10000})
        cy.url().should('include'. 'indec.html')
    
    })

    it('should on click travel category', () => {
        cy.get('a')contains('travel').click()
        cy.get('h1')contains('travel').click()
    })
})