Feature: Login Module

    Scenario: Verify User is able to login to demo website
        When User navigate to website
        And User enters the username
        And User enters the password
        And User click on login button
        Then Verify user logged in successfully