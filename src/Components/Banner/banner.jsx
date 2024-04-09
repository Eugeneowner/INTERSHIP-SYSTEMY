import Header from "../Header/header";
import s from "./banner.module.scss";

const Banner = () => { 
  return ( 
    <section className={s.banner}>
      <Header/>
      <h1 className={s.banner_name}>INTERSHIP SYSTEMY</h1>
      <h2 className={s.banner_description}> 
Відправити посилку в Україну - це просто. Ми зробимо доставку безтурботною та приємною.</h2>
<h3 className={s.banner_description_mission}> Наша місія - забезпечити клієнтам максимальну безпеку і впевненість, гарантуючи надійність і високий рівень послуг доставки, які дозволяють їм відчувати себе розслабленими і захищеними.</h3>
      <button className={s.banner_button}>Створити відправлення</button>
    </section>
  )
}

export default Banner