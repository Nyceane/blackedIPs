import React, {useEffect, useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Navbar,
  MobileNav,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import { userStorageKey } from "@/helper/storage";

export function Home() {
  useEffect(() => {

    const script = document.createElement('script')
    script.src = 'https://blackedips.com/js/pumpit.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const auth = localStorage.getItem(userStorageKey);

  const navbarRoutes = [
  {
    name: "dashboard",
    path: "/dashboard/home",
  }];

  const [btnDisabled, setBtnDisabled] = useState(false)
  return (
    <>
      <div className="relative flex h-[50vh] content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <Navbar className="absolute top-5 w-full mx-auto py-2 px-4 lg:px-8 lg:py-4 shadow-none">
          <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
            <div className="container flex items-center">
              <img
                src={'/img/logo-ct-dark.png'}
                width={32}
                alt="blackedips"
                priority
              />
              <Typography
                  variant="h6"
                  color="black"
                  className="font-black content-left items-center"
                >
                  Blacked IPs
              </Typography>
            </div>
            {
              (typeof(auth) !== "undefined" && auth !== null && auth !== "undefined") &&
              <NavLink to="/dashboard/home">
                <Button variant="gradient" size="sm">
                  <span>Dashboard</span>
                </Button>
              </NavLink>
            }
            {
              (typeof(auth) === "undefined" || !auth || auth === "undefined") &&
              <NavLink to="/auth/login">
                <Button variant="gradient" size="sm">
                  <span>Login</span>
                </Button>
              </NavLink>
            }
          </div>
          <MobileNav>
            <div className="container mx-auto">
              {
                (typeof(auth) !== "undefined" && auth !== null && auth !== "undefined") &&
                <NavLink to="/dashboard/home">
                  <Button variant="gradient" size="sm">
                    <span>Dashboard</span>
                  </Button>
                </NavLink>
              }
              {
                (typeof(auth) === "undefined" || !auth || auth === "undefined") &&
                <NavLink to="/auth/login">
                  <Button variant="gradient" size="sm">
                    <span>Login</span>
                  </Button>
                </NavLink>
              }
            </div>
          </MobileNav>
        </Navbar>
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Cybersecurity Reinvented.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Welcome to Blacked IPs, home of Boom Boom Pow - your affordable, open-source cybersecurity solution. Leverage the power of top-tier tech including fingerprint.js, Bunnyshell, Pangea, MongoDB, AWS SageMaker and AWS OpenSearch without breaking the bank.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Boom Boom Pow suite
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                We are dedicated to delivering top-tier, open-source cybersecurity solutions to protect your business. With Boom Boom Pow, we're making cyber protection accessible for all businesses, regardless of size or budget.  All open-sourced, feel free to contribute.
                <br />
                <br />
                Discover the power of Boom Boom Pow and how our integration of technologies like fingerprint.js, Bunnyshell, Pangea, MongoDB, and AWS OpenSearch and AWS SageMaker can revolutionize your cybersecurity strategy.
              </Typography>
              <Button variant="outlined">Learn More</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Our Commitment to Excellence
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    At Blacked IPs, we're committed to providing affordable and effective cybersecurity solutions. Experience top-of-the-line protection without a top-tier price tag with Boom Boom Pow.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle heading="Meet our Team">
            Our dedicated team is working tirelessly to redefine cybersecurity and make it accessible for all. 
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Make a Difference">
            Take control of your cybersecurity and join the open-source revolution with Boom Boom Pow.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle heading="Ready to get started?">
            Contact us today and learn how Boom Boom Pow can revolutionize your cybersecurity.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" />
              <Input variant="standard" size="lg" label="Email Address" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8">
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
