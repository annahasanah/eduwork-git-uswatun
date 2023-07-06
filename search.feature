feature: Search feature in Aplication

    As a valid user
    I want to search in Aplication

    Scenario: search online
        Given I click search 
        When I type online
        Then i should see search result

    Scenario: search account
        Given I click search 
        When I type account
        Then i should see search result
