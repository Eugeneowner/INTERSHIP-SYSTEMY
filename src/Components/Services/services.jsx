import s from "./services.module.scss"
import ServiceItem from "./seviceItem"

const Services = () => {
  const servicesList = [
    {
      id:1,
      price: 60,
      weight: 1
    },
    {
      id: 2,
      price:70,
      weight:5,
    },
    {
      id: 3,
      price:90,
      weight:10,
    },
    {
      id: 4,
      price:110,
      weight:30,
    }
  ]
  return(
    <section className={s.services}>
      <h2 className={s.services_title}>Оформити відправку – обери вагу посилки.</h2>
      <h3 className={s.services_description}>Кур'єри відрізняються від звичайних поштових служб такими характеристиками, як швидкість, безпека, відстеження.</h3>
      <ul className={s.services_list}>
        {servicesList.map(service => <ServiceItem key={service.id} price={service.price} weight={service.weight}/>)}

      </ul>
    </section>
  )
} 

export default Services