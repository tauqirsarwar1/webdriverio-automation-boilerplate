// common.page.ts
import data from '../jsonFiles/locators.json';

// eslint-disable-next-line require-jsdoc
class CommonPage {
    // eslint-disable-next-line require-jsdoc,class-methods-use-this
    async findLocator(selector: any) {
        const properties = selector.split('.');

        if (properties.length === 0) {
            return;
        }

        // @ts-ignore
        let currentValue = data[properties[0]];

        // eslint-disable-next-line no-plusplus
        for (let index = 1; index < properties.length; index++) {
            if (typeof currentValue === 'object') {
                const entry = Object.entries(currentValue)
                    .find(([key]) => key === properties[index]);

                currentValue = entry?.[1];
            }
        }
        // eslint-disable-next-line consistent-return
        return currentValue;
    }
}

export default new CommonPage();
