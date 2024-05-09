import { BsPlusCircleDotted } from "react-icons/bs";
import warfire from "../../../assets/warfire-flowers.jpg";
import dron from "../../../assets/dron.jpg";

import style from "./Vacancy.module.css";
import LightJoin from "../LightJoin/LightJoin";
import Image from "next/image";

function Vacancy({ vacancyData }) {
  const { categorys, title, text_1, text_2 } = vacancyData;
  return (
    <section id="Vacancy" className={style.section}>
      <div className="container">
        <h2 className={style["sec-title"]}>{title}</h2>
        <div className={style["hight-container"]}>
          <Image src={warfire} alt="Soldier" className={style["hight-img"]} />
          <div className={style.wrap}>
            <h3 className={style["third-title"]}>Кого ми шукаємо:</h3>
            <p>{text_1}</p>
            <ul className={style.list}>
              {categorys.map((item, idx) => (
                <li key={idx} className={style.item}>
                  <BsPlusCircleDotted />
                  <h3>{item.title}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={style["lower-container"]}>
          <div className={style.wrap}>
            <h3 className={style["third-title"]}>
              Що робити якщо в переліку немає моєї спеціальності?
            </h3>
            <p>{text_2}</p>
            <div className={style["join-wrap"]}>
              <LightJoin />
            </div>
          </div>

          <Image src={dron} alt="Soldier" className={style["lower-img"]} />
        </div>
      </div>
    </section>
  );
}

export default Vacancy;
