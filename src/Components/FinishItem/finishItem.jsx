import { useSelector } from "react-redux"
import s from "./finishItem.module.scss"
const FinishItem = ({name}) => { 
    const value = useSelector(state => state.order.info[name]) 
    return (
        <li className={s.item}> 
            <p className={s.item_text}>
             <span className={s.item_bold}>{name}:</span>{value}
            </p>
        </li>
    )
}

export default FinishItem