# React Learning Projects

A collection of small, independent React apps and exercises built with Vite. The projects cover React components, fragments, Bootstrap styling, and simple interactive apps.

## Projects

| Project | What you'll find |
| --- | --- |
| [`firstReactApp`](./firstReactApp/) | A Vite starter app with a click counter and the default React/Vite welcome content. |
| [`createReactcomp/vite-project`](./createReactcomp/vite-project/) | Practice composing an app from custom components, including `Hello`, `KgButton`, and `Random`. |
| [`18Fragments/learning-fragments`](./18Fragments/learning-fragments/) | A healthy-food list styled with Bootstrap, demonstrating fragment-based JSX output. |
| [`17 BootStrap/learning-bootstrap`](./17%20BootStrap/learning-bootstrap/) | Bootstrap-related styling and button examples. |
| [`Projects/1-todo-app-version-one`](./Projects/1-todo-app-version-one/) | A basic to-do app assembled from small components. |
| [`Projects/2-bharat-clock-version-one`](./Projects/2-bharat-clock-version-one/) | A clock app that displays the current date and time. |

## Run an app

Each project has its own `package.json` and dependencies. There is no root-level app or install command. Open a terminal in the project folder you want to run, then install dependencies and start the Vite development server. For example:

```bash
cd "Projects/2-bharat-clock-version-one"
npm install
npm run dev
```

Open the local URL printed by Vite in your browser. Replace the example folder with any project listed above to run a different app.

## Available commands

Run these commands from an individual app's folder:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server with hot reload. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run the app's configured linter. |

Most apps use Oxlint for `npm run lint`; `17 BootStrap/learning-bootstrap` uses ESLint.

## Requirements

- Node.js
- npm
