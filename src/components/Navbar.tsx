import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const WA_LINK = 'https://wa.me/5491171416315?text=Hola!%20Quiero%20hablar%20con%20ventas%20de%20OMA%20tech.'

const productLinks = [
  { label: 'POS', to: '/pos' },
  { label: 'VanderBus', to: '/vanderbus' },
]

function SignalBars() {
  return (
    <svg width="26" height="18" viewBox="0 0 26 18" fill="none" aria-hidden="true">
      <rect x="0" y="0"  width="11" height="3" rx="1.5" fill="#2563EB" />
      <rect x="0" y="5"  width="16" height="3" rx="1.5" fill="#2563EB" />
      <rect x="0" y="10" width="21" height="3" rx="1.5" fill="#2563EB" />
      <rect x="0" y="15" width="26" height="3" rx="1.5" fill="#2563EB" />
    </svg>
  )
}

function Logo() {
  return (
    <div className="leading-none select-none">
      <div className="flex items-center gap-2">
        <span
          className="font-display font-black text-bone"
          style={{ fontSize: '22px', letterSpacing: '-0.02em' }}
        >
          OMA
        </span>
        <SignalBars />
      </div>
      <span
        className="font-display font-bold text-amber block"
        style={{ fontSize: '10px', letterSpacing: '0.18em' }}
      >
        TECH.
      </span>
    </div>
  )
}

const linkClasses = [
  'relative font-body font-medium text-ink-300 hover:text-bone',
  'transition-colors duration-300 cursor-pointer bg-transparent border-none',
  'text-base pb-0.5',
  "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:right-1/2",
  'after:h-[1.5px] after:bg-amber after:transition-all after:duration-300',
  'hover:after:left-0 hover:after:right-0',
].join(' ')

function CtaButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden border border-amber text-amber rounded-lg px-4 py-2 font-body font-semibold text-sm transition-colors duration-150 ${className}`}
    >
      <span className="absolute inset-0 bg-amber origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
      <span className="relative z-10 flex items-center gap-1.5 group-hover:text-ink transition-colors duration-150">
        Hablar con ventas
        <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          →
        </span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // "Contacto": scroll to the section if we're already home, otherwise navigate
  // home with the #contacto hash (ScrollManager handles the scroll on arrival).
  function goContacto() {
    setMenuOpen(false)
    if (location.pathname === '/') {
      document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/#contacto')
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-ink-line' : 'bg-transparent',
      ].join(' ')}
    >
      <div className="max-w-content mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="OMA tech — inicio"
        >
          <Logo />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {productLinks.map((l) => (
            <Link key={l.to} to={l.to} className={linkClasses}>
              {l.label}
            </Link>
          ))}
          <button onClick={goContacto} className={linkClasses}>
            Contacto
          </button>
        </div>

        <div className="flex items-center gap-3">
          <CtaButton className="hidden sm:inline-flex" />

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-md hover:bg-white/5 transition-colors"
          >
            <span className={`block w-5 h-[1.5px] bg-bone transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-bone transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-bone transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-ink/98 backdrop-blur-md border-b border-ink-line"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {productLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMenuOpen(false)}
                  className="text-left py-3 font-body font-medium text-2xl text-ink-300 hover:text-bone transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <button
                onClick={goContacto}
                className="text-left py-3 font-body font-medium text-2xl text-ink-300 hover:text-bone transition-colors cursor-pointer bg-transparent border-none"
              >
                Contacto
              </button>
              <div className="pt-4">
                <CtaButton className="w-full justify-center" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
