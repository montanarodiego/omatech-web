import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Link } from 'react-router-dom'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

function PosIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="28" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="8" y="10" width="8" height="6" rx="1" fill="currentColor" opacity="0.35" />
      <rect x="20" y="10" width="8" height="2.5" rx="1" fill="currentColor" opacity="0.55" />
      <rect x="20" y="14.5" width="5" height="2" rx="1" fill="currentColor" opacity="0.3" />
      <rect x="10" y="25" width="16" height="5" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="18" y1="23" x2="18" y2="25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="2" y="12" width="22" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 16h7l3 6v6H24V16z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="9" cy="28" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="28" cy="28" r="3" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="28" x2="25" y2="28" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

interface SoftwareCard {
  id: string
  badge: string
  badgeStyle: string
  icon: React.ReactNode
  name: string
  description: string
  tags: string[]
  cta: { label: string; to: string }
}

const cards: SoftwareCard[] = [
  {
    id: 'pos',
    badge: 'DISPONIBLE',
    badgeStyle: 'bg-[#065F46] text-[#6EE7B7] border border-[#059669]/40',
    icon: <PosIcon />,
    name: 'OmaTech POS',
    description: 'Sistema de punto de venta para comercios multirubro. Gestión de caja, productos, clientes y reportes. Desktop, offline-first, sin cuotas sorpresa.',
    tags: ['Windows', 'Offline', 'SaaS', 'Retail'],
    cta: { label: 'Ver producto', to: '/pos' },
  },
  {
    id: 'logistica',
    badge: 'EN DESARROLLO',
    badgeStyle: 'bg-transparent text-amber/60 border border-amber/30',
    icon: <TruckIcon />,
    name: 'VanderBus Logística',
    description: 'Software de gestión logística para operaciones de distribución y transporte. Trazabilidad, rutas y control de entregas en tiempo real.',
    tags: ['Logística', 'Transporte', 'Distribución'],
    cta: { label: 'Ver producto', to: '/vanderbus' },
  },
]

function SoftwareCardItem({ card }: { card: SoftwareCard }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="group flex flex-col gap-6 rounded-2xl p-8 bg-white/5 backdrop-blur-sm border border-white/10 transition-[border-color,box-shadow] duration-300 hover:border-amber/30 hover:shadow-[0_0_40px_-8px_rgba(255,94,26,0.18)]"
    >
      {/* Badge */}
      <span className={`self-start font-mono text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-md ${card.badgeStyle}`}>
        {card.badge}
      </span>

      {/* Icon — bare SVG, amber at 70% */}
      <div className="text-amber/70">
        {card.icon}
      </div>

      {/* Name */}
      <h3 className="font-display font-extrabold text-white tracking-tight" style={{ fontSize: '26px' }}>
        {card.name}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-white/60 leading-relaxed flex-1">
        {card.description}
      </p>

      {/* Tags — pills */}
      <div className="flex flex-wrap gap-2">
        {card.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs text-white/50 bg-white/[0.08] border border-white/[0.12] px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA — ghost, links to product page */}
      <Link
        to={card.cta.to}
        className="group/btn inline-flex items-center justify-center gap-2 w-full text-center py-3.5 rounded-xl border border-white/20 text-white/70 font-body text-sm font-semibold transition-colors duration-200 hover:bg-white/10 hover:text-white"
      >
        {card.cta.label}
        <span className="opacity-0 -translate-x-1 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300">→</span>
      </Link>
    </motion.div>
  )
}

export default function Software() {
  return (
    <section id="software" className="bg-ink py-28 px-6">
      <div className="max-w-content mx-auto flex flex-col gap-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col items-center text-center gap-5"
        >
          <motion.p
            variants={fadeUp}
            className="font-mono text-amber uppercase tracking-[0.25em]"
            style={{ fontSize: '11px' }}
          >
            Software propio
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-black text-bone leading-tight"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em' }}
          >
            Soluciones que diseñamos nosotros
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-body text-ink-300 text-base max-w-xl"
          >
            Desarrollamos software específico para los problemas reales de las empresas argentinas.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {cards.map((c) => <SoftwareCardItem key={c.id} card={c} />)}
        </motion.div>
      </div>
    </section>
  )
}
