const helper = require("protractor-helper");

class DepositoPage {
    constructor() {
        this.abaDeposito = element(by.buttonText("Deposit"));
        this.campoDeposito = element(by.model("amount"));
        this.botaoDeposito = element(by.className("btn btn-default"));
        this.mensagemSucesso = element(by.className("error ng-binding"));
    }

    fazerDeposito(data) {
        helper.clickWhenClickable(this.abaDeposito);
        helper.fillFieldWithTextWhenVisible(this.campoDeposito, data.campoDeposito);
        helper.clickWhenClickable(this.botaoDeposito);
    }
}

module.exports = DepositoPage;
