import { useSelector } from "react-redux";
import s from "./nav_m.module.scss";
import { Link } from "react-router-dom";

import { t } from "i18next";

const Nav_m = () => {
  const navList = useSelector((state) => state.nav.list);
  return (
    <nav className={s.nav}>
      <ul className={s.nav_list}>
        {navList.map((item) => (
          <li key={item.name} className={s.nav_list_item}>
            <Link to={item.url} className={s.nav_list_item_link}>
              {t(`nav.${item.name}`)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav_m;
