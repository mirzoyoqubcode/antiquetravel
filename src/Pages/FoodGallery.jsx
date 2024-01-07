import React from "react";
import Footer from "../components/Footer/Footer";
import GalleryViewer from "../components/GalleryViewer/GalleryViewer";
import Header from "../components/Header/Header";
import Nav1 from "../components/Nav1/Nav1";
import food1 from "../images/food1.jpg";
import food2 from "../images/food2.jpg";
import food3 from "../images/food3.jpg";
import food4 from "../images/food4.jpg";
import food5 from "../images/food5.jpg";
import food6 from "../images/food6.jpg";
import food7 from "../images/food7.jpg";
import food8 from "../images/food8.jpg";
import food9 from "../images/food9.jpg";
import food10 from "../images/food10.jpg";
import food11 from "../images/food11.jpg";
import food12 from "../images/food12.jpg";
import food13 from "../images/food13.jpg";
import food14 from "../images/food14.jpg";
import food15 from "../images/food15.jpg";
import food16 from "../images/food16.jpg";
import food17 from "../images/food17.jpg";
import food18 from "../images/food18.jpg";
import food19 from "../images/food19.jpg";
import food20 from "../images/food20.jpg";
import food21 from "../images/food21.jpg";
import food22 from "../images/food22.jpg";
import food23 from "../images/food23.jpg";
import food24 from "../images/food24.jpg";
import food25 from "../images/food25.jpg";
import food26 from "../images/food26.jpg";
const FoodGallery = () => {
  const photos = [
    { src: food1 },
    { src: food2 },
    { src: food3 },
    { src: food4 },
    { src: food5 },
    { src: food6 },
    { src: food7 },
    { src: food8 },
    { src: food9 },
    { src: food10 },
    { src: food11 },
    { src: food12 },
    { src: food13 },
    { src: food14 },
    { src: food15 },
    { src: food16 },
    { src: food17 },
    { src: food18 },
    { src: food19 },
    { src: food20 },
    { src: food21 },
    { src: food22 },
    { src: food23 },
    { src: food24 },
    { src: food25 },
    { src: food26 },
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

export default FoodGallery;
