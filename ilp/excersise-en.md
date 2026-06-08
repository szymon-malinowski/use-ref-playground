# Individual Learning Phase: Applying useRef in React 19

## Your Goal

You will build a small React 19 application where you intentionally use `useRef`. In doing so, you will practice referencing DOM elements, setting focus on an input field, storing values without re-renders, and clearly distinguishing `useRef` from State.

## What You Need

- A computer with Node.js and npm
- A React 19 development environment, e.g., with Vite
- An editor like VS Code
- A browser with DevTools
- Basic knowledge of React components, events, and `useState`

## Time Schedule

- 10 minutes: Project setup and basic structure preparation
- 20 minutes: Implement input with DOM reference and focus function
- 20 minutes: Extend form with automatic focus
- 25 minutes: Add render and input counters with `useRef`
- 20 minutes: Directly compare `useRef` and State
- 15 minutes: Cleanup, testing, and brief documentation
- 10 minutes: Select extension tasks or work on reflection

## Basic Tasks

### Task 1:

Prepare Mini-App **Goal:** You create a clean starting point for the subsequent tasks.

**Instructions:** Create a new React 19 project. Set up a small app with a main component, e.g., `App`, and within it, build an area with the heading "useRef Playground". Below this, create three sections with placeholders for:
1. Focus on an input field
2. Storing values without re-render
3. Comparison of `useRef` and State

**Expected Result / Target State:** Your app starts without errors. You see a clear interface with well-separated areas for the next tasks.

### Task 2:

Focus Input Specifically **Goal:** You use `useRef` to access a DOM element.

**Instructions:** In the first section, build a text field and a "Set Focus" button. Connect the input field with `useRef`. When the button is clicked, the cursor should land directly in the input field. Additionally, add a second button "Clear input and focus", which removes the content and then sets the focus back into the field.

**Expected Result / Target State:** You can reliably set the focus on the input field using a button. The second button clears the field and then correctly sets the focus again.

### Task 3:

Use Automatic Focus in a Realistic Form Situation **Goal:** You apply `useRef` in a practical form workflow.

**Instructions:** Extend the app with a small form with at least two fields, e.g., "Name" and "Email". Ensure that when the component loads, the first field is automatically focused. Add a simple check upon submission: If the name field is empty, the focus should jump directly to it. If the name field is filled but the email is missing, the focus should switch to the email field.

**Expected Result / Target State:** Upon start, the first field is active. If the input is incomplete, the focus jumps specifically to the appropriate field, allowing you to continue typing directly.

### Task 4:

Store Values with `useRef` Without Triggering Re-Render **Goal:** You understand how to use `useRef` to store persistent values without re-rendering the UI.

**Instructions:** In the second section, build an input field for notes or search terms. With each change, store the current value additionally in a Ref. Display the State value on the UI. Also, add a display showing how many times the component has rendered. Use a Ref for this as well. Deliberately test which changes trigger a re-render and which do not.

**Expected Result / Target State:** You have a visible render counter. You can observe that Ref values persist between renders, but their change alone does not trigger a new display.

### Task 5:

Directly Compare `useRef` and State **Goal:** You highlight the practical difference between Ref and State.

**Instructions:** In the third section, create two counters:
- a State counter that visibly increments on click
- a Ref counter that also increments internally

Build buttons to increment both values separately. Display the State counter directly. You should only make the Ref counter visible when you additionally click a button like "Show Ref value" or trigger a re-render in another way. Add a short hint text next to it in your UI, explaining when the display updates automatically and when not.

**Expected Result / Target State:** You can clearly observe that State changes are immediately visible, while Ref changes are stored but do not automatically trigger a new display.

## Extension Tasks

### Extension Task 1: Track Previous Value of a State

**Goal:** You use `useRef` to store the previous state of an input or selection.

**Instructions:** Add an input field or a select field, e.g., for a category. Use `useRef` to store the previous value and display both the current and the last valid value on the UI. Ensure that the previous value is correctly adopted only after a change.

**Expected Result / Target State:** You always see the current value and additionally the previously stored value. The display behaves predictably with every change.

### Extension Task 2: Securely Manage Timer ID

**Goal:** You apply `useRef` for a typical practical case outside of DOM references.

**Instructions:** Build a small search area with an input field and a delayed action, e.g., an output "Search is being performed..." only after a short pause. Store the timer ID in a Ref so that you can cancel an existing timer upon new input. Add a "Reset Search" button.

**Expected Result / Target State:** With fast input, old timers are cleanly discarded. Only the last planned action remains active.

### Extension Task 3: Reset Focus Specifically After an Action

**Goal:** You improve the usability of your app with meaningful focus management.

**Instructions:** In the form or in a small task list, add an action like "Save" or "Add". After a successful action, the focus should automatically jump back to the first sensible input field, so you can continue working directly.

**Expected Result / Target State:** After the action, you don't have to click back into the input field with the mouse, but can immediately continue working.

## Important Notes

- Work step-by-step and test each task directly in the browser.
- For DOM access, use `useRef` exclusively and not `document.querySelector`.
- Use State only where the UI should visibly update.
- Use Refs for values that should persist between renders but do not need to be re-rendered automatically.
- Ensure that your component names, variables, and buttons are clearly named.
- If you suspect errors, first check the console, event handlers, and where you bind the Ref to the element.

## Reflection Questions

- What did you use `useRef` for in your app?
- In which task was `useRef` a better choice than State?
- When was State necessary for the UI to react correctly?
- How did you recognize whether a change triggered a re-render?
- Which typical practical cases for `useRef` could you replicate in your app?
- Where would you intentionally implement focus management with `useRef` in a real application?