import React from "react";
import Footer from "../components/Footer/Footer";
import GalleryViewer from "../components/GalleryViewer/GalleryViewer";
import Header from "../components/Header/Header";
import Nav1 from "../components/Nav1/Nav1";
import sport1 from "../images/sport1.jpg";
import sport2 from "../images/sport2.jpg";
import sport3 from "../images/sport3.jpg";
import sport4 from "../images/sport4.jpg";
import sport5 from "../images/sport5.jpg";
import sport6 from "../images/sport6.jpg";
import sport7 from "../images/sport7.jpg";
const SportGallery = () => {
  const photos = [
    { src: sport1 },
    { src: sport2 },
    { src: sport3 },
    { src: sport4 },
    { src: sport5 },
    { src: sport6 },
    { src: sport7 },
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

export default SportGallery;
