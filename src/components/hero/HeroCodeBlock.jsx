export default function HeroCodeBlock() {
  return (
    <div className="hero-code animate-in hidden lg:block" style={{ animationDelay: '0.3s' }}>
      <div className="code-block" style={{ animation: 'float 6s ease-in-out infinite' }}>
        <div className="code-window">
          <div className="code-dot" style={{ background: '#ff5f57' }}></div>
          <div className="code-dot" style={{ background: '#febc2e' }}></div>
          <div className="code-dot" style={{ background: '#28c840' }}></div>
          <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--muted)' }}>keshav.ts</span>
        </div>
        <pre style={{ overflow: 'hidden', margin: 0 }}>
          <code>
            <span className="kw">const</span> <span className="var">developer</span> <span className="op">=</span> {'{'}
            <br />
            &nbsp;&nbsp;<span className="str">name</span><span className="op">:</span> <span className="str">"Keshav Aggarwal"</span>,
            <br />
            &nbsp;&nbsp;<span className="str">college</span><span className="op">:</span> <span className="str">"BVCOE, GGSIPU"</span>,
            <br />
            &nbsp;&nbsp;<span className="str">year</span><span className="op">:</span> <span className="str">"B.Tech CSE 2024–28"</span>,
            <br />
            &nbsp;&nbsp;<span className="str">skills</span><span className="op">:</span> [
            <span className="str">"React"</span>, <span className="str">"JavaScript"</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"Tailwind"</span>, <span className="str">"C++"</span>, <span className="str">"DSA"</span>
            <br />
            &nbsp;&nbsp;],
            <br />
            &nbsp;&nbsp;<span className="str">learning</span><span className="op">:</span> [<span className="str">"Node"</span>, <span className="str">"MongoDB"</span>, <span className="str">"ML"</span>],
            <br />
            &nbsp;&nbsp;<span className="str">goal</span><span className="op">:</span> <span className="str">"SWE Intern @ top company"</span>,
            <br />
            &nbsp;&nbsp;<span className="str">solve</span><span className="op">:</span> (<span className="var">problem</span>) <span className="op">=&gt;</span> {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="cm">// 200+ LC problems solved 🚀</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">return</span> <span className="fn">optimal</span>(<span className="var">problem</span>);
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'};'}
          </code>
        </pre>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 12 }}>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: 16, textAlign: 'center' }}>
          <div className="counter-num grad-cv" id="c1">0+</div>
          <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>DSA Problems</div>
        </div>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: 16, textAlign: 'center' }}>
          <div className="counter-num grad-vp" id="c2">0+</div>
          <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>Projects Built</div>
        </div>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: 16, textAlign: 'center' }}>
          <div className="counter-num grad-cv" id="c3">0+</div>
          <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>Skills Mastered</div>
        </div>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: 16, textAlign: 'center' }}>
          <div className="counter-num grad-vp" id="c4">0</div>
          <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>Years Experience</div>
        </div>
      </div>
    </div>
  )
}
