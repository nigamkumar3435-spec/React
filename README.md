# React Learning Projects

A collection of small, independent React 19 exercises and apps built with Vite. Each app has its own `package.json`; there is no root-level app or shared install command.

## Projects

| Project | Description |
| --- | --- |
| [`firstReactApp`](./firstReactApp/) | Vite starter app with a React counter and links to React and Vite resources. |
| [`createReactcomp/vite-project`](./createReactcomp/vite-project/) | Component-composition practice using `Hello`, `KgButton`, and `Random`. |
| [`17 BootStrap/learning-bootstrap`](./17%20BootStrap/learning-bootstrap/) | Bootstrap-themed button and badge examples. |
| [`18Fragments/learning-fragments`](./18Fragments/learning-fragments/) | JSX fragments and a Bootstrap-styled healthy-food list. |
| [`19Mapmethods/learning-mapmethod`](./19Mapmethods/learning-mapmethod/) | Renders a list of foods from an array with JavaScript `map()`. |
| [`Projects/1-todo-app-version-one`](./Projects/1-todo-app-version-one/) | A simple to-do app assembled from separate components. |
| [`Projects/2-bharat-clock-version-one`](./Projects/2-bharat-clock-version-one/) | A clock app that displays the current date and time. |

## Run a project

Install [Node.js](https://nodejs.org/) and npm, then open a terminal in the app's folder. For example, to run the map-method exercise:

```sh
cd "19Mapmethods/learning-mapmethod"
npm install
npm run dev
```

Vite prints a local URL in the terminal; open it in your browser. To run another project, replace the example path with its folder from the table above.

## Available scripts

Run these commands from an individual app folder:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot reload. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run the project's configured linter. |

The Bootstrap exercise uses ESLint; the other apps use Oxlint.
