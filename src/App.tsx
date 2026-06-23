import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import ScrollManager from './components/ScrollManager'
import Home from './pages/Home'
import POS from './pages/POS'
import VanderBus from './pages/VanderBus'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
      {/* Salto al contenido — accesibilidad para teclado */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-amber focus:text-ink focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:font-semibold"
      >
        Saltar al contenido
      </a>

      {/* Grano fijo sobre toda la pantalla — rompe la planitud digital */}
      <div className="grain-overlay" aria-hidden="true" />
      <ScrollManager />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pos" element={<POS />} />
          <Route path="/vanderbus" element={<VanderBus />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      </MotionConfig>
    </BrowserRouter>
  )
}
