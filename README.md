# React Learning Journey

A collection of independent React and Vite practice projects covering components, props, fragments, lists, conditional rendering, styling, and small applications.

## Projects

| # | Project | Topic |
|---:|---|---|
| 1 | [`firstReactApp`](./firstReactApp/) | Vite setup, JSX, components, and state |
| 2 | [`createReactcomp/vite-project`](./createReactcomp/vite-project/) | Creating and composing components |
| 3 | [`17 BootStrap/learning-bootstrap`](./17%20BootStrap/learning-bootstrap/) | Bootstrap and custom styling |
| 4 | [`18Fragments/learning-fragments`](./18Fragments/learning-fragments/) | React fragments |
| 5 | [`19Mapmethods/learning-mapmethod`](./19Mapmethods/learning-mapmethod/) | Rendering lists with `map()` |
| 6 | [`20ConditionalRendering/learning-rendering`](./20ConditionalRendering/learning-rendering/) | Conditional rendering |
| 7 | [`21Props/learning-props`](./21Props/learning-props/) | Passing data through props |
| 8 | [`Projects/1-todo-app-version-one`](./Projects/1-todo-app-version-one/) | To-do app component structure |
| 9 | [`Projects/2-bharat-clock-version-one`](./Projects/2-bharat-clock-version-one/) | Current date and time with reusable components |

## Prerequisites

- Node.js 20 or newer
- npm
- A modern web browser

## Run an exercise

Each project has its own `package.json`. Run commands from the project folder, not from the repository root.

```bash
cd "18Fragments/learning-fragments"
npm install
npm run dev
```

Vite will print the local development URL, usually `http://localhost:5173/`.

Another example:

```bash
cd "Projects/2-bharat-clock-version-one"
npm install
npm run dev
```

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run the project's configured linter |

Most projects use Oxlint. The Bootstrap exercise uses ESLint.

## Parent-folder dependencies

[`19Mapmethods/`](./19Mapmethods/) and [`21Props/`](./21Props/) have Bootstrap dependencies in both their parent and nested lesson folders. Install dependencies in both locations when needed:

```bash
cd "19Mapmethods"
npm install
cd "learning-mapmethod"
npm install
npm run dev
```

```bash
cd "21Props"
npm install
cd "learning-props"
npm install
npm run dev
```

## Typical project structure

```text
lesson-folder/
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

The exact files vary by exercise.

## Learning order

```text
firstReactApp
→ createReactcomp
→ Bootstrap
→ Fragments
→ Map methods
→ Conditional rendering
→ Props
→ To-do app
→ Bharat clock
```

## Troubleshooting

1. Run commands inside the selected exercise folder.
2. Run `npm install` if dependencies are missing.
3. Delete `node_modules` and reinstall dependencies if they are stale.
4. Close another process using the development port if Vite reports a port conflict.

## Technologies

- React 19
- React DOM
- Vite 8
- JavaScript and JSX
- Bootstrap in selected projects
- ESLint or Oxlint, depending on the project
