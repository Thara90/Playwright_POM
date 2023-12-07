const { test,expect } = require('../utils/fixtures.js');
const qaTestData = JSON.parse(JSON.stringify(require('../test-data/qa/testData.json')));
const regTestData = JSON.parse(JSON.stringify(require('../test-data/reg/testData.json')));

test.describe('E2E Test Suite', () => {
    let testData = qaTestData;
    if (process.env.ENV == 'reg') {
        testData = regTestData;
    }

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.GotoLoginPage(process.env.WEB_URL);
        await loginPage.Login(process.env.username, process.env.password);
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

    test.afterEach(async ({ page }) => {
        await page.close();
    });
    
});