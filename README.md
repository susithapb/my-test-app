
Micro Frontend Enterprise Web App with React and Module Federation

This project demonstrates a micro-frontend architecture using React and Webpack's Module Federation. The application consists of two parts: `shared-components` and `main-app`.

## Table of Contents

- Introduction
- Prerequisites
- Installation
- Running the Application
- Adding Bootstrap
- Explanation of Webpack Module Federation
- NPM Commands
- License

## Introduction

This project is designed to demonstrate how to build a micro-frontend based enterprise web application using React and Webpack's Module Federation. It features reusable components and a modular architecture suitable for large-scale applications.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or Yarn

## Installation

Clone the repository and install dependencies for both `shared-components` and `main-app`.

```
git clone https://github.com/susithapb/my-test-app.git
cd my-test-app

# Install dependencies for shared-components
cd shared-components
npm install

# Install dependencies for main-app
cd ../main-app
npm install
```

## Running the Application

Start the `shared-components` and `main-app` projects.

```
# In shared-components
cd shared-components
npm start

# In main-app
cd ../main-app
npm start
```

By default, `shared-components` runs on port 3001 and `main-app` runs on port 3000.

## Adding Bootstrap

Bootstrap can be added to both `shared-components` and `main-app` to style your components and layouts. Import Bootstrap CSS and JS in the `index.js` files of both projects.

## Explanation of Webpack Module Federation

Webpack's Module Federation plugin allows multiple webpack builds to share code and dependencies with each other. It enables a micro-frontend architecture where different parts of the application can be developed and deployed independently.

In this project:
- `shared-components` exposes reusable React components.
- `main-app` consumes these components dynamically at runtime.

This setup helps in:
- Code sharing and reuse across different parts of the application.
- Independent development and deployment of different modules.

## NPM Commands

- `npm install`: Install the dependencies.
- `npm start`: Run the application in development mode.
- `npm run build`: Build the application for production.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
