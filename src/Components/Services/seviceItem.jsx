import { BoxIcon } from "../Assets/Icons"
import s from "./services.module.scss"
const ServiceItem = ({price,weight}) => {
  return ( 
    <li className={s.services_list_item}>
      <BoxIcon/>
      <h3 className={s.services_list_item_weight}>до {weight} кг</h3>
      <h2 className={s.services_list_item_price}>{price} PLN</h2>
    <button className={s.services_list_item_button}>Обрати</button>
    </li>
  )
}

export default ServiceItem