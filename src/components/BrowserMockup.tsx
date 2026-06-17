interface BrowserMockupProps {
  src: string
  alt: string
  title?: string
  className?: string
}

/**
 * App-window chrome (title bar + traffic-light controls) wrapping a screenshot.
 * Visual only — the image fills 100% of the frame.
 */
export default function BrowserMockup({
  src,
  alt,
  title = 'OmaTech POS',
  className = '',
}: BrowserMockupProps) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-white/10 bg-[#16161a] shadow-2xl shadow-ink/50 ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-3 h-9 px-4 bg-[#1f1f24] border-b border-white/5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-[11px] text-white/40 select-none">{title}</span>
      </div>

      {/* Screenshot */}
      <img src={src} alt={alt} loading="lazy" className="block w-full h-auto" />
    </div>
  )
}
