import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import ProductHero from '../components/ProductHero'
import FeatureGrid from '../components/FeatureGrid'
import type { Feature } from '../components/FeatureGrid'
import SectionFade from '../components/SectionFade'
import Footer from '../components/Footer'

const INK = '#0A0A0B'
const BONE = '#F4F2ED'

const WA_NUMBER = '5491171416315'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

/* ── Feature icons (line style, currentColor) ── */
function IconRoutes() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="5" r="2" />
      <path d="M8 19h6a4 4 0 0 0 0-8H10a4 4 0 0 1 0-8h6" />
    </svg>
  )
}
function IconTracking() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}
function IconFleet() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 8h11v9H2zM13 11h4l3 3v3h-7z" />
      <circle cx="6" cy="18.5" r="1.7" />
      <circle cx="17.5" cy="18.5" r="1.7" />
    </svg>
  )
}
function IconReports() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 3v18h18" />
      <path d="m7 14 3-3 3 3 4-5" />
    </svg>
  )
}
function IconPortal() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M6.5 6.5h.01M9.5 6.5h.01" />
    </svg>
  )
}
function IconBell() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </svg>
  )
}

const features: Feature[] = [
  {
    icon: <IconRoutes />,
    title: 'Gestión de rutas',
    description: 'Planificación y asignación de rutas por vehículo y conductor.',
  },
  {
    icon: <IconTracking />,
    title: 'Trazabilidad de entregas',
    description: 'Estado en tiempo real de cada paquete desde el depósito hasta el destinatario.',
  },
  {
    icon: <IconFleet />,
    title: 'Control de flota',
    description: 'Estado operativo de cada vehículo, mantenimientos y disponibilidad.',
  },
  {
    icon: <IconReports />,
    title: 'Reportes de gestión',
    description: 'Eficiencia por ruta, conductor y período. KPIs de distribución.',
  },
  {
    icon: <IconPortal />,
    title: 'Integración con clientes',
    description: 'Portal para que tus clientes consulten el estado de sus pedidos.',
  },
  {
    icon: <IconBell />,
    title: 'Notificaciones automáticas',
    description: 'Alertas de entrega, demoras y excepciones al instante.',
  },
]

interface FormState {
  nombre: string
  empresa: string
  email: string
  whatsapp: string
}

function EarlyAccessForm() {
  const reducedMotion = useReducedMotion()
  const [form, setForm] = useState<FormState>({
    nombre: '',
    empresa: '',
    email: '',
    whatsapp: '',
  })

  const update = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const text =
      `Hola! Quiero acceso anticipado a VanderBus Logística.%0A%0A` +
      `Nombre: ${form.nombre}%0A` +
      `Empresa: ${form.empresa}%0A` +
      `Email: ${form.email}%0A` +
      `WhatsApp: ${form.whatsapp}`
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURI(text)}`, '_blank', 'noopener')
  }

  const fields: { key: keyof FormState; label: string; type: string; placeholder: string }[] = [
    { key: 'nombre', label: 'Nombre', type: 'text', placeholder: 'Tu nombre' },
    { key: 'empresa', label: 'Empresa', type: 'text', placeholder: 'Nombre de tu empresa' },
    { key: 'email', label: 'Email', type: 'email', placeholder: 'tu@empresa.com' },
    { key: 'whatsapp', label: 'WhatsApp', type: 'tel', placeholder: '+54 9 11 ...' },
  ]

  return (
    <section id="early-access" className="relative bg-ink overflow-hidden py-28 md:py-36 px-6">
      <div className="absolute inset-0 tech-grid grid-fade pointer-events-none" aria-hidden="true" />
      <motion.div
        initial={reducedMotion ? undefined : 'hidden'}
        whileInView={reducedMotion ? undefined : 'visible'}
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="relative z-10 max-w-2xl mx-auto"
      >
        <div className="bg-white/[0.02] ring-1 ring-white/10 rounded-2xl p-1.5">
          <div className="bg-ink-800 rounded-[0.85rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] px-6 py-10 md:px-12 md:py-14 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
                Acceso anticipado
              </span>
              <span className="h-px flex-1 max-w-[120px] bg-ink-line" />
            </div>
            <h2
              className="font-display font-bold text-bone leading-[0.98] tracking-[-0.03em] text-balance"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
            >
              Sumate a la lista de espera
            </h2>
            <p className="font-body text-ink-300 text-base max-w-md leading-relaxed">
              Dejanos tus datos y te contactamos cuando esté disponible para que seas de los primeros
              en probarlo.
            </p>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 text-left mt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {fields.map((f) => (
                  <label key={f.key} className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-500">
                      {f.label}
                    </span>
                    <input
                      type={f.type}
                      required
                      value={form[f.key]}
                      onChange={update(f.key)}
                      placeholder={f.placeholder}
                      className="bg-ink border border-ink-line px-4 py-3 font-body text-sm text-bone placeholder:text-ink-500 focus:border-amber focus:outline-none transition-colors duration-200"
                    />
                  </label>
                ))}
              </div>
              <button
                type="submit"
                className="group inline-flex items-center justify-between bg-amber text-ink pl-6 pr-2 py-3.5 font-mono text-[13px] font-semibold uppercase tracking-wide mt-2 cursor-pointer border-none transition-colors duration-200 hover:bg-bone active:scale-[0.99]"
              >
                Quiero acceso anticipado
                <span className="grid place-items-center w-8 h-8 bg-ink/15 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </button>
              <p className="font-mono text-ink-500 text-[11px]">
                Se abrirá WhatsApp con tus datos para confirmar el registro.
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default function VanderBus() {
  return (
    <>
      <ProductHero
        eyebrow="SOFTWARE LOGÍSTICO"
        title={
          <>
            Trazabilidad total para{' '}
            <br className="hidden sm:block" />
            operaciones de <span className="text-amber">distribución.</span>
          </>
        }
        subtitle="Control de rutas, entregas y flota en tiempo real para empresas de transporte y distribución argentinas."
        badges={['Tiempo real', 'Multi-vehículo', 'En desarrollo']}
        note="Lanzamiento próximo — registrate para acceso anticipado"
        primaryCta={{ label: 'Registrar interés', targetId: '#early-access' }}
      />

      <SectionFade from={INK} to={BONE} />
      <FeatureGrid
        eyebrow="Capacidades"
        title="Control de punta a punta"
        features={features}
        theme="light"
      />
      <SectionFade from={BONE} to={INK} />

      <EarlyAccessForm />
      <Footer />
    </>
  )
}
