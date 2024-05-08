

import { useSelector } from "react-redux"
import { StepsBgIcon } from "../Assets/StepsIcons"
import {t} from "i18next"
import s from "./StepByStep.module.scss"
import StepItem from "./StepItem"
const StepByStep = () => {
  const stepsList = useSelector(state => state.stepByStep.list)
  return (
  <section className={s.section} id="stepByStep">
    <h2 className={s.title}>{t("stepByStep.title")}</h2>
    <div className={s.steps}>
    <span className={s.steps_decor}><StepsBgIcon/></span>
      <ul className={s.steps_list}>
        {
          stepsList.map(step => <StepItem key={step.id} id={step.id} name={step.name}/>)
        }
      </ul>
    </div>
  </section>
  )
}
export default StepByStep