import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  readonly closeButton: Locator;
  readonly searchBox: Locator;
  readonly loadingOverlay: Locator;

  constructor(page: Page) {
    super(page);
    this.closeButton = page.locator('button.btn-outline-primary', { hasText: 'Close' });
    this.searchBox = page.locator('input.header-search');
    this.loadingOverlay = page.locator('.ngx-overlay');
  }

  /** Waits until no loading overlay is covering the page. */
  async waitForLoaded(): Promise<void> {
    await expect(this.loadingOverlay).toBeHidden({ timeout: 30 * 1000 });
  }

  async closeWelcomeDialog(): Promise<void> {
    await this.closeButton.click();
    await this.waitForLoaded();
  }

  async search(text: string): Promise<void> {
    await this.waitForLoaded();
    await this.searchBox.click();
    await this.searchBox.fill(text);
    await this.searchBox.press('Enter');
  }
}
