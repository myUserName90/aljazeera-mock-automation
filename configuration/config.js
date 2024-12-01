const environments = {
    development: {
        baseUrl: 'http://localhost:3000/',
    },
    staging: {
        baseUrl: 'https://aljazeera.com/',
    },
    production: {
        baseUrl: 'https://aljazeera.com/',
    },
};

const currentEnv = process.env.TEST_ENV || 'production'; // Default to 'development'

module.exports = environments[currentEnv];