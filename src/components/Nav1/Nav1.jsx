import React, { useLayoutEffect, useState } from "react";
import style from "./Nav1.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const Nav1 = () => {
  const { t, i18n } = useTranslation();
  const [showNavMenu, setShowNavMenu] = useState(false);
  const navigate = useNavigate();
  async function handleNavigateTransport() {
    await navigate("/");
    await window.scrollTo(0, 3300);
  }

  return (
    <div className={style.body}>
      <div className={style.container}>
        <ul>
          <Link to={"/"}>
            {" "}
            <li className={style.active}>{t("Home")}</li>
          </Link>
          <Link to={"/aboutUs"}>
            {" "}
            <li>{t("AboutUs")}</li>
          </Link>
          <Link to={"/tours"}>
            {" "}
            <li>{t("Tours")}</li>
          </Link>
          <a
            target="_blank"
            href="https://www.booking.com/searchresults.html?checkout_year=&ss=tashkent&checkin_month=&checkin_year=&from_sf=1&aid=100994&sb=1&checkout_month=&b_h4u_keep_filters=&is_ski_area=0&src=theme_landing_index&sb_lp=1&sid=f19086fdf868f8b68bbf49632d8c2fb5&group_children=0&no_rooms=1&group_adults=2&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Fhotel%2Findex.html%3Faid%3D100994%26sid%3Df19086fdf868f8b68bbf49632d8c2fb5%26"
          >
            {" "}
            <li>{t("Hotels")}</li>
          </a>

          <li onClick={() => handleNavigateTransport()}>
            {t("Transportation")}
          </li>

          <Link to="/Photo_Gallery">
            {" "}
            <li>{t("PhotoGallery")}</li>
          </Link>
        </ul>
        <div className={style.lang}>
          <p onClick={() => i18n.changeLanguage("en")}>
            {" "}
            <img
              src="https://flagcdn.com/w20/us.png"
              srcset="https://flagcdn.com/w40/us.png 2x"
              width="20"
              alt="United States"
            />
            ENG
          </p>
          <p onClick={() => i18n.changeLanguage("ru")}>
            <img
              src="https://flagcdn.com/w20/ru.png"
              srcset="https://flagcdn.com/w40/ru.png 2x"
              width="20"
              alt="Russia"
            />
            RUS
          </p>
          <p onClick={() => i18n.changeLanguage("de")}>
            <img
              src="https://flagcdn.com/w20/de.png"
              srcset="https://flagcdn.com/w40/de.png 2x"
              width="20"
              alt="Germany"
            />
            DE
          </p>
        </div>

        <div
          onClick={() => setShowNavMenu(!showNavMenu)}
          className={style.menu}
        >
          <MenuIcon />
        </div>
      </div>

      <div
        className={clsx({
          [style.navMenu]: true,
          [style.showMenu]: showNavMenu,
        })}
      >
        <ul>
          <Link to={"/"}>
            {" "}
            <li className={style.active}>{t("Home")}</li>
          </Link>
          <Link to={"/aboutUs"}>
            {" "}
            <li>{t("AboutUs")}</li>
          </Link>
          <Link to={"/tours"}>
            {" "}
            <li>{t("Tours")}</li>
          </Link>
          <a
            target="_blank"
            href="https://www.booking.com/searchresults.html?checkout_year=&ss=tashkent&checkin_month=&checkin_year=&from_sf=1&aid=100994&sb=1&checkout_month=&b_h4u_keep_filters=&is_ski_area=0&src=theme_landing_index&sb_lp=1&sid=f19086fdf868f8b68bbf49632d8c2fb5&group_children=0&no_rooms=1&group_adults=2&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Fhotel%2Findex.html%3Faid%3D100994%26sid%3Df19086fdf868f8b68bbf49632d8c2fb5%26"
          >
            {" "}
            <li>{t("Hotels")}</li>
          </a>
          <a href="#transportation_accordion">
            {" "}
            <li>{t("Transportation")}</li>
          </a>
          <Link to="/Photo_Gallery">
            {" "}
            <li>{t("PhotoGallery")}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav1;
