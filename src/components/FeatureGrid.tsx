import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1]

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface FeatureGridProps {
  eyebrow?: string
  title?: string
  features: Feature[]
  theme?: 'light' | 'dark'
}

export default function FeatureGrid({
  eyebrow,
  title,
  features,
  theme = 'light',
}: FeatureGridProps) {
  const dark = theme === 'dark'

  const line = dark ? 'border-ink-line' : 'border-bone-line'
  const cellHover = dark ? 'hover:bg-white/[0.025]' : 'hover:bg-white/50'

  return (
    <section className={`relative ${dark ? 'bg-ink' : 'bg-bone'} py-24 md:py-32 px-6 overflow-hidden`}>
      <div
        className={`absolute inset-0 ${dark ? 'tech-grid' : 'tech-grid-light'} grid-fade pointer-events-none`}
        aria-hidden="true"
      />
      <div className="relative max-w-content mx-auto flex flex-col gap-14">
        {(eyebrow || title) && (
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-4 max-w-2xl"
          >
            {eyebrow && (
              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <span className={`font-mono text-[11px] uppercase tracking-[0.25em] ${dark ? 'text-amber' : 'text-amber-dim'}`}>
                  {eyebrow}
                </span>
                <span className={`h-px flex-1 max-w-[120px] ${dark ? 'bg-ink-line' : 'bg-bone-line'}`} />
              </motion.div>
            )}
            {title && (
              <motion.h2
                variants={fadeUp}
                className={`font-display font-bold ${dark ? 'text-bone' : 'text-ink'} leading-[0.98] tracking-[-0.03em] text-balance`}
                style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
              >
                {title}
              </motion.h2>
            )}
          </motion.div>
        )}

        {/* Matriz técnica de capacidades — bordes continuos, no cards flotantes */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l ${line}`}
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className={`group relative flex flex-col gap-4 p-7 md:p-8 border-r border-b ${line} ${cellHover} transition-colors duration-300`}
            >
              {/* Acento superior en hover */}
              <span className="absolute top-0 left-0 h-0.5 w-0 bg-amber group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]" />

              <div className="flex items-start justify-between">
                <div className="text-amber">{f.icon}</div>
                <span className={`font-mono text-[12px] tabular ${dark ? 'text-ink-700' : 'text-ink-300'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <h3
                className={`font-display font-semibold tracking-[-0.01em] ${dark ? 'text-bone' : 'text-ink'}`}
                style={{ fontSize: '19px' }}
              >
                {f.title}
              </h3>
              <p className={`font-body text-sm leading-relaxed ${dark ? 'text-ink-300' : 'text-ink-700'}`}>
                {f.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
