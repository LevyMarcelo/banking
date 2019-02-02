const helper = require("protractor-helper");

class SaquePage {
    constructor() {
        this.abaSaque = element(by.buttonText("Withdrawl"));
        this.campoSaque = element(by.model("amount"));
        this.botaoSaque = element(by.className("btn btn-default"));
        this.mensagemTransacaoSucesso = element(by.className("error ng-binding"));
    }

    fazerSaque(data) {
        helper.clickWhenClickable(this.abaSaque);
        helper.fillFieldWithTextWhenVisible(this.campoSaque, data.campoSaque);
        helper.clickWhenClickable(this.botaoSaque);
    }
}

module.exports = SaquePage;
