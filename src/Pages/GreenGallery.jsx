import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import GalleryViewer from "../components/GalleryViewer/GalleryViewer";
import Nav1 from "../components/Nav1/Nav1";
import nature1 from "../images/nature1.jpg";
import nature2 from "../images/nature2.jpg";
import nature3 from "../images/nature3.jpg";
import nature4 from "../images/nature4.jpg";
import nature5 from "../images/nature5.jpg";
import nature6 from "../images/nature6.jpg";
import nature7 from "../images/nature7.jpg";
import nature8 from "../images/nature8.jpg";
import nature9 from "../images/nature9.jpg";
import nature10 from "../images/nature10.jpg";
import nature11 from "../images/nature11.jpg";
import nature12 from "../images/nature12.jpg";
import nature13 from "../images/nature13.jpg";
import nature14 from "../images/nature14.jpg";
import nature15 from "../images/nature15.jpg";
import nature16 from "../images/nature16.jpg";
import nature17 from "../images/nature17.jpg";
import nature18 from "../images/nature18.jpg";
import nature19 from "../images/nature19.jpg";
import nature20 from "../images/nature20.jpg";
import nature21 from "../images/nature21.jpg";
import nature22 from "../images/nature22.jpg";
import nature23 from "../images/nature23.jpg";
const GreenGallery = () => {
  const photos = [
    {
      src: nature1,
    },
    {
      src: nature2,
    },
    {
      src: nature3,
    },
    {
      src: nature4,
    },
    {
      src: nature5,
    },
    {
      src: nature6,
    },
    {
      src: nature7,
    },
    {
      src: nature8,
    },
    {
      src: nature9,
    },
    {
      src: nature10,
    },
    {
      src: nature11,
    },
    {
      src: nature12,
    },
    {
      src: nature13,
    },
    {
      src: nature14,
    },
    {
      src: nature15,
    },
    {
      src: nature16,
    },
    {
      src: nature17,
    },
    {
      src: nature18,
    },
    {
      src: nature19,
    },
    {
      src: nature20,
    },
    {
      src: nature21,
    },
    {
      src: nature22,
    },
    {
      src: nature23,
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

export default GreenGallery;
