const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I click search ', () => {
   cy.visit('http://zero.webappsecurity.com/index.html')
})

When('I type online', () => {
   cy.get('#searchTerm').type('online {enter}')
})

Then('I should see search result', () => {
   cy.get('#account_summary_tab').should('be.visible')
})