import { AnchorLink } from "react-anchor-navigation";
import Header from "../Header/header";
import s from "./banner.module.scss";

import {t} from "i18next"

const Banner = () => {
  return (
    <section className={s.banner}>
      <Header />
      <h1 className={s.banner_name}>INTERSHIP SYSTEMY</h1>
      <h2 className={s.banner_description}>{t("banner.description")}</h2>
      <h3 className={s.banner_description_mission}>{t("banner.mission")}</h3>
      <AnchorLink className={s.link} href="#sevices">
      <button className={s.banner_button}>{t("banner.button")}</button>
      </AnchorLink>
    </section>
  );
};

export default Banner;
