
import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import { authcontext } from "@/context";

export function Login() {
  const { login } = useContext(authcontext);



  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required("Email is required"),
          password: Yup.string().required("Password is required"),
        })}
        onSubmit={({ email, password }, { setStatus, setSubmitting }) => {
          setSubmitting(true);

          setStatus();
          login(email, password).catch((error) => {
            if (error.response) {
              setStatus(error.response.data.message);
            } else {
              setStatus("Some error occured. Please try again.");
            }
            setSubmitting(false);
          });
        }}
      >
        {({ errors, status, touched, isSubmitting }) => (
          <Form>
            <div className="container mx-auto p-4">
              <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
                <CardHeader
                  variant="gradient"
                  color="blue"
                  className="mb-4 grid h-28 place-items-center"
                >
                  <Typography variant="h3" color="white">
                    Sign In
                  </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                  <Field as={Input} name="email" type="email" label="email" />
                  <ErrorMessage name="email">
                    {(msg) => (
                      <Typography variant="small" color="red" textGradient>
                        {msg}
                      </Typography>
                    )}
                  </ErrorMessage>
                  <Field
                    as={Input}
                    name="password"
                    type="password"
                    label="password"
                  />
                  <ErrorMessage name="password">
                    {(msg) => (
                      <Typography variant="small" color="red" textGradient>
                        {msg}
                      </Typography>
                    )}
                  </ErrorMessage>
                  <div className="-ml-2.5">
                    <Checkbox label="Remember Me" />
                  </div>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    variant="gradient"
                    type="submit"
                    value="submit"
                    disabled={isSubmitting}
                    fullWidth
                  >
                    Sign In
                  </Button>
                  {status && (
                    <Typography variant="small" color="red" textGradient>
                      {status}
                    </Typography>
                  )}
                  <Typography
                    variant="small"
                    className="mt-6 flex justify-center"
                  >
                    Forgot your password?
                    <Link to="/auth/forgot-password">
                      <Typography
                        as="span"
                        variant="small"
                        color="blue"
                        className="ml-1 font-bold"
                      >
                        Reset
                      </Typography>
                    </Link>
                  </Typography>
                </CardFooter>
              </Card>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Login;
