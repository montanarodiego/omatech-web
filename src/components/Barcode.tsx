// Deterministic bar widths — same pattern every render, no Math.random
const BARS = [
  2,1,3,1,2,4,1,2,1,3,2,1,4,1,2,1,3,1,2,4,
  1,2,1,3,2,1,3,1,2,1,4,2,1,3,1,2,1,3,4,1,
  2,1,3,1,2,4,1,2,3,1,2,1,4,1,2,1,3,2,1,3,
  1,4,2,1,3,1,2,4,1,3,1,2,1,4,1,2,3,2,1,4,
]

interface BarcodeProps {
  color?: string
  className?: string
  height?: number
}

export default function Barcode({ color = '#1E1E20', className = '', height = 40 }: BarcodeProps) {
  let x = 0
  const rects: { x: number; w: number }[] = []
  for (const w of BARS) {
    rects.push({ x, w })
    x += w + 1
  }
  const totalWidth = x

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${totalWidth} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={className}
    >
      {rects.map((r, i) => (
        <rect key={i} x={r.x} y={0} width={r.w} height={height} fill={color} />
      ))}
    </svg>
  )
}
