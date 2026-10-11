interface SectionHeadingProps {
  index: string
  label: string
  title: string
  tone?: "ink" | "paper"
}

export default function SectionHeading({ index, label, title, tone = "ink" }: SectionHeadingProps) {
  const muted = tone === "ink" ? "text-ink-muted" : "text-paper/60"
  const rule = tone === "ink" ? "bg-ink/30" : "bg-paper/30"

  return (
    <div className="mb-12 md:mb-16">
      <div className={`flex items-center gap-4 mb-5 font-mono text-xs uppercase tracking-[0.2em] ${muted}`}>
        <span>§ {index}</span>
        <span className={`h-px flex-1 max-w-24 ${rule}`} />
        <span>{label}</span>
      </div>
      <h2 className="font-serif text-4xl md:text-6xl font-medium tracking-tight">{title}</h2>
    </div>
  )
}
