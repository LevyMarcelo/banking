const helper = require("protractor-helper");

const SaquePo = require("../page-objects/saque");
const LoginPo = require("../page-objects/login");

describe("Dado que estou na conta da Hermoine Granger", () => {
    beforeEach(() => browser.get(LoginPo.urlRelativa));
    beforeEach(() => LoginPo.loginPage.fazerLoginHermoineGranger());

    describe("Quando faço um saque", () => {
        const saque = {
            campoSaque: 100,
        };

        beforeEach(() => SaquePo.saquePage.fazerSaque(saque));

        it("Então a mensagem de transação com sucesso é exibida", () => {
            helper.waitForTextToBePresentInElement(
                SaquePo.saquePage.mensagemTransacaoSucesso,"Transaction successful");
        });
    });
});
