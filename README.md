# Al Jazeera Automation Project

This project demonstrates test automation for the Al Jazeera website using CodeceptJS with WebDriver. The project follows the **Page Object Model (POM)** design pattern and implements tests in **BDD format** using feature files. The tests validate functionality across both desktop and mobile views and include reporting via **Allure**.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Execution Instructions](#execution-instructions)
5. [Reporting](#reporting)
---

## Project Structure

````
├── config/               # Configuration files (e.g., browser setup, WebDriver configuration, concept.conf.js file)
├── features/             # BDD Feature files
├── helper/               # Custom helper files for test extensions
├── pages/                # Page Object files (BasePage, MainPage, LivePage)
├── step_definitions/     # Step definition files for BDD scenarios
├── output/               # Test run outputs (screenshots, logs, etc.)
├── reports/              # Allure reports directory (for generated test reports)
├── package.json          # Node.js dependencies and scripts
└── README.md             # Project documentation 
````


## Prerequisites

- **Node.js** (version >= 16.0.0)  
  Ensure you have Node.js installed to support the dependencies listed in `package.json`.

- **NPM** (bundled with Node.js)  
  Required to manage the Node.js dependencies.

- **Google Chrome** (latest version)  
  The project uses WebDriverIO with a Selenium Standalone service, which requires a modern browser.

- **CodeceptJS** (version 3.6.7)  
  The testing framework used for automation and supports WebDriverIO and BDD.

- **WebDriverIO** (version 9.2.14)  
  The main helper library for interacting with browsers using WebDriver protocol.

- **Allure Commandline** (version 2.32.0)  
  Used for generating test reports.

- **Allure Reporter for WebDriverIO** (version 9.2.14)  
  Integrates Allure reporting with WebDriverIO.

- **Selenium Standalone Service for WebDriverIO** (version 8.15.0)  
  Provides a local Selenium server to interact with browsers.

- **Allure Legacy Plugin for CodeceptJS** (version 1.0.2)  
  Adds support for Allure reporting with CodeceptJS.

---

## Installation

1. Clone the repository:
   ```bash
   git clone <https://github.com/myUserName90/aljazeera-mock-automation.git>

2. Install dependencies

    ``` bash
   npm install
3. Install Allure CLI globally (for generating reports):

   ```bash
   npm install -g allure-commandline --save-dev

## Execution Instructions
 
- Run the following commands to execute tests:

   ````bash
   npx codeceptjs run --features --config ./config/codecept.conf.js

- Run Tests for Specific Feature
  ```bash 
  npx codeceptjs run --features features/<feature-file>.feature --config ./config/codecept.conf.js

## Reporting

- Generate Allure Reports: After test execution, generate the report with:

  ```bash
  allure generate --clean allure-report

- Open Allure Report
  ```bash
   allure open allure-report
