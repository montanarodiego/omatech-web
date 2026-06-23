import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const destinations = [
  { index: '01', label: 'Inicio', to: '/' },
  { index: '02', label: 'OmaTech POS', to: '/pos' },
  { index: '03', label: 'VanderBus Logística', to: '/vanderbus' },
]

export default function NotFound() {
  return (
    <>
      <section className="relative min-h-[100svh] flex items-center bg-ink overflow-hidden px-6 pt-32 pb-24">
        <div className="absolute inset-0 tech-grid grid-fade pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-content mx-auto w-full grid lg:grid-cols-12 gap-x-10 gap-y-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-7">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
                Error / 404
              </span>
              <span className="h-px flex-1 max-w-[120px] bg-ink-line" />
            </div>
            <h1
              className="font-display font-bold text-bone leading-[0.9] tracking-[-0.04em]"
              style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)' }}
            >
              404
            </h1>
            <p className="font-body text-ink-300 text-lg leading-relaxed max-w-[48ch]">
              Esta página no existe o se movió. Revisá la dirección o volvé a una sección conocida.
            </p>
            <Link
              to="/"
              className="group inline-flex items-center gap-3 self-start bg-amber text-ink pl-5 pr-2 py-3 font-mono text-[13px] font-semibold uppercase tracking-wide transition-colors duration-200 hover:bg-bone active:scale-[0.98]"
            >
              Volver al inicio
              <span className="grid place-items-center w-7 h-7 bg-ink/15 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </Link>
          </div>

          {/* Destinos */}
          <nav className="lg:col-span-5 flex flex-col border-t border-ink-line" aria-label="Destinos">
            {destinations.map((d) => (
              <Link
                key={d.to}
                to={d.to}
                className="group flex items-center gap-4 py-5 border-b border-ink-line transition-colors duration-200 hover:bg-white/[0.025] -mx-3 px-3"
              >
                <span className="font-mono text-[11px] tabular text-ink-700 group-hover:text-amber transition-colors duration-200">
                  {d.index}
                </span>
                <span className="font-display font-medium text-bone" style={{ fontSize: '18px' }}>
                  {d.label}
                </span>
                <span className="ml-auto font-mono text-ink-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-amber">
                  →
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </section>
      <Footer />
    </>
  )
}
