import { TransportIcon, TruckIcon } from "../Assets/StepsIcons";
import s from "./StepItem.module.scss";

import { t } from "i18next";
const StepItem = ({ id, name }) => {
  return (
    <li className={`${s.item} ${id % 2 === 0 ? s.item_yellow : s.item_orange}`}>
      {id % 2 === 0 ? <TransportIcon /> : <TruckIcon />}
      <h2 className={s.item_title}>
        {id} {t(`stepByStep.stepName`)}
      </h2>
      <p className={s.item_text}>{t(`stepByStep.${name}`)}</p>
    </li>
  );
};

export default StepItem;
