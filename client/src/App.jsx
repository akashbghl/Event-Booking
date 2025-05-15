import './App.css'
import Navbar from './components/Navbar'
import EventSection from './components/EventSection'
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom'
import AdminLogin from './components/AdminLogin'
import AdminDashboard from './components/AdminDashboard'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element= {<EventSection />} />
        <Route path='/adminLogin' element = {<AdminLogin />} />
        <Route path='/admin/dashboard' element = {<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
