import React from "react";
import Footer from "../components/Footer/Footer";
import GalleryViewer from "../components/GalleryViewer/GalleryViewer";
import Header from "../components/Header/Header";
import Nav1 from "../components/Nav1/Nav1";
import buxara1 from "../images/buxara1.jpg";
import buxara2 from "../images/buxara2.jpg";
import buxara3 from "../images/buxara3.jpg";
import buxara4 from "../images/buxara4.jpg";
import buxara5 from "../images/buxara5.jpg";
import buxara6 from "../images/buxara6.jpg";
import buxara7 from "../images/buxara7.jpg";
import buxara8 from "../images/buxara8.jpg";
import buxara9 from "../images/buxara9.jpg";
import buxara10 from "../images/buxara10.jpg";
import buxara11 from "../images/buxara11.jpg";
import buxara12 from "../images/buxara12.jpg";
import buxara13 from "../images/buxara13.jpg";
const Bukhara = () => {
  const photos = [
    {
      src: buxara1,
    },
    {
      src: buxara2,
    },
    {
      src: buxara3,
    },
    {
      src: buxara4,
    },
    {
      src: buxara5,
    },
    {
      src: buxara6,
    },
    {
      src: buxara7,
    },
    {
      src: buxara8,
    },
    {
      src: buxara9,
    },
    {
      src: buxara10,
    },
    {
      src: buxara11,
    },
    {
      src: buxara12,
    },
    {
      src: buxara13,
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

export default Bukhara;
