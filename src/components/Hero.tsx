import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

const badges = [
  'Equipos certificados',
  'MDM desbloqueado',
  'Soporte incluido',
  'Envío inmediato',
]

export default function Hero() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center bg-ink overflow-hidden"
    >
      {/* Atmospheric glow — warm amber on the right, fades toward the center */}
      <div
        className="absolute inset-y-0 right-0 w-2/3 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(60% 60% at 100% 50%, rgba(37, 99, 235, 0.10) 0%, rgba(37, 99, 235, 0.04) 35%, transparent 70%)',
        }}
      />

      {/* Content — left-aligned dentro del container */}
      <div className="relative z-10 max-w-content mx-auto w-full px-6 pt-32 pb-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-7 max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="font-mono text-amber uppercase tracking-[0.2em]"
            style={{ fontSize: '13px' }}
          >
            Soluciones tecnológicas para operaciones que no fallan
          </motion.p>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="font-display font-black text-bone leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2.25rem, 8vw, 6.5rem)' }}
          >
            Tecnología que{' '}
            <br className="hidden sm:block" />
            resuelve problemas{' '}
            <br className="hidden sm:block" />
            <span className="text-amber">reales.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="font-body text-ink-300 text-lg leading-relaxed max-w-[540px]"
          >
            Hardware industrial certificado y software propio para empresas argentinas.
            Colectores Zebra con garantía y envío inmediato a todo el país.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start gap-4">
            {/* Primario: amber relleno */}
            <button
              onClick={() => scrollTo('#hardware')}
              className="group relative overflow-hidden bg-amber text-ink rounded-lg px-6 py-3 font-body font-semibold text-sm cursor-pointer border-none"
            >
              <span className="absolute inset-0 bg-amber-dim origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                Ver equipos
                <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </span>
            </button>

            {/* Secundario: texto solo */}
            <button
              onClick={() => scrollTo('#software')}
              className="group flex items-center gap-2 text-bone font-body font-semibold text-sm py-3 cursor-pointer bg-transparent border-none"
            >
              Conocer el software
              <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </motion.div>

          {/* Badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-x-4 gap-y-2 items-center">
            {badges.map((b, i) => (
              <span key={b} className="flex items-center gap-2 font-mono text-ink-500" style={{ fontSize: '12px' }}>
                {i > 0 && <span className="text-amber" aria-hidden="true">·</span>}
                {b}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator — vertical */}
      <div className="absolute bottom-8 left-6 z-10 flex flex-col items-center gap-3">
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
        <div className="w-[1px] h-12 bg-ink-line overflow-hidden">
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
