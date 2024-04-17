import s from "./restrictions.module.scss";
import Title from "../Assets/title/title";

const Restrictions = () => {
  return (
    <div className={s.container}>
      <Title text="Ограничения стоимости посылки" />

      <p className={s.text}>
        В соответствии с законодательством Украины отправления стоимостью более
        150 евро подлежат таможенному контролю и уплате таможенных платежей.
        Поэтому в целях экономии времени и денег рекомендуем формировать посылки
        так, чтобы стоимость одной не превышала указанной суммы.
      </p>
    </div>
  );
};

export default Restrictions;
