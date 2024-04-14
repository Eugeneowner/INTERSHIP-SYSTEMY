import { useDispatch, useSelector } from "react-redux";
import s from "./input.module.scss";
import { changeFormInput } from "../../../redux/slices/order";
const InputForm = ({ label, placeholder, name, isError, size, checkbox }) => {
  console.log(`${name} - ${size}`);
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
      <p className={s.item_text}>{label}</p>
      {checkbox && (
        <label className={s.item_check}>
          <input
            className={s.item_check_input}
            type="checkbox"
            checked={useSelector((state) => state.order.info[checkbox.name])}
            onChange={(e) => handleChangeCheckBox(e.target.checked)}
          />
          <p className={s.item_check_text}>{checkbox.text}</p>
        </label>
      )}
      <input
        onChange={(e) => handleChange(e.target.value)}
        className={`${s.item_input} ${isError && s.error}`}
        placeholder={placeholder}
        value={value}
      />
      {isError && (
        <p className={s.errorText}>Данное поле должно быть заполнено</p>
      )}
    </label>
  );
};

export default InputForm;
