import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

const VIDEO_SRC = '/pos-demo.mp4'
const POSTER = '/screenshots/caja-pos-dark.png'

/**
 * Looping product demo on the dark section. App-window chrome to match the
 * BrowserMockup screenshots; the video autoplays muted, loops, and shows no
 * controls — purely ambient demo footage of the Windows POS.
 */
export default function VideoShowcase() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="relative bg-ink py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 tech-grid grid-fade pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 max-w-content mx-auto flex flex-col gap-10">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? undefined : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="flex flex-col gap-4 max-w-xl"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
              Demo en vivo
            </span>
            <span className="h-px flex-1 max-w-[100px] bg-white/15" />
          </div>
          <h2
            className="font-display font-bold text-bone leading-[0.98] tracking-[-0.03em] text-balance"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            Así se siente trabajar con OmaTech POS
          </h2>
          <p className="font-body text-ink-300 text-base leading-relaxed">
            Una venta real, de principio a fin. Caja rápida, búsqueda instantánea de productos y
            cobro en segundos.
          </p>
        </motion.div>

        {/* Video en chrome de ventana */}
        <motion.div
          initial={reducedMotion ? undefined : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="bg-white/[0.02] ring-1 ring-white/10 rounded-2xl p-1.5"
        >
          <div className="overflow-hidden rounded-[0.85rem] border border-white/10 bg-[#16161a] shadow-2xl shadow-ink/50">
            {/* Title bar */}
            <div className="flex items-center justify-between h-9 px-4 bg-ink-800 border-b border-white/5">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-[2px] bg-amber" aria-hidden="true" />
                <span className="font-mono text-[11px] text-white/45 select-none tracking-wide">
                  OmaTech POS
                </span>
              </div>
              <div className="flex items-center gap-3.5 text-white/30" aria-hidden="true">
                <span className="block w-2.5 h-px bg-current" />
                <span className="block w-2.5 h-2.5 border border-current" />
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M1 1l8 8M9 1l-8 8" />
                </svg>
              </div>
            </div>

            {/* Video — autoplay, loop, muted, sin controles */}
            <video
              className="block w-full h-auto"
              src={VIDEO_SRC}
              poster={POSTER}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Demostración de OmaTech POS funcionando"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
