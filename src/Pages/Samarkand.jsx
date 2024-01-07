import React from "react";
import Footer from "../components/Footer/Footer";
import GalleryViewer from "../components/GalleryViewer/GalleryViewer";
import Header from "../components/Header/Header";
import Nav1 from "../components/Nav1/Nav1";
import samarkand1 from "../images/samarkand1.jpg";
import samarkand2 from "../images/samarkand2.jpg";
import samarkand3 from "../images/samarkand3.jpg";
import samarkand4 from "../images/samarkand4.jpg";
import samarkand5 from "../images/samarkand5.jpg";
import samarkand6 from "../images/samarkand6.jpg";
import samarkand7 from "../images/samarkand7.jpg";
import samarkand8 from "../images/samarkand8.jpg";
import samarkand9 from "../images/samarkand9.jpg";
import samarkand10 from "../images/samarkand10.jpg";
import samarkand11 from "../images/samarkand11.jpg";
import samarkand12 from "../images/samarkand12.jpg";

const Samarkand = () => {
  const photos = [
    {
      src: samarkand1,
    },
    {
      src: samarkand2,
    },
    {
      src: samarkand3,
    },
    {
      src: samarkand4,
    },
    {
      src: samarkand5,
    },
    {
      src: samarkand6,
    },
    {
      src: samarkand7,
    },
    {
      src: samarkand8,
    },
    {
      src: samarkand9,
    },
    {
      src: samarkand10,
    },
    {
      src: samarkand11,
    },
    {
      src: samarkand12,
    },
  ];
  return (
    <div>
      <Header />
      <Nav1 />
      <GalleryViewer photos={photos} />
      <Footer />
    </div>
  );
};

export default Samarkand;
