exports.config = {
    output: './output',
    helpers: {
        WebDriver: {
            url: 'https://www.aljazeera.com',
            browser: 'chrome',
            restart: true,
            windowSize: 'maximize',
            timeouts: {
                script: 60000,
                'page load': 60000,
            }
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
    },
    multiple: {
        parallel: {
            chunks: 2, // Number of threads
            browsers: ['chrome'], // Specify the browsers
        }
    }
}