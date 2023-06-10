import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export function Footer({ brandName, brandLink, routes }) {
  const year = new Date().getFullYear();

  return (
    <footer className="flex py-2">
      <div className="flex items-center px-4 lg:w-1/3">
        <Typography variant="h5" className="mb-4  font-semibold text-gray-700">
          Give yourself a head start, save months of time compared to building
          it by yourself.
        </Typography>
      </div>
      <div className="w-full px-4">
        <div className="grid grid-cols-2">
          <div className="text-center">
            <Typography className="mb-2 font-semibold uppercase text-gray-700">
              Useful Links
            </Typography>
            <ul className="my-2 grid items-center gap-4 text-center text-sm text-gray-600">
              <a href="#pablo" className="hover:text-gray-800">
                Home
              </a>
              <a href="#pablo" className="hover:text-gray-800">
                About
              </a>
              <a href="#pablo" className="hover:text-gray-800">
                FAQs
              </a>
              <a href="#pablo" className="hover:text-gray-800">
                Pricing
              </a>
            </ul>
          </div>
          <div className="text-center">
            <Typography className="mb-2 font-semibold uppercase text-gray-700">
              Other Resources
            </Typography>
            <div className="grid grid-cols-1 gap-4 text-center text-sm text-gray-600">
              <Link
                to="/privacy-policy"
                target="_blank"
                className="hover:text-gray-800"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-and-condition"
                target="_blank"
                className="hover:text-gray-800"
              >
                Terms of Service
              </Link>
              <Link to="/ccpa" target="_blank" className="hover:text-gray-800">
                CCPA
              </Link>
              <Link
                to="/optout"
                target="_blank"
                className="hover:text-gray-800"
              >
                Opt-Out Form
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  brandName: "Creative Tim",
  brandLink: "https://www.creative-tim.com",
  routes: [
    { name: "Creative Tim", path: "https://www.creative-tim.com" },
    { name: "About Us", path: "https://www.creative-tim.com/presentation" },
    { name: "Blog", path: "https://www.creative-tim.com/blog" },
    { name: "License", path: "https://www.creative-tim.com/license" },
  ],
};

Footer.propTypes = {
  brandName: PropTypes.string,
  brandLink: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
