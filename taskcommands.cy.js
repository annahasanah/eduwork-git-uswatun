describe('pay bills', () => {
    it ('should make payments', () => {
        cy.payBills("Sprint", "Checking", "10000", "2023-01-01", "Sample")
    })
})