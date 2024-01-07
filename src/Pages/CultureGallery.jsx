import React from "react";
import Footer from "../components/Footer/Footer";
import GalleryViewer from "../components/GalleryViewer/GalleryViewer";
import Header from "../components/Header/Header";
import Nav1 from "../components/Nav1/Nav1";
import culture1 from "../images/culture1.jpg";
import culture2 from "../images/culture2.jpg";
import culture3 from "../images/culture3.jpg";
import culture4 from "../images/culture4.jpg";
import culture5 from "../images/culture5.jpg";
import culture6 from "../images/culture6.jpg";
import culture7 from "../images/culture7.jpg";
import culture8 from "../images/culture8.jpg";
import culture9 from "../images/culture9.jpg";
import culture10 from "../images/culture10.jpg";
import culture11 from "../images/culture11.jpg";
import culture12 from "../images/culture12.jpg";
import culture13 from "../images/culture13.jpg";
const CultureGallery = () => {
  const photos = [
    {
      src: culture1,
    },
    {
      src: culture2,
    },
    {
      src: culture3,
    },
    {
      src: culture4,
    },
    {
      src: culture5,
    },
    {
      src: culture6,
    },
    {
      src: culture7,
    },
    {
      src: culture8,
    },
    {
      src: culture9,
    },
    {
      src: culture10,
    },
    {
      src: culture11,
    },
    {
      src: culture12,
    },
    {
      src: culture13,
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

export default CultureGallery;
