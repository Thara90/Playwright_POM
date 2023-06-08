
const { test } = require('../base/base.js');
const testData = JSON.parse(JSON.stringify(require('../test-data/TestData.json')));

test.describe('Login Test Suite', () => {

    test('Logint with valid credentials', async ({ loginPage }) => {
        await loginPage.GotoLoginPage();
        await loginPage.Login(testData.user.username, testData.user.password);
        await loginPage.AssertLoggedInUserDetails(testData.user);
    });

    /*test('Logint visual comparison', async ({ loginPage }) => {
        await loginPage.GotoLoginPage();
        await loginPage.Login(testData.user.username, testData.user.password);
        await loginPage.AssertLoggedInUserDetails(testData.user);
    });*/

    test.afterAll(async ({ page }) => {
        await page.close();
    });
    
});