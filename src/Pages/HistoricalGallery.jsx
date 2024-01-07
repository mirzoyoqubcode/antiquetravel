import React from "react";
import Footer from "../components/Footer/Footer";
import GalleryViewer from "../components/GalleryViewer/GalleryViewer";
import Header from "../components/Header/Header";
import Nav1 from "../components/Nav1/Nav1";
import mistery1 from "../images/mistery1.jpg";
import mistery2 from "../images/mistery2.jpg";
import mistery3 from "../images/mistery3.jpg";
import mistery4 from "../images/mistery4.jpg";
import mistery5 from "../images/mistery5.jpg";
import mistery6 from "../images/mistery6.jpg";
import mistery7 from "../images/mistery7.jpg";
const HistoricalGallery = () => {
  const photos = [
    { src: mistery1 },
    { src: mistery2 },
    { src: mistery3 },
    { src: mistery4 },
    { src: mistery5 },
    { src: mistery6 },
    { src: mistery7 },
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

export default HistoricalGallery;
