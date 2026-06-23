import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const WA_LINK = 'https://wa.me/5491171416315?text=Hola!%20Vi%20la%20web%20de%20OMA%20tech.'
const IG_LINK = 'https://instagram.com/oma.technologies'
const ML_LINK = 'https://wa.me/5491171416315?text=Los%20vi%20en%20MercadoLibre%20pero%20quiero%20precio%20directo.'

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.847L0 24l6.302-1.507A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.877 9.877 0 01-5.032-1.378l-.36-.214-3.742.895.944-3.635-.235-.373A9.866 9.866 0 012.106 12C2.106 6.526 6.526 2.106 12 2.106S21.894 6.526 21.894 12 17.474 21.894 12 21.894z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function MercadoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 6h2l2.4 12h9.2L19 9H6" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="17" cy="20" r="1" />
    </svg>
  )
}

const channels = [
  { id: 'wa', label: 'WhatsApp', value: 'Respuesta el mismo día', href: WA_LINK, icon: <WhatsAppIcon /> },
  { id: 'ig', label: 'Instagram', value: '@oma.technologies', href: IG_LINK, icon: <InstagramIcon /> },
  { id: 'ml', label: 'MercadoLibre', value: 'Precio directo sin intermediarios', href: ML_LINK, icon: <MercadoIcon /> },
]

export default function Contact() {
  return (
    <section id="contacto" className="relative bg-bone py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 tech-grid-light grid-fade pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-content mx-auto grid lg:grid-cols-12 gap-x-10 gap-y-12 items-start">
        {/* Izquierda */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="lg:col-span-5 flex flex-col gap-5"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber-dim">
              04 / Contacto
            </span>
            <span className="h-px flex-1 max-w-[100px] bg-bone-line" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-ink leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2.75rem, 6vw, 4.5rem)' }}
          >
            ¿Hablamos?
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-ink-700 text-base leading-relaxed max-w-sm">
            Respondemos rápido. Contanos qué necesitás y te asesoramos sin presión.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-500 mt-2"
          >
            Transferencia · MercadoPago · Efectivo
          </motion.p>
        </motion.div>

        {/* Derecha: canales como filas técnicas */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="lg:col-span-7 flex flex-col border-t border-bone-line"
        >
          {channels.map((c) => (
            <motion.a
              key={c.id}
              variants={fadeUp}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 py-6 border-b border-bone-line transition-colors duration-200 hover:bg-white/40 -mx-3 px-3"
            >
              <span className="grid place-items-center w-11 h-11 bg-ink text-bone shrink-0 transition-colors duration-200 group-hover:bg-amber group-hover:text-ink">
                {c.icon}
              </span>
              <span className="flex flex-col">
                <span className="font-display font-semibold text-ink" style={{ fontSize: '18px' }}>
                  {c.label}
                </span>
                <span className="font-mono text-[12px] text-ink-500">{c.value}</span>
              </span>
              <span className="ml-auto font-mono text-ink-500 text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:text-amber-dim">
                ↗
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
