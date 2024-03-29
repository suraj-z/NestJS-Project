### 📚 Description

This server is made to quickly prototype backend applications. It comes with authentication, logging, security, and database features out of the box.

---

### 🛠️ Prerequisites

#### Non Docker

- Please make sure to have MYSQL locally by utilizing a web server stack [XAMPP](https://www.apachefriends.org/). The control panel can then trigger MYSQL to start on localhost. MYSQL can be downloaded independently using `brew`, `choco`, or `apt-get`.  
	
#### Docker 🐳

- Please make sure to have docker desktop setup on any preferred operating system to quickly compose the required dependencies. Then follow the docker procedure outlined below.

**Note**: Docker Desktop comes free on both Mac and Windows, but it only works with Windows 10 Pro. A workaround is to get [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) which will bypass the Windows 10 Pro prerequisite by executing in a VM.

---

### 🚀 Deployment

#### Manual Deployment without Docker

- Create a .env file using the `cp .env.example .env` command and replace the existing environment variables with personal configuration settings (username and password database).

- Download dependencies using `npm i` or `yarn`

- Start the app in pre-production mode by using `npm run start` or `npm run start:dev` for development (the app will be exposed on the port 9000; not to conflict with React, Angular, or Vue)

#### Deploying with Docker 🐳

- Execute the following command in-app directory:

```bash
# creates and loads the docker container in detached mode with the required configuration
$ docker-compose up -d
```

- The following command will set up and run the docker project for quick use. Then the web application, Nginx, and MYSQL will be exposed to http://localhost:9000, http://localhost:80, and http://localhost:3306 respectively.

### 🔒 Environment Configuration

By default, the application comes with a config module that can read in every environment variable from the `.env` file.

**APP_ENV**  - the application environment to execute as, either in development or production. Determines the type of logging options to utilize. Options:  `dev`  or  `prod`.

**APP_URL**  - the base URL for the application. Made mainly to showcase the power of  `ConfigService`  and can be removed as it doesn't serve any other purpose

**WEBTOKEN_SECRET_KEY**  - the secret key to encrypt/decrypt web tokens with. Make sure to generate a random alphanumeric string for this.

**WEBTOKEN_EXPIRATION_TIME**  -  **the time in seconds**  indicating when the web token will expire; by default, it's 2400 seconds which is 40 mins.

**DB_TYPE** - the type of [database connection to use](https://github.com/typeorm/typeorm/blob/master/docs/connection-options.md).

**DB_USERNAME** - username for authenticating against the database.

**DB_PASSWORD** - password for authenticating against the database, can be left empty if a password is not needed (not recommended).

**DB_HOST** - the endpoint where this database sits (usually localhost but can be a static address).

**DB_PORT** - default ports for different types of database connections.

**DB_DATABASE** - the actual database name to perform operations on.

---

### 🏗 Choosing a Web Framework

This server comes with [Fastify](https://github.com/fastify/fastify) out of the box as it offers [performance benefits](https://github.com/nestjs/nest/blob/master/benchmarks/all_output.txt) over Express. But this can be changed to use [Express](https://expressjs.com/) framework instead of Fastify. Please proceed with the steps below to change between the two.

- Replace the following lines of code in the [main.ts file](/src/main.ts) with the ones detailed below.

Fastify:

```ts
// to fastify:
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import * as headers from 'fastify-helmet';
import * as fastifyRateLimiter from 'fastify-rate-limit';
const app = await NestFactory.create<NestFastifyApplication>(
  AppModule,
  new FastifyAdapter({ logger: console }),
);
app.register(headers);
app.register(fastifyRateLimiter, {
  max: 100,
  timeWindow: '1 minute',
});
```

Express:

```ts
// to express:
import * as headers from 'helmet';
import * as rateLimiter from 'express-rate-limit';
const app = await NestFactory.create(AppModule, {
  logger: console,
});
app.use(headers());
app.use(
  rateLimiter({
    windowMs: 60, // 1 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  }),
);
```

**Note**: The boilerplate comes with production dependencies for both Express and Fastify to support moving between two. But this is going to leave it bloated especially when only **one web framework is used at a time**. Thus, **it is recommended that when deploying to production, unused dependencies are purged.**

If you choose to **use Fastify**, this command will **purge all of the Express dependencies**:

```bash
# removing Express dependencies
$ npm rm @nestjs/platform-express express-rate-limit helmet swagger-ui-express @types/express --save
```

If you choose to **use Express**, this command will **purge all of the Fastify dependencies**:

```bash
# removing Fastify dependencies
$ npm rm @nestjs/platform-fastify fastify-helmet fastify-rate-limit fastify-swagger --save
```

---

### 💾 Choosing a Database

By default **MYSQL/MariaDB** are the database of choice but TypeORM supports other database types like SQLite, Postgres, MongoDB, and MSSQL. To use anything other than MYSQL/MariaDB, change the configuration in the `.env` file, and download the corresponding wrapper library, like [SQLite3](https://www.npmjs.com/package/sqlite3) if necessary. Of course that is assuming a proper 
setup of the database has been completed on a local machine.

**Note: For MongoDB, TypeORM is not as feature-rich as Mongoose. Therefore I created another boilerplate only for [Nest and Mongoose](https://github.com/msanvarov/nest-rest-mongo-boilerplate)**.

---

### ✅ Testing

#### Docker 🐳

```bash
# unit tests
$ docker exec -it nest yarn test

# e2e tests
$ docker exec -it nest yarn test:e2e

# test coverage
$ docker exec -it nest yarn test:cov
```

#### Non-Docker

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

---

### 💡 TypeDocs

The docs can be generated on-demand, simply, by typing `npm run typedocs`. This will produce a **docs** folder with the required front-end files and **start hosting on  [localhost](http://localhost:8080/)**.

```bash
# generate docs for code
$ npm run typedocs
```

---

### 📝 Open API

Out of the box, the web app comes with Swagger; an  [open api specification](https://swagger.io/specification/), that is used to describe RESTful APIs. Nest provides a  [dedicated module to work with it](https://docs.nestjs.com/recipes/swagger).

The configuration for Swagger can be found at this [location](/src/main.ts#L12-L61).

---

### ✨ TypeORM

TypeORM is an object-relational mapping that acts as an abstraction layer over operations on databases. Please view the [documentation](https://typeorm.io/#/) for further details.

The configuration for TypeORM can be found in the [app module](/src/modules/app/app.module.ts#L17-L33).

---

### 🔊 Logs

This server comes with a Winston module for logging, the configurations for Winston can be found in the [app module](/src/modules/app/app.module.ts#L34-L71).

---