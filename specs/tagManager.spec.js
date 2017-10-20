var TagManagerTestApp = require('../PageObjects/tagManager.page');
var GoogleAccount = require('../PageObjects/googleAccount.page');
var data = require('../data/data.json');

describe('Interaction with tagmanager.google.com', function () {
    var testTagManager = new TagManagerTestApp();
    var googleAcc = new GoogleAccount();
    beforeAll(function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://tagmanager.google.com/#/admin/accounts/create');
        googleAcc.login();
        browser.waitForAngularEnabled(true);
    });

    it('Check field account is available and account field is visible', function () {

        since('Button create available').expect(testTagManager.buttonCreateNotAvailable()).toBe(true);
        since('Field account is not visible').expect(testTagManager.accountFieldVisible()).toBe(true);
        since('Field account is not available').expect(testTagManager.accountFieldAvailable()).toBe(true);
    });

    it('Filling account information field and check it is visible', function () {

        since('Button create available').expect(testTagManager.buttonCreateNotAvailable()).toBe(true);
        testTagManager.inputAcconutName.sendKeys(data.Account);
        since('Account text not visible').expect(testTagManager.accountNameVisible()).toBe("");
    });

    it('Click on checkbox, check that it is selected, click button next,' +
        'check container field is available and visible', function () {

        since('Button create available').expect(testTagManager.buttonCreateNotAvailable()).toBe(true);
        testTagManager.checkBoxAnonim.click();
        since('CheckBox is not selected').expect(testTagManager.checkBoxSelected()).toContain('ng-not-empty');
        testTagManager.buttonNext.click();
        since('Field container is not visible').expect(testTagManager.containerFieldVisible()).toBe(true);
        since('Field container is not available').expect(testTagManager.containerFieldAvailable()).toBe(true);

    });

    it('Filling information in container and check that it is visible', function () {

        since('Button create available').expect(testTagManager.buttonCreateNotAvailable()).toBe(true);
        testTagManager.inputContainerNameText.sendKeys(data.container);
        since('Container text not visible').expect(testTagManager.containerTextVisible()).toBe("MyTest");
    });

    it('Click button cancel and check that name of container is clear,' +
        ' check that container field is not visible', function () {

        since('Button create available').expect(testTagManager.buttonCreateNotAvailable()).toBe(true);
        testTagManager.buttonCancel.click();
        since('Field is not available').expect(testTagManager.accountFieldEmpty()).toContain('ng-empty');
        since('Field is not visible').expect(testTagManager.containerNotVisible()).toContain('ng-hide');

    });

});
