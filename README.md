# React Learning Workspace

A collection of independent React exercises and small apps built with JavaScript, JSX, and Vite. The exercises cover React fundamentals, while the `Projects` folder contains small UI projects.

## Repository Contents

| Folder | What you'll learn |
|---|---|
| [`firstReactApp`](./firstReactApp/) | Getting started with React and Vite |
| [`createReactcomp/vite-project`](./createReactcomp/vite-project/) | Creating and composing components |
| [`17 BootStrap/learning-bootstrap`](./17%20BootStrap/learning-bootstrap/) | Applying Bootstrap styles in React |
| [`18Fragments/learning-fragments`](./18Fragments/learning-fragments/) | Fragments and rendering lists |
| [`19Mapmethods/learning-mapmethod`](./19Mapmethods/learning-mapmethod/) | Rendering arrays with `map()` |
| [`20ConditionalRendering/learning-rendering`](./20ConditionalRendering/learning-rendering/) | Conditional rendering |
| [`21Props/learning-props`](./21Props/learning-props/) | Passing props to reusable components |
| [`Projects/1-todo-app-version-one`](./Projects/1-todo-app-version-one/) | A todo-list UI composed from components |
| [`Projects/2-bharat-clock-version-one`](./Projects/2-bharat-clock-version-one/) | A clock displaying the current date and time |
| [`Projects/3-todo-app-version-two`](./Projects/3-todo-app-version-two/) | Todo app exercise in progress |

## Tech Stack

- React 19 and React DOM
- Vite 8
- JavaScript and JSX
- Bootstrap in selected exercises
- Oxlint or ESLint, depending on the exercise

## Requirements

- Node.js compatible with the Vite version used by the selected exercise
- npm
- A modern web browser

## Run an Exercise

There is no root `package.json`. Each app has its own package file, so install dependencies and run scripts from that app's directory.

```powershell
cd "18Fragments\learning-fragments"
npm install
npm run dev
```

Or choose a project:

```powershell
cd "Projects\2-bharat-clock-version-one"
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`.

## Available Scripts

Run these commands from an exercise or project directory:

| Command | Purpose |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview a production build |
| `npm run lint` | Run that app's configured linter |

## Suggested Learning Path

```text
firstReactApp
  -> createReactcomp/vite-project
  -> 17 BootStrap/learning-bootstrap
  -> 18Fragments/learning-fragments
  -> 19Mapmethods/learning-mapmethod
  -> 20ConditionalRendering/learning-rendering
  -> 21Props/learning-props
  -> Projects/1-todo-app-version-one
  -> Projects/2-bharat-clock-version-one
  -> Projects/3-todo-app-version-two (in progress)
```

## Project Notes

- `19Mapmethods` and `21Props` also contain package manifests in their parent folders. Run the learning exercises from the nested `learning-*` folders listed above.
- The Bootstrap exercise uses ESLint; most other exercises use Oxlint.
- The Bharat clock shows the time when the component renders; it does not currently update on an interval.
- `Projects/3-todo-app-version-two` is not currently ready to run: its component files are empty, and `App.jsx` imports from `src/components/` while the files are in `src/component/`.

## Troubleshooting

1. Check that your terminal is inside the intended app folder.
2. Run `npm install` in that folder if dependencies are missing.
3. If the default Vite port is in use, use the alternative URL Vite prints or free the port.
