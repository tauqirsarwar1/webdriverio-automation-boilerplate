import { Then } from '@cucumber/cucumber';

import checkClass from '../support/check/checkClass';
import checkContainsAnyText from '../support/check/checkContainsAnyText';
import checkIsEmpty from '../support/check/checkIsEmpty';
import checkContainsText from '../support/check/checkContainsText';
import checkEqualsText from '../support/check/checkEqualsText';
import checkInURLPath from '../support/check/checkInURLPath';
import checkModal from '../support/check/checkModal';
import checkModalText from '../support/check/checkModalText';
import checkOffset from '../support/check/checkOffset';
import checkProperty from '../support/check/checkProperty';
import checkFontProperty from '../support/check/checkFontProperty';
import checkSelected from '../support/check/checkSelected';
import checkTitle from '../support/check/checkTitle';
import checkTitleContains from '../support/check/checkTitleContains';
import checkURL from '../support/check/checkURL';
import checkURLPath from '../support/check/checkURLPath';
import checkWithinViewport from '../support/check/checkWithinViewport';
import compareText from '../support/check/compareText';
import isEnabled from '../support/check/isEnabled';
import isExisting from '../support/check/isExisting';
import isVisible from '../support/check/isDisplayed';
import waitFor from '../support/action/waitFor';
import waitForVisible from '../support/action/waitForDisplayed';
import checkIfElementExists from '../support/lib/checkIfElementExists';
import verifyScreenshot from '../support/action/verifyScreenshot';
import closeBrowser from '../support/action/closeBrowser';
import verifyFullScreenshot from '../support/action/verifyFullScreenshot';

Then(
    /^I expect that the title is( not)* "([^"]*)?"$/,
    checkTitle
);

Then(
    /^I expect that the title( not)* contains "([^"]*)?"$/,
    checkTitleContains
);

Then(
    /^I expect that element "([^"]*)?" does( not)* appear exactly "([^"]*)?" times$/,
    checkIfElementExists
);

Then(
    /^I expect that element "([^"]*)?" is( not)* displayed$/, { wrapperOptions: { retry: 3 } },
    isVisible
);

Then(
    /^I expect that element "([^"]*)?" becomes( not)* displayed$/,
    // { wrapperOptions: { retry: 2 } },
    waitForVisible
);

Then(
    /^I expect that element "([^"]*)?" is( not)* within the viewport$/,
    checkWithinViewport
);

Then(
    /^I expect that element "([^"]*)?" does( not)* exist$/,
    isExisting
);

Then(
    /^I expect that element "([^"]*)?"( not)* contains the same text as element "([^"]*)?"$/,
    compareText
);

Then(
    /^I expect that (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
    checkEqualsText
);

Then(
    /^I expect that (button|element|container) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
    checkContainsText
);

Then(
    /^I expect that (button|element) "([^"]*)?"( not)* contains any text$/,
    checkContainsAnyText
);

Then(
    /^I expect that (button|element) "([^"]*)?" is( not)* empty$/,
    checkIsEmpty
);

Then(
    /^I expect that the url is( not)* "([^"]*)?"$/,
    checkURL
);

Then(
    /^I expect that the path is( not)* "([^"]*)?"$/,
    checkURLPath
);

Then(
    /^I expect the url to( not)* contain "([^"]*)?"$/,
    checkInURLPath
);

Then(
    /^I expect that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    checkProperty
);

Then(
    /^I expect that the font( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    checkFontProperty
);

Then(
    /^I expect that checkbox "([^"]*)?" is( not)* checked$/,
    checkSelected
);

Then(
    /^I expect that element "([^"]*)?" is( not)* selected$/,
    checkSelected
);

Then(
    /^I expect that element "([^"]*)?" is( not)* enabled$/,
    isEnabled
);

Then(
    /^I expect that element "([^"]*)?" is( not)* positioned at ([\d+.?\d*]+)px on the (x|y) axis$/,
    checkOffset
);

Then(
    /^I expect that element "([^"]*)?" (has|does not have) the class "([^"]*)?"$/,
    checkClass
);

Then(
    /^I wait on element "([^"]*)?"(?: for (\d+)ms)*(?: to( not)* (be checked|be enabled|be selected|be displayed|contain a text|contain a value|exist))*$/,
    {
        wrapperOptions: {
            retry: 3,
        },
    },
    waitFor
);

Then(
    /^I expect that a (alertbox|confirmbox|prompt) is( not)* opened$/,
    checkModal
);

Then(
    /^I expect that a (alertbox|confirmbox|prompt)( not)* contains the text "([^"]*)?"$/,
    checkModalText
);

Then(
    /^I expect that element "([^"]*)?" screenshot "([^"]*)?" is correct$/,
    verifyScreenshot
);

Then(
    /^I expect full screenshot "([^"]*)?" screenshot "([^"]*)?" is correct$/,
    verifyFullScreenshot
);

Then(
    /^I close the browser$/,
    closeBrowser
);
