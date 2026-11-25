# Playwright Custom - TypeScript POM Framework

TypeScript Page Object Model framework.

```
pages/      BasePage, Login (LoginPage), DashboardPage
fixtures/   pageFixtures.ts - page objects injected into tests
utils/      env.ts - typed access to .env values
test-data/  JSON test data
tests/      .ts test files (Example.ts, Novatae_Login.ts)
```

## Setup
```powershell
npm install
npx playwright install
copy .env.example .env   # then fill in values
```

## Run
```powershell
npm test            # all tests
npm run test:headed
npm run test:ui
npm run report
npm run typecheck
```

## Adding a test
1. Create a page class in `pages/` extending `BasePage`.
2. Register it in `fixtures/pageFixtures.ts`.
3. Write `tests/<name>.ts` importing `test`/`expect` from the fixtures.

Page objects hold locators and actions only; assertions stay in specs.
