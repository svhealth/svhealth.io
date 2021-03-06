import React, { Component } from "react";

import Layout from "root/components/Layout";
import Footer from "root/components/Footer";
import HomeHero from "root/sections/HomeHero";
import HomePortfolio from "root/sections/HomePortfolio";
import HomeWorkingTogether from "root/sections/HomeWorkingTogether";
import HomeServices from "root/sections/HomeServices";
import LetsTalk from "root/sections/LetsTalk";
import HomeOurProcess from "root/sections/HomeOurProcess";

export default class IndexPage extends Component {
  render() {
    return (
      <Layout
        title="Building health tech solutions | Aurora"
        description="We design and develop thoughtful web and mobile healthcare solutions, accessible to anyone, everywhere, at anytime."
      >
        <HomeHero />
        <HomeServices />
        <HomeOurProcess />
        <HomePortfolio />
        <HomeWorkingTogether />
        <LetsTalk />
        <Footer />
      </Layout>
    );
  }
}
