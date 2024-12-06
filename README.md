# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Project Dependencies Installation Guide

This guide provides detailed instructions to install all the required dependencies for this project.

## Prerequisites

Before installing the dependencies, ensure you have the following tools installed on your system:

- [Node.js](https://nodejs.org/) (v16.0.0 or later)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/)

## Installation

Run the following commands to set up your project environment by installing all the required dependencies.

### Using npm
To install dependencies with npm, use the command:
```bash
npm install @fortawesome/fontawesome-free@6.6.0 \
@fortawesome/free-regular-svg-icons@6.7.1 \
@fortawesome/free-solid-svg-icons@6.7.1 \
@fortawesome/react-fontawesome@0.2.2 \
@types/react-dom@18.3.0 \
@types/react@18.3.3 \
@typescript-eslint/eslint-plugin@7.18.0 \
@typescript-eslint/parser@7.18.0 \
@vitejs/plugin-react@4.3.1 \
autoprefixer@10.4.20 \
eslint-plugin-react-hooks@4.6.2 \
eslint-plugin-react-refresh@0.4.9 \
eslint@8.57.0 \
framer-motion@11.13.1 \
postcss@8.4.47 \
react-countup@6.5.3 \
react-dom@18.3.1 \
react-icons@5.4.0 \
react-router-dom@6.27.0 \
react-slick@0.30.2 \
react-tsparticles@2.12.2 \
react@18.3.1 \
recharts@2.14.1 \
slick-carousel@1.8.1 \
tailwindcss@3.4.14 \
tsparticles-engine@2.12.0 \
tsparticles@3.7.1 \
typescript@5.5.4 \
vite@5.4.9

