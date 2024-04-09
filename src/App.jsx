import { useEffect, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/banner'
import Footer from './Components/Footer/footer'
import Loader from './Components/Loader/loader'
import Services from './Components/Services/services'
import StepByStep from './Components/StepByStep/StepByStep'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (isLoading) {
      setTimeout(()=>{setIsLoading(false)}, 500)
    }
  }, [isLoading])
  return (
    <main>
     { isLoading && <Loader/>}
      <Banner/>
      <Services/>
      <StepByStep/>
      <Footer/>
    </main>
  )
}

export default App
