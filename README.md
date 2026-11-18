# React Learning Workspace

A collection of independent React exercises and small Vite applications. The folders are organized from basic component creation through props, conditional rendering, and complete UI examples.

## Projects

| Folder | Focus |
|---|---|
| [`firstReactApp`](./firstReactApp/) | Initial Vite app and React state with a counter |
| [`createReactcomp/vite-project`](./createReactcomp/vite-project/) | Creating and composing custom components |
| [`17 BootStrap/learning-bootstrap`](./17%20BootStrap/learning-bootstrap/) | Bootstrap-style buttons, badges, and themes |
| [`18Fragments/learning-fragments`](./18Fragments/learning-fragments/) | React fragments and rendering a list |
| [`19Mapmethods/learning-mapmethod`](./19Mapmethods/learning-mapmethod/) | Rendering arrays with `map()` |
| [`20ConditionalRendering/learning-rendering`](./20ConditionalRendering/learning-rendering/) | Conditional rendering with logical and ternary expressions |
| [`21Props/learning-props`](./21Props/learning-props/) | Passing arrays through props and splitting UI into components |
| [`Projects/1-todo-app-version-one`](./Projects/1-todo-app-version-one/) | Static to-do app layout built from reusable components |
| [`Projects/2-bharat-clock-version-one`](./Projects/2-bharat-clock-version-one/) | Bharat clock heading, slogan, date, and time |

## Technology

- React 19
- React DOM
- Vite 8
- JavaScript and JSX
- Bootstrap in exercises that use it
- Oxlint, or ESLint in the Bootstrap exercise

## Prerequisites

- Node.js 20 or newer
- npm
- A modern web browser

## Run a Project

This repository does not have a root `package.json`. Each exercise has its own package manifest and must be started from its own folder.

PowerShell example:

```powershell
cd "18Fragments\learning-fragments"
npm install
npm run dev
```

Another example:

```powershell
cd "Projects\2-bharat-clock-version-one"
npm install
npm run dev
```

Vite prints the local URL in the terminal, normally `http://localhost:5173/`.

## Common Commands

Run these inside the selected project folder:

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run the configured linter |

## Suggested Learning Order

```text
firstReactApp
  -> createReactcomp
  -> 17 BootStrap
  -> 18Fragments
  -> 19Mapmethods
  -> 20ConditionalRendering
  -> 21Props
  -> Projects/1-todo-app-version-one
  -> Projects/2-bharat-clock-version-one
```

## Typical Structure

```text
exercise-folder/
|-- index.html
|-- package.json
|-- vite.config.js
|-- public/
`-- src/
    |-- main.jsx
    |-- App.jsx
    |-- App.css
    |-- index.css
    |-- assets/
    `-- components/
```

Some exercises use only a subset of these files.

## Notes

- The to-do app in `Projects/1-todo-app-version-one` demonstrates component structure and static content.
- The Bharat clock renders the current date and time when it renders; it does not include a live update interval.
- The parent folders `19Mapmethods` and `21Props` contain separate package manifests, but the React exercises run from their nested `learning-*` folders.
- JSX used in this repository follows React 19 conventions.

## Troubleshooting

1. Make sure the terminal is inside the specific project folder.
2. Run `npm install` if the dependencies are missing.
3. Remove `node_modules` and reinstall if the local dependencies become stale.
4. Stop the conflicting process or change Vite's port if the default port is already in use.
