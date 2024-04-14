import { useSelector } from "react-redux";
import s from "./plan.module.scss";
const Plan = () => {
  const { plan } = useSelector((state) => state.order);
  const { weight, price } = useSelector((state) => {
    return state.services.list.filter((item) => item.id === plan)[0];
  });

  return (
    <div className={s.plan}>
      <h2 className={s.plan_title}>Ваш тариф</h2>
      <p className={s.plan_weight}>{weight} до кг</p>
      <h3 className={s.plan_price}>{price} PLN</h3>
    </div>
  );
};

export default Plan;



