import React, { useState, useContext, useEffect, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { userService } from '@/services'

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Input,
  LinkButton,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { authcontext } from "@/context";

export function Setting() {
  const { user, setUser } = useContext(authcontext);
  const [saved, setSaved] = useState(false)

  const [searchParams] = useSearchParams();

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      <Card className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <CardHeader
          color="blue"
          floated={false}
          shadow={false}
          className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
        >
          <Typography variant="h4" color="white">
            Account Settings
          </Typography>
        </CardHeader>
        <CardBody className="p-4 text-center">
          <Typography variant="h4" color="blue-gray">
            Account Details
          </Typography>
          <Formik
            initialValues={{
              username: user ? user.name : '',
              email: user ? user.email : '',
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string().required('Name is required'),
              email: Yup.string().email().required('Email is required'),
            })}
            onSubmit={({ username, email }, { setStatus, setSubmitting }) => {
              setSaved(false)
              setStatus()
              userService.updateUserDetails(user.id, username, email)
              .then(
                response => {
                  setSaved(true)
                  setSubmitting(false)
                  setUser(response.data)
                },
                error => {
                  setSubmitting(false);
                  if(error.response) {
                    setStatus(error.response.data.message);
                  } else {
                    setStatus('Some error occured.');
                  }
                }
              );
            }}
          >  
            {({ errors, status, touched, isSubmitting }) => (
              <Form>
                <div>
                  <Field as={Input} label="Name" name="username" type="text"/>
                  <ErrorMessage name="username">{msg => <Typography color="red">{msg}</Typography>}</ErrorMessage>
                </div>

                <div className="mt-4">
                  <Field as={Input} label="Email" name="email" type="email"/>
                  <ErrorMessage name="email">{msg => <Typography color="red">{msg}</Typography>}</ErrorMessage>
                </div>

                <Button className="mt-6" fullWidth type="submit" value="submit" disabled={isSubmitting}>
                  Save Details
                </Button> 

                {status && (
                  <Typography color="red">{status}</Typography>
                )}

                {saved && (
                  <Typography color="green">Saved!</Typography>
                )}
                
              </Form>
            )}
          </Formik>


          <Typography variant="h4" color="blue-gray">
            Password
          </Typography>
          <Formik
                initialValues={{
                  password: ''
                }}
                validationSchema={Yup.object().shape({
                  password: Yup.string().min(8)
                    .matches('^.*[0-9].*$', 'Atleast one number required')
                    .matches('^.*[a-zA-Z].*$', 'Atleast one letter required')
                    .required('Password is required'),
                })}
                onSubmit={({ password }, { setStatus, setSubmitting }) => {
                  setSaved(false)
                  setStatus()
                  userService.updateUserPassword(user.id, password)
                  .then(
                    result => {
                      setSaved(true)
                      setSubmitting(false)
                    },
                    error => {
                      setSubmitting(false);
                      if(error.response) {
                        setStatus(error.response.data.message)
                      } else {
                        setStatus("Some error occured.")
                      }
                    }
                  )
                }}
              >  
                {({ errors, status, touched, isSubmitting }) => (
                  <Form>
                    <div className="mt-4">                      
                      <Field as={Input} name="password" type="password" placeholder="***************" />
                      <ErrorMessage name="password">{msg => <Typography color="red">{msg}</Typography>}</ErrorMessage>
                    </div>

                    <Button className="mt-6" fullWidth type="submit" value="submit" disabled={isSubmitting}>
                        Save Password
                    </Button> 

                    {status && (
                      <Typography color="red">{status}</Typography>
                    )}

                    {saved && (
                      <Typography color="green">Saved!</Typography>
                    )}
                    
                  </Form>
                )}
              </Formik>

          <Typography variant="h4" color="blue-gray">
            Cryto Wallet
          </Typography>
          <Formik
                initialValues={{
                  walletPublicKey:'',
                  walletPrivateKey: ''
                }}
                validationSchema={Yup.object().shape({
                  walletPublicKey: Yup.string().min(8)
                    .required('publicKey is required'),                  
                  walletPrivateKey: Yup.string().min(8)
                    .required('privateKey is required'),
                })}
                onSubmit={({ walletPublicKey, walletPrivateKey }, { setStatus, setSubmitting }) => {
                  setSaved(false)
                  setStatus()
                  userService.updateUserWallet(user.id, walletPublicKey, walletPrivateKey)
                  .then(
                    result => {
                      setSaved(true)
                      setSubmitting(false)
                    },
                    error => {
                      setSubmitting(false);
                      if(error.response) {
                        setStatus(error.response.data.message)
                      } else {
                        setStatus("Some error occured.")
                      }
                    }
                  )
                }}
              >  
                {({ errors, status, touched, isSubmitting }) => (
                  <Form>
                    <div className="mt-4">                      
                      <Field as={Input} name="walletPublicKey" type="text" placeholder="***************" />
                      <ErrorMessage name="walletPublicKey">{msg => <Typography color="red">{msg}</Typography>}</ErrorMessage>
                    </div>
                    <div className="mt-4">                      
                      <Field as={Input} name="walletPrivateKey" type="text" placeholder="***************" />
                      <ErrorMessage name="walletPrivateKey">{msg => <Typography color="red">{msg}</Typography>}</ErrorMessage>
                    </div>

                    <Button className="mt-6" fullWidth type="submit" value="submit" disabled={isSubmitting}>
                        Save Wallet
                    </Button> 

                    {status && (
                      <Typography color="red">{status}</Typography>
                    )}

                    {saved && (
                      <Typography color="green">Saved!</Typography>
                    )}
                    
                  </Form>
                )}
              </Formik>
        </CardBody>
      </Card>
    </>
  );
}

export default Setting;
