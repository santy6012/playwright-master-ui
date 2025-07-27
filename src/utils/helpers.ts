export const readConfig = (env: string) => {
    const fs = require('fs');
    const path = require('path');
    const configPath = path.resolve(__dirname, '../config/env.' + env + '.json');

    if (!fs.existsSync(configPath)) {
        throw new Error(`Configuration file for environment "${env}" not found.`);
    }

    const configFile = fs.readFileSync(configPath, 'utf-8');
    return JSON.parse(configFile);
};

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));