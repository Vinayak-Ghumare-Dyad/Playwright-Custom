import { test, expect } from '../fixtures/pageFixtures';
import { credentials } from '../utils/env';
import searchData from '../test-data/search.json';

test.describe('Novatae Login', () => {
  test('should log in with valid credentials', async ({ page, loginPage, dashboardPage }) => {
    test.setTimeout(5 * 60 * 1000); // allow for the 2-minute wait below
    await loginPage.goto();
    await loginPage.login(credentials.username, credentials.password);
    await expect(loginPage.loginButton).toBeHidden();

    await dashboardPage.closeWelcomeDialog();
    await dashboardPage.search(searchData.submissionId);
    await page.waitForTimeout(2 * 60 * 1000); // 2-minute wait
  });
});
