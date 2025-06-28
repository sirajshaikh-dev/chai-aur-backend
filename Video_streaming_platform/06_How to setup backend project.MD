# Professional Backend Project Setup

This guide will walk you through setting up a professional backend project using Node.js, npm, Git, and other essential tools.

## Table of Contents

1. [Project Initialization](#project-initialization)
2. [Folder Structure](#folder-structure)
3. [Installation Notes](#installation-notes)

## Project Initialization

### Initialize npm and create package.json

To start, initialize a new npm project and create a `package.json` file:

```bash
npm init
```
You will be prompted to enter details about your project. Here is an example package.json:

```js
{
  "name": "chai-backend",
  "version": "1.0.0",
  "description": "A backend project in Chai and Code channel",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["javascript", "backend"],
  "author": "Your Name",
  "license": "ISC"
}

```

## Folder Structure
```
chai-backend/
├── src/
│   ├── controllers/
│   ├── db/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── constants.js
│   └── index.js
├── .env
├── .prettierignore
├── .prettierrc
├── package-lock.json
├── package.json
└── .gitignore
```

## Installation Notes

Install nodemon as a Development Dependency

```bash 
npm install -D nodemon 
        OR
npm install --save-dev nodemon
```
Add a dev Script to package.json
```javascript 
"scripts": {
  "dev": "nodemon src/index.js"
}
```
Create a .gitignore File
```bash
node_modules/
.env
```

Create a .prettierrc File

```
{
  "singleQuote": false,
  "bracketSpacing": true,
  "tabWidth": 2,
  "semi": true,
  "trailingComma": "es5"
}
```
Create a .prettierignore File
```bash
.env
node_modules/
```