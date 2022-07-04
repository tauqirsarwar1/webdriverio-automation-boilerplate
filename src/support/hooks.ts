//
// =====
// Hooks
// =====
// WebdriverIO provides a several hooks you can use to interfere the test process in order to
// enhance it and build services around it. You can either apply a single function to it or
// an array of methods. If one of them returns with a promise,
// WebdriverIO will wait until that promise is resolved to continue.
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { CucumberRailClient, INewTestResults } from 'testrail-integration';

const options = {
    username: 'tauqir.*@test.com',
    password: '****',
    url: 'https://**.com/io/',
};
const testrail = new CucumberRailClient(options);
const runid = 9922;
const mainVersion = 'Build 1.3.4';
const testRailFlag = false;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const allure = require('allure-commandline');

// @ts-ignore
// eslint-disable-next-line require-jsdoc,consistent-return
async function getTestCaseId(tagArr: any):Promise<number> {
    for (const item of tagArr) {
        if (item.name.startsWith('@T')) {
            const testcase = item.name.split('T', 2);
            // eslint-disable-next-line prefer-destructuring
            const finalID = testcase[1];
            return finalID;
        }
    }
}

// eslint-disable-next-line require-jsdoc
async function getStatusCode(statusName: string) {
    let finalResult: number;
    if (statusName === 'FAILED') {
        finalResult = 5;
    } else if (statusName === 'PASSED') {
        finalResult = 1;
    } else if (statusName === 'BLOCKED') {
        finalResult = 2;
    } else if (statusName === 'UNTESTED') {
        finalResult = 3;
    } else {
        finalResult = 0;
    }
    return finalResult;
}

export const hooks = {
    // eslint-disable-next-line valid-jsdoc
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    /**
     * Gets executed before a worker process is spawned & can be used to initialize specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid    capability id (e.g 0-0)
     * @param  {[type]} caps   object containing capabilities for session
     * @param  {[type]} specs  specs to be run in the worker process
     * @param  {[type]} args   object that will be merged with the main
     *                         configuration once worker is initialized
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just before initializing the webdriver session and test framework.
     * It allows you to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // before: function (capabilities, specs) {
    // },

    /**
     * Gets executed before the suite starts.
     * @param {Object} suite suite details
     */
    // beforeSuite: function (suite) {
    // },
    /**
     * This hook gets executed _before_ every hook within the suite starts.
     * (For example, this runs before calling `before`, `beforeEach`, `after`)
     *
     * (`stepData` and `world` are Cucumber-specific.)
     *
     */
    // beforeHook: function (test, context, stepData, world) {
    // },
    /**
     * Hook that gets executed _after_ every hook within the suite ends.
     * (For example, this runs after calling `before`, `beforeEach`, `after`, `afterEach` in Mocha.)
     *
     * (`stepData` and `world` are Cucumber-specific.)
     */
    // afterHook:function(test,context,{error, result, duration, passed, retries}, stepData,world) {
    // },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    // beforeTest: function (test, context) {
    // },
    /**
     * Runs before a WebdriverIO command is executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that the command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object, if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    // eslint-disable-next-line valid-jsdoc
    /**
     * Function to be executed after a test (in Mocha/Jasmine)
     */
    // afterTest: async (test: any, context: any, {
    //     error, result, duration, passed, retries,
    // }:any) => {
    // },
    /**
     * Hook that gets executed after the suite has ended.
     * @param {Object} suite suite details
     */
    // afterSuite: function (suite) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    // eslint-disable-next-line valid-jsdoc
    /**
     * Gets executed after all workers have shut down and the process is about to exit.
     * An error thrown in the `onComplete` hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    /**
     * Gets executed when a refresh happens.
     * @param {String} oldSessionId session ID of the old session
     * @param {String} newSessionId session ID of the new session
     */
    // onReload: function (oldSessionId, newSessionId) {
    // },
    /**
     * Cucumber-specific hooks
     */
    // beforeFeature: function (uri, feature, scenarios) {
    // },
    // beforeScenario: function (uri, feature, scenario, sourceLocation) {
    // },
    // beforeStep: function ({uri, feature, step}, context) {
    // },
    afterStep: async ({ uri, feature, step } : any, context:any, {
        error, result, duration, passed,
    } : any) => {
        await browser.takeScreenshot();
    },

    afterScenario: async (scenario: any) => {
        await browser.reloadSession();
    },

    after(runId: number, results: INewTestResults[]) {
        const reportError = new Error('Could not generate Allure report');
        const generation = allure(['generate', 'allure-results', '--clean']);
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                10000
            );

            // eslint-disable-next-line consistent-return
            generation.on('exit', (exitCode: any) => {
                clearTimeout(generationTimeout);
                if (exitCode !== 0) {
                    return reject(reportError);
                }
                console.log('Allure report successfully generated');
                resolve('Done');
            });
        });
    },
};
