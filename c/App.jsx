// Nav + Tweaks panel + App composition
const { useState: _useState, useEffect: _useEffect } = React;

function TopNav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { id: 'about', l: 'Giới thiệu' },
    { id: 'schedule', l: 'Chương trình' },
    { id: 'gallery2', l: 'Kỷ niệm' },
    { id: 'teachers', l: 'Thầy cô' },
    { id: 'classmates', l: 'Bạn bè' },
    { id: 'rsvp', l: 'Đăng ký' },
    { id: 'fund', l: 'Quỹ lớp' },
    { id: 'messages', l: 'Lời nhắn' },
    { id: 'contact', l: 'Liên hệ' },
    { id: 'faq', l: 'FAQ' }
  ];
  return (
    <nav className={"topnav" + (scrolled ? " is-scrolled" : "")}>
      <div className="page tn-inner">
        <a href="#top" className="tn-mark">
          <span className="display">12A5 Huỳnh Ngọc Huệ</span>
          <span className="mono caps" style={{fontSize: 9, marginLeft: 8}}>2003 · 2006</span>
        </a>
        <div className="tn-links">
          {links.map(l => <a key={l.id} href={"#" + l.id}>{l.l}</a>)}
        </div>
        <a href="#rsvp" className="tn-rsvp">Hội khóa →</a>
      </div>
      <style>{`
        .topnav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--paper);
          border-bottom: 0.5px solid var(--ink);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .topnav.is-scrolled { border-bottom-color: var(--ink); box-shadow: 0 2px 0 rgba(42,36,32,0.08); }
        .tn-inner { display: flex; align-items: center; justify-content: space-between; padding: 14px var(--gutter); gap: 24px; }
        .tn-mark { text-decoration: none; color: var(--ink); display: flex; align-items: baseline; }
        .tn-mark .display { font-size: 24px; font-weight: 900; font-style: italic; }
        .tn-links { display: flex; gap: 20px; font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; }
        .tn-links a { color: var(--ink-soft); text-decoration: none; padding: 4px 0; border-bottom: 1px solid transparent; transition: all 0.15s; }
        .tn-links a:hover { color: var(--accent); border-bottom-color: var(--accent); }
        .tn-rsvp {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 8px 16px;
          background: var(--accent);
          color: var(--paper);
          text-decoration: none;
          border: 1.5px solid var(--accent);
        }
        .tn-rsvp:hover { background: var(--accent-dark); border-color: var(--accent-dark); }
        @media (max-width: 1100px) { .tn-links { display: none; } }
      `}</style>
    </nav>
  );
}

function TweakPanel({ defaults, onChange }) {
  const [open, setOpen] = _useState(false);
  const [vals, setVals] = _useState(defaults);

  _useEffect(() => {
    const listener = (e) => {
      if (!e.data) return;
      if (e.data.type === '__activate_edit_mode') setOpen(true);
      if (e.data.type === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', listener);
    window.parent.postMessage({type: '__edit_mode_available'}, '*');
    return () => window.removeEventListener('message', listener);
  }, []);

  const update = (k, v) => {
    const next = { ...vals, [k]: v };
    setVals(next);
    onChange(next);
    window.parent.postMessage({type: '__edit_mode_set_keys', edits: { [k]: v }}, '*');
  };

  if (!open) return null;

  const palettes = [
    { k: 'paper', name: 'Giấy ngà · Đỏ gạch', paper: '#f4ecd8', ink: '#2a2420', accent: '#b8472a', paperDark: '#e8dcc0' },
    { k: 'linen', name: 'Vải lanh · Xanh rêu', paper: '#efe8d5', ink: '#1e2a1c', accent: '#5c6b4a', paperDark: '#e0d8bf' },
    { k: 'sepia', name: 'Sepia · Nâu đất', paper: '#ede0c8', ink: '#3a2819', accent: '#8b4513', paperDark: '#ddcfb4' },
    { k: 'bone', name: 'Xương trắng · Navy', paper: '#f5f0e4', ink: '#14213d', accent: '#d62828', paperDark: '#e5dfd0' },
    { k: 'night', name: 'Đêm · Vàng bơ', paper: '#1a1815', ink: '#f5ead1', accent: '#e9b44c', paperDark: '#2a2622' }
  ];
  const fonts = [
    { k: 'playfair', name: 'Playfair + EB Garamond', display: '"Playfair Display", serif', serif: '"EB Garamond", serif' },
    { k: 'dm', name: 'DM Serif + Lora', display: '"DM Serif Display", serif', serif: '"Lora", serif' },
    { k: 'cormorant', name: 'Cormorant + Crimson', display: '"Cormorant Garamond", serif', serif: '"Crimson Pro", serif' },
    { k: 'bodoni', name: 'Bodoni + Libre Caslon', display: '"Bodoni Moda", serif', serif: '"Libre Caslon Text", serif' }
  ];

  return (
    <div className="tweaks-panel">
      <h3>Tweaks</h3>
      <div style={{fontSize: 12, fontStyle: 'italic', color: 'var(--ink-soft)'}}>Tuỳ chỉnh diện mạo của trang.</div>

      <div className="tweak-row">
        <label>Bảng màu</label>
        <div className="swatches">
          {palettes.map(p => (
            <div
              key={p.k}
              className={"swatch" + (vals.palette === p.k ? " on" : "")}
              title={p.name}
              style={{background: `linear-gradient(135deg, ${p.paper} 0% 50%, ${p.accent} 50% 100%)`}}
              onClick={() => update('palette', p.k)}
            />
          ))}
        </div>
        <div style={{fontSize: 11, color: 'var(--ink-soft)', marginTop: 6, fontStyle: 'italic'}}>
          {palettes.find(p => p.k === vals.palette)?.name}
        </div>
      </div>

      <div className="tweak-row">
        <label>Font chữ</label>
        <select value={vals.font} onChange={e => update('font', e.target.value)} style={{width: '100%'}}>
          {fonts.map(f => <option key={f.k} value={f.k}>{f.name}</option>)}
        </select>
      </div>

      <div className="tweak-row">
        <label>Hiệu ứng giấy</label>
        <select value={vals.grain} onChange={e => update('grain', e.target.value)} style={{width: '100%'}}>
          <option value="on">Có — vintage</option>
          <option value="soft">Nhẹ</option>
          <option value="off">Không — sạch</option>
        </select>
      </div>
    </div>
  );
}

function applyTweaks(vals) {
  const palettes = {
    paper: { paper: '#f4ecd8', ink: '#2a2420', accent: '#b8472a', accentDark: '#8a3420', paperDark: '#e8dcc0', inkSoft: '#5c4a3a', inkFaint: '#8b7355' },
    linen: { paper: '#efe8d5', ink: '#1e2a1c', accent: '#5c6b4a', accentDark: '#3e4a30', paperDark: '#e0d8bf', inkSoft: '#4a5544', inkFaint: '#7a8373' },
    sepia: { paper: '#ede0c8', ink: '#3a2819', accent: '#8b4513', accentDark: '#5c2e0c', paperDark: '#ddcfb4', inkSoft: '#6b4a2e', inkFaint: '#9a7d55' },
    bone: { paper: '#f5f0e4', ink: '#14213d', accent: '#d62828', accentDark: '#9a1818', paperDark: '#e5dfd0', inkSoft: '#3d4862', inkFaint: '#6a7385' },
    night: { paper: '#1a1815', ink: '#f5ead1', accent: '#e9b44c', accentDark: '#c89224', paperDark: '#2a2622', inkSoft: '#c9bc9a', inkFaint: '#8a7f65' }
  };
  const p = palettes[vals.palette] || palettes.paper;
  const r = document.documentElement;
  r.style.setProperty('--paper', p.paper);
  r.style.setProperty('--paper-dark', p.paperDark);
  r.style.setProperty('--ink', p.ink);
  r.style.setProperty('--ink-soft', p.inkSoft);
  r.style.setProperty('--ink-faint', p.inkFaint);
  r.style.setProperty('--accent', p.accent);
  r.style.setProperty('--accent-dark', p.accentDark);

  const fonts = {
    playfair: { d: '"Playfair Display", "Times New Roman", serif', s: '"EB Garamond", Georgia, serif' },
    dm: { d: '"DM Serif Display", serif', s: '"Lora", serif' },
    cormorant: { d: '"Cormorant Garamond", serif', s: '"Crimson Pro", serif' },
    bodoni: { d: '"Bodoni Moda", serif', s: '"Libre Caslon Text", serif' }
  };
  const f = fonts[vals.font] || fonts.playfair;
  r.style.setProperty('--font-display', f.d);
  r.style.setProperty('--font-serif', f.s);

  document.body.setAttribute('data-grain', vals.grain || 'on');
}

function App() {
  const [tweaks, setTweaks] = _useState(window.__INITIAL_TWEAKS);

  _useEffect(() => {
    applyTweaks(tweaks);
    // reveal on scroll
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [tweaks]);

  return (
    <>
      <TopNav/>
      <window.Hero/>
      <window.About/>
      <window.Schedule/>
      <window.Gallery2/>
      <window.Teachers/>
      <window.Classmates/>
      <window.RSVP/>
      <window.Fund/>
      <window.Messages/>
      <window.Contact/>
      <window.FAQ/>
      <window.Footer/>
      <TweakPanel defaults={tweaks} onChange={setTweaks}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
