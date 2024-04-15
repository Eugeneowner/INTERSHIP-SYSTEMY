import { useEffect, useState } from 'react'
import './App.css'
import Loader from './Components/Loader/loader'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/main'
import OrderPage from './pages/order'
import FinishOrder from './pages/finish/finish'
import { useSelector } from 'react-redux'
import { changeLanguage } from 'i18next'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const currentLanguage = useSelector(state=>state.languages.current)
  console.log(currentLanguage)
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
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
