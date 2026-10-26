# React Learning Projects

This repository contains small React lessons and practice apps built with React and Vite. It is organized as a collection of independent projects rather than one application: open and run each project from its own folder.

The lessons progress from the Vite starter and reusable components to rendering lists and conditional UI. The `Projects` folder contains small apps assembled from those building blocks.

## Learning path and projects

| Order | Project | What it covers |
| --- | --- | --- |
| 1 | [`firstReactApp`](./firstReactApp/) | A Vite + React starter with a stateful counter, JSX, imported assets, and the starter page layout. |
| 2 | [`createReactcomp/vite-project`](./createReactcomp/vite-project/) | Creating and composing components, importing components, and displaying JavaScript values in JSX. |
| 3 | [`17 BootStrap/learning-bootstrap`](./17%20BootStrap/learning-bootstrap/) | Button and badge styling with the project's custom CSS classes. |
| 4 | [`18Fragments/learning-fragments`](./18Fragments/learning-fragments/) | Returning sibling elements with a React fragment and applying Bootstrap list styles. |
| 5 | [`19Mapmethods/learning-mapmethod`](./19Mapmethods/learning-mapmethod/) | Rendering an array of food items with JavaScript `map()` and React list keys. |
| 6 | [`20ConditionalRendering/learning-rendering`](./20ConditionalRendering/learning-rendering/) | Rendering a message conditionally with the `&&` operator, alongside a mapped list. |
| 7 | [`Projects/1-todo-app-version-one`](./Projects/1-todo-app-version-one/) | A component-based to-do interface with an entry row and example items. The add and delete controls are currently presentation-only. |
| 8 | [`Projects/2-bharat-clock-version-one`](./Projects/2-bharat-clock-version-one/) | A component-based clock display that formats the current date and time using the browser's locale and time zone. |

Each runnable project has its own `package.json` and Vite configuration. There is no single repository-level install, development-server, or build command. The map-method lesson has a Bootstrap dependency declared in its parent folder; see the setup note below.

## Requirements

- [Node.js](https://nodejs.org/) and npm
- A terminal and a web browser

## Run a project

Choose a project folder from the table above, open a terminal in that folder, and install its dependencies:

```sh
cd "20ConditionalRendering/learning-rendering"
npm install
```

Start its Vite development server:

```sh
npm run dev
```

Open the local URL printed by Vite. To work on a different lesson, change into that project's folder before running the commands. For example:

```sh
cd "Projects/1-todo-app-version-one"
npm install
npm run dev
```

Run npm commands from the selected project's directory, not from the repository root.

### Dependency note for the map-method lesson

The map-method app imports Bootstrap, which is declared by the `19Mapmethods/` parent package rather than by the app's own `package.json`. If Bootstrap is not already installed, install it from the parent folder as well:

```sh
cd "19Mapmethods"
npm install
cd "learning-mapmethod"
npm install
npm run dev
```

## Available commands

All listed projects provide the following Vite commands:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server with hot module replacement. |
| `npm run build` | Build the app for production into that project's `dist/` directory. |
| `npm run preview` | Serve the production build locally for a preview. |
| `npm run lint` | Run the linter configured for that project. |

Most projects use Oxlint for `npm run lint`. The Bootstrap lesson at [`17 BootStrap/learning-bootstrap`](./17%20BootStrap/learning-bootstrap/) uses ESLint instead.

## Project layout

The projects generally follow the Vite React structure:

```text
project-folder/
  index.html          # HTML entry point
  package.json        # Project dependencies and npm scripts
  vite.config.js      # Vite configuration
  public/             # Static files served as-is
  src/
    main.jsx          # Creates the React root and mounts the app
    App.jsx           # Main component for the lesson or app
    App.css           # App-specific styles (where present)
    index.css         # Global styles (where present)
```

Some projects split UI into `src/components/`; for example, the to-do and clock apps compose their pages from smaller components. Edit the relevant project's `src/` files to continue the exercise.

## Notes

- Dependencies and build output are local to each project. Install dependencies separately in each project you want to run.
- The lessons are examples for learning React; the two apps under `Projects/` are small practice projects, not production-ready applications.
- The to-do project's controls do not currently create or remove items, and its example entries are fixed in the source.
- The clock formats date and time with the browser's locale and time zone when it renders; it does not currently refresh on a timer.
