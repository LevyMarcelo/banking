const Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");
const SpecReporter = require("jasmine-spec-reporter").SpecReporter;

module.exports = (providedConfig) => {
    const defaultConfig = {
        baseUrl: "http://www.way2automation.com/angularjs-protractor/banking/#/login",
        specs: ["specs/*.spec.js"],

/*         specs: [//"specs/1-login.spec.js",
                //"specs/2-deposito.spec.js",
                "specs/3-saque.spec.js"
        ], */

/*         suites: {
            login: "specs/1-login.spec.js",
            deposito: "specs/2-deposito.spec.js",
        }, */

        directConnect: true,
        onPrepare: () => {
            //browser.ignoreSynchronization = true;
            jasmine.getEnv().addReporter(new SpecReporter({
                displayFailuresSummary: true,
                displayFailedSpec: true,
                displaySuiteNumber: true,
                displaySpecDuration: true,
            }));
            jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
                savePath: "html-report",
                fileName: "report",
                fixedScreenshotName: true,
                cleanDestination: true,
                consolidate: true,
                takeScreenshotsOnlyOnFailures: true,
            }));
            afterEach(() => {
                browser.manage().deleteAllCookies();
                return browser.executeScript("sessionStorage.clear(); localStorage.clear();");
            });
        },
    };

    return Object.assign(
        {},
        defaultConfig,
        providedConfig
    );
};
