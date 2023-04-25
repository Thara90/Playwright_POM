const { expect } = require ('@playwright/test');

exports.DashboardPage = class DashboardPage {

    constructor(page) {
        this.page = page
        this.lblTotalBalance = page.locator(`(//div[@class='balance-value']//span)[1]`);
        this.lblCreditAvailable = page.locator(`(//div[@class='balance-value'])[2]`);
        this.lblDueToday = page.locator(`//div[@class='balance-value danger']`);
    }

    async AssertTotalBalance(expectedTotalBalance) {
        var actualTotalBalance = await this.lblTotalBalance.textContent();
        var actualTotalBalance = actualTotalBalance.replace(/[$,]/g, '')
        expect(expectedTotalBalance).toEqual(parseFloat(actualTotalBalance));
    }

    async AssertCreditAvailable(expectedCreditAvailable) {
        var actualCreditAvailable = await this.lblCreditAvailable.textContent();
        var actualCreditAvailable = actualCreditAvailable.replace(/[$,]/g, '')
        expect(expectedCreditAvailable).toEqual(parseFloat(actualCreditAvailable));
    }

    async AssertDueToday(expectedDueToday) {
        var actualDueToday = await this.lblDueToday.textContent();
        var actualDueToday = actualDueToday.replace(/[$,]/g, '')
        expect(expectedDueToday).toEqual(parseFloat(actualDueToday));
    }
}