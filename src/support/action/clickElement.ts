import { Selector } from 'webdriverio';

import checkIfElementExists from '../lib/checkIfElementExists';
import commonPage from '../../pageObjects/common.page';
import checkIfElementClickAble from '../lib/checkIfElementClickAble';

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   selector Element selector
 */
export default async (
    action: 'click' | 'doubleClick',
    type: 'link' | 'selector',
    selector: Selector
) => {
    /**
     * Element to perform the action on
     * @type {String}
     */
    const locator = await commonPage.findLocator(selector);
    const selector2 = await (type === 'link') ? `=${locator}` : locator;

    /**
     * The method to call on the browser object
     * @type {String}
     */
    const method = await (action === 'click') ? 'click' : 'doubleClick';
    await browser.pause(1000);
    await expect(await checkIfElementExists(selector2)).toBeTruthy;
    await expect(await checkIfElementClickAble(selector2)).toBeTruthy;
    await $(selector2)[method]({ x: 20 });
};
