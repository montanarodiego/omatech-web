import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollManager from './components/ScrollManager'
import Home from './pages/Home'
import POS from './pages/POS'
import VanderBus from './pages/VanderBus'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pos" element={<POS />} />
        <Route path="/vanderbus" element={<VanderBus />} />
      </Routes>
    </BrowserRouter>
  )
}
