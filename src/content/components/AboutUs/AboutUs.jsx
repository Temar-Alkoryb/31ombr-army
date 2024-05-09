import React from "react";
// import {
//   ContentWrap,
//   ImageBackground,
//   HeroImg,
//   Title,
//   Text,
// } from "./AboutUs.style";

import img from "../../../assets/soldiers.webp";
import Image from "next/image";
import style from "./AboutUs.module.css"

function AboutUs({ aboutUsData }) {
  const { title, text } = aboutUsData;
  return (
    <section id="AboutUs">
      <div className="container">
        <h2 className={style.title}>{title}</h2>
        <div className={style.content}>
          <div className={style["img-bg"]}>
            <Image src={img} alt="Art" className={style["hero-img"]} />
          </div>
          <p className={style.text}>{text}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
