const DespositoPage = require("../components/deposito/main");

class DespositoPo {
    constructor() {
        this.urlRelativa = "account";

        this.despositoPage = new DespositoPage();
    }
}

module.exports = new DespositoPo();
