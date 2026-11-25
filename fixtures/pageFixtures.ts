import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login';
import { DashboardPage } from '../pages/DashboardPage';

type PageFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
};

/** Playwright's test extended with page objects injected by name. */
export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
});

export { expect };
