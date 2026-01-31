const { test, expect } = require('@playwright/test');  // Import Playwright test framework
const tests = require('../test-data/test-cases.json');  // Load test data from JSON file

// Loop through each test case in the JSON array
for (const tc of tests) {
  // Filter to run only test cases with IDs starting with 'Neg' (negative test cases)
  // These typically test invalid inputs, error conditions, or edge cases
  if (!tc.id.startsWith('Neg')) continue;
  
  // Define a Playwright test for each filtered negative test case
  test(tc.id, async ({ page }) => {
    // Navigate to the translator website
    await page.goto('https://www.swifttranslator.com/');
    
    // Fill the textarea with the test input (likely invalid or problematic text)
    await page.locator('textarea').fill(tc.input);
    
    // Wait 2 seconds for the application to process the input
    // Note: Consider replacing with a more deterministic wait condition
    await page.waitForTimeout(2000);
    
    // Extract all text content from the page body
    const actual = await page.locator('body').textContent();
    
    // Console log uses reverse logic compared to positive tests:
    // ✓ (pass) if expected text is NOT found (correct behavior for negative test)
    // ✗ (fail) if expected text IS found (unexpected behavior)
    console.log(`${tc.id}: ${actual.includes(tc.expected) ? 'FAIL' : 'PASS'}`);
    
    // Negative assertion: Verify that the page content does NOT contain the expected text
    // This ensures error messages don't appear or invalid inputs are properly rejected
    expect(actual).not.toContain(tc.expected);
  });
}