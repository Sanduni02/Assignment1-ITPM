# Assignment 1 – Singlish Chat Translator Test Automation

**Module:** IT3040 – ITPM  
**Option:** 1 – Transliteration Accuracy Testing  
**Tool:** Playwright (Python)

---

## Overview

This project automates testing of the Chat Sinhala transliteration function at:  
👉 https://www.pixelssuite.com/chat-translator

It reads 50 negative test cases from an Excel file, types each Singlish input into the translator, captures the actual Sinhala output, compares it to the expected output, and records Pass/Fail results automatically.

---

## Prerequisites

- Python 3.11 or 3.12
- Google Chrome (recommended) or Chromium (installed via Playwright)

---

## Installation

### 1. Clone or download this repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

Or extract the ZIP and navigate into the folder:

```bash
cd /d D:\test_automation
```

### 2. Install dependencies

```bash
pip install -U pip
pip install playwright openpyxl
playwright install
```

---

## Running the Tests

From the project folder, run:

```bash
python test_automation.py --excel "Assignment 1 - Test cases.xlsx" --url "https://www.pixelssuite.com/chat-translator" --wait-ms 5000 --type-delay-ms 80 --slow-mo-ms 200 --save-every 1 --keep-open
```

### Command-line Arguments

| Argument | Description | Default |
|---|---|---|
| `--excel` | Path to the Excel test cases file | *(required)* |
| `--url` | URL of the chat translator | *(required)* |
| `--wait-ms` | Time to wait (ms) after typing each input for the output to load | `5000` |
| `--type-delay-ms` | Delay between keystrokes in ms | `80` |
| `--slow-mo-ms` | Slow motion delay for Playwright browser actions | `200` |
| `--save-every` | Save Excel results every N test cases | `1` |
| `--keep-open` | Keep the browser open after all tests complete | `false` |

---

## Output

After running, reopen the Excel file. The script will have filled in:
- **Actual output** – the Sinhala text returned by the translator
- **Status** – `Pass` if actual matches expected, `Fail` otherwise

---

## Project Structure

```
test_automation/
├── test_automation.py           # Main Playwright automation script
├── Assignment 1 - Test cases.xlsx  # Test cases Excel file
├── README.md                    # This file
```

---

## Notes

- All 50 test cases are **negative** (cases where the translator is expected to fail), with IDs beginning with `Neg_`.
- Test cases cover all **24 Singlish input types** specified in Appendix 1 of the assignment.
- Input length types: **S** (≤30 chars), **M** (31–299 chars), **L** (300–450 chars).
