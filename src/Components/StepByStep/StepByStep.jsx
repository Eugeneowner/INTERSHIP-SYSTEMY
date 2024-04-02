

import { StepsBgIcon } from "../Assets/StepsIcons"
import s from "./StepByStep.module.scss"
import StepItem from "./StepItem"
const StepByStep = () => {
  const stepsList = [
    {
      id:1,
      title: "title 1",
      text: "Some text1",
      theme: "orange",
    },
    {
      id:2,
      title: "title 2",
      text: "Some text2",
      theme: "yellow",
    },
    {
      id:3,
      title: "title 3",
      text: "Some text3",
      theme: "orange",
    },
    {
      id:4,
      title: "title 4",
      text: "Some text4",
      theme: "yellow",
    },
    {
      id:5,
      title: "title 5",
      text: "Some text5",
      theme:"orange",
    }
      
  ]
  return (
  <section className={s.section}>
    <h2 className={s.title}>Как это работает</h2>
    <div className={s.steps}>
    <StepsBgIcon/>
      <ul className={s.steps_list}>
        {
          stepsList.map(step => <StepItem key={step.id} title={ step.title } text={step.text} theme={step.theme}/>)
        }
      </ul>
    </div>
  </section>
  )
}
export default StepByStep