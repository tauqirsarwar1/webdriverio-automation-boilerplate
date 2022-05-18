import type { Selector } from 'webdriverio';
import commonPage from '../../pageObjects/common.page';

/**
 * Check if the given element is (not) visible
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Check for a visible or a hidden element
 */
export default async (selector: Selector, falseCase: boolean) => {
    /**
     * Visible state of the give element
     * @type {String}
     */
    const locator = await commonPage.findLocator(selector);
    const isDisplayed = await $(locator).isDisplayed();

    if (falseCase) {
        await expect(isDisplayed).not.toEqual(
            true,
            // @ts-expect-error
            `Expected element "${locator}" not to be displayed`
        );
    } else {
        await expect(isDisplayed).toEqual(
            true,
            // @ts-expect-error
            `Expected element "${locator}" to be displayed`
        );
    }
};
