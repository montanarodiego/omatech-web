import Barcode from './Barcode'

const WA_LINK = 'https://wa.me/5491171416315?text=Hola!%20Vi%20la%20web%20de%20OMA%20tech.'
const IG_LINK = 'https://instagram.com/oma.technologies'
const ML_LINK = 'https://wa.me/5491171416315?text=Los%20vi%20en%20MercadoLibre%20pero%20quiero%20precio%20directo.'

const footerLinks = [
  { label: 'Instagram', href: IG_LINK },
  { label: 'WhatsApp', href: WA_LINK },
  { label: 'MercadoLibre', href: ML_LINK },
]

function LogoSmall() {
  return (
    <div className="leading-none select-none">
      <div className="flex items-center gap-1.5">
        <span
          className="font-display font-black text-bone"
          style={{ fontSize: '16px', letterSpacing: '-0.02em' }}
        >
          OMA
        </span>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" aria-hidden="true">
          <rect x="0" y="0"  width="6.5"  height="2" rx="1" fill="#2563EB" />
          <rect x="0" y="3"  width="9.5"  height="2" rx="1" fill="#2563EB" />
          <rect x="0" y="6"  width="12.5" height="2" rx="1" fill="#2563EB" />
          <rect x="0" y="9"  width="16"   height="2" rx="1" fill="#2563EB" />
        </svg>
      </div>
      <span
        className="font-display font-bold text-amber"
        style={{ fontSize: '7px', letterSpacing: '0.18em' }}
      >
        TECH.
      </span>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-ink-line">
      <div className="max-w-content mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <LogoSmall />
          <span className="font-mono text-ink-500" style={{ fontSize: '12px' }}>
            © 2025 OMA Technologies
          </span>
        </div>

        <nav className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-ink-300 hover:text-amber transition-colors duration-200"
              style={{ fontSize: '13px' }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Barcode cierre de marca */}
      <div className="opacity-[0.06]">
        <Barcode color="#F5F3EF" height={28} />
      </div>
    </footer>
  )
}
