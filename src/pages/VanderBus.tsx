import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import ProductHero from '../components/ProductHero'
import FeatureGrid from '../components/FeatureGrid'
import type { Feature } from '../components/FeatureGrid'
import SectionFade from '../components/SectionFade'
import Footer from '../components/Footer'

const INK = '#0B0B0C'
const BONE = '#F5F3EF'

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
    <section id="early-access" className="relative bg-ink overflow-hidden py-28 md:py-32 px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(70% 80% at 50% 0%, rgba(37, 99, 235, 0.12) 0%, rgba(37, 99, 235, 0.04) 40%, transparent 75%)',
        }}
      />
      <motion.div
        initial={reducedMotion ? undefined : 'hidden'}
        whileInView={reducedMotion ? undefined : 'visible'}
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="relative z-10 max-w-xl mx-auto flex flex-col items-center text-center gap-6"
      >
        <span className="self-center font-mono text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md bg-transparent border border-amber/30 text-amber/70">
          Acceso anticipado
        </span>
        <h2
          className="font-display font-black text-bone leading-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.03em' }}
        >
          Sumate a la lista de espera
        </h2>
        <p className="font-body text-ink-300 text-base max-w-md">
          Dejanos tus datos y te contactamos cuando esté disponible para que seas de los primeros en
          probarlo.
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 text-left mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fields.map((f) => (
              <label key={f.key} className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink-300">
                  {f.label}
                </span>
                <input
                  type={f.type}
                  required
                  value={form[f.key]}
                  onChange={update(f.key)}
                  placeholder={f.placeholder}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-body text-sm text-bone placeholder:text-ink-500 focus:border-amber/50 focus:outline-none transition-colors duration-200"
                />
              </label>
            ))}
          </div>
          <button
            type="submit"
            className="group relative overflow-hidden bg-amber text-ink rounded-lg px-6 py-4 font-body font-semibold text-base mt-2 cursor-pointer border-none"
          >
            <span className="absolute inset-0 bg-amber-dim origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Quiero acceso anticipado
              <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                →
              </span>
            </span>
          </button>
          <p className="font-mono text-ink-500 text-center" style={{ fontSize: '11px' }}>
            Se abrirá WhatsApp con tus datos para confirmar el registro.
          </p>
        </form>
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
