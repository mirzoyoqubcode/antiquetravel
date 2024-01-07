import React from "react";
import Footer from "../components/Footer/Footer";
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
import nature1 from "../images/nature1.jpg";
import nature2 from "../images/nature2.jpg";
import nature3 from "../images/nature3.jpg";
import nature4 from "../images/nature4.jpg";
import nature5 from "../images/nature5.jpg";
import nature6 from "../images/nature6.jpg";
import nature7 from "../images/nature7.jpg";
import nature8 from "../images/nature8.jpg";
import culture1 from "../images/culture1.jpg";
import culture2 from "../images/culture2.jpg";
import culture3 from "../images/culture3.jpg";
import culture4 from "../images/culture4.jpg";
import culture5 from "../images/culture5.jpg";
import culture6 from "../images/culture6.jpg";
import culture7 from "../images/culture7.jpg";
import culture8 from "../images/culture8.jpg";
import arch1 from "../images/arch1.jpg";
import arch2 from "../images/arch2.jpg";
import arch3 from "../images/arch3.jpg";
import arch4 from "../images/arch4.jpg";
import arch5 from "../images/arch5.jpg";
import arch6 from "../images/arch6.jpg";
import arch7 from "../images/arch7.jpg";
import arch8 from "../images/arch8.jpg";
import peop1 from "../images/peop1.jpg";
import peop2 from "../images/peop2.jpg";
import peop3 from "../images/peop3.jpg";
import peop4 from "../images/peop4.jpg";
import peop5 from "../images/peop5.jpg";
import peop6 from "../images/peop6.jpg";
import peop7 from "../images/peop7.jpg";
import peop8 from "../images/peop8.jpg";
import food1 from "../images/food1.jpg";
import food2 from "../images/food2.jpg";
import food3 from "../images/food3.jpg";
import food4 from "../images/food4.jpg";
import food5 from "../images/food5.jpg";
import food6 from "../images/food6.jpg";
import food7 from "../images/food7.jpg";
import food8 from "../images/food8.jpg";
import metro1 from "../images/metro1.jpg";
import metro2 from "../images/metro2.jpg";
import metro3 from "../images/metro3.jpg";
import metro4 from "../images/metro4.jpg";
import metro5 from "../images/metro5.jpg";
import metro6 from "../images/metro6.jpg";
import art1 from "../images/art1.jpg";
import art2 from "../images/art2.jpg";
import art3 from "../images/art3.jpg";
import art4 from "../images/art4.jpg";
import art5 from "../images/art5.jpg";
import art6 from "../images/art6.jpg";
import art7 from "../images/art7.jpg";
import art8 from "../images/art8.jpg";
import sport1 from "../images/sport1.jpg";
import sport2 from "../images/sport2.jpg";
import sport3 from "../images/sport3.jpg";
import sport4 from "../images/sport4.jpg";
import sport5 from "../images/sport5.jpg";
import sport6 from "../images/sport6.jpg";
import sport7 from "../images/sport7.jpg";
import mistery1 from "../images/mistery1.jpg";
import mistery2 from "../images/mistery2.jpg";
import mistery3 from "../images/mistery3.jpg";
import mistery4 from "../images/mistery4.jpg";
import mistery5 from "../images/mistery5.jpg";
import mistery6 from "../images/mistery6.jpg";
import mistery7 from "../images/mistery7.jpg";
import ziyorat1 from "../images/ziyorat1.jpg";
import ziyorat2 from "../images/ziyorat2.jpg";
import ziyorat3 from "../images/ziyorat3.jpg";
import ziyorat4 from "../images/ziyorat4.jpg";
import ziyorat5 from "../images/ziyorat5.jpg";
import ziyorat6 from "../images/ziyorat6.jpg";
import ziyorat7 from "../images/ziyorat7.jpg";
import { useTranslation } from "react-i18next";
const Photo_Gallery = () => {
  const { t } = useTranslation();
  const galleryArr = [
    {
      title: t("goroda"),
      link: "/Photo_Gallery/cities_gallery",
      photos: [
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
      ],
    },
    {
      title: t("nature"),
      link: "/Photo_Gallery/green_gallery",
      photos: [
        {
          src: nature1,
        },
        {
          src: nature2,
        },
        {
          src: nature3,
        },
        {
          src: nature4,
        },
        {
          src: nature5,
        },
        {
          src: nature6,
        },
        {
          src: nature7,
        },
        {
          src: nature8,
        },
      ],
    },
    {
      title: t("culture"),
      link: "/Photo_Gallery/culture_gallery",
      photos: [
        {
          src: culture1,
        },
        {
          src: culture2,
        },
        {
          src: culture3,
        },
        {
          src: culture4,
        },
        {
          src: culture5,
        },
        {
          src: culture6,
        },
        {
          src: culture7,
        },
        {
          src: culture8,
        },
      ],
    },
    {
      title: t("arch"),
      link: "/Photo_Gallery/architecture_gallery",
      photos: [
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
      ],
    },
    {
      title: t("people"),
      link: "/Photo_Gallery/people_gallery",
      photos: [
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
      ],
    },
    {
      title: t("food"),
      link: "/Photo_Gallery/food_gallery",
      photos: [
        {
          src: food1,
        },
        {
          src: food2,
        },
        {
          src: food3,
        },
        {
          src: food4,
        },
        {
          src: food5,
        },
        {
          src: food6,
        },
        {
          src: food7,
        },
        {
          src: food8,
        },
      ],
    },
    {
      title: t("metro"),
      link: "/Photo_Gallery/metro_gallery",
      photos: [
        {
          src: metro1,
        },
        {
          src: metro2,
        },
        {
          src: metro3,
        },
        {
          src: metro4,
        },
        {
          src: metro5,
        },
        {
          src: metro6,
        },
      ],
    },
    {
      title: t("art"),
      link: "/Photo_Gallery/art_gallery",
      photos: [
        {
          src: art1,
        },
        {
          src: art2,
        },
        {
          src: art3,
        },
        {
          src: art4,
        },
        {
          src: art5,
        },
        {
          src: art6,
        },
        {
          src: art7,
        },
        {
          src: art8,
        },
      ],
    },
    {
      title: t("sport"),
      link: "/Photo_Gallery/sport_gallery",
      photos: [
        {
          src: sport1,
        },
        {
          src: sport2,
        },
        {
          src: sport3,
        },
        {
          src: sport4,
        },
        {
          src: sport5,
        },
        {
          src: sport6,
        },
        {
          src: sport7,
        },
      ],
    },
    {
      title: t("mistery"),
      link: "/Photo_Gallery/historical_gallery",
      photos: [
        {
          src: mistery1,
        },
        {
          src: mistery2,
        },
        {
          src: mistery3,
        },
        {
          src: mistery4,
        },
        {
          src: mistery5,
        },
        {
          src: mistery6,
        },
        {
          src: mistery7,
        },
      ],
    },
    {
      title: t("historic"),
      link: "/Photo_Gallery/tourism_gallery",
      photos: [
        {
          src: ziyorat1,
        },
        {
          src: ziyorat2,
        },
        {
          src: ziyorat3,
        },
        {
          src: ziyorat4,
        },
        {
          src: ziyorat5,
        },
        {
          src: ziyorat6,
        },
        {
          src: ziyorat7,
        },
      ],
    },
  ];
  return (
    <div>
      <Header />
      <Nav1 />
      <Photos data={galleryArr} />
      <Footer />
    </div>
  );
};

export default Photo_Gallery;
