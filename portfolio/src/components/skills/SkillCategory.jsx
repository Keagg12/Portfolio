export default function SkillCategory({ category, delay = '0.1s' }) {
  const { title, subtitle, color, icon, items } = category

  return (
    <div className="skill-category animate-scale" style={{ transitionDelay: delay, borderColor: `${color}33` }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
        <div style={{ width: 36, height: 36, borderRadius: 8, background: `${color}1a`, border: `1px solid ${color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>{icon || '⚡'}</div>
        <div>
          <div style={{ fontWeight: 700, fontFamily: 'Sora, sans-serif' }}>{title}</div>
          <div style={{ fontSize: 11, color: 'var(--muted)' }}>{subtitle}</div>
        </div>
        <div style={{ marginLeft: 'auto', width: 8, height: 8, borderRadius: '50%', background: color, boxShadow: `0 0 8px ${color}` }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {items.map((item) => (
          <div key={item.label} className="skill-tag" style={{ justifyContent: 'space-between', borderColor: `${color}33` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 16 }}>{item.icon || '•'}</span>
              <span>{item.label}</span>
            </div>
            <span style={{ fontSize: 11, color, fontFamily: 'JetBrains Mono, monospace' }}>{item.level}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
