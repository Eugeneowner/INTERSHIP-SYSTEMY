import s from "./header.module.scss";
import logo from "../../Img/logo.png";
import {
  EmailIcon,
  TelegramIcon,
  PhoneIcon,
  FacebookIcon,
  UndoIcon,
} from "../Assets/Icons";
import mailIcon from "../../Img/icons/mailWhite.svg";
import facebookIcon from "../../Img/icons/facebookWhite.svg";
import { PolandIcon, RussiaIcon, UkraineIcon } from "../Assets/countries";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeLanguages } from "../../redux/slices/languages";
import { t } from "i18next";

const Header = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleChangeLanguage = (language) => {
    dispatch(changeLanguages(language));
  };
  const nav = [
    "aboutUs",
    "howItWorks",
    "bissnesClient",
    "privateClient",
    "contacts",
  ];
  return (
    <header className={s.header}>
      <div className={s.header_wrapper}>
        <div className={s.header_left}>
          <img className={s.header_left_logo} src={logo} alt="logo" />
        </div>
        <div className={s.header_right}>
          <button className={s.header_right_button}>
            {t("nav.location.part1")}{" "}
            <span className={s.header_right_button_tracking}>
              {t("nav.location.part2")}
            </span>
          </button>
          <ul className={s.header_right_social}>
            {/* <li className={s.header_right_social_item}>
              <a>
                <EmailIcon/>
              </a>
            </li> */}
            <li className={s.header_right_social_item}>
              <a className={s.header_right_social_item_link}>
                <PhoneIcon />
              </a>
            </li>
            {/* <li className={s.header_right_social_item}>
              <a>
                <FacebookIcon/>
              </a>
              </li> */}
            <li className={s.header_right_social_item}>
              <a className={s.header_right_social_item_link}>
                <TelegramIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.header_bottom}>
        <nav className={s.header_bottom_nav}>
          {pathname === "/" ? (
            nav.map((item) => (
              <Link key={item} className={s.header_bottom_nav_item}>
                {t(`nav.${item}`)}
              </Link>
            ))
          ) : (
            <Link to="/" className={s.header_bottom_nav_back}>
              <p className={s.header_bottom_nav_back_text}>{t(`nav.back`)}</p>
              <UndoIcon />
            </Link>
          )}
        </nav>
        <ul className={s.header_bottom_btns}>
          <li className={s.header_bottom_btns_languages}>
            <button
              onClick={() => handleChangeLanguage("ua")}
              className={s.header_bottom_btns_languages_item}
            >
              <UkraineIcon />
            </button>
            <button
              onClick={() => handleChangeLanguage("pl")}
              className={s.header_bottom_btns_languages_item}
            >
              <PolandIcon />
            </button>
            <button
              onClick={() => handleChangeLanguage("ru")}
              className={s.header_bottom_btns_languages_item}
            >
              <RussiaIcon />
            </button>
          </li>
          <li className={s.header_bottom_btns_item}>
            <img
              className={s.header_bottom_btns_item_img}
              src={facebookIcon}
              alt=""
            />
          </li>
          <li className={s.header_bottom_btns_item}>
            <img
              className={s.header_bottom_btns_item_img}
              src={mailIcon}
              alt=""
            />
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
