const { test, expect } = require('@playwright/test'); // Import Playwright test framework

// Define a single UI test case
test('UI Test', async ({ page }) => {
  // Navigate to the translator website
  await page.goto('https://www.swifttranslator.com/');
  
  // Locate the textarea element and fill it with the test text 'test'
  await page.locator('textarea').fill('test');
  
  // Wait for 1 second - consider replacing with more reliable waiting strategy
  // This might be waiting for UI to update or content to load
  await page.waitForTimeout(1000);
  
  // Extract all text content from the entire page body
  const text = await page.locator('body').textContent();
  
  // Assertion: Verify that the page contains some text (length > 0)
  // This is a basic check to ensure the page is not empty or blank
  expect(text.length).toBeGreaterThan(0);
  
  // Log a success message to console (runs regardless of test pass/fail due to async execution)
  console.log('UI test passed');
});