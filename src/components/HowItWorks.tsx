import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1]

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

interface Step {
  title: string
  description: string
}

const steps: Step[] = [
  {
    title: 'Instalás y activás',
    description:
      'OmaTech POS se instala en tu PC con Windows. Lo activás con tu licencia por dispositivo y queda listo para trabajar, sin configuraciones complejas ni cuotas mensuales.',
  },
  {
    title: 'Cargás tu negocio',
    description:
      'Productos, precios, stock, clientes y proveedores en un solo lugar. Sumá variantes, kits y promociones, y definí roles para cada persona de tu equipo.',
  },
  {
    title: 'Vendés en caja',
    description:
      'Escaneás o buscás productos, aplicás descuentos y cobrás en efectivo, tarjeta o pago mixto. Multi-ticket simultáneo, impresión térmica y todo funcionando offline.',
  },
  {
    title: 'Analizás y crecés',
    description:
      'Reportes en tiempo real de ventas, stock y rendimiento. Cierre de turno automático, cuentas corrientes al día y los datos siempre guardados en tu equipo.',
  },
]

export default function HowItWorks() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="relative bg-bone py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 tech-grid-light grid-fade pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-content mx-auto flex flex-col gap-14">
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
              Cómo funciona
            </span>
            <span className="h-px flex-1 max-w-[120px] bg-bone-line" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-ink leading-[0.98] tracking-[-0.03em] text-balance"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            Simple de principio a fin
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-body text-base text-ink-700 leading-relaxed max-w-xl"
          >
            En cuatro pasos pasás de instalar el sistema a vender y controlar tu comercio. Sin
            curva de aprendizaje y sin depender de internet.
          </motion.p>
        </motion.div>

        {/* Pasos como proceso indexado */}
        <motion.ol
          variants={stagger}
          initial={reducedMotion ? undefined : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-bone-line"
        >
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              variants={fadeUp}
              className="group relative flex flex-col gap-4 p-7 md:p-8 border-r border-b border-bone-line bg-white/30 hover:bg-white/70 transition-colors duration-300"
            >
              <span className="absolute top-0 left-0 h-0.5 w-0 bg-amber group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]" />
              <span
                className="font-display font-bold text-ink/15 leading-none tabular"
                style={{ fontSize: '52px' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                className="font-display font-semibold tracking-[-0.01em] text-ink"
                style={{ fontSize: '18px' }}
              >
                {step.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-ink-700">{step.description}</p>
            </motion.li>
          ))}
        </motion.ol>

        {/* Nota PDF — reemplazar por enlace de descarga cuando exista la guía */}
        <motion.p
          initial={reducedMotion ? undefined : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="font-mono text-[12px] uppercase tracking-wider text-ink-500"
        >
          → Guía paso a paso con todas las pantallas: en preparación
        </motion.p>
      </div>
    </section>
  )
}
