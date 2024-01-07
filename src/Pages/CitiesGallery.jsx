import React from "react";
import Footer from "../components/Footer/Footer";
import GalleryViewer from "../components/GalleryViewer/GalleryViewer";
import Header from "../components/Header/Header";
import Nav1 from "../components/Nav1/Nav1";
import Photos from "../components/Photos/Photos";
import goroda1 from "../images/goroda1.jpg";
import goroda2 from "../images/goroda2.jpg";
import goroda3 from "../images/goroda3.jpg";
import goroda4 from "../images/goroda4.jpg";
import goroda5 from "../images/goroda5.jpg";
import goroda6 from "../images/goroda6.jpg";
import goroda7 from "../images/goroda7.jpg";
import goroda8 from "../images/goroda8.jpg";
import goroda9 from "../images/goroda9.jpg";
import goroda10 from "../images/goroda10.jpg";
import goroda11 from "../images/goroda11.jpg";
import goroda12 from "../images/goroda12.jpg";
import goroda13 from "../images/goroda13.jpg";
import buxara1 from "../images/buxara1.jpg";
import buxara2 from "../images/buxara2.jpg";
import buxara3 from "../images/buxara3.jpg";
import buxara4 from "../images/buxara4.jpg";
import buxara5 from "../images/buxara5.jpg";
import buxara6 from "../images/buxara6.jpg";
import buxara7 from "../images/buxara7.jpg";
import buxara8 from "../images/buxara8.jpg";
import samarkand1 from "../images/samarkand1.jpg";
import samarkand2 from "../images/samarkand2.jpg";
import samarkand3 from "../images/samarkand3.jpg";
import samarkand4 from "../images/samarkand4.jpg";
import samarkand5 from "../images/samarkand5.jpg";
import samarkand6 from "../images/samarkand6.jpg";
import samarkand7 from "../images/samarkand7.jpg";
import samarkand8 from "../images/samarkand8.jpg";
import khiva1 from "../images/khiva1.jpg";
import khiva2 from "../images/khiva2.jpg";
import khiva3 from "../images/khiva3.jpg";
import khiva4 from "../images/khiva4.jpg";
import khiva5 from "../images/khiva5.jpg";
import khiva6 from "../images/khiva6.jpg";
import shakhrisabz1 from "../images/shakhrisabz1.jpg";
import shakhrisabz2 from "../images/shakhrisabz2.jpg";
import shakhrisabz3 from "../images/shakhrisabz3.jpg";
import shakhrisabz4 from "../images/shakhrisabz4.jpg";
import shakhrisabz5 from "../images/shakhrisabz5.jpg";
import termiz1 from "../images/termiz1.jpg";
import termiz2 from "../images/termiz2.jpg";
import termiz3 from "../images/termiz3.jpg";
import termiz4 from "../images/termiz4.jpg";
import tashkent1 from "../images/tashkent1.jpg";
import tashkent2 from "../images/tashkent2.jpg";
import tashkent3 from "../images/tashkent3.jpg";
import tashkent4 from "../images/tashkent4.jpg";
import tashkent5 from "../images/tashkent5.jpg";
import tashkent6 from "../images/tashkent6.jpg";
import tashkent7 from "../images/tashkent7.jpg";
import tashkent8 from "../images/tashkent8.jpg";
import { useTranslation, Trans } from "react-i18next";
import background from "../images/bg-decor.gif";
const CitiesGallery = () => {
  const { t } = useTranslation();
  const photos = [
    {
      src: goroda1,
    },
    {
      src: goroda2,
    },
    {
      src: goroda3,
    },
    {
      src: goroda4,
    },
    {
      src: goroda5,
    },
    {
      src: goroda6,
    },
    {
      src: goroda7,
    },
    {
      src: goroda8,
    },
    {
      src: goroda9,
    },
    {
      src: goroda10,
    },
    {
      src: goroda11,
    },
    {
      src: goroda12,
    },
    {
      src: goroda13,
    },
  ];

  const razdelPhotos = [
    {
      title: "Bukhara",
      link: "/Photo_Gallery/cities_gallery/bukhara_gallery",
      photos: [
        {
          src: buxara1,
        },
        {
          src: buxara2,
        },
        {
          src: buxara3,
        },
        {
          src: buxara4,
        },
        {
          src: buxara5,
        },
        {
          src: buxara6,
        },
        {
          src: buxara7,
        },
        {
          src: buxara8,
        },
      ],
    },
    {
      title: "Samarqand",
      link: "/Photo_Gallery/cities_gallery/samarkand_gallery",
      photos: [
        {
          src: samarkand1,
        },
        {
          src: samarkand2,
        },
        {
          src: samarkand3,
        },
        {
          src: samarkand4,
        },
        {
          src: samarkand5,
        },
        {
          src: samarkand6,
        },
        {
          src: samarkand7,
        },
        {
          src: samarkand8,
        },
      ],
    },
    {
      title: "Khiva",
      link: "/Photo_Gallery/cities_gallery/khiva_gallery",
      photos: [
        {
          src: khiva1,
        },
        {
          src: khiva2,
        },
        {
          src: khiva3,
        },
        {
          src: khiva4,
        },
        {
          src: khiva5,
        },
        {
          src: khiva6,
        },
      ],
    },
    {
      title: "Shakhrisabz",
      link: "/Photo_Gallery/cities_gallery/shakhrisabz_gallery",
      photos: [
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
      ],
    },
    {
      title: "Termiz",
      link: "/Photo_Gallery/cities_gallery/termiz_gallery",
      photos: [
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
      ],
    },
    {
      title: "Tashkent",
      link: "/Photo_Gallery/cities_gallery/tashkent_gallery",
      photos: [
        {
          src: tashkent1,
        },
        {
          src: tashkent2,
        },
        {
          src: tashkent3,
        },
        {
          src: tashkent4,
        },
        {
          src: tashkent5,
        },
        {
          src: tashkent6,
        },
        {
          src: tashkent7,
        },
        {
          src: tashkent8,
        },
      ],
    },
  ];
  return (
    <div>
      <Header />
      <Nav1 />
      <GalleryViewer photos={photos} />
      <Photos data={razdelPhotos} />
      <Footer />
    </div>
  );
};

export default CitiesGallery;
