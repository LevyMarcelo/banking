const LoginPage = require("../components/login/main");

class LoginPo {
    constructor() {
        this.urlRelativa = "";

        this.loginPage = new LoginPage();
    }
}

module.exports = new LoginPo();
