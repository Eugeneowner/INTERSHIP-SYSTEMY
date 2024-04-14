import { useSelector } from "react-redux"
import s from "./services.module.scss"
import ServiceItem from "./seviceItem"

const Services = () => {
  const servicesList = useSelector(state => state.services.list)
  return(
    <section className={s.services}>
      <h2 className={s.services_title}>Оформити відправку – обери вагу посилки.</h2>
      <h3 className={s.services_description}>Кур'єри відрізняються від звичайних поштових служб такими характеристиками, як швидкість, безпека, відстеження.</h3>
      <ul className={s.services_list}>
        {servicesList.map(service => <ServiceItem key={service.id} id={service.id} price={service.price} weight={service.weight}/>)}

      </ul>
    </section>
  )
} 

export default Services