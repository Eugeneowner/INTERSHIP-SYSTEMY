
import { TransportIcon, TruckIcon } from "../Assets/StepsIcons"
import s from "./StepItem.module.scss"
const StepItem = ({title,text, theme}) => {
  return ( 
    <li className={`${s.item} ${theme === "yellow" ? s.item_yellow : s.item_orange}`}>
      {
        theme === "yellow"
        ? <TransportIcon/>
        : <TruckIcon/>
      }
      <h2 className={s.item_title}>{title}</h2>
      <p className={s.item_text}>{text}</p>
    </li>
  )
}

export default StepItem