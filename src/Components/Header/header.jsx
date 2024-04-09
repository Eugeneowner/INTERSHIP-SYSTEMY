import s from "./header.module.scss"
import logo from "../../Img/logo.png"
import { EmailIcon, TelegramIcon, PhoneIcon, FacebookIcon } from "../Assets/Icons"
import mailIcon from "../../Img/icons/mailWhite.svg"
import facebookIcon from "../../Img/icons/facebookWhite.svg"

const Header = () => {
  const nav = ["Про нас", "Як це працює", "Бізнес-клієнтам","ПРИВАТНИМ-КЛІЄНТАМ", "Контакти"]
  return (
    <header className={s.header}>
      <div className={s.header_wrapper}>
          <div className={s.header_left}>
            <img className={s.header_left_logo} src={logo} alt="logo" />
            
          </div>
          <div className={s.header_right}>
          <button className={s.header_right_button}>
             Відстежити трекінг
          </button>
          <ul className={s.header_right_social}>
            {/* <li className={s.header_right_social_item}>
              <a>
                <EmailIcon/>
              </a>
            </li> */}
            <li className={s.header_right_social_item}>
              <a className={s.header_right_social_item_link}>
                <PhoneIcon/>
              </a>
              </li>
               {/* <li className={s.header_right_social_item}>
              <a>
                <FacebookIcon/>
              </a>
              </li> */}
              <li className={s.header_right_social_item}>
                <a className={s.header_right_social_item_link}>
                  <TelegramIcon/>
                </a>
                </li>
          </ul>
          </div>
      </div>
      <div className={s.header_bottom}>
        <nav className={s.header_bottom_nav}>
              {
                nav.map(item => <a key={item} className={s.header_bottom_nav_item}>{item}</a>)
              }
            </nav>
          <ul className={s.header_bottom_btns}>
            <li className={s.header_bottom_btns_item}>
              <img className={s.header_bottom_btns_item_img} src={facebookIcon} alt="" />
            </li>
             <li className={s.header_bottom_btns_item}>
              <img className={s.header_bottom_btns_item_img} src={mailIcon} alt="" />
            </li>
          </ul>
      </div>
    </header>
  )
}
 export default Header