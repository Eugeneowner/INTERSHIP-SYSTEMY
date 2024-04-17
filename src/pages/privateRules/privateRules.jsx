import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";

import s from "./privateRules.module.scss"
import Rules from "../../Components/Rules/rules";
import Restrictions from "../../Components/restrictions/restrictions";

const PrivateRules = () => {
  return (
    <>
        <Header/>
        <section className={s.section}>
            <Rules/>
            <Restrictions/>
        </section>
        <Footer/>
    </>
  );
};

export default PrivateRules;
