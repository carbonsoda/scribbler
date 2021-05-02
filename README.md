# Scribbler

## Contents

  - [Description](#description)
  - [Technology](#technology)
  - [Installation](#installation)
  - [Progress](#progress)


## Description

Scribbler lets folks quickly scribble an idea and share it with others via temporary link; after 30 minutes, the image is permanently deleted.

## Technology
 
### Prerequisites

#### Docker

This project relies on Docker to run the PostgreSQL server. You must install
Docker first before continuing.

Use one of these methods:

- Use [Homebrew](https://docs.brew.sh/Installation) on macOS: `brew install --cask docker`
- [Follow the instructions on the Docker website](https://www.docker.com/)

Once you've installed Docker Desktop, you'll need to launch the app. On macOS,
it's located in `/Applications/Docker`.

#### Node

You'll need to install Node v14 or above. [`nvm`](https://github.com/nvm-sh/nvm) is highly recommended.

### Set Up the Development Environment

#### Install NPM Packages

All the required packages can be installed at once using the following command in the root directory:
```sh
npm install
```

#### Set Up React client for `auth0`

1. Copy the app's example environment file

   ```sh
   cp app/.env.example app/.env
   ```

2. The `.env` file allows the React app to use Auth0, and requires an Auth0 domain + client-id.
   - These can be obtained by signing up for an Auth0 account and [Registering a Single-Page Web Application](https://auth0.com/docs/get-started) in order to get these values.
   - This [graphic](https://images.ctfassets.net/23aumh6u8s0i/1DyyZTcfbJHw577T6K2KZk/a8cabcec991c9ed33910a23836e53b76/auth0-application-settings) from [Auth0's guide](https://auth0.com/blog/complete-guide-to-react-user-authentication/#Connect-React-with-Auth0) may be helpful to locating them. 

#### Set Up `postgres` User Password and Database Name

We need to set up couple pieces of information in order to start a new
PostgreSQL server instance, as well as to connect to it later from the Express
server.

1. Copy the root example environment file

   ```sh
   cp .env.example .env
   ```

2. You can choose to edit `.env` or just use as-is.

[See the PostgreSQL Docker image documentation for more information](https://hub.docker.com/_/postgres).

#### Initialize the Database

Let's set up the database server, create the application database, and seed it
with some data. You only need to do this the first time you set up your
development environment.

```sh
npm run db:init
```

ℹ️ If you ever need to start over with the database, you can run this command
again which will delete your existing data and start from scratch.

### Start the Development Environment

```sh
npm start
```

Visit <http://localhost:3000>.

### Shut Down the Development Environment

1. `Ctrl-C` to stop the Express and React development servers.
1. `npm run db:stop` to stop and destroy the PostgreSQL Docker container. Don't
   worry, your data is safe.

### Need to Start a `psql` Session?

```sh
npm run psql
```

## Progress

- All needed API keys were acquired and general planning has been completed; the first two weeks have more details and the following weeks will be adjusted based on progress.
- Currently working on a [basic version of the front-end](https://github.com/carbonsoda/scribbler/tree/frontend-v1). 
