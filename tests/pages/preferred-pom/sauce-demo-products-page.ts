import { click } from '../../../src/anil-playwright/utils/action-utils';
import { expectElementToBeHidden, expectElementToBeVisible } from '../../../src/anil-playwright/utils/assert-utils';
import { getLocator } from '../../../src/anil-playwright/utils/locator-utils';

const productsContainer = () => getLocator(`#inventory_container`).nth(0);
const addToCartButton = `(//*[@class='inventory_item'])[%s]//*[contains(@id,'add-to-cart')]`;

export async function verifyProductsPageDisplayed() {
  await expectElementToBeVisible(productsContainer());
}

export async function verifyProductsPageNotDisplayed() {
  await expectElementToBeHidden(productsContainer());
}

export async function addToCartByProductNumber(productNo: number) {
  await click(addToCartButton.replace('%s', productNo.toString()));
}
