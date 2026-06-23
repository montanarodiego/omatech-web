import { motion, useAnimation } from 'framer-motion'
import type { Variants } from 'framer-motion'
import Barcode from './Barcode'

const WA_TC56 = 'https://wa.me/5491171416315?text=Hola!%20Me%20interesa%20el%20TC56'
const WA_TC20 = 'https://wa.me/5491171416315?text=Hola!%20Me%20interesa%20el%20TC20'

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

interface Spec { label: string; value: string }
interface Product {
  id: string
  ref: string
  tag: string
  label: string
  name: string
  conn: string
  imgSrc: string
  specs: Spec[]
  description: string
  price: string
  priceNote: string
  ctaHref: string
}

const products: Product[] = [
  {
    id: 'tc56',
    ref: 'REF. ZB-TC56',
    tag: 'Más vendido',
    label: 'A',
    name: 'TC56',
    conn: '4G LTE',
    imgSrc: '/img/tc56.png',
    specs: [
      { label: 'CPU', value: 'Hexa-core' },
      { label: 'RAM', value: '2 GB' },
      { label: 'Pantalla', value: '5" HD' },
      { label: 'Escáner', value: '1D / 2D' },
      { label: 'Sellado', value: 'IP67' },
      { label: 'Batería', value: '14 hs' },
    ],
    description: 'El colector todo terreno. Resistente al agua, polvo y caídas. Escáner ultrarrápido que lee códigos dañados o en pantalla.',
    price: '$ 915.000',
    priceNote: 'con cuna de carga incluida',
    ctaHref: WA_TC56,
  },
  {
    id: 'tc20',
    ref: 'REF. ZB-TC20',
    tag: 'Precio accesible',
    label: 'B',
    name: 'TC20',
    conn: 'WiFi · BT',
    imgSrc: '/img/tc20.png',
    specs: [
      { label: 'Escáner', value: '1D / 2D' },
      { label: 'Cámara', value: '8 MP' },
      { label: 'Pantalla', value: '5" HD' },
      { label: 'Conectividad', value: 'WiFi + BT' },
      { label: 'Sellado', value: 'IP54' },
      { label: 'MicroSD', value: 'Sí' },
    ],
    description: 'La opción más accesible sin sacrificar funcionalidad. Compacto, liviano, ideal para PyMEs que quieren digitalizar sin gastar de más.',
    price: '$ 650.000',
    priceNote: 'precio directo sin intermediarios',
    ctaHref: WA_TC20,
  },
]

const stats = [
  { value: '100%', label: 'Equipos testeados' },
  { value: 'MDM', label: 'Desbloqueo incluido' },
  { value: '24 hs', label: 'Respuesta máxima' },
  { value: 'AR', label: 'Envío a todo el país' },
]

function ProductCard({ product }: { product: Product }) {
  const scanControls = useAnimation()

  const handleHoverStart = async () => {
    scanControls.set({ x: '-100%', opacity: 1 })
    await scanControls.start({
      x: '2400%',
      transition: { duration: 0.65, ease: 'easeOut' },
    })
    scanControls.set({ opacity: 0 })
  }

  return (
    <motion.article
      variants={fadeUp}
      onHoverStart={handleHoverStart}
      className="group relative overflow-hidden flex flex-col bg-white border border-bone-line rounded-lg transition-colors duration-300 hover:border-ink/30"
    >
      {/* Barra de acento superior — se dibuja en hover */}
      <span className="absolute top-0 left-0 right-0 h-0.5 bg-amber origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] z-20" />

      {/* Línea de escaneo */}
      <motion.div
        animate={scanControls}
        initial={{ x: '-100%', opacity: 0 }}
        className="absolute top-0 bottom-0 w-8 pointer-events-none z-20"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.22), transparent)' }}
      />

      {/* Encabezado de ficha */}
      <div className="flex items-center justify-between px-6 sm:px-8 pt-6 pb-4 border-b border-bone-line">
        <div className="flex items-center gap-3">
          <span className="grid place-items-center w-6 h-6 bg-ink text-bone font-mono text-[11px] font-semibold">
            {product.label}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">{product.ref}</span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-amber-dim">{product.tag}</span>
      </div>

      <div className="px-6 sm:px-8 py-7 flex flex-col gap-6 flex-1">
        {/* Imagen */}
        <div className="flex items-center justify-center h-[220px] tech-grid-light rounded-md overflow-hidden">
          <img
            src={product.imgSrc}
            alt={`Colector de datos Zebra ${product.name}`}
            loading="lazy"
            decoding="async"
            className="h-[88%] w-full object-contain transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
            style={{ filter: 'drop-shadow(0 10px 26px rgba(10,10,11,0.18))' }}
          />
        </div>

        {/* Nombre + conectividad */}
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display font-bold text-ink tracking-[-0.03em]" style={{ fontSize: '34px' }}>
            {product.name}
          </h3>
          <span className="font-mono text-[12px] text-ink-500 whitespace-nowrap">{product.conn}</span>
        </div>

        {/* Tabla de specs */}
        <ul className="grid grid-cols-2 border-t border-bone-line">
          {product.specs.map((s, i) => (
            <li
              key={s.label}
              className={[
                'flex items-center justify-between py-2.5 px-1 border-b border-bone-line',
                i % 2 === 0 ? 'sm:border-r sm:pr-5' : 'sm:pl-5',
              ].join(' ')}
            >
              <span className="font-mono text-[12px] uppercase tracking-wider text-ink-500">{s.label}</span>
              <span className="font-mono text-[13px] text-ink tabular">{s.value}</span>
            </li>
          ))}
        </ul>

        {/* Descripción */}
        <p className="font-body text-sm text-ink-700 leading-relaxed">{product.description}</p>

        {/* Precio — empujado al fondo para alinear los CTAs */}
        <div className="mt-auto flex items-end justify-between pt-2">
          <div className="flex flex-col">
            <span className="font-display font-bold text-ink tabular" style={{ fontSize: '32px', letterSpacing: '-0.02em' }}>
              {product.price}
            </span>
            <span className="font-mono text-[11px] text-ink-500">{product.priceNote}</span>
          </div>
        </div>

        {/* CTA */}
        <a
          href={product.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center justify-between w-full bg-ink text-bone pl-5 pr-2 py-3.5 font-mono text-[12px] font-semibold uppercase tracking-wide transition-colors duration-200 hover:bg-amber hover:text-ink active:scale-[0.99]"
        >
          Consultar disponibilidad
          <span className="grid place-items-center w-7 h-7 bg-white/10 group-hover/btn:bg-ink/15 transition-all duration-300 group-hover/btn:translate-x-0.5">
            ↗
          </span>
        </a>
      </div>
    </motion.article>
  )
}

export default function Hardware() {
  return (
    <section id="hardware" className="relative bg-bone py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 tech-grid-light grid-fade pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-content mx-auto flex flex-col gap-16">
        {/* Encabezado asimétrico */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid lg:grid-cols-12 gap-x-10 gap-y-6 items-end"
        >
          <div className="lg:col-span-7 flex flex-col gap-4">
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber-dim">
                02 / Hardware industrial
              </span>
              <span className="h-px flex-1 max-w-[120px] bg-bone-line" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display font-bold text-ink leading-[0.98] tracking-[-0.03em] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
            >
              Colectores Zebra certificados
            </motion.h2>
          </div>
          <motion.div variants={fadeUp} className="lg:col-span-5 flex flex-col gap-5">
            <p className="font-body text-ink-700 text-base leading-relaxed">
              Equipos reacondicionados con garantía, MDM desbloqueado y envío el mismo día a toda
              Argentina.
            </p>
            <div className="opacity-25">
              <Barcode color="#0A0A0B" height={22} />
            </div>
          </motion.div>
        </motion.div>

        {/* Fichas de producto */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </motion.div>

        {/* Estadísticas */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 sm:grid-cols-4 border-t border-bone-line"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              variants={fadeUp}
              className={[
                'flex flex-col gap-1.5 py-7 px-1',
                i < stats.length - 1 ? 'sm:border-r border-bone-line' : '',
                i < 2 ? 'border-b sm:border-b-0 border-bone-line' : '',
              ].join(' ')}
            >
              <span className="font-display font-bold text-ink tabular" style={{ fontSize: '30px', letterSpacing: '-0.02em' }}>
                {s.value}
              </span>
              <span className="font-mono text-ink-500 uppercase tracking-wider" style={{ fontSize: '11px' }}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
