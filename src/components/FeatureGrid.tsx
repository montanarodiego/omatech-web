import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
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
  const reducedMotion = useReducedMotion()
  const dark = theme === 'dark'

  return (
    <section className={`${dark ? 'bg-ink' : 'bg-bone'} py-24 md:py-28 px-6`}>
      <div className="max-w-content mx-auto flex flex-col gap-14">
        {(eyebrow || title) && (
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col items-center text-center gap-4"
          >
            {eyebrow && (
              <motion.p
                variants={fadeUp}
                className="font-mono text-amber uppercase tracking-[0.25em]"
                style={{ fontSize: '11px' }}
              >
                {eyebrow}
              </motion.p>
            )}
            {title && (
              <motion.h2
                variants={fadeUp}
                className={`font-display font-black ${dark ? 'text-bone' : 'text-ink'} leading-tight`}
                style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.03em' }}
              >
                {title}
              </motion.h2>
            )}
          </motion.div>
        )}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              whileHover={reducedMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.3, ease: EASE }}
              className={[
                'flex flex-col gap-4 rounded-2xl p-7 transition-[border-color,box-shadow] duration-300',
                dark
                  ? 'bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber/30 hover:shadow-[0_0_40px_-8px_rgba(255,94,26,0.18)]'
                  : 'bg-white border border-bone-line hover:border-amber/40 hover:shadow-[0_12px_48px_-12px_rgba(255,94,26,0.15)]',
              ].join(' ')}
            >
              <div className="text-amber/70">{f.icon}</div>
              <h3
                className={`font-display font-extrabold tracking-tight ${dark ? 'text-white' : 'text-ink'}`}
                style={{ fontSize: '19px' }}
              >
                {f.title}
              </h3>
              <p
                className={`font-body text-sm leading-relaxed ${dark ? 'text-white/60' : 'text-ink-500'}`}
              >
                {f.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
