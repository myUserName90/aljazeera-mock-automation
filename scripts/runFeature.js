const {execSync} = require('child_process');
const path = require('path');

// Fetching the feature file path from command-line arguments
const featurePath = process.argv[2];

// Validating the provided feature path
if (!featurePath) {
    console.error('Error: No feature path provided.');
    process.exit(1);
}

// Resolving and quoting the feature path to prevent issues with spaces or special characters
const resolvedFeaturePath = `"${featurePath}"`;
console.log(`Running feature: ${resolvedFeaturePath}`);


try {
    // Constructing the command to run the feature test with CodeceptJS
    const command = `npx codeceptjs run --features ${resolvedFeaturePath} --config ./codecept.conf.js`;
    console.log(`Executing Command: ${command}`);

    // Executing the command and inheriting the I/O streams
    execSync(command, {stdio: 'inherit'});
} catch (err) {
    // Handling errors that occur during command execution
    console.error(`Error executing test: ${err.message}`);
    process.exit(1);// Exit the process with an error code
}
