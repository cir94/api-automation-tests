# API Automation Tests

This repo is comprised of tests that are written to test an API endpoint from ReqRes on "https://reqres.in" via automation.

The tests in this repo are written in Mocha syntax, with Chai being used as the library for assertions.

ESLint and prettier are used for linting and ensuring that the code written is clean and error-free.

Husky is used to run pre-commit hooks, and Lint-staged is used to run the `prettier --write` script on all staged files to ensure they're formatted properly before being pushed into the repo

A workflow hook is also present for when code is pulled into the main branch, with a manual dispatch command available to ensure all tests run clean.

Docker is utilized to ensure the tests run clean, with a `dockerfile` and `compose.yaml` included in the root of the repo. If you want to run the tests with docker, there will be instructions included in the `to run tests` section further in the readme.

# To setup project for use on system

- Run `npm install`
- This project requires an `.env` file to be created in the root of the folder for tests to run
- Once the `.env` file is created, add this line: `API_URL="https://reqres.in"`

# To run tests

## Using CLI

- Run `npm run test` in your terminal

## Using Docker

To run the tests in a docker container, run the following command in a terminal pointing to the root of this repo

- `docker compose up --build`

This will create a docker image that will then run in a container which will run the spec files. To run the tests again without creating another docker image, run the following command

- `docker compose up`

## Packages

The packages that are being used in this project are:

- chai
- dotenv
- superagent
- eslint
- mocha
- prettier
- husky
- lint-staged

As this project is worked on, more packages could be added. If so, they'll be added here and their usage will be explained above.
