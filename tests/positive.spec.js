const { test, expect } = require('@playwright/test');  // Import Playwright test framework
const tests = require('../test-data/test-cases.json');  // Load test data from JSON file

// Loop through each test case in the JSON array
for (const tc of tests) {
  // Skip test cases that don't start with 'Pos' (likely filtering for positive test cases only)
  if (!tc.id.startsWith('Pos')) continue;
  
  // Define a Playwright test for each filtered test case
  test(tc.id, async ({ page }) => {
    // Navigate to the translator website
    await page.goto('https://www.swifttranslator.com/');
    
    // Locate the textarea and fill it with the test input from JSON
    await page.locator('textarea').fill(tc.input);
    
    // Wait 2 seconds - consider replacing with a more reliable wait condition
    // (e.g., waiting for a specific element to appear)
    await page.waitForTimeout(2000);
    
    // Get all text content from the page body
    const actual = await page.locator('body').textContent();
    
    // Log test result to console with pass/fail indicator
    console.log(`${tc.id}: ${actual.includes(tc.expected) ? 'PASS' : 'FAIL'}`);
    
    // Assert that the actual page content contains the expected text
    expect(actual).toContain(tc.expected);
  });
}