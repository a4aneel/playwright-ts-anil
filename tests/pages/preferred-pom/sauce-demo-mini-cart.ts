import { expectElementToHaveText } from '../../../src/anil-playwright/utils/assert-utils';
import { getLocator } from '../../../src/anil-playwright/utils/locator-utils';

const miniCartCount = () => getLocator(`//*[@id='shopping_cart_container']//span`);

export async function verifyMiniCartCount(expMiniCartCount: string) {
  await expectElementToHaveText(miniCartCount(), expMiniCartCount);
}
