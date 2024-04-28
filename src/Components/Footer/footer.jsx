import {FacebookFooter, MailFooter, PhoneFooter, TelegramFooter, WhatsappFooter } 
from "../Assets/Icons";
import s from "./footer.module.scss";

import phoneIcon from "../../Img/icons/phone-call.svg"
import telegram from "../../Img/icons/telegram.svg"
import whatsApp from "../../Img/icons/whatsapp.svg"
import faceBook from "../../Img/icons/facebook.svg"

import {t} from "i18next"

const Footer = () => {
  return (
    <footer className={s.footer}>
      <h2 className={s.footer_title}>{t("footer.title")}</h2>
      <div className={s.footer_container}>
        <div className={s.footer_container_left}>
          <ul className={s.footer_container_left_list}>
            <li className={s.footer_container_left_list_item}>
              <a className={s.footer_container_left_list_item_link} href="mail:office@intershipsystemy.pl">
                <div className={s.footer_container_left_list_item_link_box}>
                <img width="20" height="20" src="https://intershipsystemy.pl/Img/icons/mail.svg" alt="" />
                </div>
                
                <a href="mailto:office@intershipsystemy.pl" className={s.footer_container_left_list_item_link_text}>
                  office@intershipsystemy.pl
                </a>
              </a>
            </li>
            <li className={s.footer_container_left_list_item}>
              <a className={s.footer_container_left_list_item_link} href="tel:+30670000000">
                <div className={s.footer_container_left_list_item_link_box}>
                <img width="20" height="20" src="https://intershipsystemy.pl/Img/icons/phone-call.svg" alt="" />
                </div>
                <p className={s.footer_container_left_list_item_link_text}>+30670000000</p>
              </a>
            </li>
            <li className={s.footer_container_left_list_item}>
              <a className={s.footer_container_left_list_item_link}
                href="">
                <div className={s.footer_container_left_list_item_link_box}>
                <img width="20" height="20" src="https://intershipsystemy.pl/Img/icons/telegram.svg" alt="" />
                </div>
                <p className={s.footer_container_left_list_item_link_text}>Telegram</p>
              </a>
            </li>
            <li>
              <a className={s.footer_container_left_list_item_link}
                href="">
               <div className={s.footer_container_left_list_item_link_box}>
                <img width="20" height="20" src="https://intershipsystemy.pl/Img/icons/whatsapp.svg" alt="" />
                </div>
                <p className={s.footer_container_left_list_item_link_text}>WhatsApp</p>
              </a>
            </li>
            <li className={s.footer_container_left_list_item}>
              <a className={s.footer_container_left_list_item_link}>
               <div className={s.footer_container_left_list_item_link_box}>
                <img width="20" height="20" src="https://intershipsystemy.pl/Img/icons/facebook.svg" alt="" />
                </div>
                <p className={s.footer_container_left_list_item_link_text}>Facebook</p>
              </a>
            </li>
          </ul>
          <h3 className={s.footer_container_left_text}>{t("footer.copyright")}</h3>
        </div>
        <div className={s.footer_container_right}>
          <img className={s.footer_container_right_img} src="https://intershipsystemy.pl/Img/footerPmg.png" />
        </div>

      </div>
    </footer>
  )
}
export default Footer