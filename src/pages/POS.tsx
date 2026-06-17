import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import ProductHero from '../components/ProductHero'
import FeatureGrid from '../components/FeatureGrid'
import type { Feature } from '../components/FeatureGrid'
import ModuleList from '../components/ModuleList'
import SectionFade from '../components/SectionFade'
import BrowserMockup from '../components/BrowserMockup'
import Footer from '../components/Footer'

const INK = '#0B0B0C'
const BONE = '#F5F3EF'

const SHOT_CAJA_DARK = '/screenshots/caja-pos-dark.png'
const SHOT_CAJA_LIGHT = '/screenshots/caja-pos-light.png'
const SHOT_INFORMES_LIGHT = '/screenshots/pos-informes-light.png'

const WA_DEMO =
  'https://wa.me/5491171416315?text=Hola!%20Quiero%20solicitar%20una%20demo%20de%20OmaTech%20POS.'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

/* ── Feature icons (line style, currentColor) ── */
function IconRegister() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="9" width="18" height="12" rx="1.5" />
      <path d="M7 9V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
      <path d="M7 13h4M7 16.5h4" />
      <rect x="15" y="13" width="3" height="4" rx="0.5" />
    </svg>
  )
}
function IconCatalog() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 8 12 3 3 8l9 5 9-5Z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </svg>
  )
}
function IconClients() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 4a3 3 0 0 1 0 6M18 14a6 6 0 0 1 3 5" />
    </svg>
  )
}
function IconReports() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 3v18h18" />
      <rect x="7" y="11" width="3" height="6" />
      <rect x="12" y="7" width="3" height="10" />
      <rect x="17" y="13" width="3" height="4" />
    </svg>
  )
}
function IconStock() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 17.5h7M17.5 14v7" />
    </svg>
  )
}
function IconRoles() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

const features: Feature[] = [
  {
    icon: <IconRegister />,
    title: 'Caja inteligente',
    description: 'Multi-ticket simultáneo, modalidad fiscal y no fiscal, cierre de turno automático.',
  },
  {
    icon: <IconCatalog />,
    title: 'Catálogo completo',
    description: 'Productos con variantes, kits, promociones por cantidad y precio especial por cliente.',
  },
  {
    icon: <IconClients />,
    title: 'Clientes y cuentas',
    description: 'Cuentas corrientes, historial de compras, deuda y pagos por cliente.',
  },
  {
    icon: <IconReports />,
    title: 'Reportes en tiempo real',
    description: '5 gráficos integrados: ventas por período, por producto, por vendedor, y más.',
  },
  {
    icon: <IconStock />,
    title: 'Stock inteligente',
    description: 'Inventario con alertas de mínimo, movimientos, y órdenes de compra a proveedores.',
  },
  {
    icon: <IconRoles />,
    title: 'Acceso por roles',
    description: 'Admin, vendedor y supervisor con permisos diferenciados por pantalla.',
  },
]

const modules = [
  'Login y gestión de sesiones',
  'Caja / Punto de venta',
  'Catálogo de productos',
  'Gestión de clientes',
  'Cuentas corrientes',
  'Proveedores y órdenes de compra',
  'Inventario y stock',
  'Reportes y estadísticas',
  'Gestión de turnos',
  'Impresión térmica y caja registradora',
  'Actualizaciones automáticas',
  'Licencia por dispositivo, sin suscripción mensual',
]

function FinalCta() {
  const reducedMotion = useReducedMotion()
  return (
    <section id="precios" className="relative bg-ink overflow-hidden py-28 md:py-32 px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(70% 80% at 50% 100%, rgba(255, 94, 26, 0.14) 0%, rgba(255, 94, 26, 0.04) 40%, transparent 75%)',
        }}
      />
      <motion.div
        initial={reducedMotion ? undefined : 'hidden'}
        whileInView={reducedMotion ? undefined : 'visible'}
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="relative z-10 max-w-content mx-auto flex flex-col items-center text-center gap-6"
      >
        <h2
          className="font-display font-black text-bone leading-tight"
          style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em' }}
        >
          ¿Querés verlo en acción?
        </h2>
        <p className="font-body text-ink-300 text-base max-w-md">
          Te mostramos OmaTech POS funcionando con tu rubro. Licencia por dispositivo, sin
          suscripción mensual.
        </p>
        <a
          href={WA_DEMO}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden bg-amber text-ink rounded-lg px-8 py-4 font-body font-semibold text-base mt-2"
        >
          <span className="absolute inset-0 bg-amber-dim origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          <span className="relative z-10 flex items-center gap-2">
            Solicitar demo
            <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              →
            </span>
          </span>
        </a>
      </motion.div>
    </section>
  )
}

/* ── "Miralo en acción" — tab switcher with real screenshots ── */
const showcaseTabs = [
  {
    id: 'pos',
    label: 'Punto de venta',
    img: SHOT_CAJA_LIGHT,
    alt: 'Pantalla de Caja de OmaTech POS en tema claro',
    description:
      'Escaneá productos, aplicá descuentos y cobrá en segundos. Multi-ticket simultáneo para atender varias ventas a la vez.',
  },
  {
    id: 'reportes',
    label: 'Reportes',
    img: SHOT_INFORMES_LIGHT,
    alt: 'Pantalla de Informes de OmaTech POS en tema claro',
    description:
      'Ventas por período, ticket promedio, utilidad bruta y top de productos. Todo en tiempo real, sin exportar nada.',
  },
]

function ShowcaseTabs() {
  const reducedMotion = useReducedMotion()
  const [active, setActive] = useState(0)
  const tab = showcaseTabs[active]

  return (
    <section className="bg-bone py-24 md:py-28 px-6">
      <div className="max-w-content mx-auto flex flex-col gap-12">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? undefined : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="flex flex-col items-center text-center gap-4"
        >
          <p
            className="font-mono text-amber uppercase tracking-[0.25em]"
            style={{ fontSize: '11px' }}
          >
            El producto en vivo
          </p>
          <h2
            className="font-display font-black text-ink leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.03em' }}
          >
            Miralo en acción
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-3" role="tablist" aria-label="Módulos del POS">
          {showcaseTabs.map((t, i) => {
            const isActive = i === active
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(i)}
                className={[
                  'rounded-full px-5 py-2.5 font-body text-sm font-semibold transition-colors duration-200 cursor-pointer',
                  isActive
                    ? 'bg-ink text-bone border border-ink'
                    : 'bg-transparent text-ink border border-bone-line hover:border-ink/40',
                ].join(' ')}
              >
                {t.label}
              </button>
            )
          })}
        </div>

        {/* Content: text left (40%) + image right (60%) on desktop; image first on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2 order-2 lg:order-1 flex flex-col gap-4">
            <h3
              className="font-display font-extrabold text-ink tracking-tight"
              style={{ fontSize: '24px' }}
            >
              {tab.label}
            </h3>
            <p className="font-body text-base text-ink-500 leading-relaxed">{tab.description}</p>
          </div>

          <div className="lg:col-span-3 order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab.id}
                initial={reducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.2, ease: EASE }}
              >
                <BrowserMockup src={tab.img} alt={tab.alt} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function POS() {
  return (
    <>
      <ProductHero
        eyebrow="SOFTWARE PROPIO"
        title={
          <>
            El punto de venta que entiende
            <br />
            cómo trabaja <span className="text-amber">Argentina.</span>
          </>
        }
        subtitle="Gestión de caja, productos, clientes y reportes. Desktop, offline-first, sin cuotas sorpresa."
        badges={['Windows', 'Offline-first', 'Multi-sucursal']}
        primaryCta={{ label: 'Solicitar demo', href: WA_DEMO }}
        secondaryCta={{ label: 'Ver precios', targetId: '#precios' }}
        media={
          <div style={{ transform: 'perspective(1200px) rotateX(3deg)' }}>
            <BrowserMockup
              src={SHOT_CAJA_DARK}
              alt="Pantalla de Caja de OmaTech POS en tema oscuro"
            />
          </div>
        }
      />

      <SectionFade from={INK} to={BONE} />
      <FeatureGrid
        eyebrow="Capacidades"
        title="Todo lo que tu comercio necesita"
        features={features}
        theme="light"
      />
      <ShowcaseTabs />
      <SectionFade from={BONE} to={INK} />

      <ModuleList eyebrow="Módulos del sistema" title="Todo lo que incluye" modules={modules} />

      <FinalCta />
      <Footer />
    </>
  )
}
