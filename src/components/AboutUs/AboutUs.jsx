import React from "react";
import style from "../AboutUs/AboutUs.module.scss";
import Header from "../Header/Header";
import Nav1 from "../Nav1/Nav1";
import Footer from "../Footer/Footer";
import { useTranslation, Trans } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <Nav1 />
      <div className={style.body}>
        <section className={style.wrapper}>
          <h1>"Antique Travel"</h1>
          <p>
            <Trans t={t}>aboutus2</Trans>
          </p>
          <p>
            <Trans t={t}>aboutus3</Trans>
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
