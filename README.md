# React Learning Projects

This folder contains small React projects and exercises built while learning React. Most projects are independent Vite apps, each with its own dependencies and npm scripts.

## Projects

| Folder | Description |
| --- | --- |
| [`firstReactApp`](./firstReactApp/) | A starter React application. |
| [`createReactcomp/vite-project`](./createReactcomp/vite-project/) | Exercises creating and using React components. |
| [`Projects/1-todo-app-version-one`](./Projects/1-todo-app-version-one/) | A basic to-do list app. |
| [`Projects/2-bharat-clock-version-one`](./Projects/2-bharat-clock-version-one/) | A clock that displays the current date and time. |
| [`17 BootStrap/learning-bootstrap`](./17%20BootStrap/learning-bootstrap/) | React and Bootstrap exercises. |
| [`18Fragments/learning-fragments`](./18Fragments/learning-fragments/) | Exercises using React Fragments. |

## Run a project

Each app should be run from its own folder. For example, to start the Bharat Clock:

```bash
cd "Projects/2-bharat-clock-version-one"
npm install
npm run dev
```

For another project, change into its folder and use the commands defined in that project's `package.json`. Typical Vite commands are:

```bash
npm run dev
npm run build
npm run preview
```

## Requirements

- Node.js
- npm

Dependencies are installed separately for each project; there is no single root-level app or npm command for the whole folder.
