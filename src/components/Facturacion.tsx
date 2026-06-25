import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1]

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

interface Group {
  label: string
  items: string[]
}

const groups: Group[] = [
  {
    label: 'Datos de tu negocio',
    items: [
      'CUIT activo con Clave Fiscal (nivel 3)',
      'Condición frente al IVA: Responsable Inscripto o Monotributo',
      'Domicilio fiscal y comercial declarados',
      'Actividad económica e inicio de actividades',
      'Ingresos Brutos / jurisdicción, si corresponde',
    ],
  },
  {
    label: 'Habilitación en AFIP / ARCA',
    items: [
      'Punto de venta dado de alta para Web Service (factura electrónica)',
      'Certificado digital generado y vinculado al servicio de facturación',
      'Tipos de comprobante habilitados (A, B o C según tu condición)',
      'Delegación del web service a OmaTech para emitir en tu nombre',
    ],
  },
]

function Check() {
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
      className="shrink-0 mt-0.5"
    >
      <path d="m5 12 5 5L20 6" />
    </svg>
  )
}

export default function Facturacion() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="relative bg-bone py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 tech-grid-light grid-fade pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-content mx-auto flex flex-col gap-12">
        {/* Encabezado */}
        <motion.div
          variants={stagger}
          initial={reducedMotion ? undefined : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col gap-4 max-w-2xl"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber-dim">
              Facturación electrónica
            </span>
            <span className="h-px flex-1 max-w-[120px] bg-bone-line" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-ink leading-[0.98] tracking-[-0.03em] text-balance"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            Lista para facturar con AFIP
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-body text-base text-ink-700 leading-relaxed max-w-xl"
          >
            OmaTech POS se conecta con AFIP / ARCA y solicita el CAE automáticamente en cada
            comprobante. Para activarlo, tu negocio necesita tener en regla estos datos.
          </motion.p>
        </motion.div>

        {/* Requisitos en dos grupos */}
        <motion.div
          variants={stagger}
          initial={reducedMotion ? undefined : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-bone-line border border-bone-line"
        >
          {groups.map((group) => (
            <motion.div
              key={group.label}
              variants={fadeUp}
              className="flex flex-col gap-5 bg-bone p-7 md:p-9"
            >
              <h3 className="font-mono text-[12px] uppercase tracking-[0.2em] text-ink-500">
                {group.label}
              </h3>
              <ul className="flex flex-col gap-3.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-amber-dim">
                      <Check />
                    </span>
                    <span className="font-body text-[15px] leading-relaxed text-ink-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Aclaración sobre el CAE */}
        <motion.div
          initial={reducedMotion ? undefined : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="flex items-start gap-4 border-l-2 border-amber bg-white/40 px-6 py-5 max-w-3xl"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-dim mt-0.5">
            CAE
          </span>
          <p className="font-body text-[15px] leading-relaxed text-ink-700">
            El <strong className="text-ink">Código de Autorización Electrónico (CAE)</strong> lo
            genera AFIP automáticamente: OmaTech POS lo solicita e imprime en cada factura junto con
            su vencimiento. No tenés que cargarlo a mano ni tramitarlo por comprobante.
          </p>
        </motion.div>

        {/* Nota de acompañamiento */}
        <motion.p
          initial={reducedMotion ? undefined : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="font-mono text-[12px] uppercase tracking-wider text-ink-500"
        >
          → Te acompañamos en la configuración del punto de venta y el certificado digital
        </motion.p>
      </div>
    </section>
  )
}
