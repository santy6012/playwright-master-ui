# Playwright UI Automation Project

## Overview
This project, named `playwright-ui-master`, is a UI automation framework built using Playwright. It is designed to perform end-to-end testing on a public website, ensuring that all functionalities work as expected across different environments.

## Project Structure
The project follows a standard structure for organizing tests, page objects, utilities, and configuration files:

```
playwright-ui-master
├── src
│   ├── tests
│   │   └── e2e.spec.ts        # End-to-end test cases
│   ├── pages
│   │   └── home.page.ts       # Page object for the home page
│   ├── utils
│   │   └── helpers.ts         # Utility functions
│   └── config
│       ├── env.dev.json       # Development environment configuration
│       ├── env.qa.json        # QA environment configuration
│       └── env.prod.json      # Production environment configuration
├── playwright.config.ts        # Playwright configuration
├── package.json                # Project dependencies and scripts
├── tsconfig.json              # TypeScript configuration
└── README.md                   # Project documentation
```

## Setup Instructions
1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd playwright-ui-master
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure Environment:**
   Update the environment-specific configuration files located in `src/config/` to match your setup. You can choose between development, QA, and production environments.

## Running Tests
To run the tests, use the following command, specifying the environment:
```
npx cross-env ENV=dev playwright test --project=msedge
Or
npm run test:dev
```
Replace `<environment>` with `dev`, `qa`, or `prod` based on the configuration you want to use.

## Report command
```
npx playwright show-report

```
## Dependencies
This project uses Playwright for browser automation. Ensure you have the necessary browsers installed, especially Microsoft Edge, as the tests are configured to run on it.

## Codegen - To generate script
```
npx playwright codegen https://web-url.com --output src/tests/generated.spec.ts
```

## Run generated code
```
npx playwright test src/tests/generated.spec.ts
```

## Install Browsers (If outdated)
```
npx playwright install
```
## Contributing
Feel free to contribute to this project by submitting issues or pull requests. Make sure to follow the coding standards and include tests for any new features.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.