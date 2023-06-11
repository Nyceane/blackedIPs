const express = require('express');
const path = require('path');
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const cors = require('cors');
const passport = require('passport');
const httpStatus = require('http-status');
const config = require('./config/config');
const morgan = require('./config/morgan');
const { jwtStrategy, githubStrategy, googleStrategy } = require('./config/passport');
const { authLimiter } = require('./middlewares/rateLimiter');
const routes = require('./routes/v1');
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');
const cookieParser = require('cookie-parser');
const cron = require('node-cron');
const { bunnyshellService } = require('./services');

const app = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// gzip compression
app.use(compression());

// parse cookies
app.use(cookieParser());

// enable cors
/*
const corsConfig = {
  origin: config.corsOrigin,
  credentials: true,
  allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization',
};
app.use(cors(corsConfig));
app.options('*', cors(corsConfig));
*/

var corsOptions = {
    origin: '*', // Replace with your client application's actual URL.
    optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));

// jwt authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// limit repeated failed requests to auth endpoints
if (config.env === 'production') {
  app.use('/v1/auth', authLimiter);
}

app.use((req, res, next) => {
  res.set(
    'Content-Security-Policy',
    "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'"
  );
  next();
});

// v1 api routes
app.use('/v1', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

cron.schedule('*/15 * * * *', () => 
{
  bunnyshellService.keepBunnyShellAlive();
}, {
     scheduled: true,
     timezone: 'America/Los_Angeles'
   });


//const testService = require('./services/pangea.service');
//testService.checkIPVPNorProxy('::ffff:208.184.157.132');

if (config.env !== 'production') {
    const testService = require('./services/test.service');
    testService.test();
}

module.exports = app;
