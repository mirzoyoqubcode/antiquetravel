import React from "react";
import Footer from "../components/Footer/Footer";
import GalleryViewer from "../components/GalleryViewer/GalleryViewer";
import Header from "../components/Header/Header";
import Nav1 from "../components/Nav1/Nav1";
import shakhrisabz1 from "../images/shakhrisabz1.jpg";
import shakhrisabz2 from "../images/shakhrisabz2.jpg";
import shakhrisabz3 from "../images/shakhrisabz3.jpg";
import shakhrisabz4 from "../images/shakhrisabz4.jpg";
import shakhrisabz5 from "../images/shakhrisabz5.jpg";
const Shakhrisabz = () => {
  const photos = [
    {
      src: shakhrisabz1,
    },
    {
      src: shakhrisabz2,
    },
    {
      src: shakhrisabz3,
    },
    {
      src: shakhrisabz4,
    },
    {
      src: shakhrisabz5,
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

export default Shakhrisabz;
