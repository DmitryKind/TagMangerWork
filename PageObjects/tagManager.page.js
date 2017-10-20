module.exports = TagManagerTestApp;
function TagManagerTestApp() {
    var that = this;
    var nameAccount = element(by.model('ctrl.form.account.data.name')),
        checkBox = element(by.model('ctrl.form.account.data.shareData')),
        nextButton = element(by.buttonText('Далее')),
        nameContainer = element(by.model('form.container.data.name')),
        cancelButton = element(by.buttonText('Отмена')),
        createButton = element(by.cssContainingText('.btn-action', 'Создать')),
        shadowContainer = element(by.className('gtm-busy-box ng-hide')),
        textAccount = element(by.tagName('strong')),
        textContainer = element(by.tagName('strong'));
    
    that.inputAcconutName = nameAccount;
    that.checkBoxAnonim = checkBox;
    that.buttonNext = nextButton;
    that.inputContainerNameText = nameContainer;
    that.buttonCancel = cancelButton;

    that.accountFieldAvailable = function () {
        return nameAccount.isEnabled();
    };
    that.accountFieldVisible = function () {
        return nameAccount.isDisplayed();
    };
    that.accountNameVisible = function () {
        return textAccount.getText();
    };
    that.checkBoxSelected = function () {
        return checkBox.getAttribute('class');
    };
    that.containerFieldAvailable = function () {
        return nameContainer.isEnabled();
    };
    that.containerFieldVisible = function () {
        return nameContainer.isDisplayed();
    };
    that.containerTextVisible = function () {
        return textContainer.getText();
    };
    that.accountFieldEmpty = function () {
        return nameAccount.getAttribute('class');
    };
    that.containerNotVisible = function () {
        return shadowContainer.getAttribute('class');
    };
    that.buttonCreateNotAvailable = function () {
        return createButton.isPresent();
    };
};
