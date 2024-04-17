import s from "./title.module.scss";

const Title = ({ text }) => {
  return (
    <div className={s.container}>
      <hr className={s.line} />
      <h2 className={s.content}>{text}</h2>
      <hr className={s.line} />
    </div>
  );
};

export default Title;
