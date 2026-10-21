# Bharat Clock

A small React app built with Vite that displays the current date and time.

## Requirements

- Node.js and npm

## Getting started

Open a terminal in this folder and install the dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Open the local URL printed in the terminal to view the app.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run Oxlint. |

## Project structure

```text
src/
  components/
    ClockHeading.jsx  # App title
    ClockSlogan.jsx   # Short description
    CurrentTime.jsx  # Displays the date and time
  App.jsx
  main.jsx
```

The displayed date and time use the browser's locale and time zone.
