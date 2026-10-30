
# Codex Prompt Library

## 1. New Feature Prompt
Context: Explain the existing application and relevant files.

Goal: Describe the feature to implement.

Constraints:
- Work on a separate Git branch.
- Follow AGENTS.md.
- Do not add dependencies without asking.
- Ask for approval before editing code.

Acceptance Criteria: List requirements that can be verified by tests.

Examples: Include sample inputs and expected outputs.

## 2. Bug Fix Prompt
Investigate the bug and explain its root cause.
Propose a fix before editing.
Add a regression test and run relevant tests.

## 3. Refactor Prompt
Explain the refactoring plan before editing.
Preserve existing behavior.
Avoid unrelated changes and run tests and lint.

## 4. Generate Tests Prompt
Inspect the code and propose test cases.
Cover valid inputs, invalid inputs, and edge cases.
Run the tests and report results.

## 5. Review Diff Prompt
Review the Git diff without editing files.
Check correctness, requirements, readability, and test coverage.
Report issues by severity.

## 6. Commit Message Prompt
Inspect the staged Git diff.
Suggest a concise conventional commit message.
Wait for approval before committing.

## 7. ExpenseForm Feature Prompt

### Context
This is a React and Vite expense tracker.
Shared application state will be managed in App.jsx.

### Goal
Create ExpenseForm.jsx to collect an expense title, amount, and category.

### Constraints
- Work on branch feature/expense-form.
- Follow AGENTS.md.
- Do not add dependencies without approval.
- Ask for plan approval before writing code.
- Do not modify unrelated files.

### Acceptance Criteria
- Provide title, amount, and category inputs.
- Offer Food, Travel, Bills, and Other categories.
- Reject empty titles and non-numeric, zero, or negative amounts.
- Reject amounts greater than 100000.
- Call the onAdd callback once for valid input.
- Do not call onAdd for invalid input.
- Clear the form after successful submission.
- Cover validation with automated tests.

### Examples
Valid: Lunch, 250, Food → submit the expense.

Invalid: Empty title, 250, Food → show an error.

Invalid: Taxi, -50, Travel → show an error.

Invalid: Laptop, 100001, Other → show an error.
