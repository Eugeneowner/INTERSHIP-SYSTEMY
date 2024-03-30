import Header from "../Header/header";
import s from "./banner.module.scss";

const Banner = () => { 
  return ( 
    <section className={s.banner}>
      <Header/>
      <h1 className={s.banner_name}>INTERSHIP SYSTEMY</h1>
      <h2 className={s.banner_description}> 
We make delivery carefree and enjoyable.</h2>
<h3 className={s.banner_description_mission}> Our mission is to provide customers with maximum safety and confidence by guaranteeing reliability and a high level of delivery services that make them feel relaxed and safe.</h3>
      <button className={s.banner_button}>Create order</button>
    </section>
  )
}

export default Banner