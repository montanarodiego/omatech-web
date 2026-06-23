import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
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
      {/* Atmospheric glow — warm amber on the right, fades toward the center */}
      <div
        className="absolute inset-y-0 right-0 w-2/3 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(60% 60% at 100% 50%, rgba(37, 99, 235, 0.10) 0%, rgba(37, 99, 235, 0.04) 35%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-content mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-7 max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="font-mono text-amber uppercase tracking-[0.2em]"
            style={{ fontSize: '13px' }}
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display font-black text-bone leading-[0.98] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2.25rem, 6vw, 4.5rem)' }}
          >
            {title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-body text-ink-300 text-lg leading-relaxed max-w-[560px]"
          >
            {subtitle}
          </motion.p>

          {note && (
            <motion.p
              variants={fadeUp}
              className="self-start font-mono text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md bg-transparent border border-amber/30 text-amber/70"
            >
              {note}
            </motion.p>
          )}

          {/* Badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-x-4 gap-y-2 items-center">
            {badges.map((b, i) => (
              <span
                key={b}
                className="flex items-center gap-2 font-mono text-ink-300"
                style={{ fontSize: '12px' }}
              >
                {i > 0 && (
                  <span className="text-amber" aria-hidden="true">
                    ·
                  </span>
                )}
                {b}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start gap-4 pt-2">
            {primaryCta.targetId ? (
              <button
                onClick={() => scrollToId(primaryCta.targetId as string)}
                className="group relative overflow-hidden bg-amber text-ink rounded-lg px-6 py-3 font-body font-semibold text-sm cursor-pointer border-none"
              >
                <span className="absolute inset-0 bg-amber-dim origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  {primaryCta.label}
                  <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </span>
              </button>
            ) : (
              <a
                href={primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-amber text-ink rounded-lg px-6 py-3 font-body font-semibold text-sm"
              >
                <span className="absolute inset-0 bg-amber-dim origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  {primaryCta.label}
                  <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </span>
              </a>
            )}

            {secondaryCta && (
              <button
                onClick={() => scrollToId(secondaryCta.targetId)}
                className="group flex items-center gap-2 text-bone font-body font-semibold text-sm py-3 cursor-pointer bg-transparent border-none"
              >
                {secondaryCta.label}
                <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </button>
            )}
          </motion.div>
        </motion.div>

        {/* Optional media (e.g. product screenshot mockup) below the hero text */}
        {media && (
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="mt-16 md:mt-20 max-w-[900px] mx-auto"
          >
            {media}
          </motion.div>
        )}
      </div>
    </section>
  )
}
