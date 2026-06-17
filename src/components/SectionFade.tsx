// Smooth color transition band between two sections with different backgrounds.
// `from` matches the section above (top), `to` matches the section below (bottom).
// Color-matching both edges makes the seam invisible — a soft blend, not a hard cut.
interface SectionFadeProps {
  from: string
  to: string
  height?: number
}

export default function SectionFade({ from, to, height = 140 }: SectionFadeProps) {
  return (
    <div
      aria-hidden="true"
      className="w-full"
      style={{
        height,
        // Extra mid stops ease the perceived fade and reduce gradient banding.
        background: `linear-gradient(to bottom, ${from} 0%, ${color(from, to, 0.5)} 50%, ${to} 100%)`,
      }}
    />
  )
}

// Mixes two hex colors at ratio t (0 = from, 1 = to) to create a smooth midpoint.
function color(from: string, to: string, t: number): string {
  const a = hex(from)
  const b = hex(to)
  const mix = (i: number) => Math.round(a[i] + (b[i] - a[i]) * t)
  return `rgb(${mix(0)}, ${mix(1)}, ${mix(2)})`
}

function hex(c: string): [number, number, number] {
  const h = c.replace('#', '')
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ]
}
