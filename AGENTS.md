
# AGENTS.md

## Project Overview
Build an expense tracker using React, Vite, and JavaScript.

## Technology Stack
- React
- Vite
- JavaScript
- CSS
- Vitest and React Testing Library for unit and component tests
- Cypress for end-to-end tests

## Folder Structure
- `src/` — application source code
- `src/App.jsx` — main application component and shared state
- `src/App.css` — application styling
- `src/index.css` — global styling
- `src/components/` — reusable React components
- `src/utils/` — pure helper functions
- `src/__tests__/` — unit and component tests
- `cypress/e2e/` — end-to-end tests

## Commands
- Install dependencies: `npm install`
- Start development server: `npm run dev`
- Run lint: `npm run lint`
- Run tests: `npx vitest run`
- Run coverage: `npx vitest run --coverage`
- Open Cypress: `npm run cy:open`
- Run Cypress: `npm run cy:run`

## Coding Conventions
- Use functional React components.
- Keep shared application state in `App.jsx`.
- Use one component per file.
- Use clear, descriptive variable and function names.
- Add a short comment to explain each component's props and state.
- Keep components small and reusable.
- Use stable `data-cy` attributes for Cypress selectors.

## Expense Tracker Requirements
- Add expenses with title, amount, and category.
- Categories: Food, Travel, Bills, Other.
- Reject empty titles, non-numeric amounts, zero, and negative amounts.
- Reject amounts above 100000.
- Display expenses, category filters, running total, and visible expense count.
- Allow users to delete expenses.
- Format the total to two decimal places.

## Agent Rules
- Ask before adding any new dependency.
- Work on a separate branch for each scoped task.
- Inspect the existing code before making changes.
- Present a plan and wait for approval before editing code.
- Do not modify tests just to make them pass.
- Run relevant tests and lint after changes.
- Summarize changes and test results for the pull request.
- Never merge a pull request without the required review.
