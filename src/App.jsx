import { useEffect, useState } from 'react'
import './App.css'
import Loader from './Components/Loader/loader'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/main'
import OrderPage from './pages/order'
import FinishOrder from './pages/finish/finish'

function App() {
  const [isLoading, setIsLoading] = useState(true)
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
