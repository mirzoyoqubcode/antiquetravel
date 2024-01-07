import React from "react";
import Footer from "../components/Footer/Footer";
import GalleryViewer from "../components/GalleryViewer/GalleryViewer";
import Header from "../components/Header/Header";
import Nav1 from "../components/Nav1/Nav1";
import termiz1 from "../images/termiz1.jpg";
import termiz2 from "../images/termiz2.jpg";
import termiz3 from "../images/termiz3.jpg";
import termiz4 from "../images/termiz4.jpg";
const Termiz = () => {
  const photos = [
    {
      src: termiz1,
    },
    {
      src: termiz2,
    },
    {
      src: termiz3,
    },
    {
      src: termiz4,
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

export default Termiz;
