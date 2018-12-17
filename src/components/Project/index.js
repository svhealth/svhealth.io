import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Typography from "root/components/Typography";

import "./index.css";

const Project = ({ image, projectName, projectUrl }) => (
  <a
    styleName="root"
    tabIndex="0"
    href={projectUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div styleName="title">
      <Typography
        variant="h2"
        color="white"
        weight="bold"
        fontFamily="meta-serif"
      >
        {projectName}
      </Typography>
    </div>
    <Img
      styleName="image"
      fluid={image}
      alt={`${projectName}-project`.toLowerCase()}
      critical
    />
    <div styleName="project-link">
      <Typography variant="body" color="white" weight="bold">
        View Project
      </Typography>
    </div>
  </a>
);

Project.propTypes = {
  image: PropTypes.shape({}).isRequired,
  projectName: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
};

export default Project;
