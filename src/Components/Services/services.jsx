import { useSelector } from "react-redux"
import {t} from "i18next"

import s from "./services.module.scss"
import ServiceItem from "./seviceItem"

const Services = () => {
  const servicesList = useSelector(state => state.services.list)
  return(
    <section className={s.services}>
      <h2 className={s.services_title}>{t("service.title")}</h2>
      <h3 className={s.services_description}>{t("service.description")}</h3>
      <ul className={s.services_list}>
        {servicesList.map(service => <ServiceItem key={service.id} id={service.id} price={service.price} weight={service.weight}/>)}

      </ul>
    </section>
  )
} 

export default Services