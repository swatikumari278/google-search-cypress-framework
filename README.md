# Cypress Automation Framework

A scalable end-to-end automation framework built using Cypress for UI and regression testing.

This framework is designed using reusable automation architecture principles with support for maintainable test design, reusable commands, and CI/CD execution workflows.

---

# Tech Stack

- Cypress
- JavaScript
- Node.js
- Mocha
- Chai
- GitHub Actions
- Jenkins

---

# Framework Features

- End-to-end UI automation
- Smoke and regression testing
- Reusable Cypress commands
- Page Object Model (POM)
- Configurable environments
- Cross-browser execution
- Screenshot and video capture
- CI/CD integration support
- Scalable test architecture

---

# Project Structure

```bash
google-search-cypress-framework/
│
├── cypress/
│   ├── e2e/
│   ├── fixtures/
│   ├── support/
│   └── screenshots/
│
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
````

---

# Installation

Clone repository:

```bash
git clone https://github.com/swatikumari278/google-search-cypress-framework.git
```

Install dependencies:

```bash
npm install
```

---

# Run Tests

Open Cypress Test Runner:

```bash
npx cypress open
```

Run tests in headless mode:

```bash
npx cypress run
```

Run specific test:

```bash
npx cypress run --spec cypress/e2e/test.cy.js
```

---

# Framework Highlights

* Built reusable automation workflows for scalable regression testing.
* Designed maintainable test structure using Cypress best practices.
* Integrated automation execution with CI/CD workflows.
* Supports smoke, sanity, and regression execution strategies.

---

# CI/CD Integration

The framework supports:

* GitHub Actions
* Jenkins pipeline execution
* Automated regression execution

---

# Future Enhancements

* API testing integration
* Parallel execution
* Docker integration
* Advanced reporting dashboards
* Multi-environment execution support

---

# Author

Swati Kumari
QA Automation Lead | Senior SDET

