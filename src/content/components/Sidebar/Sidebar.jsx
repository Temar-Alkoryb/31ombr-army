import React from "react";
import { IoMdClose } from "react-icons/io";
import Join from "../Join/Join";
import logo from "../../../assets/main-logo.svg";
import Image from "next/image";

function Sidebar({ handleClickClose }) {
  const NAV_ITEMS = [
    { path: "#AboutUs", name: "Про нас" },
    { path: "#OurValues", name: "Наші цінності" },
    { path: "#Vacancy", name: "Вакансії" },
    { path: "#Contacts", name: "Контакти" },
  ];
  return (
    <div id="backdrop">
      <div className="container">
        <div>
          <IoMdClose size={40} onClick={handleClickClose} />
          <a
            href={"/"}
            onClick={handleClickClose}
            style={{ width: "110px", height: "116px", margin: "0 auto" }}
          >
            <Image
              src={logo}
              alt="Logo"
              style={{ width: "100%", height: "100%" }}
            />
          </a>
          <div>
            <nav>
              <ul>
                {NAV_ITEMS.map(({ path, name }, idx) => (
                  <li key={idx}>
                    <a href={path} onClick={handleClickClose}>
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <Join />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
