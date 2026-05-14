// Hero section with countdown
const { useState, useEffect, useRef } = React;

function useCountdown(target) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, new Date(target).getTime() - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  return { days, hours, mins, secs };
}

function Hero() {
  const d = window.REUNION_DATA;
  const c = useCountdown(d.eventDate);

  return (
    <section className="hero" id="top">
      <div className="page hero-inner">
        <div className="hero-top">
          <div className="hero-emblem">
            <div className="emblem-ring">
              <svg viewBox="0 0 120 120" width="120" height="120">
                <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="0.75"/>
                <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <path id="arcTop" d="M 10,60 A 50,50 0 0,1 110,60" fill="none"/>
                <path id="arcBot" d="M 10,60 A 50,50 0 0,0 110,60" fill="none"/>
                <text fontFamily="var(--font-mono)" fontSize="7" letterSpacing="2" fill="currentColor">
                  <textPath href="#arcTop" startOffset="50%" textAnchor="middle">PHáº M PHÃš THá»¨ Â· ÄÃ€ Náº´NG</textPath>
                </text>
                <text fontFamily="var(--font-mono)" fontSize="7" letterSpacing="2" fill="currentColor">
                  <textPath href="#arcBot" startOffset="50%" textAnchor="middle">KHOÃ 2006 â€” 2026</textPath>
                </text>
                <text x="60" y="55" fontFamily="var(--font-display)" fontSize="28" fontWeight="700" textAnchor="middle" fill="currentColor" fontStyle="italic">XX</text>
                <text x="60" y="72" fontFamily="var(--font-mono)" fontSize="6" letterSpacing="3" textAnchor="middle" fill="currentColor">NÄ‚M</text>
              </svg>
            </div>
          </div>
          <div className="hero-meta">
            <div className="mono caps" style={{color: 'var(--ink-soft)'}}>Ká»· yáº¿u bá» tÃºi Â· Sá»‘ Ä‘áº·c biá»‡t</div>
            <div className="mono caps" style={{color: 'var(--accent)', marginTop: 4}}>Táº­p XX Â· áº¤n báº£n 2026</div>
          </div>
        </div>

        <h1 className="hero-title display">
          <span className="hero-line-1">Há»™i ngá»™</span>
          <span className="hero-line-2"><em>hai mÆ°Æ¡i</em> nÄƒm</span>
        </h1>

        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-serif-block">
              <p className="drop-cap">
                <span className="dc">M</span>á»™t buá»•i chiá»u thÃ¡ng báº£y, chÃºng ta láº¡i gáº·p nhau dÆ°á»›i mÃ¡i trÆ°á»ng Pháº¡m PhÃº Thá»© â€” nÆ¡i Ä‘Ã£ giá»¯ nhá»¯ng tiáº¿ng cÆ°á»i, nhá»¯ng trang vá»Ÿ, nhá»¯ng lá»i háº¹n cÃ²n dang dá»Ÿ cá»§a tuá»•i mÆ°á»i tÃ¡m. Hai mÆ°Æ¡i nÄƒm Ä‘á»§ dÃ i Ä‘á»ƒ tÃ³c pha sÆ°Æ¡ng, nhÆ°ng chÆ°a bao giá» Ä‘á»§ Ä‘á»ƒ quÃªn nhau.
              </p>
              <div className="hero-byline">
                <span className="mono caps">Ban Tá»• Chá»©c â€” KhoÃ¡ 2006</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-photo placeholder" style={{aspectRatio: '3/4'}}>
              áº¢nh ká»· yáº¿u<br/>toÃ n khoÃ¡ 2006
            </div>
            <div className="hero-caption mono caps">Fig. 01 Â· SÃ¢n trÆ°á»ng, thÃ¡ng 5/2006</div>
          </div>
        </div>

        <div className="hero-info-bar">
          <div className="info-cell">
            <div className="mono caps info-label">Thá»i gian</div>
            <div className="display info-value">18 Â· 07 Â· 2026</div>
            <div className="serif info-sub">Thá»© báº£y Â· 15:00</div>
          </div>
          <div className="info-cell">
            <div className="mono caps info-label">Äá»‹a Ä‘iá»ƒm</div>
            <div className="display info-value">ÄÃ  Náºµng</div>
            <div className="serif info-sub">THPT Pháº¡m PhÃº Thá»©</div>
          </div>
          <div className="info-cell">
            <div className="mono caps info-label">Dress code</div>
            <div className="display info-value">Tráº¯ng & Gala</div>
            <div className="serif info-sub">SÆ¡ mi â†’ Smart casual</div>
          </div>
        </div>

        <div className="countdown">
          <div className="mono caps cd-label">CÃ²n láº¡i Ä‘áº¿n ngÃ y há»™i ngá»™</div>
          <div className="cd-grid">
            <CDUnit value={c.days} label="NgÃ y"/>
            <span className="cd-sep">:</span>
            <CDUnit value={c.hours} label="Giá»"/>
            <span className="cd-sep">:</span>
            <CDUnit value={c.mins} label="PhÃºt"/>
            <span className="cd-sep">:</span>
            <CDUnit value={c.secs} label="GiÃ¢y"/>
          </div>
        </div>

        <div className="hero-cta">
          <a href="#rsvp" className="btn btn-accent">ÄÄƒng kÃ½ tham dá»±</a>
          <a href="#schedule" className="btn btn-ghost">Xem chÆ°Æ¡ng trÃ¬nh</a>
        </div>
      </div>

      <style>{`
        .hero { padding: 40px 0 80px; position: relative; }
        .hero-inner { position: relative; }
        .hero-top {
          display: flex; justify-content: space-between; align-items: flex-start;
          border-top: 3px double var(--ink);
          border-bottom: 0.5px solid var(--ink);
          padding: 16px 0;
          margin-bottom: 40px;
        }
        .hero-emblem { color: var(--ink); }
        .hero-meta { text-align: right; padding-top: 40px; }
        .hero-title {
          font-size: clamp(72px, 14vw, 220px);
          line-height: 0.85;
          letter-spacing: -0.04em;
          margin-bottom: 48px;
        }
        .hero-line-1 { display: block; }
        .hero-line-2 { display: block; text-align: right; margin-top: -0.1em; }
        .hero-line-2 em { font-style: italic; color: var(--accent); font-weight: 500; }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 48px;
          margin-bottom: 56px;
          border-top: 0.5px solid var(--ink);
          padding-top: 32px;
        }
        .hero-serif-block { max-width: 520px; }
        .drop-cap { font-size: 20px; line-height: 1.55; color: var(--ink); }
        .drop-cap .dc {
          font-family: var(--font-display);
          font-size: 78px;
          float: left;
          line-height: 0.85;
          padding: 6px 10px 0 0;
          color: var(--accent);
          font-weight: 900;
        }
        .hero-byline { margin-top: 24px; padding-top: 12px; border-top: 0.5px solid var(--ink-faint); }
        .hero-photo { width: 100%; }
        .hero-caption {
          margin-top: 8px;
          font-size: 10px;
          color: var(--ink-soft);
          text-align: center;
        }
        .hero-info-bar {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 2px solid var(--ink);
          border-bottom: 2px solid var(--ink);
          margin-bottom: 48px;
        }
        .info-cell {
          padding: 24px 20px;
          border-right: 0.5px solid var(--ink);
        }
        .info-cell:last-child { border-right: none; }
        .info-label { color: var(--ink-soft); margin-bottom: 8px; font-size: 10px; }
        .info-value { font-size: 36px; font-weight: 700; margin-bottom: 4px; }
        .info-sub { font-family: var(--font-serif); font-style: italic; color: var(--ink-soft); font-size: 15px; }
        .countdown { text-align: center; margin-bottom: 40px; }
        .cd-label { color: var(--ink-soft); margin-bottom: 16px; font-size: 11px; }
        .cd-grid {
          display: inline-flex;
          align-items: flex-start;
          gap: 8px;
        }
        .cd-sep {
          font-family: var(--font-display);
          font-size: clamp(48px, 8vw, 96px);
          line-height: 1;
          color: var(--ink-faint);
          font-weight: 300;
        }
        .hero-cta {
          display: flex;
          gap: 12px;
          justify-content: center;
          padding-top: 24px;
          border-top: 0.5px solid var(--ink);
        }
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr; }
          .hero-info-bar { grid-template-columns: 1fr; }
          .info-cell { border-right: none; border-bottom: 0.5px solid var(--ink); }
          .info-cell:last-child { border-bottom: none; }
          .hero-top { flex-direction: column; gap: 16px; }
          .hero-meta { text-align: left; padding-top: 0; }
        }
      `}</style>
    </section>
  );
}

function CDUnit({ value, label }) {
  const padded = String(value).padStart(2, '0');
  return (
    <div className="cd-unit">
      <div className="cd-value">{padded}</div>
      <div className="mono caps cd-unit-label">{label}</div>
      <style>{`
        .cd-unit {
          min-width: clamp(64px, 10vw, 128px);
          text-align: center;
          background: var(--paper-dark);
          border: 1.5px solid var(--ink);
          padding: 12px 8px;
          box-shadow: 4px 4px 0 var(--ink);
        }
        .cd-value {
          font-family: var(--font-display);
          font-size: clamp(44px, 7vw, 84px);
          font-weight: 900;
          line-height: 0.95;
          color: var(--ink);
          font-variant-numeric: tabular-nums;
        }
        .cd-unit-label {
          font-size: 9px;
          color: var(--ink-soft);
          margin-top: 4px;
        }
      `}</style>
    </div>
  );
}

window.Hero = Hero;
