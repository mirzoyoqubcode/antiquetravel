import React from "react";
import style from "../UsefulLinks/UsefulLinks.module.scss";
import Linker from "./components/Link";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import HotelIcon from "@mui/icons-material/Hotel";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CommuteIcon from "@mui/icons-material/Commute";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import DoorSlidingIcon from "@mui/icons-material/DoorSliding";
import { useTranslation } from "react-i18next";

const UsefulLinks = () => {
  const { t } = useTranslation();
  const links = [
    {
      icon: <WbSunnyIcon className={style.icon} />,
      title: t("Weather"),
      link: "https://www.gismeteo.ru/",
    },
    {
      icon: <HotelIcon className={style.icon} />,
      title: t("HotelBooking"),
      link: "https://www.booking.com/searchresults.html?aid=100994&sid=f19086fdf868f8b68bbf49632d8c2fb5&sb=1&sb_lp=1&src=theme_landing_index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Fhotel%2Findex.html%3Faid%3D100994%26sid%3Df19086fdf868f8b68bbf49632d8c2fb5%26&ss=tashkent&is_ski_area=0&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1",
    },
    {
      icon: <AccountBalanceIcon className={style.icon} />,
      title: t("BankRate"),
      link: "https://bank.uz/currency",
    },
    {
      icon: <CommuteIcon className={style.icon} />,
      title: t("TrainBooking"),
      link: "https://railway.uz/ru/",
    },
    {
      icon: <AirplaneTicketIcon className={style.icon} />,
      title: t("FlightBooking"),
      link: "https://www.uzairways.com/ru?utm_source=yandex&utm_medium=cpc&utm_campaign=yandex_search&utm_content=uzairways&_openstat=ZGlyZWN0LnlhbmRleC5ydTs4MTQ4MjAyOTsxMzIyMDczMjYwMTt5YW5kZXgucnU6cHJlbWl1bQ&yclid=11640419960908152831",
    },
    {
      icon: <AccountBalanceWalletIcon className={style.icon} />,
      title: t("OnlinePayment"),
      link: "/payment",
    },
    {
      icon: <DashboardIcon className={style.icon} />,
      title: t("PortalofUzbekistan"),
      link: "https://www.gov.uz/ru/",
    },
    {
      icon: <AssuredWorkloadIcon className={style.icon} />,
      title: t("MinistryofForeignAffairs"),
      link: "https://www.mfa.uz/ru/",
    },
    {
      icon: <DoorSlidingIcon className={style.icon} />,
      title: t("AssociationofPrivateTourismAgencies"),
      link: "http://apta.uz/",
    },
  ];

  return (
    <div className={style.body}>
      <div className={style.linkHeader}>
        <h1>{t("UsefulLinks")}</h1>
        <p>{t("infoUsefulLinks")}</p>
      </div>
      <div className={style.linkContainer}>
        {links.map((link) => (
          <Linker icon={link.icon} title={link.title} link={link.link} />
        ))}
      </div>
    </div>
  );
};

export default UsefulLinks;
