import { Page } from '@playwright/test';

/** Shared behaviour inherited by every page object. */
export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  async goto(path = ''): Promise<void> {
    await this.page.goto(path);
  }

  /** Click then type key by key - needed for fields that ignore fill(). */
  protected async typeInto(locator: ReturnType<Page['locator']>, text: string): Promise<void> {
    await locator.click();
    await locator.pressSequentially(text);
  }
}
