import { experienceData } from '../../data/experienceData'
import TimelineItem from './TimelineItem'

export default function Experience() {
  return (
    <section id="experience" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse at 20% 50%,rgba(6,182,212,0.04),transparent 50%),radial-gradient(ellipse at 80% 50%,rgba(139,92,246,0.04),transparent 50%)', pointerEvents: 'none' }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-in">
          <p className="section-label">Journey So Far</p>
          <div className="section-divider" style={{ margin: '12px auto 20px' }}></div>
          <h2 className="section-title">Experience &amp; <span className="grad">Achievements</span></h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>Building leadership, community, and technical skills beyond the classroom.</p>
        </div>
        <div className="max-w-3xl mx-auto" style={{ display: 'grid', gap: 20 }}>
          {experienceData.map((item, index) => (
            <TimelineItem key={item.title} item={item} delay={`0.${index + 1}s`} />
          ))}
        </div>
      </div>
    </section>
  )
}
