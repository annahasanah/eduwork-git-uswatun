describe('cypress test', () => {
    before (() => {
        cy.visit('https://www.saucedemo.com')

    });

    it('should try to login with valid data', () => {
        
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('#item_4_title_link').click()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#remove-sauce-labs-backpack').click()
        cy.get('#back-to-products').click()

        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#shopping_cart_container').click()
        cy.get('#checkout').click()
        cy.get('#first-name').type('only')
        cy.get('#last-name').type('person')
        cy.get('#postal-code').type(12345)
        cy.get('#continue').click()
        cy.get('#finish').click()
        cy.get('#back-to-products').click()
        

    });
});