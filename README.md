# React Learning Projects

This repository is a collection of React learning exercises built with Vite. Each lesson is a separate mini-project, so you run and learn from them one folder at a time instead of starting a single root app.

The projects gradually cover the core React concepts used in frontend development: JSX, components, props, fragments, lists, conditional rendering, styling, and composing small apps from reusable pieces.

## Repository structure

```text
React/
├── README.md
├── firstReactApp/
├── createReactcomp/
├── 17 BootStrap/
├── 18Fragments/
├── 19Mapmethods/
├── 20ConditionalRendering/
├── 21Props/
├── Projects/
└── ...
```

## Project progression

| Order | Project | Concept covered | Notes |
| --- | --- | --- | --- |
| 1 | [`firstReactApp`](./firstReactApp/) | React + Vite starter | Basic setup, counter state, imported assets, starter page layout |
| 2 | [`createReactcomp/vite-project`](./createReactcomp/vite-project/) | Reusable components | Imports multiple components into `App.jsx` and renders them together |
| 3 | [`17 BootStrap/learning-bootstrap`](./17%20BootStrap/learning-bootstrap/) | Bootstrap styling | Custom button and badge classes, Bootstrap CSS setup |
| 4 | [`18Fragments/learning-fragments`](./18Fragments/learning-fragments/) | Fragments | Returns sibling elements without a wrapping div |
| 5 | [`19Mapmethods/learning-mapmethod`](./19Mapmethods/learning-mapmethod/) | JavaScript `map()` in React | Renders arrays of food items in a list |
| 6 | [`20ConditionalRendering/learning-rendering`](./20ConditionalRendering/learning-rendering/) | Conditional rendering | Uses logical `&&` to show message when array is empty |
| 7 | [`21Props/learning-props`](./21Props/learning-props/) | Props | Passes data from parent to child components (`Item`, `FoodItems`, `ErrorMessage`) |
| 8 | [`Projects/1-todo-app-version-one`](./Projects/1-todo-app-version-one/) | Component-based app practice | To-do UI built from reusable child components |
| 9 | [`Projects/2-bharat-clock-version-one`](./Projects/2-bharat-clock-version-one/) | Small app project | Displays the current date and time in a component-based layout |

## Requirements

- [Node.js](https://nodejs.org/) and npm
- A code editor or IDE
- A browser to view the Vite app

## How to run a project

Each project has its own `package.json` and installs its own dependencies. Open the terminal in the project folder and run:

```bash
npm install
npm run dev
```

Then open the local URL printed in the terminal, usually something like:

```text
http://localhost:5173/
```

### Example

```bash
cd "20ConditionalRendering/learning-rendering"
npm install
npm run dev
```

Or for a project app:

```bash
cd "Projects/2-bharat-clock-version-one"
npm install
npm run dev
```

Important: do not run `npm install` or `npm run dev` from the repository root unless you are explicitly inside a project folder.

## Common project commands

These are the common Vite scripts used across the folders:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the built app locally |
| `npm run lint` | Run the linter configured for that project |

Most projects use `oxlint`. The Bootstrap exercise at [`17 BootStrap/learning-bootstrap`](./17%20BootStrap/learning-bootstrap/) uses ESLint instead.

## Typical Vite project layout

Most folders follow this structure:

```text
project-folder/
├── index.html
├── package.json
├── vite.config.js
├── public/
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── components/
```

The exact files vary by lesson. Some apps keep the UI in a single `App.jsx`, while others split it into `src/components` files.

## Special dependency notes

Some lessons use Bootstrap from a parent folder instead of the project folder itself. This happens in projects such as:

- [`19Mapmethods/`](./19Mapmethods/)
- [`21Props/`](./21Props/)

If Bootstrap is missing in the lesson project, install it from the parent folder first:

```bash
cd "19Mapmethods"
npm install
cd "learning-mapmethod"
npm install
npm run dev
```

The same pattern applies to the props lesson:

```bash
cd "21Props"
npm install
cd "learning-props"
npm install
npm run dev
```

## What each lesson focuses on

### 1. firstReactApp
A default starter page showing how React works inside Vite. It includes a counter button and starter assets from the Vite template.

### 2. createReactcomp / vite-project
Introduces component creation and composition. It demonstrates that larger UIs can be broken into smaller, reusable components.

### 3. 17 BootStrap / learning-bootstrap
Focuses on using Bootstrap classes and custom CSS for buttons, badges, and UI styling. This project is useful for seeing how a design system can be added into a React app.

### 4. 18Fragments / learning-fragments
Shows how to return multiple elements without an unnecessary wrapper `<div>`. React fragments are key to cleaner JSX output.

### 5. 19Mapmethods / learning-mapmethod
Teaches how to render arrays efficiently with JavaScript `map()`. This is one of the most important React patterns for listing data.

### 6. 20ConditionalRendering / learning-rendering
Shows how to conditionally render content with expressions like `items.length === 0 && <h3>...</h3>`. This lesson is about controlling what the user sees based on data state.

### 7. 21Props / learning-props
Introduces props as the way to pass data from a parent component to child components. The app passes a food list into reusable components such as `FoodItems`, `Item`, and `ErrorMessage`.

### 8. Projects / 1-todo-app-version-one
A small mock to-do app built with multiple small components. It demonstrates how even simple app UIs are composed from separate, focused pieces.

### 9. Projects / 2-bharat-clock-version-one
Displays the current date and time using reusable component structure. It shows how to keep the UI readable and modular even in a small app.

## Notes

- Each project is independent and should be run from its own folder.
- The repository is for learning and practice, not for a production deployment.
- Some demo controls are intentionally static and act as UI examples rather than full interactive features.
- The to-do app does not currently add or remove tasks dynamically; it displays fixed sample data.
- The clock app shows the date and time as it renders, but it is not a live-updating timer unless extended further.

## Suggested learning order

If you are working through the repo in order, follow this flow:

```text
firstReactApp -> createReactcomp -> 17 BootStrap -> 18Fragments -> 19Mapmethods -> 20ConditionalRendering -> 21Props -> Projects apps
```

This order mirrors the core progression from React basics to UI composition and app building.
