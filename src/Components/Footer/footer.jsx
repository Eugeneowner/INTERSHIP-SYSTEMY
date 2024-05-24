import {FacebookFooter, MailFooter, PhoneFooter, TelegramFooter, WhatsappFooter } 
from "../Assets/Icons";
import s from "./footer.module.scss";

import phoneIcon from "../../Img/icons/phone-call.svg"
import telegram from "../../Img/icons/telegram.svg"
import whatsApp from "../../Img/icons/whatsapp.svg"
import faceBook from "../../Img/icons/facebook.svg"

import {t} from "i18next"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <h2 className={s.footer_title}>{t("footer.title")}</h2>
      <div className={s.footer_container}>
        <div className={s.footer_container_left}>
          <ul className={s.footer_container_left_list}>
            <li className={s.footer_container_left_list_item}>
              <Link className={s.footer_container_left_list_item_link} to="mail:office@intershipsystemy.pl">
                <div className={s.footer_container_left_list_item_link_box}>
                <img width="20" height="20" src="https://intershipsystemy.pl/Img/icons/mail.svg" alt="" />
                </div>
                
                <Link to="mailto:office@intershipsystemy.pl" className={s.footer_container_left_list_item_link_text}>
                  office@intershipsystemy.pl
                </Link>
              </Link>
            </li>
            <li className={s.footer_container_left_list_item}>
              <Link className={s.footer_container_left_list_item_link} to="tel:+30670000000">
                <div className={s.footer_container_left_list_item_link_box}>
                <img width="20" height="20" src="https://intershipsystemy.pl/Img/icons/phone-call.svg" alt="" />
                </div>
                <p className={s.footer_container_left_list_item_link_text}>+30670000000</p>
              </Link>
            </li>
            <li className={s.footer_container_left_list_item}>
              <Link className={s.footer_container_left_list_item_link}
                to="">
                <div className={s.footer_container_left_list_item_link_box}>
                <img width="20" height="20" src="https://intershipsystemy.pl/Img/icons/telegram.svg" alt="" />
                </div>
                <p className={s.footer_container_left_list_item_link_text}>Telegram</p>
              </Link>
            </li>
            <li>
              <Link className={s.footer_container_left_list_item_link}
                to="">
               <div className={s.footer_container_left_list_item_link_box}>
                <img width="20" height="20" src="https://intershipsystemy.pl/Img/icons/whatsapp.svg" alt="" />
                </div>
                <p className={s.footer_container_left_list_item_link_text}>WhatsApp</p>
              </Link>
            </li>
            <li className={s.footer_container_left_list_item}>
              <Link className={s.footer_container_left_list_item_link}>
               <div className={s.footer_container_left_list_item_link_box}>
                <img width="20" height="20" src="https://intershipsystemy.pl/Img/icons/facebook.svg" alt="" />
                </div>
                <p className={s.footer_container_left_list_item_link_text}>Facebook</p>
              </Link>
            </li>
          </ul>
          <h3 className={s.footer_container_left_text}>{t("footer.copyright")}</h3>
          <h3 className={s.footer_container_left_text}>{t("footer.copyright_part2")}</h3>
        </div>
        <div className={s.footer_container_right}>
          <img className={s.footer_container_right_img} src="https://intershipsystemy.pl/Img/footerPmg.png" />
        </div>

      </div>
    </footer>
  )
}
export default Footer