import { useDispatch } from "react-redux";
import { BoxIcon } from "../Assets/Icons";
import s from "./services.module.scss";
import { changePlan, resetPage } from "../../redux/slices/order";
import { useNavigate } from "react-router-dom";
import {t} from "i18next"
const ServiceItem = ({ price, weight, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(changePlan(id));
    dispatch(resetPage())
    navigate("/order");
  };
  return (
    <li className={s.services_list_item}>
      <BoxIcon />
      <h3 className={s.services_list_item_weight}>{t("service.weight.part1")} {weight} {t("service.weight.part2")}</h3>
      <h2 className={s.services_list_item_price}>{price} PLN</h2>
      <button onClick={handleClick} className={s.services_list_item_button}>
        {t("service.button")}
      </button>
    </li>
  );
};

export default ServiceItem;
