import s from "./header.module.scss";
import {
  EmailIcon,
  TelegramIcon,
  PhoneIcon,
  FacebookIcon,
  UndoIcon,
  MenuIcon,
  CloseIcon,
} from "../Assets/Icons";
import mailIcon from "../../Img/icons/mailWhite.svg";
import facebookIcon from "../../Img/icons/facebookWhite.svg";
import { PolandIcon, RussiaIcon, UkraineIcon } from "../Assets/countries";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguages } from "../../redux/slices/languages";
import { t } from "i18next";
import { changeMenuStatus } from "../../redux/slices/menu_m";
import Nav_m from "../Nav_m/nav_m";

const Header = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const navIsOpen = useSelector((state) => state.menu_m.isOpen);

  const handleChangeLanguage = (language) => {
    dispatch(changeLanguages(language));
  };

  const handleChangeNav = () => {
    dispatch(changeMenuStatus());
  };

  const navList = useSelector((state) => state.nav.list);
  return (
    <header className={s.header}>
      <div className={s.header_wrapper}>
        <div className={s.header_left}>
          <img
            className={s.header_left_logo}
            src="https://intershipsystemy.pl/Img/logo.png"
            alt="logo"
          />
        </div>
        <div className={s.header_right}>
          <button className={s.header_right_button}>
            {t("nav.location.part1")}{" "}
            <span className={s.header_right_button_tracking}>
              {t("nav.location.part2")}
            </span>
          </button>
          <ul className={s.header_right_social}>
            <li className={s.header_right_social_item}>
              <a className={s.header_right_social_item_link}>
                <PhoneIcon />
              </a>
            </li>
            <li className={s.header_right_social_item}>
              <a className={s.header_right_social_item_link}>
                <TelegramIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.header_bottom}>
        <button
          onClick={handleChangeNav}
          className={`${s.header_bottom_btn} ${
            navIsOpen && s.header_bottom_btn_close
          }`}
        >
          {!navIsOpen ? <MenuIcon /> : <CloseIcon theme="yellow" />}
        </button>
        <nav className={s.header_bottom_nav}>
          {pathname === "/" ? (
            navList.map((item) => (
              <Link
                key={item.name}
                to={item.url}
                className={s.header_bottom_nav_item}
              >
                {t(`nav.${item.name}`)}
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
            <a href="">
              <img
                className={s.header_bottom_btns_item_img}
                src={facebookIcon}
                alt=""
              />
            </a>
          </li>
          <li className={s.header_bottom_btns_item}>
            <a href="mailto:office@intershipsystemy.pl">
              <img
                className={s.header_bottom_btns_item_img}
                src={mailIcon}
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
      {navIsOpen && <Nav_m />}
    </header>
  );
};
export default Header;
