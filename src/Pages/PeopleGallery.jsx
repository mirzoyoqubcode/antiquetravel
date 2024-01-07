import React from "react";
import Footer from "../components/Footer/Footer";
import GalleryViewer from "../components/GalleryViewer/GalleryViewer";
import Header from "../components/Header/Header";
import Nav1 from "../components/Nav1/Nav1";
import peop1 from "../images/peop1.jpg";
import peop2 from "../images/peop2.jpg";
import peop3 from "../images/peop3.jpg";
import peop4 from "../images/peop4.jpg";
import peop5 from "../images/peop5.jpg";
import peop6 from "../images/peop6.jpg";
import peop7 from "../images/peop7.jpg";
import peop8 from "../images/peop8.jpg";
import peop9 from "../images/peop9.jpg";
import peop10 from "../images/peop10.jpg";
import peop11 from "../images/peop11.jpg";
import peop12 from "../images/peop12.jpg";
import peop13 from "../images/peop13.jpg";
import peop14 from "../images/peop14.jpg";
import peop15 from "../images/peop15.jpg";
import peop16 from "../images/peop16.jpg";
const PeopleGallery = () => {
  const photos = [
    {
      src: peop1,
    },
    {
      src: peop2,
    },
    {
      src: peop3,
    },
    {
      src: peop4,
    },
    {
      src: peop5,
    },
    {
      src: peop6,
    },
    {
      src: peop7,
    },
    {
      src: peop8,
    },
    {
      src: peop9,
    },
    {
      src: peop10,
    },

    {
      src: peop11,
    },
    {
      src: peop12,
    },
    {
      src: peop13,
    },
    {
      src: peop14,
    },
    {
      src: peop15,
    },
    {
      src: peop16,
    },
  ];
  return (
    <div>
      <div>
        <Header />
        <Nav1 />
        <GalleryViewer photos={photos} />
        <Footer />
      </div>
    </div>
  );
};

export default PeopleGallery;
