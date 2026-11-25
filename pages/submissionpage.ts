import { Page } from '@playwright/test';

export class SubmissionPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
