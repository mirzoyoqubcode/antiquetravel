import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Nav1 from "../components/Nav1/Nav1";
import GalleryViewer from "../components/GalleryViewer/GalleryViewer";
import arch1 from "../images/arch1.jpg";
import arch2 from "../images/arch2.jpg";
import arch3 from "../images/arch3.jpg";
import arch4 from "../images/arch4.jpg";
import arch5 from "../images/arch5.jpg";
import arch6 from "../images/arch6.jpg";
import arch7 from "../images/arch7.jpg";
import arch8 from "../images/arch8.jpg";
import arch9 from "../images/arch9.jpg";
import arch10 from "../images/arch10.jpg";
import arch11 from "../images/arch11.jpg";
import arch12 from "../images/arch12.jpg";
import arch13 from "../images/arch13.jpg";
import arch14 from "../images/arch14.jpg";
import arch15 from "../images/arch15.jpg";
import arch16 from "../images/arch16.jpg";
import arch17 from "../images/arch17.jpg";
import arch18 from "../images/arch18.jpg";
import arch19 from "../images/arch19.jpg";
import arch20 from "../images/arch20.jpg";
import arch21 from "../images/arch21.jpg";
import arch22 from "../images/arch22.jpg";
const ArchitectureGallery = () => {
  const photos = [
    {
      src: arch1,
    },
    {
      src: arch2,
    },
    {
      src: arch3,
    },
    {
      src: arch4,
    },
    {
      src: arch5,
    },
    {
      src: arch6,
    },
    {
      src: arch7,
    },

    {
      src: arch8,
    },
    {
      src: arch9,
    },
    {
      src: arch10,
    },
    {
      src: arch11,
    },
    {
      src: arch12,
    },
    {
      src: arch13,
    },
    {
      src: arch14,
    },
    {
      src: arch15,
    },
    {
      src: arch16,
    },
    {
      src: arch17,
    },
    {
      src: arch18,
    },
    {
      src: arch19,
    },
    {
      src: arch20,
    },
    {
      src: arch21,
    },
    {
      src: arch22,
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

export default ArchitectureGallery;
