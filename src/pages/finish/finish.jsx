import { useSelector } from "react-redux";
import s from "./finish.module.scss";
import FinishItem from "../../Components/FinishItem/finishItem";
const FinishOrder = () => {
  const { pagesInfo } = useSelector((state) => state.order);
  const tableTitle = [
    "Данные отправителя",
    "Данные получателя",
    "Информация о посылке"
  ]
  return (
    <div className={s.container}>
      <h1 className={s.container_title}>
        ГОТОВО! Пожалуйста, проверьте данные
      </h1>
      <div className={s.wrapper}>
        {pagesInfo.map((part,index) => (
          <div className={s.containerPart}>
            <h2 className={s.containerPart_title}>{tableTitle[index]}</h2>
            <ul className={s.part}>
              {part.map((item) => (
                <FinishItem name={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={s.btns}>
        <button className={`${s.btns_item} ${s.btns_item_back}`}>Назад</button>
        <button className={`${s.btns_item} ${s.btns_item_pay}`}>Оплатить</button>
      </div>
    </div>
  );
};

export default FinishOrder;
