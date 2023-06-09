import Joi from "joi";

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid("production", "development", "demo", "test"),
    REACT_APP_API_URL: Joi.string()
      .allow("")
      .default("")
      .description("backend server url"),
    REACT_APP_STRIPE_PUBLIC_KEY: Joi.string().description("Stripe public key"),
    REACT_APP_USERS_PER_PAGE: Joi.number()
      .default(10)
      .description("number of users per page in users table"),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(import.meta.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

console.log(envVars);

export const envConfig = {
  api: {
    url: envVars.NODE_ENV === "production" ? envVars.REACT_APP_API_URL : "",
  },
  stripe: {
    publicKey: envVars.REACT_APP_STRIPE_PUBLIC_KEY,
  },
  users: {
    resultsPerPage: envVars.REACT_APP_USERS_PER_PAGE,
  },
};
