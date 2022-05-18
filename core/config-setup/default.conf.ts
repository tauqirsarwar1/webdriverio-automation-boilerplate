import path from 'path';

const defaultConfig = {
    specs: [
        './src/features/**/*.feature',
    ],
    suites: {
        SelectStar: [
            './src/features/**.feature',
        ],
    },
    exclude: [
        // 'path/to/excluded/files'
    ],
    localCapabilities: [{

        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 5,
        //
        browserName: 'chrome',
        'goog:chromeOptions': {
            excludeSwitches: ['ignore-certificate-errors', 'disable-popup-blocking'],
            useAutomationExtension: false,
            args: ['--enable-automation', '--00headless', '--disable-gpu', '--window-size=1367,768'],
        },
        'wdio:devtoolsOptions': {
            ignoreDefaultArgs: ['--disable-sync', '--disable-extensions'],
        },
        // }
        // If outputDir is provided WebdriverIO can capture driver session logs
        // it is possible to configure which logTypes to include/exclude.
        // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
        // excludeDriverLogs: ['bugreport', 'server'],
    }],
    localFFCapabilities: [{

        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 5,
        //
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: ['-noheadless'],
        },
        // }
        // If outputDir is provided WebdriverIO can capture driver session logs
        // it is possible to configure which logTypes to include/exclude.
        // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
        // excludeDriverLogs: ['bugreport', 'server'],
    }],
    baseUrl: 'https://www.selectstar.com',
    imageService: ['image-comparison',
        // The options
        {
            // Some options, see the docs for more
            // eslint-disable-next-line max-len
            baselineFolder: path.join(process.cwd(), 'src/screenshots/base'),
            actualFolder: path.join(process.cwd(), 'src/screenshots/actual'),
            diffFolder: path.join(process.cwd(), 'src/screenshots/diff'),
            screenshotPath: path.join(process.cwd(), 'src/screenshots'),
            formatImageName: '{tag}-{browserName}-{deviceName}-{platformName}-{width}x{height}',
            savePerInstance: true,
            autoSaveBaseline: false,
            blockOutStatusBar: true,
            blockOutToolBar: true,
            // ignoreAntialiasing: true,
            // ignoreAlpha: true,
            // returnAllCompareData: false,
            // rawMisMatchPercentage: true,
            // misMatchPercentage: 0.4,
            // NOTE: When you are testing a hybrid app please use this setting
            isHybridApp: true,
            // Options for the tabbing image
            tabbableOptions: {
                circle: {
                    size: 18,
                    fontSize: 18,
                    // ...
                },
                line: {
                    color: '#ff221a', // hex-code or for example words like `red|black|green`
                    width: 3,
                },
            },
            // ... more options
        }],

    cucumberOpts: {
        // <boolean> show full backtrace for errors
        backtrace: true,
        // <string[]> module used for processing required features
        requireModule: [],
        // <boolean< Treat ambiguous definitions as errors
        failAmbiguousDefinitions: true,
        // <boolean> invoke formatters without executing steps
        // dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> Enable this config to treat undefined definitions as
        // warnings
        ignoreUndefinedDefinitions: false,
        // <string[]> ("extension:module") require files with the given
        // EXTENSION after requiring MODULE (repeatable)
        names: [],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <string[]> (file/dir) require files before executing features
        require: [
            './src/steps/given.ts',
            './src/steps/then.ts',
            './src/steps/when.ts',
            // Or search a (sub)folder for JS files with a wildcard
            // works since version 1.1 of the wdio-cucumber-framework
            // './src/**/*.js',
        ],
        scenarioLevelReporter: false,
        order: 'defined',
        // <string> specify a custom snippet syntax
        snippetSyntax: undefined,
        // <boolean> fail if there are any undefined or pending steps
        strict: true,
        // <string> (expression) only execute the features or scenarios with
        // tags matching the expression, see
        // https://docs.cucumber.io/tag-expressions/
        tagExpression: 'not @Pending',
        // <boolean> add cucumber tags to feature or scenario name
        tagsInTitle: false,
        // retry: 1,
        // retryTagFilter: '@automated2',
        // <number> timeout for step definitions
        timeout: 120000,
    },

    allureReporters: [[
        'spec',
        {
            addConsoleLogs: true,
            symbols: {
                passed: '[PASS]',
                failed: '[FAIL]',
                skipped: '[SKIP]',
            },
        },
    ], ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
        useCucumberStepReporter: true,
        addConsoleLogs: true,
    }]],

    bsCapabilities: [{

        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        browserName: 'chrome',
        maxInstances: 1,
        'bstack:options': {
            os: 'Windows',
            build: 'Main Build',
            name: 'ABV2',
            idleTimeout: 400,
            osVersion: '10',
            resolution: '1366x768',
            projectName: 'selectstar-e2e-test',
            consoleLogs: 'verbose',
            browserVersion: '101.0.4951.67',
            local: true,
            debug: true,
            networkLogs: true,
            localIdentifier: 'e2e-tests',
        },
        //
        // }
        // If outputDir is provided WebdriverIO can capture driver session logs
        // it is possible to configure which logTypes to include/exclude.
        // it is possible to configure which logTypes to include/exclude.
        // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
        // excludeDriverLogs: ['bugreport', 'server'],
    }],
};
module.exports = defaultConfig;
