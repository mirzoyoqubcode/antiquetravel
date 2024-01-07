import React from "react";
import style from "./Block.module.scss";

const Block = ({ icon, title }) => {
  return (
    <div className={style.body}>
      <div className={style.block}>
        {icon}
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Block;
