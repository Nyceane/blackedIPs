import React, { useState, useContext, useEffect, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { integrationService } from '@/services'

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

export function Chainlink() {
  const { user, setUser } = useContext(authcontext);
  const [saved, setSaved] = useState(null)

  const [searchParams] = useSearchParams();

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      <Card className="mt-8 mb-2 w-full max-w-screen-lg sm:w-full">
        <CardHeader
          color="blue"
          floated={false}
          shadow={false}
          className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
        >
          <Typography variant="h4" color="white">
            Test dApp on ChainLink
          </Typography>
        </CardHeader>
        <CardBody className="p-4 text-center">
          <Typography variant="h4">
            Test Chainlink
          </Typography>
          <Typography color="blue-gray">
            The raw private key is not be stored in our database, only encrypted version through Pangea
          </Typography>
          <Formik
            initialValues={{
              ip: '',
              fingerprint: '',
            }}
            validationSchema={Yup.object().shape({
              ip: Yup.string().required('IP is required'),
              fingerprint: Yup.string().required('fingerprint is required'),
            })}
            onSubmit={({ ip, fingerprint }, { setStatus, setSubmitting }) => {
              setSaved(null)
              setStatus()
              integrationService.testChainLinkData(ip, fingerprint)
              .then(
                response => {
                  setSaved(null)
                  setSubmitting(false)
                  if(response && response.data && response.data.message)
                  {
                    setStatus(response.data.message);
                  }
                  if(response && response.data && response.data.url)
                  {
                    setSaved(response.data.url);
                  }
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
                  <Field as={Input} label="IP" name="ip" type="text"/>
                  <ErrorMessage name="ip">{msg => <Typography color="red">{msg}</Typography>}</ErrorMessage>
                </div>

                <div className="mt-4">
                  <Field as={Input} label="fingerprint" name="fingerprint" type="text"/>
                  <ErrorMessage name="fingerprint">{msg => <Typography color="red">{msg}</Typography>}</ErrorMessage>
                </div>

                <Button className="mt-6" fullWidth type="submit" value="submit" disabled={isSubmitting}>
                  Send
                </Button> 

                {saved && (
                  <a href={saved} className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" target="_blank">{saved}</a>
                )}
                
                {status && (
                  <Typography color="red">{status}</Typography>
                )}
              </Form>
            )}
          </Formik>


        </CardBody>
      </Card>
    </>
  );
}

export default Chainlink;
