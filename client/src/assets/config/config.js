import Joi from "joi";



console.log("=-=-=-")
console.log(process,"=-=-=-")
console.log("=-=-=-")

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("production", "development", "demo", "test")
      .required().default("development"),
    REACT_APP_API_URL: Joi.string()
      .allow("")
      .default("https://server-blackedips.bunnyenv.com")
      .description("BACKEND API"),
    // REACT_APP_STRIPE_PUBLIC_KEY: Joi.string().required().description('Stripe public key'),
    REACT_APP_USERS_PER_PAGE: Joi.number()
      .default(10)
      .description("number of users per page in users table"),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

console.log(envVars);

export const config = {
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
