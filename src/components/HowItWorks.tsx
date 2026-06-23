import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
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
    <section className="bg-bone py-24 md:py-28 px-6">
      <div className="max-w-content mx-auto flex flex-col gap-14">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial={reducedMotion ? undefined : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col items-center text-center gap-4"
        >
          <motion.p
            variants={fadeUp}
            className="font-mono text-amber uppercase tracking-[0.25em]"
            style={{ fontSize: '11px' }}
          >
            Cómo funciona
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-black text-ink leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.03em' }}
          >
            Simple de principio a fin
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-body text-base text-ink-500 leading-relaxed max-w-xl"
          >
            En cuatro pasos pasás de instalar el sistema a vender y controlar tu comercio. Sin
            curva de aprendizaje y sin depender de internet.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.ol
          variants={stagger}
          initial={reducedMotion ? undefined : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              variants={fadeUp}
              className="relative flex flex-col gap-4 rounded-2xl bg-white border border-bone-line p-7"
            >
              <span
                className="font-display font-black text-amber/30 leading-none"
                style={{ fontSize: '44px' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                className="font-display font-extrabold tracking-tight text-ink"
                style={{ fontSize: '19px' }}
              >
                {step.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-ink-500">{step.description}</p>
            </motion.li>
          ))}
        </motion.ol>

        {/* PDF hook — cuando exista la guía detallada, reemplazar este bloque por un enlace de descarga */}
        <motion.p
          initial={reducedMotion ? undefined : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="font-body text-sm text-ink-500/80 text-center"
        >
          ¿Querés el detalle completo? Estamos preparando una guía paso a paso con todas las
          pantallas del sistema.
        </motion.p>
      </div>
    </section>
  )
}
