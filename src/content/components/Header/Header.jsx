"use client";
import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";

import style from "./Header.module.css";
import logo from "../../../assets/main-logo.svg";
import Join from "../Join/Join.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Image from "next/image";
import Link from "next/link";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickOnMenu = () => {
    const backdrop = document.getElementById("backdrop");
    if (!isMenuOpen) {
      backdrop.style.left = "0px";
      setIsMenuOpen(!isMenuOpen);
    }
    if (isMenuOpen) {
      backdrop.style.left = "-100%";
      setIsMenuOpen(!isMenuOpen);
    }
  };
  const NAV_ITEMS = [
    { path: "#AboutUs", name: "Про нас" },
    { path: "#OurValues", name: "Наші цінності" },
    { path: "#Vacancy", name: "Вакансії" },
    { path: "#Contacts", name: "Контакти" },
  ];

  return (
    <>
      <Sidebar handleClickClose={handleClickOnMenu} />
      <header className={style.hd}>
        <div className="container">
          <div className={style["header-content"]}>
            <div className={style["logo-wrap"]}>
              <div className={style['burger-menu']} onClick={handleClickOnMenu}>
                <IoMenuOutline size={30} stroke="#fff"/>
              </div>
              
              <Link href={"/"} className={style["main-link"]} onClick={handleClickOnMenu} style={{width: "44px", height: "50px" }}>
                <Image src={logo} alt="Logo" style={{width: "100%", height: "100%"}}></Image>
              </Link>
            </div>
            <nav className={style.nav}>
              <ul className={style["nav-list"]}>
                {NAV_ITEMS.map(({ path, name }, idx) => (
                  <li className={style.item} key={idx}>
                    <Link className={style["header-link"]} href={path}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={style.contacts}>
              <Link href="tel:+380983147401" className={style["link-tel"]}>
                098 314 7401
              </Link>
              <div className={style["join-wrap"]}>
                <Join />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
