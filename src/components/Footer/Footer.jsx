import React from "react";
import style from "../Footer/Footer.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { RxEnvelopeClosed } from "react-icons/rx";
import { GoLocation } from "react-icons/go";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import FooterLogo from "../../images/logo.png";
import { Facebook } from "@mui/icons-material";
import TravelSvg from "../../images/uzbsvg.png";
const Footer = () => {
  return (
    <div className={style.wrapper}>
      <img src={FooterLogo} alt="" />
      <div>
        <h1>Contact Us</h1>
        <ul>
          <li>
            <FaPhoneAlt /> +99897 725-52-55 +99890 715 57 55
          </li>
          <li>
            <RxEnvelopeClosed />
            info@antique-travel.com
          </li>
          <li>
            <GoLocation /> Bukhara city , Q.Murtazoyev str 9/1, №6
          </li>
          <li className={style.ind}>Uzbekistan 200100</li>
        </ul>
        <div className={style.socialLinks}>
          <a target="_blank" href="https://t.me/bekzodrj">
            {" "}
            <TelegramIcon className={style.social} />
          </a>
          <a target="_blank" href="https://wa.me/qr/YMS75A26V23ZG1">
            <WhatsAppIcon className={style.social} />
          </a>
          <a target="_blank" href="https://www.facebook.com/bekzodrj">
            <Facebook className={style.social} />
          </a>
        </div>
        <div className={style.cards}>
          <img
            src="https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg"
            alt=""
          />
          <img
            src="https://icon-library.com/images/mastercard-icon-png/mastercard-icon-png-17.jpg"
            alt=""
          />
          <img
            src="https://kdb.uz/storage/cards/October2021/hNE9Tjbf0qf181qpgGah.jpg"
            alt=""
          />
          <img
            src="https://kdb.uz/storage/cards/October2021/jMrl5N5B9FAwoIwfSNtC.jpg"
            alt=""
          />
        </div>
        <p>Copyright ©2022 Developed By INDEX Team</p>
      </div>
      <img src={TravelSvg} alt="" className={style.svguzb} />
    </div>
  );
};

export default Footer;
