import {FacebookFooter, MailFooter, PhoneFooter, TelegramFooter, WhatsappFooter } 
from "../Assets/Icons";
import footerImg from "../../Img/footerPmg.png"
import s from "./footer.module.scss";

import mailIcon from "../../Img/icons/mail.svg"
import phoneIcon from "../../Img/icons/phone-call.svg"
import telegram from "../../Img/icons/telegram.svg"
import whatsApp from "../../Img/icons/whatsapp.svg"
import faceBook from "../../Img/icons/facebook.svg"
const Footer = () => {
  return (
    <footer className={s.footer}>
      <h2 className={s.footer_title}>Доставка протягом 7 робочих днів</h2>
      <div className={s.footer_container}>
        <div className={s.footer_container_left}>
          <ul className={s.footer_container_left_list}>
            <li className={s.footer_container_left_list_item}>
              <a className={s.footer_container_left_list_item_link} href="mail:office@intershipsystemy.pl">
                <div className={s.footer_container_left_list_item_link_box}>
                <img width="20" height="20" src={mailIcon} alt="" />
                </div>
                
                <p className={s.footer_container_left_list_item_link_text}>
                  office@intershipsystemy.pl
                </p>
              </a>
            </li>
            <li className={s.footer_container_left_list_item}>
              <a className={s.footer_container_left_list_item_link} href="phone:+30670000000">
                <div className={s.footer_container_left_list_item_link_box}>
                <img width="20" height="20" src={phoneIcon} alt="" />
                </div>
                <p className={s.footer_container_left_list_item_link_text}>tel:+30670000000</p>
              </a>
            </li>
            <li className={s.footer_container_left_list_item}>
              <a className={s.footer_container_left_list_item_link}
                href="">
                <div className={s.footer_container_left_list_item_link_box}>
                <img width="20" height="20" src={telegram} alt="" />
                </div>
                <p className={s.footer_container_left_list_item_link_text}>Telegram</p>
              </a>
            </li>
            <li>
              <a className={s.footer_container_left_list_item_link}
                href="">
               <div className={s.footer_container_left_list_item_link_box}>
                <img width="20" height="20" src={whatsApp} alt="" />
                </div>
                <p className={s.footer_container_left_list_item_link_text}>WhatsApp</p>
              </a>
            </li>
            <li className={s.footer_container_left_list_item}>
              <a className={s.footer_container_left_list_item_link}>
               <div className={s.footer_container_left_list_item_link_box}>
                <img width="20" height="20" src={faceBook} alt="" />
                </div>
                <p className={s.footer_container_left_list_item_link_text}>Facebook</p>
              </a>
            </li>
          </ul>
          <h3 className={s.footer_container_left_text}>intership systemy.pl — сервіс доставки посилок в Україну до відділення Укрпошти.
          За будь-яких питань звертайтесь до нас за телефоном  0800 000 000 (Безкоштовні вхідні) чи на електронну адресу office@intershipsystemy.pl.
          Завжди раді бачити на нашому сервісі доставки.<br/>
          ©Всі права захищені. Використання матеріалів даного сайту можливе тільки з посиланням на джерело.</h3>
        </div>
        <div className={s.footer_container_right}>
          <img className={s.footer_container_right_img} src={footerImg} />
        </div>

      </div>
    </footer>
  )
}
export default Footer