# Portfolio

[![Tests](https://github.com/BrianLusina/portfolio/actions/workflows/tests.yml/badge.svg)](https://github.com/BrianLusina/portfolio/actions/workflows/tests.yml)
[![codecov](https://codecov.io/gh/BrianLusina/portfolio/branch/develop/graph/badge.svg?token=xuhjRpWJze)](https://codecov.io/gh/BrianLusina/portfolio)
[![Lint](https://github.com/BrianLusina/portfolio/actions/workflows/lint.yml/badge.svg)](https://github.com/BrianLusina/portfolio/actions/workflows/lint.yml)
[![Build](https://github.com/BrianLusina/portfolio/actions/workflows/build.yml/badge.svg)](https://github.com/BrianLusina/portfolio/actions/workflows/build.yml)
[![Docker Build](https://github.com/BrianLusina/portfolio/actions/workflows/dockerimage.yml/badge.svg)](https://github.com/BrianLusina/portfolio/actions/workflows/dockerimage.yml)

Portfolio site built in React, GraphQl showcasing projects worked on. This fetches information of these projects from Github's GraphQl API, rendering them in a nice simple format for the world to see.

This is born out of a need to have a website that showcases projects from a Versioning Control System and displays them to the outside world in a visually appealing way, this is especially useful for developers who would like to showcase their work to the world without needing to share a github URL. Also, it's a fun and simple project to work on teaching aspects of GraphQl and React.

## Getting Started

After cloning the repository, you will need to perform some initial steps before you can start the application.

The first thing you will need to do, if you have not already, is to get a Github Personal Access Token as described [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). Set it to whatever scope you want to use, but in order to fetch repository information, it is important to set the read scope for repositories.

After which, the rest of the setup is quite simple as it is as configurable as setting the _.env_(not pushed to VCS) file from [.env.sample](./.env.sample) file that is provided as an example.

Running this should setup some reasonable env variables for you:

```bash
cp .env.sample .env
```

> After which you can change the values in the .env file as you see fit

Now for the pre-requisites for the application.

## Prerequisites

There are some tools you will need in your local development environment if you do not have them already.

### Node & NPM

If you do not have these already, then kindly install them in your local development environment as described [here](https://nodejs.org/en/) and [here](https://www.npmjs.com/get-npm/). Ideally, installed NodeJS should be sufficient as it will also install NPM. You can use [nvm](https://github.com/nvm-sh/nvm) as well to install NodeJS versions.

### Docker

Not necessary, but if you want to test the running of this application in a Docker container, then you will need to install Docker. Follow the instructions [here](https://docs.docker.com/install/).

That's it, next is to simply install dependencies and you should be good to go.

## Installation

This is as simple as:

```bash
yarn install

# or if you prefer to use npm
npm install
```

> dependencies will be installed in the `node_modules` folder

## Running the application

Running the application is as simple as:

```bash
yarn start
# or with npm
npm start
```

> Now you can access the running applicaton in any browser on the address `http://localhost:3000`

## Running tests

Unit tests have been written for the application and can be run with the command:

```bash
yarn test
# or with npm
npm test
```

## Creating a Build

Creating an optimized build for shipping is as simple as:

```bash
yarn(or npm) build
```

> A build will be created and can be found bundled in the `build` folder

## Viewing the Components

[Storybook](https://storybook.js.org/) has been used to view the components used in the application in isolation of the running application. This means that you do not need to start the application in order to view the components. This is an effective way to visually test the components of a frontend application without the need of the whole application running.

To view the components used in this application via storybook, simply run the following command:

``` bash
yarn storybook
# or
npm run storybook
```

> you can then be able to view the components in the browser on the address `http://localhost:6006`

## Continuous Integration & Deployment

Commonly abbreviated as CI/CD, this is a process where the application is built, tested, and deployed to a production environment. In this case, the steps are
`lint` -> `test` -> `build` -> `build-docker-image`(optional depending on requirements and targe deployment environment) -> `deploy`(depending on the target environment and type of deployment) -> `create release`(creates a tagged release of the source code on Github/Gitlab/Bitbucket).

These are the conventional steps usually. In this case however, the steps from build-docker-image upto create release are not hard requirements and really depend on the use case. However, for this project they have been setup to handle the process end to end.

The CI provider picked here is [Github Actions](https://github.com/features/actions) as it is simple to use and has a lot of features already baked in. Of course any other CI provider can be used, the end goal is the same.

The workflow files can be found [here](./github/workflows) and more can be added as seen fit.

### Docker Builds

For those who are interested in building the docker image, the following steps are required:

1. If using Github Actions to run the CI pipeline, then you will need to add the DOCKERHUB_USERNAME & DOCKERHUB_PASSWORD environment variables to secrets in the repository.
2. If using Travis CI, then you will need to add the DOCKERHUB_USERNAME & DOCKERHUB_PASSWORD environment variables to the Travis CI settings.
3. If using CircleCI, then you will need to add the DOCKERHUB_USERNAME & DOCKERHUB_PASSWORD environment variables to the CircleCI settings.
4. If using Gitlab CI, then you will need to add the DOCKERHUB_USERNAME & DOCKERHUB_PASSWORD environment variables to the Gitlab CI settings.
5. If using Bitbucket Pipelines, then you will need to add the DOCKERHUB_USERNAME & DOCKERHUB_PASSWORD environment variables to the Bitbucket Pipelines settings.
6. If using Azure Pipelines, then you will need to add the DOCKERHUB_USERNAME & DOCKERHUB_PASSWORD environment variables to the Azure Pipelines settings.
7. If using AWS CodeBuild, then you will need to add the DOCKERHUB_USERNAME & DOCKERHUB_PASSWORD environment variables to the AWS CodeBuild settings.
8. If using Azure DevOps, then you will need to add the DOCKERHUB_USERNAME & DOCKERHUB_PASSWORD environment variables to the Azure DevOps settings.

## Deploying the application

This is a simple static application, so the deployment options are vast and therfore not covered in this guide. However the options are as follows:

* [Github Pages](https://pages.github.com/)
* [Netlify](https://www.netlify.com/)
* [Heroku](https://www.heroku.com/)
* [Firebase](https://firebase.google.com/)
* [Surge](https://surge.sh/)

These are common options for deploying a static applications, but there are many more options available online that can be used to deploy this application.

## Versioning

[SemVer](https://semver.org/) is used to version the application. This is a common practice for versioning software and the versions available can be seen in the [tags](https://github.com/BrianLusina/portfolio/tags) of this repository.

## Core Tools & Technology used to build this application

These are not the limited tech used, but play a major part in its construction

* [React](https://reactjs.org/)
* [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
* [React Hooks](https://reactjs.org/docs/hooks-intro.html)
* [React Helmet](https://react-helmet.netlify.com/)
* [GraphQl](https://graphql.org/)
* [Apollo](https://www.apollographql.com/)

[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
