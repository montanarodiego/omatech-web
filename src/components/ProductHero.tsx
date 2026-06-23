import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1]

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
}

const rise: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
}

interface Cta {
  label: string
  href?: string
  targetId?: string
}

interface SecondaryCta {
  label: string
  targetId: string
}

interface ProductHeroProps {
  eyebrow: string
  title: React.ReactNode
  subtitle: string
  badges: string[]
  primaryCta: Cta
  secondaryCta?: SecondaryCta
  note?: string
  media?: React.ReactNode
}

function scrollToId(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function ProductHero({
  eyebrow,
  title,
  subtitle,
  badges,
  primaryCta,
  secondaryCta,
  note,
  media,
}: ProductHeroProps) {
  const reducedMotion = useReducedMotion()

  return (
    <section className="relative bg-ink overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32 px-6">
      <div className="absolute inset-0 tech-grid grid-fade pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-content mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-7 max-w-4xl"
        >
          {/* Etiqueta de índice */}
          <motion.div variants={rise} className="flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
              {eyebrow}
            </span>
            <span className="h-px flex-1 max-w-[120px] bg-ink-line" />
          </motion.div>

          <motion.h1
            variants={rise}
            className="font-display font-bold text-bone leading-[0.98] tracking-[-0.04em] text-balance"
            style={{ fontSize: 'clamp(2.25rem, 6vw, 4.5rem)' }}
          >
            {title}
          </motion.h1>

          <motion.p
            variants={rise}
            className="font-body text-ink-300 text-lg leading-relaxed max-w-[56ch]"
          >
            {subtitle}
          </motion.p>

          {note && (
            <motion.p
              variants={rise}
              className="self-start font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 border border-amber/30 text-amber/80"
            >
              {note}
            </motion.p>
          )}

          {/* Tira de specs */}
          <motion.div variants={rise} className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {badges.map((b, i) => (
              <span key={b} className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-ink-500">
                {i > 0 && <span className="text-ink-line" aria-hidden="true">/</span>}
                {b}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={rise} className="flex flex-col sm:flex-row items-start gap-4 pt-2">
            {primaryCta.targetId ? (
              <button
                onClick={() => scrollToId(primaryCta.targetId as string)}
                className="group inline-flex items-center gap-3 bg-amber text-ink pl-5 pr-2 py-3 font-mono text-[13px] font-semibold uppercase tracking-wide transition-colors duration-200 hover:bg-bone active:scale-[0.98] cursor-pointer border-none"
              >
                {primaryCta.label}
                <span className="grid place-items-center w-7 h-7 bg-ink/15 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </button>
            ) : (
              <a
                href={primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-amber text-ink pl-5 pr-2 py-3 font-mono text-[13px] font-semibold uppercase tracking-wide transition-colors duration-200 hover:bg-bone active:scale-[0.98]"
              >
                {primaryCta.label}
                <span className="grid place-items-center w-7 h-7 bg-ink/15 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>
            )}

            {secondaryCta && (
              <button
                onClick={() => scrollToId(secondaryCta.targetId)}
                className="group inline-flex items-center gap-2 text-bone font-mono text-[13px] uppercase tracking-wide py-3 cursor-pointer bg-transparent border-none"
              >
                <span className="border-b border-ink-700 group-hover:border-amber transition-colors duration-200 pb-0.5">
                  {secondaryCta.label}
                </span>
                <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            )}
          </motion.div>
        </motion.div>

        {/* Media — captura del producto en marco double-bezel */}
        {media && (
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 28 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
            className="mt-16 md:mt-20 max-w-[960px] mx-auto"
          >
            <div className="bg-white/[0.03] ring-1 ring-white/10 rounded-2xl p-1.5">
              {media}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
