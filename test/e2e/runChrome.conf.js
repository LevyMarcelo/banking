module.exports.config = require("./protractorConfig.js")({
    capabilities: {
        browserName: "chrome",
        //Fechar navegador após spec
        //shardTestFiles: true,
        chromeOptions: {
            args: [
                "--headless",
                "--disable-gpu",
                "--window-size=1366,768"
            ]
        }
    }
});
