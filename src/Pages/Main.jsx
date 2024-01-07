import React from "react";
import Header from "../components/Header/Header";
import Nav1 from "../components/Nav1/Nav1";
import Cities from "../components/Cities/Cities";
import UsefulLinks from "../components/UsefulLinks/UsefulLinks";
import VideoSection from "../components/VideoSection/VideoSection";
import SectionBlock from "../components/SectionBlock/SectionBlock";
import Footer from "../components/Footer/Footer";
const Main = () => {
  return (
    <div>
      <Header />
      <Nav1 />
      <Cities />
      <UsefulLinks />
      <VideoSection />
      <SectionBlock />
      <Footer />
    </div>
  );
};

export default Main;
