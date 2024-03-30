               import s from "./header.module.scss"
import logo from "../../Img/logo.png"
import { EmailIcon, TelegramIcon, PhoneIcon, FacebookIcon } from "../Assets/Icons"

const Header = () => {
  const nav = ["home", "about us", "services", "faq"]
  return (
    <header className={s.header}>
      <div className={s.header_wrapper}>
          <div className={s.header_left}>
            <img className={s.header_left_logo} src={logo} alt="logo" />
            <nav className={s.header_left_nav}>
              {
                nav.map(item => <a key={item} className={s.header_left_nav_item}>{item}</a>)
              }
            </nav>
          </div>
          <div className={s.header_right}>
          <button className={s.header_right_button}>
             Track the package
          </button>
          <ul className={s.header_right_social}>
            <li className={s.header_right_social_item}>
              <a>
                <EmailIcon/>
              </a>
            </li>
             <li className={s.header_right_social_item}>
              <a>
                <PhoneIcon/>
              </a>
              </li>
               <li className={s.header_right_social_item}>
              <a>
                <FacebookIcon/>
              </a>
              </li>
<li className={s.header_right_social_item}>
                <a>
                  <TelegramIcon/>
                </a>
                </li>
          </ul>
          </div>
      </div>
    </header>
  )
}
 export default Header