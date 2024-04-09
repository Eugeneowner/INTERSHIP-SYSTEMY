import s from "./loader.module.scss";
const Loader = () => {
  return (
    <section className={s.container}>
      <div className={s.loader}></div>
    </section>
  )
}

export default Loader