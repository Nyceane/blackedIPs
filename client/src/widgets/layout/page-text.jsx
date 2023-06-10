import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function PageText({ heading, children }) {
  return (
    <div className="mx-auto w-full px-4 text-left pt-8">
      <Typography variant="h5" color="blue-gray" className="mb-3">
        {heading}
      </Typography>
      <Typography variant="lead" className="text-blue-gray-500 text-lg">
        {children}
      </Typography>
    </div>
  );
}

PageText.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

PageText.displayName = "/src/widgets/layout/page-text.jsx";

export default PageText;
