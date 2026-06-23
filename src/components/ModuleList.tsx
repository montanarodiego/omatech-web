import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1]

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

interface ModuleListProps {
  eyebrow?: string
  title: string
  modules: string[]
}

export default function ModuleList({ eyebrow, title, modules }: ModuleListProps) {
  return (
    <section className="relative bg-ink py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 tech-grid grid-fade pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-content mx-auto flex flex-col gap-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col gap-4 max-w-2xl"
        >
          {eyebrow && (
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber">{eyebrow}</span>
              <span className="h-px flex-1 max-w-[120px] bg-ink-line" />
            </motion.div>
          )}
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-bone leading-[0.98] tracking-[-0.03em] text-balance"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            {title}
          </motion.h2>
        </motion.div>

        {/* Lista indexada — bordes continuos */}
        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-ink-line"
        >
          {modules.map((m, i) => (
            <motion.li
              key={m}
              variants={fadeUp}
              className="group flex items-center gap-4 px-5 py-4 border-r border-b border-ink-line hover:bg-white/[0.025] transition-colors duration-200"
            >
              <span className="font-mono text-[11px] tabular text-ink-700 group-hover:text-amber transition-colors duration-200">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-body text-sm text-ink-300 group-hover:text-bone transition-colors duration-200">
                {m}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
