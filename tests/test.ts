import { expect, test } from '@playwright/test';

test('home page renders text', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByTestId('text')).toBeVisible();
});
