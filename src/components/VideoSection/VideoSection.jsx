import React from "react";
import style from "./VideoSection.module.scss";
import vid from "../../videos/vid.mp4";

const VideoSection = () => {
  return (
    <div className={style.body}>
      <main className={style.main}>
        <video controls>
          <source src={vid} type="video/mp4" />
        </video>
      </main>
    </div>
  );
};

export default VideoSection;
