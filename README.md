# Just Choose API

## Table of contents

-   [Description](#description)
-   [Technologies](#technologies)
-   [Installation](#installation)
-   [Setting up environment variables](#setting-up-environment-variables)
-   [Seeding the database](#seeding-the-database)
-   [Running tests with Jest](#running-tests-with-jest)

## Description

This project is an application created for the purpose of accessing application data programmatically.

The intention is to build a backend service for the Just Choose web app. The API will provide the information to the front end architecture.

Link to the hosted Just Choose [here](https://just-choose.herokuapp.com/api/).

## Technologies

The technologies and packages used for this project are listed below:

-   [Typescript](https://www.typescriptlang.org/) v4.4.3
-   [MongoDB](https://www.mongodb.com/) v4.1.1
-   [TS-Node](https://www.npmjs.com/package/ts-node) v27.0.5

Project dependencies:

-   [Express](https://expressjs.com/) v4.17.1
-   [Mongoose](https://mongoosejs.com/) v6.0.5
-   [Dotenv](https://www.npmjs.com/package/dotenv) v10.0.0
-   [Axios](https://www.npmjs.com/package/axios) v0.21.4
-   [Bcrypt](https://www.npmjs.com/package/bcrypt) v5.0.1

Dev dependencies:

-   [ESLint](https://eslint.org/) v7.32.0
-   [Husky](https://www.npmjs.com/package/husky) v7.0.2
-   [Jest](https://jestjs.io/) v27.02
-   [SuperTest](https://www.npmjs.com/package/supertest) v6.1.6

## Installation

To install Just Choose API, follow these steps:

1. Ensure you have the following installed:
    - Node.js (download [here](https://nodejs.org/en/))
    - MongoDB (download [here](https://www.mongodb.com/try/download/community))
2. Fork and clone the repo
3. Open the repo and install dependencies:

```
    npm install
```

## Setting up environment variables

Variable environment files will need to be setup locally as they have been added to `.gitignore`.

Create the following following files in the root directory:

-   `.env.development`

```
    DATABASE_URL=mongodb://localhost/just-choose-test
```

## Seeding the database

Run the command to create the database locally and seed.

```
    ts-node lib/db/seeds/seedLocalDb.ts
```

Information for schema structure including sample data, interfaces, and seeds can be found within the `lib/db` folder.

## Running tests with Jest

The project was written with utilising TDD (Test Driven Development) as the main focus, the test suites for `app.js` and `utils.js` which tests all of the functionality of this backend service can be found in the `__tests__` folder.

To run the tests:

```
    npm test                                // run all tests

```
