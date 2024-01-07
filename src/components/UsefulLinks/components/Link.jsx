import React from "react";
import style from "./Link.module.scss";
import { Link } from "react-router-dom";
const Linker = ({ icon, title, link }) => {
  return link === "/payment" ? (
    <Link to={link} className={style.body}>
      <div className={style.container}>
        {icon}
        <h3>{title}</h3>
      </div>
    </Link>
  ) : (
    <a href={link} target="_blank" className={style.body}>
      <div className={style.container}>
        {icon}
        <h3>{title}</h3>
      </div>
    </a>
  );
};

export default Linker;
