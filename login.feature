Feature: Login to Aplication

    As a valid user
    I want to login Aplication

    Scenario: Valid Login
        Given I open login page
        When I submit login
        Then I should see homepage