module.exports = GoogleAccount;
var data = require('../data/data.json');
function GoogleAccount() {
    var that = this;
    var nameGoogleAccaunt = element(by.id('identifierId')),
        nextButton = element(by.id('identifierNext')),
        passwordAccount = element(by.name('password')),
        signButton = element(by.id('passwordNext'));

    that.login = function () {
        nameGoogleAccaunt.sendKeys(data.GoogleAcc);
        nextButton.click();
        browser.sleep(3000);
        passwordAccount.sendKeys(data.password);
        signButton.click();
        browser.sleep(3000);
    }
};