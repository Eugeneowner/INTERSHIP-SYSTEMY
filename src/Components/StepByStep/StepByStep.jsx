

import { StepsBgIcon } from "../Assets/StepsIcons"
import s from "./StepByStep.module.scss"
import StepItem from "./StepItem"
const StepByStep = () => {
  const stepsList = [
    {
      id:1,
      title: "1 крок",
      text: "Відправляєте посилку на поштовий склад у Польщі.",
      theme: "orange",
    },
    {
      id:2,
      title: "2 крок",
      text: "На сайті вказуєте дані відправника і отримувача.",
      theme: "yellow"
    },
    {
      id:3,
      title: "3 крок",
      text: "Вказуєте вміст і оціночну вартість посилки.",
      theme: "orange",
    },
    {
      id:4,
      title: "4 крок",
      text: "Оплачуєте згідно обраного тарифу.",
      theme: "yellow",
    },
    {
      id:5,
      title: "5 крок",
      text: "Ми веземо вашу посилку до вказаного відділення Укрпошти отримувача",
      theme:"orange",
    }
      
  ]
  return (
  <section className={s.section}>
    <h2 className={s.title}>Як працює доставка</h2>
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