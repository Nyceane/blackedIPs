import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Typography,
} from "@material-tailwind/react";
import { userService } from "@/services/user.service";




 
export default function UpdateUserPasswordDialog({open,setOpen,selectedUser,setUsers,users}) {
  
 
  const handleOpen = () => setOpen(!open);




 
  return (
    <Fragment>
      <Dialog open={open} handler={handleOpen} className="p-5">
          <h1 className="text-2xl">Update User</h1>
        
        
          <Formik
        initialValues={{
          password: "",
        }}
        validationSchema={Yup.object().shape({
          password: Yup.string().required("Password is required"),
          
        })}
        onSubmit={({ password }, { setStatus, setSubmitting }) => {
          setSubmitting(true);
          setStatus();
          userService.updateUserPassword(selectedUser.id, password).then(res=>{
              setOpen(false);
          }).catch((error) => {
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
              
                  <div style={{marginTop:"1rem"}} />
                  <Field
                    as={Input}
                    name="password"
                    type="password"
                    label="Password"
                  />
                  <ErrorMessage name="password">
                    {(msg) => (
                      <Typography variant="small" color="red" textGradient>
                        {msg}
                      </Typography>
                    )}
                  </ErrorMessage>
                  


                  <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button   
            variant="gradient"
            type="submit"
            value="submit"
            disabled={isSubmitting}
                        >
            <span>Confirm</span>
          </Button>
        </DialogFooter>


                  {status && (
                    <Typography variant="small" color="red" textGradient>
                      {status}
                    </Typography>
                  )}

            </div>
          </Form>
        )}
      </Formik>







      </Dialog>
    </Fragment>
  );
}