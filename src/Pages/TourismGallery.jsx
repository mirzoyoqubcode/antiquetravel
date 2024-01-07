import React from "react";
import Footer from "../components/Footer/Footer";
import GalleryViewer from "../components/GalleryViewer/GalleryViewer";
import Header from "../components/Header/Header";
import Nav1 from "../components/Nav1/Nav1";
import ziyorat1 from "../images/ziyorat1.jpg";
import ziyorat2 from "../images/ziyorat2.jpg";
import ziyorat3 from "../images/ziyorat3.jpg";
import ziyorat4 from "../images/ziyorat4.jpg";
import ziyorat5 from "../images/ziyorat5.jpg";
import ziyorat6 from "../images/ziyorat6.jpg";
import ziyorat7 from "../images/ziyorat7.jpg";
import ziyorat8 from "../images/ziyorat8.jpg";
import ziyorat9 from "../images/ziyorat9.jpg";
import ziyorat10 from "../images/ziyorat10.jpg";
import ziyorat11 from "../images/ziyorat11.jpg";
import ziyorat12 from "../images/ziyorat12.jpg";
import ziyorat13 from "../images/ziyorat13.jpg";
import ziyorat14 from "../images/ziyorat14.jpg";
import ziyorat15 from "../images/ziyorat15.jpg";
import ziyorat16 from "../images/ziyorat16.jpg";
import ziyorat17 from "../images/ziyorat17.jpg";
import ziyorat18 from "../images/ziyorat18.jpg";
const TourismGallery = () => {
  const photos = [
    { src: ziyorat1 },
    { src: ziyorat2 },
    { src: ziyorat3 },
    { src: ziyorat4 },
    { src: ziyorat5 },
    { src: ziyorat6 },
    { src: ziyorat7 },
    { src: ziyorat8 },
    { src: ziyorat9 },
    { src: ziyorat10 },
    { src: ziyorat11 },
    { src: ziyorat12 },
    { src: ziyorat13 },
    { src: ziyorat14 },
    { src: ziyorat15 },
    { src: ziyorat16 },
    { src: ziyorat17 },
    { src: ziyorat18 },
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

export default TourismGallery;
