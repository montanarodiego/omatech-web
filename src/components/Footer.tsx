import Barcode from './Barcode'

const WA_LINK = 'https://wa.me/5491171416315?text=Hola!%20Vi%20la%20web%20de%20OMA%20tech.'
const IG_LINK = 'https://instagram.com/oma.technologies'
const ML_LINK = 'https://wa.me/5491171416315?text=Los%20vi%20en%20MercadoLibre%20pero%20quiero%20precio%20directo.'

const columns: { title: string; links: { label: string; href?: string; to?: string }[] }[] = [
  {
    title: 'Productos',
    links: [
      { label: 'OmaTech POS', to: '/pos' },
      { label: 'VanderBus Logística', to: '/vanderbus' },
      { label: 'Hardware Zebra', to: '/#hardware' },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { label: 'WhatsApp', href: WA_LINK },
      { label: 'Instagram', href: IG_LINK },
      { label: 'MercadoLibre', href: ML_LINK },
    ],
  },
]

function SignalBars() {
  return (
    <svg width="22" height="15" viewBox="0 0 26 18" fill="none" aria-hidden="true">
      <rect x="0" y="0"  width="11" height="3" rx="0.5" fill="#2563EB" />
      <rect x="0" y="5"  width="16" height="3" rx="0.5" fill="#2563EB" />
      <rect x="0" y="10" width="21" height="3" rx="0.5" fill="#2563EB" />
      <rect x="0" y="15" width="26" height="3" rx="0.5" fill="#2563EB" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative bg-ink border-t border-ink-line overflow-hidden">
      <div className="max-w-content mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10 md:gap-8">
          {/* Marca */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span className="font-display font-bold text-bone" style={{ fontSize: '20px', letterSpacing: '-0.04em' }}>
                OMA
              </span>
              <SignalBars />
              <span className="font-mono font-medium text-amber" style={{ fontSize: '9px', letterSpacing: '0.32em' }}>
                TECH.
              </span>
            </div>
            <p className="font-body text-sm text-ink-300 leading-relaxed max-w-xs">
              Hardware industrial certificado y software propio para empresas argentinas.
            </p>
            <p className="font-mono text-[11px] text-ink-500 uppercase tracking-[0.15em] mt-1">
              Buenos Aires · Argentina · −34.60, −58.38
            </p>
          </div>

          {/* Columnas de enlaces */}
          {columns.map((col) => (
            <nav key={col.title} className="flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">
                {col.title}
              </span>
              {col.links.map((link) =>
                link.to ? (
                  <a
                    key={link.label}
                    href={link.to}
                    className="font-body text-sm text-ink-300 hover:text-amber transition-colors duration-200 w-max"
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-ink-300 hover:text-amber transition-colors duration-200 w-max"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </nav>
          ))}
        </div>

        {/* Pie técnico */}
        <div className="mt-14 pt-6 border-t border-ink-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="font-mono text-[11px] text-ink-500 tabular">
            © {year} OMA Technologies — Todos los derechos reservados
          </span>
          <span className="font-mono text-[11px] text-ink-500 uppercase tracking-[0.15em]">
            v2.3 · build estable
          </span>
        </div>
      </div>

      {/* Código de barras — cierre de marca */}
      <div className="opacity-[0.07]" aria-hidden="true">
        <Barcode color="#F4F2ED" height={36} />
      </div>
    </footer>
  )
}
