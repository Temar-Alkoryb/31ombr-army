import React from "react";
// import { BattonWrap,HeroImg, Content, H1, Section } from "./MainSection.style";
import Join from "../Join/Join";
import Image from "next/image";
import img from "../../../assets/bmwithflag.webp"
import style from "./MainSection.module.css";

function MainSection() {
  return (
    <>
      <section className={style.section}>
        <Image
          src={img}
          alt="military equipment"
          lang="en"
          className={style["img-bg"]}
          width={593}
          height={703}
          style={{ width: "100%", height: "100%" }}
        />
        <div className={style.content}>
          <h1 className={style.title}>31 окрема механізована бригада</h1>
        </div>
        <div className={style["join-wrap"]}>
          <Join />
        </div>
      </section>
    </>
  );
}

export default MainSection;
