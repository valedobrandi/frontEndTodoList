# FrontEnd Todo List Application

## Introduction
This is a front-end application for managing a todo list. It is built using modern web development technologies and structured to be scalable and maintainable.

## Table of Contents
- [Introduction](#introduction)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)

## Installation
To install the project dependencies, run:
\`\`\`bash
npm install
\`\`\`

## Usage
To start the application, run:
\`\`\`bash
npm run dev
\`\`\`
Then, open [http://localhost:3000](http://localhost:3000) in your browser.

## Features
- Beautiful and accessible drag and drop for lists with React. https://github.com/atlassian/react-beautiful-dnd
- Add, edit, and delete tasks
- Mark tasks as complete
- Filter tasks by status (all, active, completed)

## Project Structure
\`\`\`
├── .eslintrc.json
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public/
│   ├── icon-check.svg
│   ├── icon-moon.svg
│   ├── icon-sun.svg
│   └── vite.svg
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── assets/
│   │   ├── icon-cross.svg
│   │   └── react.svg
│   ├── components/
│   │   ├── list-tasks/
│   │   │   └── list-tasks.tsx
│   │   ├── task/
│   │   │   └── task.tsx
│   │   └── view-tasks/
│   │       └── view-tasks.tsx
│   ├── main.tsx
│   └── styles/
│       ├── styled.d.ts
│       └── styles.tsx
\`\`\`

## Dependencies
- React
- TypeScript
- Vite
- Styled Components

## Contributors
- Bernardo Albuquerque

## License
This project is licensed under the MIT License.
