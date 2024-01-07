import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "./Cities.module.scss";
import { useTranslation, Trans } from "react-i18next";
import bukhara from "../../images/bukhara.jpg";
import fergana1 from "../../images/fergana1.jpg";
import khiva from "../../images/khiva.jpg";
import samarkand from "../../images/samarkand.jpg";
import shakhrisabz from "../../images/shakhrisabz.jpg";
import tashkent from "../../images/tashkant.jpg";
const Cities = () => {
  const { t } = useTranslation();

  return (
    <div className={style.body}>
      {" "}
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        showThumbs={false}
        infiniteLoop
        showStatus={false}
        showArrows={false}
        autoPlay={true}
      >
        <div className={style.cityCarousel}>
          <img src={tashkent} />
          <div className={style.info}>
            <h1>Tashkent</h1>
            <p>
              <Trans t={t}>tashkentstory</Trans>
            </p>
          </div>
        </div>
        <div className={style.cityCarousel}>
          <img src={samarkand} />
          <div className={style.info}>
            <h1>Samarkand</h1>
            <p>
              <Trans t={t}>samarqandstory</Trans>
            </p>
          </div>
        </div>
        <div className={style.cityCarousel}>
          <img src={bukhara} />
          <div className={style.info}>
            <h1>Bukhara</h1>
            <p>
              <Trans t={t}>bukharastory</Trans>
            </p>
          </div>
        </div>
        <div className={style.cityCarousel}>
          <img src={khiva} />
          <div className={style.info}>
            <h1>Khiva</h1>
            <p>
              <Trans t={t}>khivastory</Trans>
            </p>
          </div>
        </div>
        <div className={style.cityCarousel}>
          <img src={fergana1} />
          <div className={style.info}>
            <h1>Ferghana</h1>
            <p>
              <Trans t={t}>ferganastory</Trans>
            </p>
          </div>
        </div>
        <div className={style.cityCarousel}>
          <img src={shakhrisabz} />
          <div className={style.info}>
            <h1>Shakhrisabz</h1>
            <p>
              <Trans t={t}>shakhrisabzstory</Trans>
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Cities;
