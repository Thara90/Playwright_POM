const { test } = require('../base/base.js');
const testData = JSON.parse(JSON.stringify(require('../test-data/TestData.json')));

test.describe('E2E Test Suite', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.GotoLoginPage();
        await loginPage.Login(testData.credentials.username, testData.credentials.password);
    });

    test('Validate Total Balance', async ({ dashboardPage }) => {
        await dashboardPage.AssertTotalBalance(testData.financialDetails.totalBalance);
    });

    test('Validate Credit Available', async ({ dashboardPage }) => {
        await dashboardPage.AssertCreditAvailable(testData.financialDetails.creditAvailable);
    });

    test('Validate Due Today', async ({ dashboardPage }) => {
        await dashboardPage.AssertDueToday(testData.financialDetails.dueToday);
    });

    test.afterAll(async ({ page }) => {
        await page.close();
    });
    
});