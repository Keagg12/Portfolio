export default function TimelineItem({ item, delay = '0.1s' }) {
  const { icon, title, subtitle, period, description, tags, accent } = item

  return (
    <div className="timeline-item animate-in-left" style={{ transitionDelay: delay, paddingBottom: 0 }}>
      <div className="timeline-dot" style={{ background: accent || 'linear-gradient(135deg,var(--cyan),var(--violet))' }}>
        {icon}
      </div>
      <div className="timeline-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
          <div>
            <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{title}</h3>
            <div style={{ color: accent || 'var(--cyan)', fontSize: 13, fontWeight: 600 }}>{subtitle}</div>
          </div>
          <div style={{ background: `${accent || 'var(--cyan)'}1a`, border: `1px solid ${accent || 'var(--cyan)'}33`, borderRadius: 999, padding: '4px 12px', fontSize: 12, color: accent || 'var(--cyan)', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'nowrap' }}>
            {period}
          </div>
        </div>
        <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.7, marginBottom: 14 }}>{description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {tags.map((tag) => (
            <span key={tag} style={{ display: 'inline-block', padding: '3px 10px', borderRadius: 6, fontSize: 12, fontWeight: 600, background: `${accent || 'var(--cyan)'}1a`, color: accent || 'var(--cyan)', border: `1px solid ${accent || 'var(--cyan)'}33` }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
