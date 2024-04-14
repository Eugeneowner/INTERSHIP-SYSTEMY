import { useSelector } from "react-redux";
import s from "./finish.module.scss";
import FinishItem from "../../Components/FinishItem/finishItem";
const FinishOrder = () => {
  const { pagesInfo } = useSelector((state) => state.order);
  return (
    <div className={s.container}>
      <h1 className={s.container_title}>ГОТОВО! Пожалуйста, проверьте данные</h1>
      <div className={s.wrapper}>
        {pagesInfo.map((part) => (
          <ul className={s.part}>
            {part.map((item) => (
              <FinishItem name={item} />
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default FinishOrder;
