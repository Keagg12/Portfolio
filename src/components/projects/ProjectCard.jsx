export default function ProjectCard({ project, delay = '0.1s' }) {
  const {
    title,
    category,
    emoji,
    description,
    features,
    tech,
    github,
    demo,
    label,
    gradient,
    accent,
  } = project

  return (
    <div className="project-card animate-scale glow-border" style={{ transitionDelay: delay }}>
      <div style={{ height: 5, background: gradient || 'linear-gradient(90deg,var(--cyan),var(--violet))' }} />
      <div style={{ padding: 28 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 11, color: accent || 'var(--cyan)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: 2, marginBottom: 8 }}>{category}</div>
            <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: 22, fontWeight: 700, marginBottom: 6 }}>{title}</h3>
          </div>
          <div style={{ fontSize: 36, marginLeft: 12, opacity: 0.8 }}>{emoji}</div>
        </div>

        <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{description}</p>

        {features && features.length > 0 && (
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 8, fontWeight: 600 }}>Key Features</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4, paddingLeft: 0 }}>
              {features.map((feature) => (
                <li key={feature} style={{ fontSize: 13, color: 'var(--muted)', display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span style={{ color: accent || 'var(--cyan)' }}>▸</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {tech && tech.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
            {tech.map((item) => (
              <span key={item} className="tech-badge" style={{ color: accent || 'var(--cyan)', borderColor: `${accent || 'var(--cyan)'}33`, background: `${accent || 'var(--cyan)'}1a` }}>
                {item}
              </span>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', gap: 10, alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: 16 }}>
          <a href={github} target="_blank" rel="noreferrer" className="project-link" title="GitHub">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          </a>
          <a href={demo} target="_blank" rel="noreferrer" className="project-link" title="Live Demo">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
          </a>
          <span style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace' }}>{label}</span>
        </div>
      </div>
    </div>
  )
}
