const helper = require("protractor-helper");

class LoginPage {
    constructor() {
        this.botaoLoginCliente = element(by.buttonText("Customer Login"));
        this.selecionarUsuarioHarryPotter = element(by.cssContainingText('option', 'Harry Potter'));
        this.selecionarUsuarioHermoine = element(by.cssContainingText('option', 'Hermoine Granger'));
        this.botaoLogin = element(by.buttonText("Login"));
        this.validacao = element(by.className("fontBig ng-binding"));
    }

    fazerLoginHarryPotter() {
        helper.clickWhenClickable(this.botaoLoginCliente);
        helper.clickWhenClickable(this.selecionarUsuarioHarryPotter);
        helper.clickWhenClickable(this.botaoLogin);
    }

    fazerLoginHermoineGranger() {
        helper.clickWhenClickable(this.botaoLoginCliente);
        helper.clickWhenClickable(this.selecionarUsuarioHermoine);
        helper.clickWhenClickable(this.botaoLogin);
    }
}

module.exports = LoginPage;
