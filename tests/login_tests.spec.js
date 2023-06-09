
const { test,expect } = require('../base/base.js');
const testData = JSON.parse(JSON.stringify(require('../test-data/TestData.json')));

test.describe('Login Test Suite', () => {

    test('Logint with valid credentials', async ({ loginPage }) => {
        await loginPage.GotoLoginPage();
        await loginPage.Login(testData.user.username, testData.user.password);
        await loginPage.AssertLoggedInUserDetails(testData.user);
    });

    test.only('Landing page visual comparison', async ({ page, loginPage }) => {
        await loginPage.GotoLoginPage();
        await expect(page).toHaveScreenshot('landing.png');
    });

    test.afterAll(async ({ page }) => {
        await page.close();
    });
    
});