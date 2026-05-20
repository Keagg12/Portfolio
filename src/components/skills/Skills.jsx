import { skillsData } from '../../data/skillsData'
import SkillCategory from './SkillCategory'

export default function Skills() {
  return (
    <section id="skills" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 600, height: 600, background: 'radial-gradient(circle,rgba(139,92,246,0.08),transparent 70%)', top: -100, right: -200, position: 'absolute', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(80px)' }}></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-in">
          <p className="section-label">Technical Arsenal</p>
          <div className="section-divider" style={{ margin: '12px auto 20px' }}></div>
          <h2 className="section-title">Skills &amp; <span className="grad">Technologies</span></h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>A curated stack of tools and technologies I use to build exceptional digital products.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillsData.map((category, index) => (
            <SkillCategory key={category.title} category={category} delay={`0.${index + 1}s`} />
          ))}
        </div>
      </div>
    </section>
  )
}
