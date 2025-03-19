# playwrightExercises

## Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download) (version 18 or higher recommended)
- npm or yarn
- A code editor such as [Visual Studio Code](https://code.visualstudio.com/download)

Verify your prerequisite by running:

```bash
  node -v
  npm -v
```

## Installation

1. Clone the project repository

   ```bash
     git clone https://github.com/lg-caceres/playwrightExercises.git
     cd playwrightExercises
   ```

2. Install the project dependencies:

   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   ```

## Running Tests

To execute them, you can use any of these scripts:

1. Run all test in UI mode

   ```bash
     npm run all-tests-ui-mode
   ```

2. Run all test in headless mode

   ```bash
     npm run all-tests-ui-mode
   ```

3. Run Login Page tests in Headless Mode

   ```bash
     npm run login-page-test
   ```

4. Run Inventory Page tests in Headless Mode

   ```bash
     npm run inventory-page-test
   ```

For more information, check the [Playwright CLI documentation](https://playwright.dev/docs/test-cli).

# Project Structure

Below is an overview of the project structure along with a brief explanation of each folder and file

```bash
playrightExercises/
├── data/
│   ├── testData.ts
├── e2e/
│   ├── fixtures/
│   │   ├── resources.fixture.ts
│   ├── pages/
│   │   ├── basePage.ts
│   │   ├── inventoryPage.ts
│   │   ├── loginPage.ts
│   ├── tests/
│   │   ├── inventoryPage.spec.ts
│   │   ├── loginPage.spec.ts
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
├── README.md
```

Folder and File Descriptions:

- **data:** Test data used in tests.
- **e2e/fixtures:** File to extends playwright's fixtures and make page objects accessible on any test suite.
- **e2e/pages:** Page object files to organize reusable elements(Login and Inventory).
- **e2e/tests:** Contains test files for Login and Inventory pages
- **.gitignore:** Files to be ignore by github.
- **package.json:** Project metadata, including npm scripts and dependencies.
- **package-lock.json:** Specifies the exact versions of installed packages for consistency.
- **playwright.config.ts:** Playwright configuration file(retries, browsers, parallel).
- **README.md:** Project documentation file with setup and usage instructions.
