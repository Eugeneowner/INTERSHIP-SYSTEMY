import { useSelector } from "react-redux";
import s from "./finish.module.scss";
import FinishItem from "../../Components/FinishItem/finishItem";
import { t } from "i18next";
import Header from '../../Components/Header/header';
const FinishOrder = () => {
  const { pagesInfo } = useSelector((state) => state.order);
  const tableTitle = [
    "sender",
    "recipient",
    "aboutDelivery"
  ]
  return (
    <div className={s.container}>
      <Header/>
      <h1 className={s.container_title}>
        {t("order.title")}
        
      </h1>
      <div className={s.wrapper}>
        {pagesInfo.map((part,index) => (
          <div className={s.containerPart}>
            <h2 className={s.containerPart_title}>{t(`order.tableDescription.${tableTitle[index]}`)}</h2>
            <ul className={s.part}>
              {part.map((item) => (
                <FinishItem name={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={s.btns}>
        <button className={`${s.btns_item} ${s.btns_item_back}`}>{t("order.btns.back")}</button>
        <button className={`${s.btns_item} ${s.btns_item_pay}`}>{t("order.btns.pay")}</button>
      </div>
    </div>
  );
};

export default FinishOrder;
