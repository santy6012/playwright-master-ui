import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.baeldung.com/');
  await page.getByRole('link', { name: 'Spring Courses  ▲' }).click();
  await page.getByRole('link', { name: 'Start Here' }).click();
  await page.getByRole('link', { name: 'Spring Courses  ▲' }).click();
  await page.getByRole('link', { name: 'REST with Spring Boot REST' }).click();
  await page.getByRole('heading', { name: '1. The Basics of REST with' }).click();
  await page.getByRole('heading', { name: 'LESSONS ~ 2 HOURS' }).click();
  await page.getByRole('link', { name: 'Pricing', exact: true }).click();
  await page.getByText('All 6 Courses (50+ modules,').click();
  await page.getByRole('link', { name: 'Good Rest API' }).click();
});