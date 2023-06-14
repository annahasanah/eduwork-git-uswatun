describe('searcbox test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });
    it('should type into searcbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}')
        cy.get('h2').contains('Search Results:') 
        cy.get('a').should('contains.text', 'Zero - Free Access to Online Banking')
        cy.get('a').should('contains.text', 'Zero - Online Statements')
    });
});