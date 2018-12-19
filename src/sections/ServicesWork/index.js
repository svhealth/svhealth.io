import React from "react";
import PropTypes from "prop-types";
import Section from "root/components/Section";
import Background from "root/components/Background";
import Typography from "root/components/Typography";
import servicesVideo from "root/assets/videos/section-services.mp4";

import webpack from "root/assets/images/webpack.svg";
import postgres from "root/assets/images/postgres.svg";
import rails from "root/assets/images/rails.svg";
import react from "root/assets/images/react.svg";
import postcss from "root/assets/images/postcss.svg";
import docker from "root/assets/images/docker.svg";

import withQuery from "./withQuery";

import "./index.css";

const renderTechnology = (icon, name) => (
  <div styleName="technology">
    <div styleName="icon">
      <img src={icon} alt={name} />
    </div>
    <Typography color="dark-blue">{name}</Typography>
  </div>
);

const ServicesWork = ({ data }) => (
  <Section>
    <div styleName="root">
      <div styleName="work-and-focus">
        <div styleName="work">
          <div styleName="title">
            <Typography
              color="dark-blue"
              weight="bold"
              variant="h2"
              fontFamily="meta-serif"
            >
              Our work goes far behind what you actually see
            </Typography>
          </div>
          <div styleName="copy">
            <Typography color="dark-blue" variant="body">
              We specialize in web based products. From blazing fast websites to
              carefully crafted mobile-first webapps, our main goal is to use
              the power of the fantastic web technologies out there to give you
              the best work possible.
            </Typography>
          </div>
        </div>

        <div styleName="focus">
          <div styleName="title">
            <Typography color="dark-blue" weight="bold" variant="body">
              Our focus
            </Typography>
          </div>
          <div styleName="copy">
            <Typography color="dark-blue" variant="body">
              Hosting Solutions
            </Typography>
            <Typography color="dark-blue" variant="body">
              Software Development
            </Typography>
            <Typography color="dark-blue" variant="body">
              Technology Implementation
            </Typography>
            <Typography color="dark-blue" variant="body">
              System Integration
            </Typography>
          </div>
        </div>
      </div>

      <div styleName="technologies">
        <div styleName="title">
          <Typography color="dark-blue" variant="h2">
            Our technologies of choice
          </Typography>
        </div>
        <div styleName="copy">
          {renderTechnology(docker, "Docker")}
          {renderTechnology(rails, "Rails")}
          {renderTechnology(react, "React")}
          {renderTechnology(webpack, "Webpack")}
        </div>
      </div>
    </div>
  </Section>
);

ServicesWork.propTypes = {
  data: PropTypes.shape({
    heroMolecules: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withQuery(ServicesWork);
