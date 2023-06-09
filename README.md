# Blacked IPs: The Rhythm of Cybersecurity

Just like the Black Eyed Peas brought a unique fusion of hip hop, pop, and electronic music to the global stage, Blacked IPs is revolutionizing the cybersecurity landscape by breaking down barriers and forging its own unique path.

## About Us

In the spirit of open source, we've taken what traditionally costs up to $20,000 and are making it available for less than $100. We are making cybersecurity more accessible and democratizing the way it's done.

## Our Tools

## Our Tools

- **Fingerprint.js**: One of the most advanced device identification libraries on the market. It ensures that we can accurately identify who is using our services.
- **Bunnyshell**: Our preferred platform for managing cloud services. Bunnyshell simplifies deployment, making our work significantly easier.
- **Pangea**: For location-based security, we turn to Pangea. It allows us to tailor protection based on geographical information.
- **MongoDB**: A key part of our tech stack, MongoDB provides us with a flexible and powerful database solution for storing and managing our cybersecurity data.
- **AWS SageMaker**: We use SageMaker to build, train, and deploy machine learning models to detect bot activity.
- **AWS OpenSearch**: This service powers our search and analytics capabilities, helping us identify and analyze security events.
- **AWS Lambda**: We use Lambda to interact with SageMaker, providing serverless compute services that we can scale as needed.
- **Chainlink**: Chainlink allows us to interact with data providers and external APIs, making it a crucial part of our bot-detection infrastructure.
- **Space and Time**: We leverage Space and Time for decentralized SQL, supporting our commitment to DeFi principles.
- **Fantom Chain**: Our solution is deployed on the Fantom Chain, providing us with a fast, secure, and scalable platform.
- **Tailwind-Material Pro**: For our user interface, we use Tailwind-Material Pro, offering a beautiful, modern, and responsive design.


## Join Us

We're not just a cybersecurity company, we're a movement. If you believe in a safer digital world, join us and contribute to the open source cybersecurity revolution!


## Quick Start

Follow the [Setup guide](SETUP.md) to get started. 

## Table of Contents

- [Features](#features)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Error Handling](#error-handling)
- [Validation](#validation)
- [Authentication](#authentication)
- [Authorization](#authorization)
- [Logging](#logging)
- [Custom Mongoose Plugins](#custom-mongoose-plugins)
- [API Testing](#api-testing)
- [UI Components](#ui-components)
- [Client Routing](#client-routing)
- [Client State Management](#client-state-management)
- [Client Services](#client-services)
- [Deploy](#deploy)

## Features

- **NoSQL database**: [MongoDB](https://www.mongodb.com) object data modeling using [Mongoose](https://mongoosejs.com)
- **Email and Social authentication and authorization**: using [passport](http://www.passportjs.org)
- **Multi-tenancy with Teams**: create and manage teams of users
- **Validation**: request data validation using [Joi](https://github.com/hapijs/joi)
- **Logging**: using [winston](https://github.com/winstonjs/winston) and [morgan](https://github.com/expressjs/morgan)
- **Testing**: unit and integration tests using [Jest](https://jestjs.io)
- **Error handling**: centralized error handling mechanism
- **API documentation**: with [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc) and [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
- **Security**: set security HTTP headers using [helmet](https://helmetjs.github.io)
- **Santizing**: sanitize request data against xss and query injection
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Compression**: gzip compression with [compression](https://github.com/expressjs/compression)
- **Code coverage**: using [coveralls](https://coveralls.io)
- **Accessible UI**: accessible UI developed using screen readers
- **Dark theme enabled**: load even different images based on theme
- **Code splitting**: code splitting with [create-react-app](https://facebook.github.io/create-react-app/docs/code-splitting)
- **Tailwind CSS**: responsive UI using [tailwind CSS](https://tailwindcss.com/)
- **Windmill React UI**: UI components from [Windmill React UI](https://windmillui.com/react-ui)
- **React Router**: client routing using [react-router](https://reactrouter.com/)
- **Heroicons**: icons from [heroicons](https://heroicons.com/)
- **Chart.js**: beautiful charts and graphs using [chart.js](https://www.chartjs.org/)

## Environment Variables

The server environment variables can be found and modified in the `.env` file in server directory. They come with these default values:

```bash
# Port number
PORT=8080

# URL of the BlackedIPs client
CLIENT_URL=client-production-url

# URL of the Mongo DB
MONGODB_URL=mongodb-production-url
MONGODB_URL_TEST=mongodb-test-url

# JWT
# JWT secret key
JWT_SECRET=thisisasamplesecret
# Number of minutes after which an access token expires
JWT_ACCESS_EXPIRATION_MINUTES=30
# Number of days after which a refresh token expires
JWT_REFRESH_EXPIRATION_DAYS=30

# Github
# Github Id
GITHUB_ID=github-id
# GITHUB secret key
GITHUB_SECRET=thisisasamplesecret

# Google
# Google Id
GOOGLE_ID=github-id
# Google secret key
GOOGLE_SECRET=thisisasamplesecret

# SMTP configuration options for the email service
# For testing, you can use a fake SMTP service like Ethereal: https://ethereal.email/create
SMTP_HOST=email-server
SMTP_PORT=587
SMTP_USERNAME=email-server-username
SMTP_PASSWORD=email-server-password
EMAIL_FROM=support@yourapp.com

# Stripe secret key
STRIPE_SECRET=stripe-production-private-key
STRIPE_SECRET_TEST=stripe-test-private-key
```

The client environment variables can be found and modified in the `.env` file in client directory. They come with these default values:

```bash
# API url
REACT_APP_API_URL=api-url

# Stripe public key
REACT_APP_STRIPE_PUBLIC_KEY=stripe-public-key

# number of users per page in users table
REACT_APP_USERS_PER_PAGE=10
```


## Project Structure

```
BlackedIPs\
 |--client\
  |--public\
  |--src\
   |--assets\
    |--config\        # Environment variables and configuration related things
    |--css\           # Tailwind CSS
    |--img\           # Images
   |--components\     # React components
   |--containers\     # Layout containers
   |--context\        # React Context providers
   |--icons\          # Icons
   |--pages\          # Client pages
   |--routes\         # Routes
   |--services\       # Services for accessing API's
   |--utils\          # Utility functions
   |--App.js          # React app
   |--index.js        # App entry point
 |--server\
  |--src\
   |--config\         # Environment variables and configuration related things
   |--controllers\    # Route controllers (controller layer)
   |--docs\           # Swagger files
   |--middlewares\    # Custom express middlewares
   |--models\         # Mongoose models (data layer)
   |--routes\         # Routes
   |--services\       # Business logic (service layer)
   |--utils\          # Utility classes and functions
   |--validations\    # Request data validation schemas
   |--app.js          # Express app
   |--index.js        # App entry point
```

## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:8080/v1/docs` in your browser. This documentation page is automatically generated using the [swagger](https://swagger.io/) definitions written as comments in the route files.

### API Endpoints

List of available routes:

**Auth routes**:\
`POST /v1/auth/register` - register\
`POST /v1/auth/login` - login\
`GET /v1/auth/github` - github authentication\
`GET /v1/auth/github/callback` - github authentication callback\
`GET /v1/auth/google` - google authentication\
`GET /v1/auth/google/callback` - google authentication callback\
`POST /v1/auth/refresh-tokens` - refresh auth tokens\
`POST /v1/auth/forgot-password` - send reset password email\
`POST /v1/auth/reset-password` - reset password\
`POST /v1/auth/send-verification-email` - send verification email\
`POST /v1/auth/verify-email` - verify email

**User routes**:\
`POST /v1/users` - create a user\
`GET /v1/users` - get all users\
`GET /v1/users/:userId` - get user\
`PATCH /v1/users/:userId` - update user\
`DELETE /v1/users/:userId` - delete user

**Team routes**:\
`POST /v1/team` - create a team\
`POST /v1/team/set-avtive-team` - set active team\
`GET /v1/team/:teamId` - get team\
`POST /v1/team/:teamId` - leave team\
`PATCH /v1/team/:teamId` - update team\
`DELETE /v1/team/:teamId` - delete team\
`POST /v1/team/:teamId/invitation` - create invitation\
`GET /v1/team/:teamId/invitation/:invitationId` - get invitation\
`POST /v1/team/:teamId/invitation/:invitationId` - handle invitation\
`DELETE /v1/team/:teamId/invitation/:invitationId` - delete invitation\
`PATCH /v1/team/:teamId/user/:userId` - update team user\
`DELETE /v1/team/:teamId/user/:userId` - delete team user\

**Stripe routes**:\
`POST /v1/stripe/get-products` - get all stripe products\
`POST /v1/stripe/updatePaymentMethod` - update stripe payment method\
`POST /v1/stripe/create-subscription` - create or update stripe subscription\
`POST /v1/stripe/complete-subscription` - notify subcription created successfully\
`POST /v1/stripe/delete-subscription` - delete stripe subscription

## Error Handling

The app has a centralized error handling mechanism.

Controllers should try to catch the errors and forward them to the error handling middleware (by calling `next(error)`). For convenience, you can also wrap the controller inside the catchAsync utility wrapper, which forwards the error.

```javascript
const catchAsync = require('../utils/catchAsync');

const controller = catchAsync(async (req, res) => {
  // this error will be forwarded to the error handling middleware
  throw new Error('Something wrong happened');
});
```

The error handling middleware sends an error response, which has the following format:

```json
{
  "code": 404,
  "message": "Not found"
}
```

When running in development mode, the error response also contains the error stack.

The app has a utility ApiError class to which you can attach a response code and a message, and then throw it from anywhere (catchAsync will catch it).

For example, if you are trying to get a user from the DB who is not found, and you want to send a 404 error, the code should look something like:

```javascript
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const User = require('../models/User');

const getUser = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
};
```

## Validation

Request data is validated using [Joi](https://joi.dev/). Check the [documentation](https://joi.dev/api/) for more details on how to write Joi validation schemas.

The validation schemas are defined in the `src/validations` directory and are used in the routes by providing them as parameters to the `validate` middleware.

```javascript
const express = require('express');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/users', validate(userValidation.createUser), userController.createUser);
```

## Authentication

To require authentication for certain routes, you can use the `auth` middleware.

```javascript
const express = require('express');
const auth = require('../../middlewares/auth');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/users', auth(), userController.createUser);
```

These routes require a valid JWT access token in the Authorization request header using the Bearer schema. If the request does not contain a valid access token, an Unauthorized (401) error is thrown.

**Generating Access Tokens**:

An access token can be generated by making a successful call to the register (`POST /v1/auth/register`) or login (`POST /v1/auth/login`) endpoints. The response of these endpoints also contains refresh tokens (explained below). 

A refresh token can also be generated by successful oauth authentication by making a redirect to github authentication (`GET /v1/auth/github`), and a successful authentication will redirect back to the client url with the refresh token.

An access token is valid for 30 minutes. You can modify this expiration time by changing the `JWT_ACCESS_EXPIRATION_MINUTES` environment variable in the .env file.

**Refreshing Access Tokens**:

After the access token expires, a new access token can be generated, by making a call to the refresh token endpoint (`POST /v1/auth/refresh-tokens`) and sending along a valid refresh token in the request body. This call returns a new access token and a new refresh token.

A refresh token is valid for 30 days. You can modify this expiration time by changing the `JWT_REFRESH_EXPIRATION_DAYS` environment variable in the .env file.

### Email Verification

A field `isEmailVerified` exists in the user model, which maintais whether the user has verified their email. When a new user signs up, an email is sent for verification, once verified, `isEmailVerified` is set to true. When the email of a user is updated (either through the profile section or by an admin), `isEmailVerified` is again set to false and a verification email is sent.

**IMPORTANT** : With social authentication, `isEmailVerified` is set to true by default. if the email provided by the social OAuth is already taken by some user, that user is merged to have these OAuth credentials and `isEmailVerified` is set to true. Now this might be problematic, since a different user might have taken the email address and we might not want to merge it with the social account. One way to handle this is to only allow users with verified emails.

## Authorization

The `auth` middleware can also be used to require certain rights/permissions to access a route.

```javascript
const express = require('express');
const auth = require('../../middlewares/auth');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/users', auth('manageUsers'), userController.createUser);
```

In the example above, an authenticated user can access this route only if that user has the `manageUsers` permission.

The permissions are role-based. You can view the permissions/rights of each role in the `src/config/roles.js` file.

If the user making the request does not have the required permissions to access this route, a Forbidden (403) error is thrown.

## Logging

Import the logger from `src/config/logger.js`. It is using the [Winston](https://github.com/winstonjs/winston) logging library.

Logging should be done according to the following severity levels (ascending order from most important to least important):

```javascript
const logger = require('<path to src>/config/logger');

logger.error('message'); // level 0
logger.warn('message'); // level 1
logger.info('message'); // level 2
logger.http('message'); // level 3
logger.verbose('message'); // level 4
logger.debug('message'); // level 5
```

In development mode, log messages of all severity levels will be printed to the console.

In production mode, only `info`, `warn`, and `error` logs will be printed to the console.\
It is up to the server (or process manager) to actually read them from the console and store them in log files.\
This app uses pm2 in production mode, which is already configured to store the logs in log files.

Note: API request information (request url, response code, timestamp, etc.) are also automatically logged (using [morgan](https://github.com/expressjs/morgan)).

## Custom Mongoose Plugins

The app also contains 2 custom mongoose plugins that you can attach to any mongoose model schema. You can find the plugins in `src/models/plugins`.

```javascript
const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const userSchema = mongoose.Schema(
  {
    /* schema definition here */
  },
  { timestamps: true }
);

userSchema.plugin(toJSON);
userSchema.plugin(paginate);

const User = mongoose.model('User', userSchema);
```

### toJSON

The toJSON plugin applies the following changes in the toJSON transform call:

- removes \_\_v, createdAt, updatedAt, and any schema path that has private: true
- replaces \_id with id

### paginate

The paginate plugin adds the `paginate` static method to the mongoose schema.

Adding this plugin to the `User` model schema will allow you to do the following:

```javascript
const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};
```

The `filter` param is a regular mongo filter.

The `options` param can have the following (optional) fields:

```javascript
const options = {
  sortBy: 'name:desc', // sort order
  limit: 5, // maximum results per page
  page: 2, // page number
};
```

The plugin also supports sorting by multiple criteria (separated by a comma): `sortBy: name:desc,role:asc`

The `paginate` method returns a Promise, which fulfills with an object having the following properties:

```json
{
  "results": [],
  "page": 2,
  "limit": 5,
  "totalPages": 10,
  "totalResults": 48
}
```

## API Testing

There are unit and integration tests for the server with coverage.

```bash
# run all tests
yarn test

# run all tests in watch mode
yarn test:watch

# run test coverage
yarn coverage
```

## UI Components

BlackedIPs is built on top of [Material Tailwind](https://www.material-tailwind.com/) by Creative-Tim. You will find the documentation for every small component there.

### Customizing Material Tailwind components

Windmill UI components can be customized by creating custom theme. A custom theme can override all the default theme properties. The default properties can be found here: https://github.com/creativetimofficial/material-tailwind

So suppose you want to change the colour of the button, you can create a custome theme `Theme.js` as follows:

```js
// Theme.js
const Theme = {
  button: {
    primary: {
      base: 'text-white bg-green-600 border border-transparent',
      active: 'active:bg-green-600  hover:bg-green-700 focus:ring focus:ring-green-300',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    outline: {
      base: 'text-white bg-orange-600 border border-transparent',
      active: 'active:bg-orange-600  hover:bg-orange-700 focus:ring focus:ring-orange-300',
      disabled: 'opacity-50 cursor-not-allowed',
    },
  },
}

export default Theme
```

## Client Routing

Routes in the Dashboard are separated into two categories, sidebar ([routes/sidebar.js](client/src/routes/sidebar.js)) and general ([routes/index.js](client/src/routes/index.js)).

Public routes without a permission (such as the website and auth pages) are generated using the standard  <Route> component included with React Router.

Blacked IPs also contains a `ProtectedRoute` component ([components/Routes/ProtectedRoute.js](client/src/components/Routes/ProtectedRoute.js)) that redirects unauthenticated requests to /auth.

Similarly, a `ForwardRoute` component ([components/Routes/ForwardRoute.js](client/src/components/Routes/ForwardRoute.js)) that redirects authenticated requests to /app.

#### Sidebar routes

These are the routes that will show in the sidebar. They expect three properties:

- `path`: the destination;
- `name`: the name to be shown;
- `icon`: an icon to illustrate the item

Item that are used as dropdowns, like the Pages option, don't need a `path`, but expect a `routes` array of objects with `path` and `name`:

```js
// sidebar.js
{
  path: '/app/tables',
  icon: 'TablesIcon',
  name: 'Tables',
},
{
  icon: 'PagesIcon', // <-- this is used as a submenu, so no path
  name: 'Pages',
  routes: [
    // submenu
    {
      path: '/login',
      name: 'Login', // <-- these don't have icons
    },
    {
      path: '/create-account',
      name: 'Create account',
    },
```

#### General (Router) routes

These are **internal** (private) routes. They will be rendered inside the app, using the default `containers/Layout`.

If you want to add a route to, let's say, a landing page, you should add it to the `App`'s router ([client/src/App.js](client/src/App.js), exactly like `Login`, `CreateAccount` and other pages are routed.

#### How to add a new page to router?

1. Create your page inside `client/src/pages`, say `MyPage.js`;
2. Add it to the global router (`client/src/routes/index.js`)

```js
const MyPage = lazy(() => import('../pages/MyPage'))
```

Then add it to the `routes` array:

```js
{
  path: '/my-page', // the url that will be added to /app/
  component: MyPage, // the page component you jsut imported
}
```

3. If you want to make this page accessible from the sidebar, you have to options:

- add it to the root `routes` array

```js
{
  path: '/app/my-page', // /app + the url you added in routes/index.js
  icon: 'HomeIcon', // the component being exported from src/icons/index.js
  name: 'My Page', // name that appear in Sidebar
},
```

- add it as an option under a dropdown

```js
{
  icon: 'PagesIcon',
  name: 'Pages',
  routes: [
    // submenu
    {
      path: '/app/my-page',
      name: 'My Page',
    },
```

If you're asking where does this `/app` come from, it is from this line inside `client/src/App.js`, that renders the app:

```jsx
<Route path="/app" component={Layout} />
```

### Stripe Context

The [context/StripeContext.js](client/src/context/StripeContext.js) fetches the products from the server on the intial page load. The products can be accessed from the Stripe context

```jsx
const { products } = useContext(StripeContext)
```

### Auth Context

The [context/AuthContext.js](client/src/context/AuthContext.js) stores the active user and the access token. It also handles refreshing the access token by making calls to `/v1/auth/refresh-tokens` API before the access token expires. The current user and the authentication services can be acccessed from the Auth context, which directly update the user state

```jsx
const { 
  user,
  setUser,
  register,
  login,
  githubAuth,
  logout,
  forgotPassword,
  resetPassword,
  verifyEmail, } = useContext(AuthContext)
```
## Client Services

Client uses `services` to interact with the server. These handle the authentication, subscription management and user management within the client.

### Authentication

The client auth methods are located within the [context/AuthContext.js](client/src/context/AuthContext.js)

Client-side authentication uses a JWT generated on the server and then passed in each API call from the client. An access token can be generated by making a successful call to the register (`POST /v1/auth/register`) or login (`POST /v1/auth/login`) endpoints. The response of these endpoints also contains refresh tokens which start a silent refrest of the access token (explained below). 

A refresh token can also be generated by successful oauth authentication by making a redirect to github authentication (`GET /v1/auth/github`), and a successful authentication will redirect back to the client url with the refresh token.

An access token is valid for 30 minutes (defined in the .env file) and is stored within the `AuthContext.js`.

After the access token expires, a new access token is generated automatically by the `AuthContext.js`, which makes a call to the refresh token endpoint (`POST /v1/auth/refresh-tokens`) after every 30 minutes. This call returns a new access token and a new refresh token. The refresh token is stored in a secure, httpOnly cookie by the server.

### Subscriptions

The client subscription management methods are located within the [services/stripe.service.js](client/src/services/stripe.service.js). The handle loading of the stripe products is handled by `StripeContext.js`, whereas addind and updating the billing details, creating and updating the subscriptions are hanled by stripe.service.js by making calls to the corresponding server endpoints.

### User Management

The client user management methods are located within the [services/user.service.js](client/src/services/user.service.js). These handle the operations of the users table which is by default accessible to `admin` level users. These including fetching all the users into the `UsersTable`, creating, updating and deleting users by making calls to the corresponding server endpoints.

### Teams

The team management methods are located within the [services/team.service.js](client/src/services/team.service.js). These handle the operations of the teams table and the individual team management. A team can be created by all users, and access all the teams which they are a part of. A user who creates a team will become the owner of the team, following which they can invite other users to be a part of the team. The team management routes are by default accessible to `teamAdmin` and `teamOwner` level users. These include inviting new users to the team, updating and deleting users from the team by making calls to the corresponding server endpoints. Note that the team owner cannot be deleted and cannot leave the team. Only team owners can delete the team. Any user can set the active team by clicking the corresponding checkbox on the Teams page, which makes a call to the corresponding server endpoint.

## Deploy

Follow the [Deploy guide](DEPLOY.md) to deploy your app to production. 
