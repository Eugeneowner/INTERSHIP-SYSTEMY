import { useSelector } from "react-redux"
import s from "./finishItem.module.scss"
const FinishItem = ({name}) => { 
    const value = useSelector(state => state.order.info[name]) 
    return (
        <li className={s.item}> 
            <span className={s.item_bold}>{name}</span>{value}
        </li>
    )
}

export default FinishItem