import { useEffect, useState } from 'react'
import './App.css'
import Loader from './Components/Loader/loader'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/main'
import OrderPage from './pages/order'
import FinishOrder from './pages/finish/finish'
import { useSelector } from 'react-redux'
import { changeLanguage } from 'i18next'
import PrivateRules from './pages/privateRules/privateRules'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const currentLanguage = useSelector(state=>state.languages.current)
  changeLanguage(currentLanguage)
  useEffect(() => {
    if (isLoading) {
      setTimeout(()=>{setIsLoading(false)}, 500)
    }
  }, [isLoading])
  return (
    <BrowserRouter>
      <main>
      { isLoading && <Loader/>}
        <Routes>
          <Route path="/" element={<MainPage/>}/>

          <Route path="/order" element={<OrderPage/>}/>
          <Route path="/order-finish" element={<FinishOrder/>}/>

          <Route path="/private-rules" element={<PrivateRules/>}/>

        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
