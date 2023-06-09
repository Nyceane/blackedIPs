import React from "react";
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
import { NavLink, useNavigate } from "react-router-dom";
import { LockClosedIcon, ShieldCheckIcon, DatabaseIcon, CloudUploadIcon, CodeIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Home() {
  const auth = localStorage.getItem(userStorageKey);

  const navbarRoutes = [
  {
    name: "dashboard",
    path: "/dashboard/home",
  }];

  const [btnDisabled, setBtnDisabled] = useState(false)


  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
       <Navbar className="w-full mx-auto py-2 px-4 lg:px-8 lg:py-4 shadow-none">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          
          <img
            src={'/img/logo.png'}
            width={150}
            alt="sitemana"
            priority
          />
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

        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Welcome to Blacked IPs.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Unleashing the power of open source cyber security with our product Boom Boom Pow. With us, cutting-edge cyber security no longer costs $20,000. We're making it available for less than $100. 
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
                <ShieldCheckIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Our expertise at your service
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                With our Boom Boom Pow suite, we aim to make cyber security affordable and accessible. Our tools leverage the power of open source technologies like fingerprint.js, Bunnyshell, Pangea, Mongodb, AWS SageMaker, AWS OpenSearch.
                <br />
                <br />
                We provide pre-built templates to help you get started faster. Replace the text and images, and you're good to go. Simple, affordable, and powerful. That's the power of open source cyber security with Boom Boom Pow.
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
                    Our Commitment
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Cyber security should not be a luxury. We aim to make it accessible to everyone. With us, you get enterprise-grade protection without breaking the bank.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/*... Keep the rest of your code and replace the relevant text */}
    </>
  );
}

export default Home;
