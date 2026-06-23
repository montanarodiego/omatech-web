import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Link } from 'react-router-dom'

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

function PosIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="28" height="17" rx="2" stroke="currentColor" strokeWidth="1.25" />
      <rect x="8" y="10" width="8" height="6" rx="1" fill="currentColor" opacity="0.35" />
      <rect x="20" y="10" width="8" height="2.5" rx="1" fill="currentColor" opacity="0.55" />
      <rect x="20" y="14.5" width="5" height="2" rx="1" fill="currentColor" opacity="0.3" />
      <rect x="10" y="25" width="16" height="5" rx="2" stroke="currentColor" strokeWidth="1.25" />
      <line x1="18" y1="23" x2="18" y2="25" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="2" y="12" width="22" height="14" rx="2" stroke="currentColor" strokeWidth="1.25" />
      <path d="M24 16h7l3 6v6H24V16z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
      <circle cx="9" cy="28" r="3" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="28" cy="28" r="3" stroke="currentColor" strokeWidth="1.25" />
      <line x1="12" y1="28" x2="25" y2="28" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

interface SoftwareCard {
  id: string
  index: string
  status: string
  available: boolean
  icon: React.ReactNode
  name: string
  description: string
  tags: string[]
  cta: { label: string; to: string }
}

const cards: SoftwareCard[] = [
  {
    id: 'pos',
    index: '01',
    status: 'Disponible',
    available: true,
    icon: <PosIcon />,
    name: 'OmaTech POS',
    description: 'Sistema de punto de venta para comercios multirubro. Gestión de caja, productos, clientes y reportes. Desktop, offline-first, sin cuotas sorpresa.',
    tags: ['Windows', 'Offline', 'Retail', 'Licencia única'],
    cta: { label: 'Ver producto', to: '/pos' },
  },
  {
    id: 'logistica',
    index: '02',
    status: 'En desarrollo',
    available: false,
    icon: <TruckIcon />,
    name: 'VanderBus Logística',
    description: 'Software de gestión logística para operaciones de distribución y transporte. Trazabilidad, rutas y control de entregas en tiempo real.',
    tags: ['Logística', 'Transporte', 'Distribución'],
    cta: { label: 'Ver producto', to: '/vanderbus' },
  },
]

function SoftwareCardItem({ card }: { card: SoftwareCard }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex flex-col bg-white/[0.02] border border-ink-line rounded-lg overflow-hidden transition-colors duration-300 hover:border-ink-700"
    >
      <span className="absolute top-0 left-0 right-0 h-0.5 bg-amber origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]" />

      {/* Encabezado: índice + estado */}
      <div className="flex items-center justify-between px-7 pt-6 pb-5 border-b border-ink-line">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500">
          MÓD. {card.index}
        </span>
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-ink-300">
          <span className={`w-1.5 h-1.5 rounded-full ${card.available ? 'bg-amber' : 'bg-ink-700'}`} />
          {card.status}
        </span>
      </div>

      <div className="px-7 py-7 flex flex-col gap-6 flex-1">
        <div className="text-amber">{card.icon}</div>

        <h3 className="font-display font-bold text-bone tracking-[-0.02em]" style={{ fontSize: '28px' }}>
          {card.name}
        </h3>

        <p className="font-body text-sm text-ink-300 leading-relaxed flex-1">{card.description}</p>

        {/* Tags como labels técnicos, no píldoras */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          {card.tags.map((tag, i) => (
            <span key={tag} className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-ink-500">
              {i > 0 && <span className="text-ink-line" aria-hidden="true">/</span>}
              {tag}
            </span>
          ))}
        </div>

        <Link
          to={card.cta.to}
          className="group/btn mt-auto inline-flex items-center justify-between w-full border border-ink-line pl-5 pr-2 py-3 font-mono text-[12px] font-semibold uppercase tracking-wide text-bone transition-colors duration-200 hover:border-amber hover:bg-amber hover:text-ink"
        >
          {card.cta.label}
          <span className="grid place-items-center w-7 h-7 bg-white/5 group-hover/btn:bg-ink/15 transition-all duration-300 group-hover/btn:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </motion.article>
  )
}

export default function Software() {
  return (
    <section id="software" className="relative bg-ink py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 tech-grid grid-fade pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-content mx-auto flex flex-col gap-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid lg:grid-cols-12 gap-x-10 gap-y-6 items-end"
        >
          <div className="lg:col-span-7 flex flex-col gap-4">
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
                03 / Software propio
              </span>
              <span className="h-px flex-1 max-w-[120px] bg-ink-line" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display font-bold text-bone leading-[0.98] tracking-[-0.03em] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
            >
              Soluciones que diseñamos nosotros
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="lg:col-span-5 font-body text-ink-300 text-base leading-relaxed">
            Desarrollamos software específico para los problemas reales de las empresas argentinas.
            Sin plantillas, sin cuotas que se disparan.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {cards.map((c) => <SoftwareCardItem key={c.id} card={c} />)}
        </motion.div>
      </div>
    </section>
  )
}
