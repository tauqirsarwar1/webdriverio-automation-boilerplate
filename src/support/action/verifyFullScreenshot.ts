/**
 * Close all but the first tab
 * @param  {String}   obsolete Type of object to close (window or tab)
 */
/* eslint-disable no-unused-vars */

import { Selector } from 'webdriverio';
import commonPage from '../../pageObjects/common.page';

export default async (selector: Selector, tag: string) => {
    /* eslint-enable no-unused-vars */
    /**
     * verify Full Screenshot
     * @type {Object}
     */
    const locator = await commonPage.findLocator(selector);
    await browser.pause(2000);
    // eslint-disable-next-line max-len
    expect(await browser.checkFullPageScreen(tag, {
        fullPageScrollTimeout: 5000,
    })).toEqual(0);
};
