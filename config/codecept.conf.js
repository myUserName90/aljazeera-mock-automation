exports.config = {
    output: './output',
    helpers: {
        WebDriver: {
            url: 'https://www.aljazeera.com',
            browser: 'chrome',
            restart: true,
            windowSize: 'maximize',
        }
    },
    gherkin: {
        features: '../features/**/*.feature',
        steps: '../step_definitions/*.js',
    },
    plugins: {
        allure: {
            enabled: true,
            require:'@codeceptjs/allure-legacy',
            outputDir: 'allure-results',
        }
    }
}