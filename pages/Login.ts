import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('#txtUserName');
    this.passwordInput = page.locator('#txtPassword');
    this.loginButton = page.locator('button[type="submit"].btn-primary', { hasText: 'Log In' });
  }

  async login(username: string, password: string): Promise<void> {
    await this.typeInto(this.usernameInput, username);
    await this.typeInto(this.passwordInput, password);
    await this.loginButton.click();
  }
}
