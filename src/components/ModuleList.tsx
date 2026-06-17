import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 text-amber/70"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

interface ModuleListProps {
  eyebrow?: string
  title: string
  modules: string[]
}

export default function ModuleList({ eyebrow, title, modules }: ModuleListProps) {
  return (
    <section className="bg-ink py-24 md:py-28 px-6">
      <div className="max-w-content mx-auto flex flex-col gap-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col gap-4 max-w-2xl"
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
          <motion.h2
            variants={fadeUp}
            className="font-display font-black text-bone leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.03em' }}
          >
            {title}
          </motion.h2>
        </motion.div>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4"
        >
          {modules.map((m) => (
            <motion.li
              key={m}
              variants={fadeUp}
              className="flex items-center gap-3 py-3 border-b border-ink-line"
            >
              <CheckIcon />
              <span className="font-body text-sm text-white/70">{m}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
