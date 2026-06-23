import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1]

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

const rise: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
}

const badges = [
  'Equipos certificados',
  'MDM desbloqueado',
  'Soporte incluido',
  'Envío inmediato',
]

const heroSpecs = [
  { k: 'Sellado', v: 'IP67' },
  { k: 'Escáner', v: '1D / 2D' },
  { k: 'Batería', v: '14 hs' },
  { k: 'Red', v: '4G LTE' },
]

export default function Hero() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center bg-ink overflow-hidden"
    >
      {/* Grilla blueprint — textura técnica, no glow */}
      <div className="absolute inset-0 tech-grid grid-fade pointer-events-none" aria-hidden="true" />
      {/* Hairline de acento vertical a la izquierda del contenido */}
      <div
        className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ink-line to-transparent pointer-events-none hidden lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-content mx-auto w-full px-6 pt-32 pb-24">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-14 items-center">
          {/* Columna de contenido */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col gap-7"
          >
            {/* Etiqueta de índice */}
            <motion.div variants={rise} className="flex items-center gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
                01 / Hardware + Software
              </span>
              <span className="h-px flex-1 max-w-[120px] bg-ink-line" />
            </motion.div>

            <motion.h1
              variants={rise}
              className="font-display font-bold text-bone leading-[0.95] tracking-[-0.04em] text-balance"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
            >
              Tecnología que resuelve
              <br className="hidden sm:block" />{' '}
              problemas <span className="text-amber">reales.</span>
            </motion.h1>

            <motion.p
              variants={rise}
              className="font-body text-ink-300 text-lg leading-relaxed max-w-[52ch]"
            >
              Hardware industrial certificado y software propio para empresas argentinas.
              Colectores Zebra con garantía y envío inmediato a todo el país.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={rise} className="flex flex-col sm:flex-row items-start gap-4 pt-1">
              <button
                onClick={() => scrollTo('#hardware')}
                className="group inline-flex items-center gap-3 bg-amber text-ink pl-5 pr-2 py-3 font-mono text-[13px] font-semibold uppercase tracking-wide transition-colors duration-200 hover:bg-bone active:scale-[0.98] cursor-pointer border-none"
              >
                Ver equipos
                <span className="grid place-items-center w-7 h-7 bg-ink/15 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </button>
              <button
                onClick={() => scrollTo('#software')}
                className="group inline-flex items-center gap-2 text-bone font-mono text-[13px] uppercase tracking-wide py-3 cursor-pointer bg-transparent border-none"
              >
                <span className="border-b border-ink-700 group-hover:border-amber transition-colors duration-200 pb-0.5">
                  Conocer el software
                </span>
                <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </motion.div>

            {/* Tira de specs / badges */}
            <motion.div variants={rise} className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-3">
              {badges.map((b, i) => (
                <span key={b} className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-ink-500">
                  {i > 0 && <span className="text-ink-line" aria-hidden="true">/</span>}
                  {b}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Panel de ficha técnica — double-bezel */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
            className="lg:col-span-5"
          >
            <div className="bg-white/[0.03] ring-1 ring-white/10 rounded-xl p-1.5">
              <div className="bg-ink-800 rounded-[0.4rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] overflow-hidden">
                {/* Encabezado del panel */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-ink-line">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-300">
                    Zebra TC56 — Ficha
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-amber bg-amber/10 px-2 py-0.5">
                    Más vendido
                  </span>
                </div>
                {/* Specs */}
                <ul className="divide-y divide-ink-line">
                  {heroSpecs.map((s) => (
                    <li key={s.k} className="flex items-center justify-between px-5 py-3.5">
                      <span className="font-mono text-[12px] uppercase tracking-wider text-ink-500">{s.k}</span>
                      <span className="font-mono text-[13px] text-bone tabular">{s.v}</span>
                    </li>
                  ))}
                </ul>
                {/* Pie con precio */}
                <div className="flex items-end justify-between px-5 py-4 border-t border-ink-line bg-white/[0.015]">
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink-500">Desde</span>
                    <span className="font-display font-bold text-bone tabular" style={{ fontSize: '24px', letterSpacing: '-0.02em' }}>
                      $ 915.000
                    </span>
                  </div>
                  <button
                    onClick={() => scrollTo('#hardware')}
                    className="font-mono text-[11px] uppercase tracking-wider text-amber hover:text-bone transition-colors cursor-pointer bg-transparent border-none"
                  >
                    Ver detalle →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-6 z-10 hidden sm:flex flex-col items-center gap-3">
        <span
          className="font-mono text-ink-500"
          style={{
            fontSize: '10px',
            letterSpacing: '0.3em',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
          }}
        >
          SCROLL
        </span>
        <div className="w-px h-12 bg-ink-line overflow-hidden">
          {!reducedMotion && (
            <motion.div
              className="w-full bg-amber"
              animate={{ scaleY: [0, 1, 0], y: ['0%', '0%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: 'top' }}
            />
          )}
        </div>
      </div>
    </section>
  )
}
