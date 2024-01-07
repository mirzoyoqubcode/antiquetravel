import React from "react";
import Footer from "../components/Footer/Footer";
import GalleryViewer from "../components/GalleryViewer/GalleryViewer";
import Header from "../components/Header/Header";
import Nav1 from "../components/Nav1/Nav1";
import khiva1 from "../images/khiva1.jpg";
import khiva2 from "../images/khiva2.jpg";
import khiva3 from "../images/khiva3.jpg";
import khiva4 from "../images/khiva4.jpg";
import khiva5 from "../images/khiva5.jpg";
import khiva6 from "../images/khiva6.jpg";
const Khiva = () => {
  const photos = [
    {
      src: khiva1,
    },
    {
      src: khiva2,
    },
    {
      src: khiva3,
    },
    {
      src: khiva4,
    },
    {
      src: khiva5,
    },
    {
      src: khiva6,
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

export default Khiva;
