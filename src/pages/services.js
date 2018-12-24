import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "root/components/Layout";
import Navbar from "root/components/Navbar";
import Footer from "root/components/Footer";
import ServicesHero from "root/sections/ServicesHero";
import ServicesTeam from "root/sections/ServicesTeam";
import ServicesWork from "root/sections/ServicesWork";
import ServicesDesign from "root/sections/ServicesDesign";
import Background from "root/components/Background";

import "./services.css";

export const query = graphql`
  query {
    designServices: file(relativePath: { eq: "images/design-services.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const ServicesPage = ({ data }) => (
  <Layout
    title="A dynamic team to design and develop your product | SVHealth"
    description="We’ll work alongside you from the early stages of product research and design to development and deployment."
  >
    <Navbar currentPage="services" theme="primary" />
    <ServicesHero />
    <ServicesTeam />
    <div styleName="design">
      <Background
        image={data.designServices.image.fluid}
        maxWidth
        key="design"
        name="design"
        color="magenta"
        blendMode="lighten"
      >
        <ServicesDesign />
      </Background>
    </div>

    <ServicesWork />
    <Footer />
  </Layout>
);

ServicesPage.propTypes = {
  data: PropTypes.shape({
    designServices: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ServicesPage;
