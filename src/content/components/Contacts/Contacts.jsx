import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

import style from "./Contacts.module.css";

function Contacts() {
  return (
    <section id="Contacts" className={style.section}>
      <h2 className={style["sec-title"]}> Контакти</h2>
      <nav className={style.nav}>
        <a href="tel:+380983147401" className={style["nav-link"]}>
          <div className={style["icon-wrap"]}>
            <FaPhoneFlip size={18} />
          </div>
          <span>098 314 7401</span>
        </a>

        <a
          href={"https://www.facebook.com/31ombr"}
          className={style["nav-link"]}
        >
          <FaFacebookF size={18}/>
          <span>Facebook</span>
        </a>

        <a
          href={
            "https://www.instagram.com/31ombr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          }
          className={style["nav-link"]}
        >
          <FaInstagram size={18}/>
          <span>Instagram</span>
        </a>

        <a
          href={
            "https://l.facebook.com/l.php?u=https%3A%2F%2Ftiktok.com%2F%4031ombr%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR3zO0aR6nFtPgUox7HoqSTOwEKWIKFS1wTYnVQsUaJNEf5xBR5Mc5F8VYo_aem_AWqq3SRBquQsgf_ZQEjlZtOMwKQJVpjfwd8UdD8kgeB4IHvxSOFVShhUJONGVUSrd9XctRRzqAiS19hQQ7JtT8pb&h=AT0pYV9p7WTAu6kr2-AT2IIa_400ROANoZg2OeKUQoJGvHJXHH_GObpXKsMNDlr1W4v3zKIEWzkln7UoCW-q8Ik87lPeOlqx9kghfj2BrO1dC9OwZe4x4Y2Q7dxNBklx9CzTMg"
          }
          className={style["nav-link"]}
        >
          <IoLogoTiktok size={18}/>
          <span>TikTok</span>
        </a>

        <a href="mailto:31ombr@post.mil.gov.ua" className={style["nav-link"]}>
          <IoMdMail size={18}/>
          <span>31ombr@post.mil.gov.ua</span>
        </a>
      </nav>
    </section>
  );
}

export default Contacts;
