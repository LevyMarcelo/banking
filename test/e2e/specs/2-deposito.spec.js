const helper = require("protractor-helper");

const DespositoPo = require("../page-objects/deposito");
const LoginPo = require("../page-objects/login");

describe("Dado que estou na conta do Harry Potter", () => {
    beforeEach(() => browser.get(LoginPo.urlRelativa));
    beforeEach(() => LoginPo.loginPage.fazerLoginHarryPotter());

    describe("Quando faço um depósito", () => {
        const deposito = {
            campoDeposito: 100,
        };

        beforeEach(() => DespositoPo.despositoPage.fazerDeposito(deposito));

        it("Então a mensagem de depósito com sucesso é exibida", () => {
            helper.waitForTextToBePresentInElement(
                DespositoPo.despositoPage.mensagemSucesso,"Deposit Successful");
        });
    });
});
