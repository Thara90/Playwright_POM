# Playwright_POM

## Insallation
 * **npm init playwright@latest** : install latest version of playwright 
 * **npm playwright -v** : playwright version

## Execution
 * **npx playwright test** : Runs the end-to-end tests in headless mode
 * **npx playwright test --headed** : Runs the end-to-end tests in browser
 * **npx playwright test --project chromium** : Runs the end-to-end tests in specific browser/browser engine
 * **npx playwright test example.spec.js** : Runs the tests in a specific file
 * **npx playwright test  --debug** : Runs the tests in debug mode
 * **npx playwright show report** : Open playwright report
 * **npx playwright test --workers 3** : Run with 3 workers in parellel
