describe('login/logout test', () => {
    before (() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()

    });
    it('should try to login with invalid data', () => {
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('input[name="submit"]').click()
        cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')

    
        cy.fixture('user').then(user => {
            const username = user.username
            const password =user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type('username')
            cy.get('#user_password').clear()
            cy.get('#user_password').type('password')
            cy.get('input[name="submit"]').click()

            cy.visit('http://zero.webappsecurity.com/bank/account-summary.html')
            cy.get('h2').should('contain.text', 'Cash Accounts')
            cy.contains('username').click()
            cy.get('#logout_link').click()
            cy.get('strong').should('contain.text', 'Home')
            cy.get('strong').should('contain.text', 'Online Banking')
            cy.get('strong').should('contain.text', 'Feedback')


        });
    });
});

