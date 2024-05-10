"use client"
import { IoMdClose } from "react-icons/io";
import Join from "../Join/Join";
import logo from "../../../assets/main-logo.svg";
import Image from "next/image";
import style from "./Sidebar.module.css"
import Link from "next/link";

function Sidebar({ handleClickClose }) {
  const NAV_ITEMS = [
    { path: "#AboutUs", name: "Про нас" },
    { path: "#OurValues", name: "Наші цінності" },
    { path: "#Vacancy", name: "Вакансії" },
    { path: "#Contacts", name: "Контакти" },
  ];
  return (
    <div id="backdrop" className={style.backdrop}>
      <div className="container">
        <div className={style['menu-content']}>
          <div className={style.close}>
          <IoMdClose size={40} onClick={handleClickClose} />
          </div>
          
          <Link
            href={"/"}
            onClick={handleClickClose}
          >
            <Image
              src={logo}
              alt="Logo"
              style={{ width: "110px", height: "116px", margin: "0 auto" }}
              width={110}
              height={116}
            />
          </Link>
          <div className={style['content-wrap']}>
            <nav>
              <ul className={style.list}>
                {NAV_ITEMS.map(({ path, name }, idx) => (
                  <li key={idx}>
                    <Link href={path} onClick={handleClickClose} className={style['menu-link']}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div style={{
              fontSize: "20px"
            }}>
              <Join />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
