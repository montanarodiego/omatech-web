interface BrowserMockupProps {
  src: string
  alt: string
  title?: string
  className?: string
}

/**
 * App-window chrome (title bar + window controls) wrapping a screenshot.
 * Desktop-app styling — these are screenshots of the Windows POS, so we use
 * neutral technical window controls rather than macOS traffic lights.
 */
export default function BrowserMockup({
  src,
  alt,
  title = 'OmaTech POS',
  className = '',
}: BrowserMockupProps) {
  return (
    <div
      className={`overflow-hidden rounded-[0.6rem] border border-white/10 bg-[#16161a] shadow-2xl shadow-ink/50 ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between h-9 px-4 bg-ink-800 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-[2px] bg-amber" aria-hidden="true" />
          <span className="font-mono text-[11px] text-white/45 select-none tracking-wide">{title}</span>
        </div>
        {/* Window controls — minimizar / maximizar / cerrar */}
        <div className="flex items-center gap-3.5 text-white/30" aria-hidden="true">
          <span className="block w-2.5 h-px bg-current" />
          <span className="block w-2.5 h-2.5 border border-current" />
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M1 1l8 8M9 1l-8 8" />
          </svg>
        </div>
      </div>

      {/* Screenshot */}
      <img src={src} alt={alt} loading="lazy" decoding="async" className="block w-full h-auto" />
    </div>
  )
}
