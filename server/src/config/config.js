const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');
dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'demo', 'test').required(),
    PORT: Joi.number().default(3000),
    CLIENT_URL: Joi.string().allow('').default('localhost:3000'),
    MONGODB_URL: Joi.string()
      .default('mongodb+srv://test:testing001.@cluster0.fyauhyp.mongodb.net/?retryWrites=true&w=majority')
      .description('Mongo DB url'),
    MONGODB_URL_TEST: Joi.string()
      // .required()
      .default('mongodb+srv://test:testing001.@cluster0.fyauhyp.mongodb.net/?retryWrites=true&w=majority')
      .description('Mongo DB test url'),
    JWT_SECRET: Joi.string().description('JWT secret key').default('thisissomesecret'),
    JWT_ACCESS_EXPIRATION_MINUTES: Joi.number().default(30).description('minutes after which access tokens expire'),
    JWT_REFRESH_EXPIRATION_DAYS: Joi.number().default(30).description('days after which refresh tokens expire'),
    GITHUB_ID: Joi.string().description('Github Id'),
    GITHUB_SECRET: Joi.string().description('Github secret key'),
    GOOGLE_ID: Joi.string().description('Google Id'),
    GOOGLE_SECRET: Joi.string().description('Google secret key'),
    SMTP_HOST: Joi.string().description('server that will send the emails'),
    SMTP_PORT: Joi.number().description('port to connect to the email server'),
    SMTP_USERNAME: Joi.string().description('username for email server'),
    SMTP_PASSWORD: Joi.string().description('password for email server'),
    EMAIL_FROM: Joi.string().description('the from field in the emails sent by the app'),
    STRIPE_SECRET: Joi.string().description('Stripe secret key'),
    STRIPE_SECRET_TEST: Joi.string().description('Stripe test secret key'),
    PANGEA_EMBARGO_TOKEN: Joi.string().description('Pangea Embargo Key'),
    PANGEA_DOMAIN: Joi.string().description('Pangea Domain'),
    ETH_ACCOUNT_ADDRESS: Joi.string().description('Pangea Embargo Key'),
    ETH_PRIVATE_KEY: Joi.string().description('Pangea Domain'),
    SPACE_AND_TIME_PUBLIC_KEY: Joi.string().description('Space And Time Pub Key'),
    SPACE_AND_TIME_PRIVATE_KEY: Joi.string().description('Space And Time Priv Key'),
    SPACE_AND_TIME_USERID: Joi.string().description('Space And Time userId'),
    SPACE_AND_TIME_URL: Joi.string().description('Space And Time url'),
    SPACE_AND_TIME_BISCUIT: Joi.string().description('Space And Time biscuit'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  corsOrigin: envVars.NODE_ENV === 'production' ? envVars.CLIENT_URL : 'http://localhost:3000',
  clientURL: envVars.NODE_ENV === 'production' ? envVars.CLIENT_URL : 'http://localhost:3000',
  mongoose: {
    url: envVars.NODE_ENV === 'test' ? envVars.MONGODB_URL_TEST : envVars.MONGODB_URL,
    options: {
      autoIndex: false,
    },
  },
  jwt: {
    secret: envVars.JWT_SECRET,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
    resetPasswordExpirationMinutes: 10,
    emailVerificationExpirationDays: 15,
  },
  email: {
    smtp: {
      host: envVars.SMTP_HOST,
      port: envVars.SMTP_PORT,
      auth: {
        user: envVars.SMTP_USERNAME,
        pass: envVars.SMTP_PASSWORD,
      },
    },
    from: envVars.EMAIL_FROM,
  },
  stripe: {
    secret: envVars.NODE_ENV === 'production' ? envVars.STRIPE_SECRET : envVars.STRIPE_SECRET_TEST,
  },
  pangea: {
    token: envVars.NODE_ENV === 'production' ? envVars.PANGEA_EMBARGO_TOKEN : envVars.PANGEA_EMBARGO_TOKEN,
    domain: envVars.NODE_ENV === 'production' ? envVars.PANGEA_DOMAIN : envVars.PANGEA_DOMAIN,
  },
  eth: {
    account: envVars.NODE_ENV === 'production' ? envVars.ETH_ACCOUNT_ADDRESS : envVars.ETH_ACCOUNT_ADDRESS,
    private: envVars.NODE_ENV === 'production' ? envVars.ETH_PRIVATE_KEY : envVars.ETH_PRIVATE_KEY,
  },
  space_and_time:{
    url: envVars.NODE_ENV === 'production' ? envVars.SPACE_AND_TIME_URL : envVars.SPACE_AND_TIME_URL,
    public_key: envVars.NODE_ENV === 'production' ? envVars.SPACE_AND_TIME_PUBLIC_KEY : envVars.SPACE_AND_TIME_PUBLIC_KEY,
    private_key: envVars.NODE_ENV === 'production' ? envVars.SPACE_AND_TIME_PRIVATE_KEY : envVars.SPACE_AND_TIME_PRIVATE_KEY,
    userId: envVars.NODE_ENV === 'production' ? envVars.SPACE_AND_TIME_USERID : envVars.SPACE_AND_TIME_USERID,
    biscuit: envVars.NODE_ENV === 'production' ? envVars.SPACE_AND_TIME_BISCUIT : envVars.SPACE_AND_TIME_BISCUIT,
  
  },
};
