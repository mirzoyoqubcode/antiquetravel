import React from "react";
import Footer from "../components/Footer/Footer";
import GalleryViewer from "../components/GalleryViewer/GalleryViewer";
import Header from "../components/Header/Header";
import Nav1 from "../components/Nav1/Nav1";
import tashkent1 from "../images/tashkent1.jpg";
import tashkent2 from "../images/tashkent2.jpg";
import tashkent3 from "../images/tashkent3.jpg";
import tashkent4 from "../images/tashkent4.jpg";
import tashkent5 from "../images/tashkent5.jpg";
import tashkent6 from "../images/tashkent6.jpg";
import tashkent7 from "../images/tashkent7.jpg";
import tashkent8 from "../images/tashkent8.jpg";
import tashkent9 from "../images/tashkent9.jpg";
import tashkent10 from "../images/tashkent10.jpg";
import tashkent11 from "../images/tashkent11.jpg";
import tashkent12 from "../images/tashkent12.jpg";
import tashkent13 from "../images/tashkent13.jpg";
const Tashkent = () => {
  const photos = [
    {
      src: tashkent1,
    },
    {
      src: tashkent2,
    },
    {
      src: tashkent3,
    },
    {
      src: tashkent4,
    },
    {
      src: tashkent5,
    },
    {
      src: tashkent6,
    },
    {
      src: tashkent7,
    },
    {
      src: tashkent8,
    },
    {
      src: tashkent9,
    },
    {
      src: tashkent10,
    },
    {
      src: tashkent11,
    },
    {
      src: tashkent12,
    },
    {
      src: tashkent13,
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

export default Tashkent;
