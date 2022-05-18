Feature: Select Star Sign Up Feature

    Background: Select Star Home Screen
        Given I open the site "/"
        Then  I expect the url to contain "selectstar.com"
        And the title is "Data Management Tool | Organize, Find & Maintain Your Data | Select Star"
        When I click on the button "homePage.signInButton"
        Then I expect that element "SignUpPage.signUpLink" becomes displayed
        And  I expect the url to contain "app.selectstar.com/login"
        When I click on the button "SignUpPage.signUpLink"
        Then  I expect the url to contain "app.selectstar.com/signup"
        When I click on the element "SignUpPage.agreeToTerms"
        Then I expect that element "SignUpPage.boxChecked" becomes displayed


    @SignUp
    Scenario: User sign up by new email ID
        When I click on the button "SignUpPage.signUpEmailButton"
        # Enter new email ID
        And I add "test127@maintech.com" to the inputfield "SignUpPage.formEmail"
        And I add "DEV" to the inputfield "SignUpPage.formFirstName"
        And I add "test1" to the inputfield "SignUpPage.formLastName"
        And I add "DEVtest1@yup.com" to the inputfield "SignUpPage.formPassword"
        And I add "DEVtest1@yup.com" to the inputfield "SignUpPage.formConfirmPassword"
        And I click on the button "SignUpPage.sigUpButton"
        Then I expect that element "SignUpPage.signUpConfirmation" becomes displayed


    @SignUp
    Scenario: User sign up by Non-Official gmail ID
        When I click on the element "SignUpPage.signUpGoogleButton"
        Then I expect that element "SignUpPage.gmailID" becomes displayed
        And  I expect the url to contain "accounts.google.com"
        When I add "selectstar100@gmail.com" to the inputfield "SignUpPage.gmailID"
        And I click on the button "SignUpPage.gmailNextButton"
        Then I expect that element "SignUpPage.gmailPassword" becomes displayed
        When I add "selectstar100_@12" to the inputfield "SignUpPage.gmailPassword"
        And I click on the button "SignUpPage.gmailNextButton"
        Then I expect that element "SignUpPage.gmailTryFailed" becomes displayed


    @SignUp
    Scenario: User sign up by already exist email ID
        When I click on the button "SignUpPage.signUpEmailButton"
        And I add "test125@maintech.com" to the inputfield "SignUpPage.formEmail"
        And I add "DEV" to the inputfield "SignUpPage.formFirstName"
        And I add "test1" to the inputfield "SignUpPage.formLastName"
        And I add "DEVtest1@yup.com" to the inputfield "SignUpPage.formPassword"
        And I add "DEVtest1@yup.com" to the inputfield "SignUpPage.formConfirmPassword"
        And I click on the button "SignUpPage.sigUpButton"
        Then I expect that element "SignUpPage.emailExistError" becomes displayed
