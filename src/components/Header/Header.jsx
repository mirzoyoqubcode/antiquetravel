import React from "react";
import style from "./Header.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import navLogo from "../../images/logo.png";
import Facebook from "@mui/icons-material/Facebook";

const Header = () => {
  return (
    <div className={style.body}>
      <div className={style.headerOverlay}>
        <nav>
          <img loading="lazy" src={navLogo} alt="" />
          <div className={style.contactInfo}>
            <p>
              <span>
                <LocationOnIcon />
              </span>{" "}
              Bukhara city , Q.Murtazoyev str 9/1, №6
            </p>
            <p>Uzbekistan 200100</p>
            <p>
              <span>
                <LocalPhoneIcon />{" "}
              </span>{" "}
              +99897 725-52-55 +99890 715 57 55
            </p>
            <p>
              <span>
                <EmailIcon />{" "}
              </span>{" "}
              info@antique-travel.com
            </p>
            <div className={style.socialLinks}>
              <a target="_blank" href="https://t.me/bekzodrj">
                <p>
                  {" "}
                  <span>
                    <TelegramIcon />
                  </span>{" "}
                  Telegram
                </p>
              </a>
              <a target="_blank" href="https://wa.me/qr/YMS75A26V23ZG1">
                <p>
                  {" "}
                  <span>
                    <WhatsAppIcon />
                  </span>{" "}
                  WhatsApp
                </p>
              </a>
              <a target="_blank" href="https://www.facebook.com/bekzodrj">
                <p>
                  <span>
                    <Facebook />
                  </span>{" "}
                  Facebook
                </p>
              </a>
            </div>
          </div>
        </nav>
      </div>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        showArrows={false}
        showStatus={false}
        interval={7000}
        dynamicHeight={100}
      >
        <div className={style.carousel}>
          <img
            loading="lazy"
            src="https://novotours.uz/wp-content/uploads/2017/03/Travel-Uzbekistan.jpg"
          />
        </div>
        <div className={style.carousel}>
          <img
            loading="lazy"
            src="https://novotours.uz/wp-content/uploads/2017/03/tour-to-Uzbekistan.jpg"
          />
        </div>
        <div loading="lazy" className={style.carousel}>
          <img src="https://novotours.uz/wp-content/uploads/2017/03/Aydarkul-Lake-yurt-camp.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Header;
