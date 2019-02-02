const SaquePage = require("../components/saque/main");

class SaquePo {
    constructor() {
        this.urlRelativa = "account";

        this.saquePage = new SaquePage();
    }
}

module.exports = new SaquePo();
