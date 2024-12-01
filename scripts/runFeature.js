const {execSync} = require('child_process');
const path = require('path');

const featurePath = process.argv[2];

if (!featurePath) {
    console.error('Error: No feature path provided.');
    process.exit(1);
}

const resolvedFeaturePath = `"${featurePath}"`;
console.log(`Running feature: ${resolvedFeaturePath}`);


try {
    const command = `npx codeceptjs run --features ${resolvedFeaturePath} --config ./codecept.conf.js`;
    console.log(`Executing Command: ${command}`);
    execSync(command, {stdio: 'inherit'});
} catch (err) {
    console.error(`Error executing test: ${err.message}`);
    process.exit(1);
}
