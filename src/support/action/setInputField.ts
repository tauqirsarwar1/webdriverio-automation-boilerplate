import type { Selector } from 'webdriverio';

import checkIfElementExists from '../lib/checkIfElementExists';
import commonPage from '../../pageObjects/common.page';

/**
 * Set the value of the given input field to a new value or add a value to the
 * current selector value
 * @param  {String}   method  The method to use (add or set)
 * @param  {String}   value   The value to set the selector to
 * @param  {String}   selector Element selector
 */
export default async (method: string, value: string, selector: Selector) => {
    /**
     * The command to perform on the browser object (addValue or setValue)
     * @type {String}
     */
    const command = await (method === 'add') ? 'addValue' : 'setValue';

    let checkValue = value;
    const locator = await commonPage.findLocator(selector);

    await checkIfElementExists(locator, false, 1);

    if (!value) {
        checkValue = '';
    }

    await $(locator)[command](checkValue);
};
