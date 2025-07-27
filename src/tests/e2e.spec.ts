import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { readConfig } from '../utils/helpers';

const config = readConfig(process.env.ENV || 'dev');

test.describe('User journey for my test website', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.navigate(config.baseUrl);
    });

    test('Verify the title of the home page', async ({ page }) => {
        const homePage = new HomePage(page);
        const title = await homePage.getTitle();
        expect(title).toBe('Google'); // Replace with the actual expected title
    });

    test('Click a button and verify the result', async ({ page }) => {
        const homePage = new HomePage(page);
        //await homePage.clickButton(); // Replace with the actual button selector
        await Promise.all([
        page.waitForNavigation(),
        homePage.clickButton(), // This should trigger navigation
        ]);
        const aboutTitle = await homePage.getTitle();
        console.log('About page title:', aboutTitle); // This will print the title in the test output
        expect(aboutTitle).toBe('About Google: Our products, technology and company information - About Google');
        // Add assertions to verify the result after clicking the button
    });
});