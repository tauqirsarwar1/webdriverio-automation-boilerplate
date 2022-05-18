Feature: Select Star Login Feature

    Background: Select Star Home Screen
        Given I open the site "/"
        Then  I expect the url to contain "selectstar.com"
        And the title is "Data Management Tool | Organize, Find & Maintain Your Data | Select Star"
        When I click on the button "homePage.signInButton"
        Then I expect that element "loginPage.userEmail" becomes displayed


    @Login
    Scenario: User Login by fields
        When I add "tauqir.sarwar@moduscreate.com" to the inputfield "loginPage.userEmail"
        And I click on the button "loginPage.signInButton"
        Then I expect that element "loginPage.userPassword" becomes displayed
        When I add "selectstar100_@1255" to the inputfield "loginPage.userPassword"
        And I click on the button "loginPage.signInButton"
        Then I expect that element "loginPage.welcomeMessage" becomes displayed


    @Login
    Scenario: User Login by helper function
        When A user "tauqir.sarwar@moduscreate.com" and password "selectstar100_@1255" is loggedIn successfully
        Then I expect that element "loginPage.welcomeMessage" becomes displayed


    @Visual
    Scenario: Visual Test - User Login Form Screen
        Then I expect that element "loginPage.loginFormScreenshot" screenshot "Login_Form_Screenshot" is correct








