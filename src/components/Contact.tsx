import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const WA_LINK = 'https://wa.me/5491171416315?text=Hola!%20Vi%20la%20web%20de%20OMA%20tech.'
const IG_LINK = 'https://instagram.com/oma.technologies'
const ML_LINK = 'https://wa.me/5491171416315?text=Los%20vi%20en%20MercadoLibre%20pero%20quiero%20precio%20directo.'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.847L0 24l6.302-1.507A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.877 9.877 0 01-5.032-1.378l-.36-.214-3.742.895.944-3.635-.235-.373A9.866 9.866 0 012.106 12C2.106 6.526 6.526 2.106 12 2.106S21.894 6.526 21.894 12 17.474 21.894 12 21.894z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contacto" className="bg-bone py-28 px-6">
      <div className="max-w-content mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col items-center text-center gap-8"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.h2
              variants={fadeUp}
              className="font-display font-black text-ink"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '-0.03em' }}
            >
              ¿Hablamos?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-body text-ink-500 text-base max-w-md"
            >
              Respondemos rápido. Contanos qué necesitás y te asesoramos sin presión.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          >
            {/* WhatsApp */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#25D366] text-white font-body text-sm font-semibold hover:bg-[#1DAA57] active:scale-[0.98] transition-all duration-200"
            >
              <WhatsAppIcon />
              Escribinos por WhatsApp
            </a>

            {/* Instagram */}
            <a
              href={IG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl border border-ink/20 text-ink font-body text-sm font-semibold hover:border-ink/40 hover:bg-ink/5 active:scale-[0.98] transition-all duration-200"
            >
              <InstagramIcon />
              @oma.technologies
            </a>

            {/* MercadoLibre */}
            <a
              href={ML_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl border border-amber/30 text-amber font-body text-sm font-semibold hover:border-amber/60 hover:bg-amber/5 active:scale-[0.98] transition-all duration-200"
            >
              Ver en MercadoLibre
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-mono text-ink-500"
            style={{ fontSize: '12px' }}
          >
            Transferencia bancaria · MercadoPago · Efectivo
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
