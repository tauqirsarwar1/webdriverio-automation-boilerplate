// login.page.ts
import data from '../jsonFiles/locators.json';

// eslint-disable-next-line require-jsdoc
class LoginPage {
    // eslint-disable-next-line class-methods-use-this,require-jsdoc
    get inputUsername() { return $(data.loginPage.userEmail); }

    // eslint-disable-next-line class-methods-use-this,require-jsdoc
    get inputPassword() { return $(data.loginPage.userPassword); }

    // eslint-disable-next-line require-jsdoc,class-methods-use-this
    get logInButton() { return $(data.loginPage.signInButton); }

    // eslint-disable-next-line require-jsdoc,class-methods-use-this
    get welcomeScreen() { return $(data.loginPage.welcomeScreen); }

    // eslint-disable-next-line require-jsdoc
    async login(username: string, password: string) {
        await this.inputUsername.waitForDisplayed();
        await this.inputUsername.setValue(username);
        await this.logInButton.click();
        await this.inputPassword.setValue(password);
        await this.logInButton.click();
    }
}

export default new LoginPage();
