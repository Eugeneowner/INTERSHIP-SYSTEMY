import { useSelector } from "react-redux"
import s from "./finishItem.module.scss"
import { useTranslation } from "react-i18next";
const FinishItem = ({name}) => { 
    const { t } = useTranslation();
    const value = useSelector(state => state.order.info[name]) 
    return (
        <li className={s.item}> 
            <p className={s.item_text}>
             <span className={s.item_bold}>{t(`order.${name}`)}:</span>{value}
            </p>
        </li>
    )
}

export default FinishItem