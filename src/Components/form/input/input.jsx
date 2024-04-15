import { useDispatch, useSelector } from "react-redux";
import s from "./input.module.scss";
import { changeFormInput } from "../../../redux/slices/order";
import { t } from "i18next";
const InputForm = ({ label, placeholder, name, isError, size, checkbox }) => {

  const value = useSelector((state) => state.order.info[name]);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(
      changeFormInput({
        type: name,
        value,
      })
    );
  };
  const handleChangeCheckBox = (checked) => {
    dispatch(changeFormInput({ value: checked, type: checkbox.name }));
  };
  return (
    <label className={`${s.item} ${size === "big" && s.item_big}`}>
      <p className={s.item_text}>{t(`order.${name}`)}</p>
      {checkbox && (
        <label className={s.item_check}>
          <input
            className={s.item_check_input}
            type="checkbox"
            
            onChange={(e) => handleChangeCheckBox(e.target.checked)}
          />
          <p className={s.item_check_text}>{t("order.isRich150")}</p>
        </label>
      )}
      <input
        onChange={(e) => handleChange(e.target.value)}
        className={`${s.item_input} ${isError && s.error}`}
        placeholder={placeholder}
        value={value}
      />
      {isError && (
        <p className={s.errorText}>{t(`order.error`)}</p>
      )}
    </label>
  );
};

export default InputForm;
