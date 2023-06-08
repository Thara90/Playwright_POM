const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.txtUsername = page.getByPlaceholder('Enter your username');
        this.txtPassword = page.getByPlaceholder('Enter your password');
        this.btnSignIn = page.getByRole('link', { name: 'Sign in' });
        this.lblName = page.locator(`//div[@class='logged-user-name']`);
        this.lblRole = page.locator(`//div[@class='logged-user-role']`);
    }
    async GotoLoginPage() {
        await this.page.goto('https://demo.applitools.com/index.html');
    }
    async Login(username, password) {
        await this.txtUsername.fill(username);
        await this.txtPassword.fill(password);
        await this.btnSignIn.click();
    }
    async AssertLoggedInUserDetails(userDetails) {
        var role = await this.lblRole.textContent();
        var role = role.trim();
        await this.lblName.screenshot({path:'partialScreenshot.png'});
        await expect(this.lblName).toContainText(userDetails.name);
        await expect(this.lblRole).toContainText(role);

    }
}