import React, {useEffect} from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  CardFooter,
  IconButton,
  Input,
  Textarea,
  Avatar,
  Checkbox,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import { StarIcon } from "@heroicons/react/24/solid";

export const Optout = () => {
        useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://client-blackedips.bunnyenv.com/js/pumpit.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return (
    <>
      <section className="-mt-32 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="mt-56 mb-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <Typography
                variant="h5"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Blacked IPs Network Opt-out Form.
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Consumers may also exercise their right to opt-out by sending an
                email including full details i.e. email-address of the consumer
                to contact [AT] blackedips.com - this would withdraw the consent
                to reselling one's personal information to third parties in the
                network.
              </Typography>
              <Card className="w-full">
               
                <CardBody className="flex flex-col gap-4">
                  <Input label="Email" size="lg" />
                  <Input label="Zip Code" size="lg" />
                </CardBody>
                <CardFooter className="pt-0">
                  <Button variant="gradient" fullWidth>
                    Submit
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="mx-auto mt-24 hidden md:flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-130">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
};

export default Optout;
