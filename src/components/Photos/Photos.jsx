import React from "react";
import { Link } from "react-router-dom";
import style from "../Photos/Photos.module.scss";
import { useTranslation, Trans } from "react-i18next";
const Photos = ({ data }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={style.body}>
      <section className={style.wrapper}>
        {data?.map((item) => {
          return (
            <>
              <div className={style.image_slider}>
                <Link to={item.link}>
                  <h1>
                    <Trans t={t}>{item.title}</Trans>
                  </h1>
                </Link>
                <div className={style.image_tracker}>
                  {item.photos.map((el) => {
                    return (
                      <>
                        <div className={style.slide}>
                          <img loading="lazy" src={el.src} alt="" />
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </section>
    </div>
  );
};

export default Photos;
