import React from "react";
import Footer from "../components/Footer/Footer";
import GalleryViewer from "../components/GalleryViewer/GalleryViewer";
import Header from "../components/Header/Header";
import Nav1 from "../components/Nav1/Nav1";
import art1 from "../images/art1.jpg";
import art2 from "../images/art2.jpg";
import art3 from "../images/art3.jpg";
import art4 from "../images/art4.jpg";
import art5 from "../images/art5.jpg";
import art6 from "../images/art6.jpg";
import art7 from "../images/art7.jpg";
import art8 from "../images/art8.jpg";
import art9 from "../images/art9.jpg";
import art10 from "../images/art10.jpg";
import art11 from "../images/art11.jpg";
import art12 from "../images/art12.jpg";
import art13 from "../images/art13.jpg";
import art14 from "../images/art14.jpg";
import art15 from "../images/art15.jpg";
import art16 from "../images/art16.jpg";
import art17 from "../images/art17.jpg";
import art18 from "../images/art18.jpg";
import art19 from "../images/art19.jpg";
import art20 from "../images/art20.jpg";
import art21 from "../images/art21.jpg";
import art22 from "../images/art22.jpg";
import art23 from "../images/art23.jpg";
import art24 from "../images/art24.jpg";
const ArtGallery = () => {
  const photos = [
    { src: art1 },
    { src: art2 },
    { src: art3 },
    { src: art4 },
    { src: art5 },
    { src: art6 },
    { src: art7 },
    { src: art8 },
    { src: art9 },
    { src: art10 },
    { src: art11 },
    { src: art12 },
    { src: art13 },
    { src: art14 },
    { src: art15 },
    { src: art16 },
    { src: art17 },
    { src: art18 },
    { src: art19 },
    { src: art20 },
    { src: art21 },
    { src: art22 },
    { src: art23 },
    { src: art24 },
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

export default ArtGallery;
