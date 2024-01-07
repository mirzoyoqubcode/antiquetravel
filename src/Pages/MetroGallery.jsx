import React from "react";
import Footer from "../components/Footer/Footer";
import GalleryViewer from "../components/GalleryViewer/GalleryViewer";
import Header from "../components/Header/Header";
import Nav1 from "../components/Nav1/Nav1";
import metro1 from "../images/metro1.jpg";
import metro2 from "../images/metro2.jpg";
import metro3 from "../images/metro3.jpg";
import metro4 from "../images/metro4.jpg";
import metro5 from "../images/metro5.jpg";
import metro6 from "../images/metro6.jpg";
import metro7 from "../images/metro7.jpg";
import metro8 from "../images/metro8.jpg";
import metro9 from "../images/metro9.jpg";
const MetroGallery = () => {
  const photos = [
    { src: metro1 },
    { src: metro2 },
    { src: metro3 },
    { src: metro4 },
    { src: metro5 },
    { src: metro6 },
    { src: metro7 },
    { src: metro8 },
    { src: metro9 },
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

export default MetroGallery;
