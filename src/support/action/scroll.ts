import { Selector } from 'webdriverio';
import commonPage from '../../pageObjects/common.page';
/**
 * Scroll the page to the given element
 * @param  {String}   selector Element selector
 */

export default async (selector: Selector) => {
    const locator = await commonPage.findLocator(selector);
    await expect(await $(locator).scrollIntoView(true)).toBeTruthy;
    await browser.pause(2000);
};
