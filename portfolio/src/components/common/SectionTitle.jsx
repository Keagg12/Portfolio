export default function SectionTitle({ label, title, subtitle }) {
  return (
    <div className="text-center mb-16 animate-in">
      {label && <p className="section-label">{label}</p>}
      <div className="section-divider" style={{ margin: '12px auto 20px' }}></div>
      {title && <h2 className="section-title" dangerouslySetInnerHTML={{ __html: title }} />}
      {subtitle && <p className="section-sub" style={{ margin: '0 auto' }}>{subtitle}</p>}
    </div>
  )
}
