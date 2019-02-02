const helper = require("protractor-helper");

const LoginPo = require("../page-objects/login");

describe("Dado que estou na página inicial do XYZ Bank", () => {
    beforeEach(() => browser.get(LoginPo.urlRelativa));

    describe("Quando faço login com Harry Potter", () => {
        beforeEach(() => LoginPo.loginPage.fazerLoginHarryPotter());

        it("Então a conta do Harry Potter é exibida", () => {
            helper.waitForUrlToBeEqualToExpectedUrl(
                "http://www.way2automation.com/angularjs-protractor/banking/#/account");
            helper.waitForTextToBePresentInElement(LoginPo.loginPage.validacao,"Harry Potter");
        });
    });
});
