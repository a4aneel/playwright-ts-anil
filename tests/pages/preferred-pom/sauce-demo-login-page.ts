import { click, clickAndNavigate, fill, gotoURL } from '../../../src/anil-playwright/utils/action-utils';
import { failureLoginCredentials, successLoginCredentials } from '../../testdata/sauce-demo-test-data';
import { expectElementToBeVisible } from '../../../src/anil-playwright/utils/assert-utils';
import {
  getLocator,
  getLocatorByPlaceholder,
  getLocatorByRole,
} from '../../../src/anil-playwright/utils/locator-utils';

const userName = `#user-name`;
const password = () => getLocator(`#password`).or(getLocatorByPlaceholder('Password', { exact: true }));
const login = () => getLocatorByRole('button', { name: 'Login' });
const errorMessage = `//*[contains(@class,'error-message')]`;

export async function navigateToSauceDemoLoginPage() {
  await gotoURL('https://www.saucedemo.com/');
}

export async function logInSuccessfully() {
  await fill(userName, successLoginCredentials.username);
  await fill(password(), successLoginCredentials.password);
  await clickAndNavigate(login());
}

export async function failureLogin() {
  await fill(userName, failureLoginCredentials.username);
  await fill(password(), failureLoginCredentials.password);
  await click(login());
}

export async function verifyErrorMessageForFailureLogin() {
  await expectElementToBeVisible(errorMessage);
}

export async function verifyLoginPageisDisplayed() {
  await expectElementToBeVisible(userName);
}
