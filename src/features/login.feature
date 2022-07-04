Feature: Select Star Login Feature

    Background: Select Star Home Screen
        Given I open the site "/"
        Then  I expect the url to contain "staging.selectstar.com"
#        And the title is "Login | Select Star"
        And I expect that element "loginPage.userEmail" becomes displayed
        Then I expect that element "loginPage.googleSignInButton" becomes displayed

    @Login1
    Scenario: Verify that user should able to login into system with valid username/password
        When I add "tauqir@getselectstar.com" to the inputfield "loginPage.userEmail"
        And I click on the button "loginPage.signInButton"
        Then I expect that element "loginPage.userPassword" becomes displayed
        When I add "PPrftydd@1234" to the inputfield "loginPage.userPassword"
        And I click on the button "loginPage.signInButton"
        Then I expect that element "loginPage.welcomeScreen" becomes displayed


    @Login1
    Scenario: User Login by helper function
        When A user "tauqir@getselectstar.com" and password "PPrftydd@1234" is loggedIn successfully
        Then I expect that element "loginPage.welcomeScreen" becomes displayed

    @Login1
    Scenario: Verify that user should not be able to login into system with invalid username
        When I add "tauqir12@getselectstar.com" to the inputfield "loginPage.userEmail"
        And I click on the button "loginPage.signInButton"
        Then I expect that element "loginPage.userPassword" becomes displayed
        When I add "PPrftydd@1234" to the inputfield "loginPage.userPassword"
        And I click on the button "loginPage.signInButton"
        Then I expect that element "loginPage.loginInvalid" becomes displayed
        And I expect that element "loginPage.welcomeScreen" is not displayed

    @Login1
    Scenario: Verify that user should not be able to login into system with invalid password
        When I add "tauqir@getselectstar.com" to the inputfield "loginPage.userEmail"
        And I click on the button "loginPage.signInButton"
        Then I expect that element "loginPage.userPassword" becomes displayed
        When I add "PP454tydd@1234" to the inputfield "loginPage.userPassword"
        And I click on the button "loginPage.signInButton"
        Then I expect that element "loginPage.loginInvalid" becomes displayed
        And I expect that element "loginPage.welcomeScreen" is not displayed

    @Login1
    Scenario: Verify that user should able to login into system with valid gmail work-email credentials (SSO)
        When I click on the button "loginPage.googleSignInButton"
        Then I expect that element "SignUpPage.gmailID" becomes displayed
        When I add "tauqir@getselectstar.com" to the inputfield "SignUpPage.gmailID"
        And I click on the button "SignUpPage.gmailNextButton"
        Then I expect that element "SignUpPage.gmailPassword" becomes displayed
        When I add "PP@KAfYb0%F&BE" to the inputfield "SignUpPage.gmailPassword"
        And I click on the button "SignUpPage.gmailNextButton"
        Then I expect that element "loginPage.tryOtherMethod" becomes displayed
        And I click on the button "loginPage.tryOtherMethod"
        Then I expect that element "loginPage.gmailCode" becomes displayed
        And I click on the button "loginPage.gmailCode"
        Then I expect that element "SignUpPage.backUpCode" becomes displayed
        When I add "18326222" to the inputfield "SignUpPage.backUpCode"
        And I click on the button "SignUpPage.gmailNextButton"
        Then I expect that element "loginPage.welcomeScreen" becomes displayed

    @Visual
    Scenario: Visual Test - User Login Form Screen
        Then I expect that element "loginPage.loginFormScreenshot" screenshot "Login_Form_Screenshot" is correct








