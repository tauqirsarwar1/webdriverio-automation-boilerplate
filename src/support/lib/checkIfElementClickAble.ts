import { Selector } from 'webdriverio';

/**
 * Check if the given element exists in the DOM one or more times
 * @param  {String}  selector  Element selector
 * @param  {Boolean} falseCase Check if the element (does not) exists
 * @param  {Number}  exactly   Check if the element exists exactly this number
 *                             of times
 */
export default async (
    selector: Selector,
) => {
    /**
     * The number of elements found in the DOM
     * @type {Int}
     */
    const element = await $(selector);
    await expect(element.waitForClickable).toBeTruthy;
};
