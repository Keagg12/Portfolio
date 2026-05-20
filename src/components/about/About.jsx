export default function About(){
  return (
    <section id="about" style={{ background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
      <div className="dot-grid" style={{ opacity: 0.3 }}></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in-left">
            <p className="section-label">About Me</p>
            <div className="section-divider"></div>
            <h2 className="section-title">Crafting <span className="grad">Digital Experiences</span> with Precision</h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>
              I am a frontend-focused developer building responsive web experiences with React and Tailwind CSS. I enjoy turning user needs into clean interfaces and improving usability through thoughtful UI design.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: 28 }}>
              I am currently learning backend development, APIs, and full-stack tooling while strengthening problem-solving with data structures and algorithms. My goal is to grow as a practical frontend developer who can contribute to real product teams.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }} className="about-grid">
              <div className="about-stat">
                <div style={{ fontSize: 24, marginBottom: 6 }}>🎓</div>
                <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Education</div>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>B.Tech CSE, BVCOE<br/>GGSIPU · 2024–2028</div>
              </div>
              <div className="about-stat">
                <div style={{ fontSize: 24, marginBottom: 6 }}>💡</div>
                <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Focus Area</div>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>Frontend & Full-Stack<br/>Development</div>
              </div>
              <div className="about-stat">
                <div style={{ fontSize: 24, marginBottom: 6 }}>🧠</div>
                <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>DSA</div>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>70+ problems solved<br/>C++ & Java</div>
              </div>
              <div className="about-stat">
                <div style={{ fontSize: 24, marginBottom: 6 }}>🚀</div>
                <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Career Goal</div>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>Frontend internship experience<br/>and stronger backend skills</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-primary"><span>Let's Connect</span></a>
              <a href="/resume.pdf" download className="btn-outline">Download CV</a>
            </div>
          </div>
          <div className="animate-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
            <div style={{ position: 'relative', width: 200, height: 200, margin: '0 auto' }}>
              <div style={{ width: 200, height: 200, borderRadius: '50%', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: -3, borderRadius: '50%', background: 'linear-gradient(135deg,var(--cyan),var(--violet),var(--pink))', animation: 'spin-slow 8s linear infinite' }}></div>
                <div style={{ position: 'relative', zIndex: 1, width: 'calc(100% - 6px)', height: 'calc(100% - 6px)', top: 3, left: 3, borderRadius: '50%', background: 'linear-gradient(135deg,#0d1f3c,#1a1040)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Sora, sans-serif', fontSize: 56, fontWeight: 800 }}>
                  KA
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: -10, right: -10, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: '10px 14px', fontSize: 13, fontWeight: 600, color: 'var(--cyan)' }}>
                CSE '28
              </div>
            </div>
            <div style={{ width: '100%', maxWidth: 380 }}>
              <div style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13 }}>
                  <span style={{ color: 'var(--text)', fontWeight: 500 }}>Frontend Development</span><span style={{ color: 'var(--cyan)', fontFamily: 'JetBrains Mono, monospace' }}>82%</span>
                </div>
                <div className="skill-bar-wrap"><div className="skill-bar" data-width="82"></div></div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13 }}>
                  <span style={{ color: 'var(--text)', fontWeight: 500 }}>DSA & Problem Solving</span><span style={{ color: 'var(--violet)', fontFamily: 'JetBrains Mono, monospace' }}>68%</span>
                </div>
                <div className="skill-bar-wrap"><div className="skill-bar" data-width="68" style={{ background: 'linear-gradient(90deg,var(--violet),var(--pink))' }}></div></div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13 }}>
                  <span style={{ color: 'var(--text)', fontWeight: 500 }}>Full-Stack Development</span><span style={{ color: 'var(--cyan)', fontFamily: 'JetBrains Mono, monospace' }}>45%</span>
                </div>
                <div className="skill-bar-wrap"><div className="skill-bar" data-width="45"></div></div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13 }}>
                  <span style={{ color: 'var(--text)', fontWeight: 500 }}>Machine Learning</span><span style={{ color: 'var(--violet)', fontFamily: 'JetBrains Mono, monospace' }}>15%</span>
                </div>
                <div className="skill-bar-wrap"><div className="skill-bar" data-width="15" style={{ background: 'linear-gradient(90deg,var(--violet),var(--pink))' }}></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
