module.exports.config = require("./protractorConfig.js")({
    capabilities: {
        browserName: "firefox",
        //Fechar navegador após spec
        //shardTestFiles: true,
        "marionette": true,
        "moz:firefoxOptions": {
            "args": ["--headless"]
        } 
    }
});
