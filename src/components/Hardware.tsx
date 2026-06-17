import { motion, useAnimation } from 'framer-motion'
import type { Variants } from 'framer-motion'
import Barcode from './Barcode'

const WA_TC56 = 'https://wa.me/5491171416315?text=Hola!%20Me%20interesa%20el%20TC56'
const WA_TC20 = 'https://wa.me/5491171416315?text=Hola!%20Me%20interesa%20el%20TC20'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

interface Spec { label: string; value: string }
interface Product {
  id: string
  badge: string
  badgePrimary: boolean
  name: string
  tag: string
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
    badge: 'MÁS VENDIDO',
    badgePrimary: true,
    name: 'TC56',
    tag: '4G LTE',
    imgSrc: '/img/tc56.png',
    specs: [
      { label: 'CPU', value: 'Hexa-core' },
      { label: 'RAM', value: '2 GB' },
      { label: 'Pantalla', value: '5" HD' },
      { label: 'Escáner', value: '1D/2D' },
      { label: 'IP67', value: 'Sellado' },
      { label: 'Batería', value: '14 hs' },
    ],
    description: 'El colector todo terreno. Resistente al agua, polvo y caídas. Escáner ultrarrápido que lee códigos dañados o en pantalla.',
    price: '$ 915.000',
    priceNote: 'con cuna de carga incluida',
    ctaHref: WA_TC56,
  },
  {
    id: 'tc20',
    badge: 'PRECIO ACCESIBLE',
    badgePrimary: false,
    name: 'TC20',
    tag: 'WiFi · BT',
    imgSrc: '/img/tc20.png',
    specs: [
      { label: 'Escáner', value: '1D/2D' },
      { label: 'Cámara', value: '8 MP' },
      { label: 'Pantalla', value: '5" HD' },
      { label: 'Conectividad', value: 'WiFi + BT' },
      { label: 'IP54', value: 'Sellado' },
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
  { value: '24hs', label: 'Respuesta máxima' },
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
    <motion.div
      variants={fadeUp}
      onHoverStart={handleHoverStart}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden flex flex-col bg-white border border-bone-line hover:border-amber rounded-2xl p-8 gap-6 transition-colors duration-300 hover:shadow-[0_12px_48px_rgba(255,94,26,0.1)]"
    >
      {/* Card scan line */}
      <motion.div
        animate={scanControls}
        initial={{ x: '-100%', opacity: 0 }}
        className="absolute top-0 bottom-0 w-8 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,94,26,0.25), transparent)',
        }}
      />

      {/* Badge */}
      <span
        className={[
          'self-start font-mono text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-md',
          product.badgePrimary
            ? 'bg-amber text-ink'
            : 'bg-ink text-bone',
        ].join(' ')}
      >
        {product.badge}
      </span>

      {/* Product image */}
      <div className="flex items-center justify-center h-[260px] overflow-hidden">
        <img
          src={product.imgSrc}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain"
          style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.18))' }}
        />
      </div>

      {/* Name + tag */}
      <div className="flex items-baseline justify-between gap-2">
        <h3
          className="font-display font-black text-ink"
          style={{ fontSize: '32px', letterSpacing: '-0.02em' }}
        >
          {product.name}
        </h3>
        <span className="font-mono text-[12px] text-ink-500 whitespace-nowrap">{product.tag}</span>
      </div>

      {/* Specs */}
      <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
        {product.specs.map((s) => (
          <li key={s.label} className="flex items-center gap-2">
            <span className="font-mono text-[13px] text-ink-500">{s.label}</span>
            <span className="font-mono text-[13px] text-ink-700">· {s.value}</span>
          </li>
        ))}
      </ul>

      {/* Description */}
      <p className="font-body text-sm text-ink-700 leading-relaxed flex-1">
        {product.description}
      </p>

      {/* Price */}
      <div className="flex flex-col gap-1">
        <span
          className="font-display font-black text-ink"
          style={{ fontSize: '36px', letterSpacing: '-0.02em' }}
        >
          {product.price}
        </span>
        <span className="font-body text-xs text-ink-500">{product.priceNote}</span>
      </div>

      {/* CTA */}
      <a
        href={product.ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group/btn relative overflow-hidden w-full text-center py-3.5 rounded-xl border border-amber text-amber font-body font-semibold text-sm transition-colors duration-150"
      >
        <span className="absolute inset-0 bg-amber origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 ease-out" />
        <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:text-ink transition-colors duration-150">
          Consultar disponibilidad
          <span className="opacity-0 -translate-x-1 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300">→</span>
        </span>
      </a>
    </motion.div>
  )
}

export default function Hardware() {
  return (
    <section id="hardware" className="bg-bone py-28 px-6">
      <div className="max-w-content mx-auto flex flex-col gap-16">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col items-center text-center gap-5"
        >
          <motion.p
            variants={fadeUp}
            className="font-mono text-amber-dim uppercase tracking-[0.25em]"
            style={{ fontSize: '11px' }}
          >
            Hardware industrial
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-black text-ink leading-tight"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em' }}
          >
            Colectores Zebra certificados
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-body text-ink-500 text-base max-w-xl"
          >
            Equipos reacondicionados con garantía, MDM desbloqueado y envío el mismo día a toda Argentina.
          </motion.p>
          <motion.div variants={fadeUp} className="w-full max-w-md opacity-30 mt-2">
            <Barcode color="#0B0B0C" height={24} />
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 sm:grid-cols-4 border-t border-bone-line pt-12"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              variants={fadeUp}
              className={[
                'flex flex-col items-center text-center gap-1.5 py-4',
                i < stats.length - 1 ? 'sm:border-r border-bone-line' : '',
              ].join(' ')}
            >
              <span
                className="font-display font-black text-amber-dim"
                style={{ fontSize: '28px', letterSpacing: '-0.02em' }}
              >
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
