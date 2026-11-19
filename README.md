# React Learning Workspace

A collection of independent React learning exercises and small projects built with Vite. The folders progress from basic components and JSX to fragments, arrays, props, conditional rendering, and reusable UI components.

## Projects

| Folder | Topics |
|---|---|
| [`firstReactApp`](./firstReactApp/) | First Vite app, JSX, and component-based structure |
| [`createReactcomp/vite-project`](./createReactcomp/vite-project/) | Creating and composing custom components |
| [`17 BootStrap/learning-bootstrap`](./17%20BootStrap/learning-bootstrap/) | React with Bootstrap styling |
| [`18Fragments/learning-fragments`](./18Fragments/learning-fragments/) | React fragments and list rendering |
| [`19Mapmethods/learning-mapmethod`](./19Mapmethods/learning-mapmethod/) | Rendering arrays with `map()` |
| [`20ConditionalRendering/learning-rendering`](./20ConditionalRendering/learning-rendering/) | Conditional rendering with JavaScript expressions |
| [`21Props/learning-props`](./21Props/learning-props/) | Props and reusable components |
| [`Projects/1-todo-app-version-one`](./Projects/1-todo-app-version-one/) | Static todo UI built from reusable components |
| [`Projects/2-bharat-clock-version-one`](./Projects/2-bharat-clock-version-one/) | Current date and time display |
| [`Projects/3-todo-app-version-two`](./Projects/3-todo-app-version-two/) | Todo UI starter created from a current Vite React template |

## Technology

- React 19
- React DOM
- Vite 8
- JavaScript and JSX
- Bootstrap in exercises that use it
- Oxlint or ESLint for linting

## Prerequisites

- Node.js 20 or newer
- npm
- A modern web browser

## Run an Exercise

This repository has no root `package.json`. Run commands inside the folder of the app you want to start.

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

Open the local URL printed by Vite, usually `http://localhost:5173/`.

## Common Commands

Run these from the selected exercise folder:

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
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
  -> Projects/3-todo-app-version-two
```

## Typical Folder Structure

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

- The first todo app demonstrates static component composition.
- The Bharat clock reads the current date and time when its component renders; it does not use a live timer.
- The `19Mapmethods` and `21Props` parent folders contain package manifests, but the React exercises should be run from their nested `learning-*` folders.
- The Bootstrap exercise uses ESLint, while most of the newer Vite exercises use Oxlint.

## Troubleshooting

1. Make sure the terminal is inside the specific project folder.
2. Run `npm install` if dependencies are missing.
3. Remove `node_modules` and reinstall if dependencies are stale.
4. If port `5173` is occupied, stop the existing process or let Vite select another port.
