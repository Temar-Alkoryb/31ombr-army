import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import logo from "../../../assets/main-logo.svg";
import style from "./Footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style["content"]}>
          <a href="#">
            <div style={{ width: "44px", height: "50px" }}>
              <Image
                src={logo}
                alt="Logo"
                width={44}
                height={50}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </a>

          <div className={style.contacts}>
            <a href="https://army.gov.ua/" className={style["link-simple"]} style={{ alignSelf: 'end' }} target="_blank">army.gov.ua</a>
            <a
              href={"https://www.facebook.com/31ombr"}
              className={style["hover-link"]}
            >
              <div className={style["icon-wrap"]}>
                <FaFacebookF size={24} fill="#000" />
              </div>
            </a>

            <a href="tel:+380983147401" className={style["link-tel"]}>
              <div className={style["icon-wrap"]}>
                <FaPhoneFlip size={24} fill="#000" />
              </div>
            </a>

            <a
              className={style["hover-link"]}
              href={
                "https://www.instagram.com/31ombr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              }
            >
              <div className={style["icon-wrap"]}>
                <FaInstagram size={24} fill="#000" />
              </div>
            </a>
            <a
              className={style["hover-link"]}
              href={
                "https://l.facebook.com/l.php?u=https%3A%2F%2Ftiktok.com%2F%4031ombr%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR3zO0aR6nFtPgUox7HoqSTOwEKWIKFS1wTYnVQsUaJNEf5xBR5Mc5F8VYo_aem_AWqq3SRBquQsgf_ZQEjlZtOMwKQJVpjfwd8UdD8kgeB4IHvxSOFVShhUJONGVUSrd9XctRRzqAiS19hQQ7JtT8pb&h=AT0pYV9p7WTAu6kr2-AT2IIa_400ROANoZg2OeKUQoJGvHJXHH_GObpXKsMNDlr1W4v3zKIEWzkln7UoCW-q8Ik87lPeOlqx9kghfj2BrO1dC9OwZe4x4Y2Q7dxNBklx9CzTMg"
              }
            >
              <div className={style["icon-wrap"]}>
                <IoLogoTiktok size={24} fill="#000" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
