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
              I'm a passionate Computer Science student at Bharati Vidyapeeth College of Engineering (GGSIPU), driven by a love for building things that live on the internet. From pixel-perfect UIs to full-stack applications, I bring ideas to life with clean, efficient code.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: 28 }}>
              My journey spans <span style={{ color: 'var(--cyan)' }}>frontend mastery</span> with React and Tailwind, deep <span style={{ color: 'var(--violet)' }}>DSA problem-solving</span> in C++ and Java, and growing full-stack expertise. I'm also actively exploring Machine Learning, with the goal of becoming an ML Engineer who bridges the gap between intelligent algorithms and beautiful interfaces.
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
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>200+ problems solved<br/>C++ & Java</div>
              </div>
              <div className="about-stat">
                <div style={{ fontSize: 24, marginBottom: 6 }}>🚀</div>
                <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Future Goal</div>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>ML Engineer<br/>at top tech company</div>
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
                  <span style={{ color: 'var(--text)', fontWeight: 500 }}>Frontend Development</span><span style={{ color: 'var(--cyan)', fontFamily: 'JetBrains Mono, monospace' }}>90%</span>
                </div>
                <div className="skill-bar-wrap"><div className="skill-bar" data-width="90"></div></div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13 }}>
                  <span style={{ color: 'var(--text)', fontWeight: 500 }}>DSA & Problem Solving</span><span style={{ color: 'var(--violet)', fontFamily: 'JetBrains Mono, monospace' }}>80%</span>
                </div>
                <div className="skill-bar-wrap"><div className="skill-bar" data-width="80" style={{ background: 'linear-gradient(90deg,var(--violet),var(--pink))' }}></div></div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13 }}>
                  <span style={{ color: 'var(--text)', fontWeight: 500 }}>Full-Stack Development</span><span style={{ color: 'var(--cyan)', fontFamily: 'JetBrains Mono, monospace' }}>65%</span>
                </div>
                <div className="skill-bar-wrap"><div className="skill-bar" data-width="65"></div></div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13 }}>
                  <span style={{ color: 'var(--text)', fontWeight: 500 }}>Machine Learning</span><span style={{ color: 'var(--violet)', fontFamily: 'JetBrains Mono, monospace' }}>35%</span>
                </div>
                <div className="skill-bar-wrap"><div className="skill-bar" data-width="35" style={{ background: 'linear-gradient(90deg,var(--violet),var(--pink))' }}></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
