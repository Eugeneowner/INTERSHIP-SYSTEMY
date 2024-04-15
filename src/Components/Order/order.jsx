import { useDispatch, useSelector } from "react-redux";
import { BoxIcon, CloseIcon } from "../Assets/Icons";
import InputForm from "../form/input/input";
import s from "./order.module.scss";
import Plan from "./plan/plan";
import { nextPage, prevPage } from "../../redux/slices/order";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";
const Order = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentPage, error } = useSelector((state) => state.order);
  const formList = useSelector((state) => state.order.pages[currentPage - 1]);
  const currentTitle = useSelector(
    (state) => state.order.pagesTitle[currentPage - 1]
  );

  const handleNextPage = () => {
    if (currentPage !== 3) {
      dispatch(nextPage());
    } else {
      navigate("/order-finish");
    }
  };

  const handlePrevPage = () => {
    dispatch(prevPage());
  };

  const handleCloseButton = () => {
    navigate("/");
  };

  return (
    <section className={s.section}>
      <div className={s.order}>
        <button onClick={handleCloseButton} className={s.order_btnClose}>
          <CloseIcon />
        </button>
        <div className={s.order_title}>
          <BoxIcon />
          <h1 className={s.order_title_text}>{t(`order.${[currentTitle]}`)}</h1>
        </div>
        <form className={s.order_form}>
          {formList.map((item, index) => (
            <InputForm
              key={index}
              label={item.label}
              placeholder={item.placeholder}
              name={item.name}
              isError={item.name === error}
              size={item.size === "big" ? "big" : "normal"}
              checkbox={item.checkbox ? item.checkbox : false}
            />
          ))}
        </form>
        <div className={s.order_bottom}>
          <Plan />
          <div className={s.order_bottom_btns}>
            <button
              onClick={handlePrevPage}
              className={`${s.order_bottom_btn} ${
                currentPage === 1 && s.order_bottom_btn_disabled
              }`}
            >
              {t(`order.btns.back`)}
            </button>
            <button onClick={handleNextPage} className={s.order_bottom_btn}>
              {currentPage !== 3
                ? t("order.btns.next")
                : t("order.btns.create")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
