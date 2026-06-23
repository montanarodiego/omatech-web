import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const WA_LINK = 'https://wa.me/5491171416315?text=Hola!%20Quiero%20hablar%20con%20ventas%20de%20OMA%20tech.'

const productLinks = [
  { index: '01', label: 'POS', to: '/pos' },
  { index: '02', label: 'VanderBus', to: '/vanderbus' },
]

function SignalBars() {
  return (
    <svg width="24" height="17" viewBox="0 0 26 18" fill="none" aria-hidden="true">
      <rect x="0" y="0"  width="11" height="3" rx="0.5" fill="#2563EB" />
      <rect x="0" y="5"  width="16" height="3" rx="0.5" fill="#2563EB" />
      <rect x="0" y="10" width="21" height="3" rx="0.5" fill="#2563EB" />
      <rect x="0" y="15" width="26" height="3" rx="0.5" fill="#2563EB" />
    </svg>
  )
}

function Logo() {
  return (
    <div className="leading-none select-none">
      <div className="flex items-center gap-2.5">
        <span
          className="font-display font-bold text-bone"
          style={{ fontSize: '21px', letterSpacing: '-0.04em' }}
        >
          OMA
        </span>
        <SignalBars />
      </div>
      <span
        className="font-mono font-medium text-amber block mt-1"
        style={{ fontSize: '9px', letterSpacing: '0.32em' }}
      >
        TECH.
      </span>
    </div>
  )
}

const linkClasses = [
  'group relative flex items-baseline gap-1.5 font-mono text-[13px] text-ink-300',
  'hover:text-bone transition-colors duration-200 cursor-pointer bg-transparent border-none p-0',
].join(' ')

function CtaButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 bg-amber text-ink pl-4 pr-2 py-2 font-mono text-[12px] font-semibold uppercase tracking-wide transition-colors duration-200 hover:bg-bone active:scale-[0.98] ${className}`}
    >
      Hablar con ventas
      <span className="grid place-items-center w-6 h-6 bg-ink/15 text-ink transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
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
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b',
        scrolled
          ? 'bg-ink/85 backdrop-blur-md border-ink-line'
          : 'bg-transparent border-transparent',
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

        <div className="hidden md:flex items-center gap-9">
          {productLinks.map((l) => {
            const active = location.pathname === l.to
            return (
              <Link key={l.to} to={l.to} className={linkClasses} aria-current={active ? 'page' : undefined}>
                <span className="text-ink-500 text-[10px]">{l.index}</span>
                <span className={active ? 'text-bone' : ''}>{l.label}</span>
                <span
                  className={[
                    'absolute -bottom-1.5 left-0 h-px bg-amber transition-all duration-300',
                    active ? 'w-full' : 'w-0 group-hover:w-full',
                  ].join(' ')}
                />
              </Link>
            )
          })}
          <button onClick={goContacto} className={linkClasses}>
            <span className="text-ink-500 text-[10px]">03</span>
            <span>Contacto</span>
            <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-amber transition-all duration-300 group-hover:w-full" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          {/* Indicador "en línea" — panel de instrumentos */}
          <span className="hidden lg:flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500 mr-2">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-amber opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-amber" />
            </span>
            AR · respondemos hoy
          </span>

          <CtaButton className="hidden sm:inline-flex" />

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] hover:bg-white/5 transition-colors"
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
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="md:hidden overflow-hidden bg-ink/98 backdrop-blur-md border-b border-ink-line"
          >
            <div className="px-6 py-6 flex flex-col">
              {productLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline gap-3 py-4 border-b border-ink-line font-display font-medium text-2xl text-bone"
                >
                  <span className="font-mono text-[11px] text-ink-500">{l.index}</span>
                  {l.label}
                </Link>
              ))}
              <button
                onClick={goContacto}
                className="flex items-baseline gap-3 py-4 border-b border-ink-line font-display font-medium text-2xl text-bone text-left cursor-pointer bg-transparent border-x-0 border-t-0"
              >
                <span className="font-mono text-[11px] text-ink-500">03</span>
                Contacto
              </button>
              <div className="pt-6">
                <CtaButton className="w-full justify-between" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
