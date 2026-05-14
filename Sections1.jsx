// About + Schedule + Gallery sections
function About() {
  return (
    <section id="about" className="about">
      <div className="page">
        <div className="index-bar">
          <span>Â§ 01 â€” Giá»›i thiá»‡u</span>
          <span>KhoÃ¡ 2006 Â· Pháº¡m PhÃº Thá»©</span>
          <span>trang 02</span>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <div className="section-number">Â§ 01</div>
            <h2 className="section-title">Hai mÆ°Æ¡i nÄƒm<br/><em>má»™t lá»i háº¹n</em></h2>
            <p className="section-dek">
              Lá»›p 12 khoÃ¡ 2006 â€” má»™t trÄƒm tÃ¡m mÆ°Æ¡i há»c sinh ra trÆ°á»ng, toáº£ Ä‘i kháº¯p Ä‘áº¥t nÆ°á»›c vÃ  tháº¿ giá»›i. NÄƒm nay, chÃºng ta vá» láº¡i chá»‘n xÆ°a.
            </p>
          </div>
          <div className="about-right">
            <div className="about-stats">
              <Stat n="18" label="Lá»›p 12 khoÃ¡ 2003â€“2006"/>
              <Stat n="482" label="Cá»±u há»c sinh toÃ n khoÃ¡"/>
              <Stat n="36" label="Tháº§y cÃ´ giÃ¡o"/>
              <Stat n="20" label="NÄƒm ká»ƒ tá»« ngÃ y ra trÆ°á»ng"/>
            </div>

            <div className="about-story">
              <p>NÄƒm 2003, chÃºng ta bÆ°á»›c vÃ o cá»•ng trÆ°á»ng vá»›i chiáº¿c cáº·p náº·ng trÄ©u sÃ¡ch vÃ  trÃ¡i tim nháº¹ tÃªnh. Ba nÄƒm sau, rá»i Ä‘i vá»›i táº¥m báº±ng tÃº tÃ i, vÃ i cuá»‘n lÆ°u bÃºt vÃ  má»™t lá»i háº¹n "sau nÃ y nhá»› gáº·p láº¡i".</p>
              <p>Hai mÆ°Æ¡i nÄƒm sau, lá»i háº¹n áº¥y thÃ nh hÃ¬nh. DÃ¹ báº¡n Ä‘ang á»Ÿ ÄÃ  Náºµng, SÃ i GÃ²n, HÃ  Ná»™i hay bÃªn kia Ä‘áº¡i dÆ°Æ¡ng â€” chÃºng tÃ´i mong má»™t láº§n báº¡n quay vá».</p>
              <p className="signoff mono caps">â€” Ban liÃªn láº¡c khoÃ¡ 2006</p>
            </div>
          </div>
        </div>

        <div className="ornament">â‹   â‹   â‹</div>
      </div>

      <style>{`
        .about { padding: 80px 0 40px; }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          padding: 40px 0;
        }
        .about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 2px solid var(--ink);
          border-left: 0.5px solid var(--ink);
          margin-bottom: 32px;
        }
        .stat {
          padding: 20px 16px;
          border-right: 0.5px solid var(--ink);
          border-bottom: 0.5px solid var(--ink);
        }
        .stat-n {
          font-family: var(--font-display);
          font-size: 56px;
          line-height: 1;
          color: var(--accent);
          font-weight: 900;
        }
        .stat-l {
          font-family: var(--font-mono);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--ink-soft);
          margin-top: 8px;
        }
        .about-story p { margin-bottom: 14px; font-size: 18px; line-height: 1.65; }
        .signoff { color: var(--accent); margin-top: 20px; font-size: 11px !important; }
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>
    </section>
  );
}

function Stat({ n, label }) {
  return (
    <div className="stat">
      <div className="stat-n">{n}</div>
      <div className="stat-l">{label}</div>
    </div>
  );
}

function Schedule() {
  const d = window.REUNION_DATA;
  return (
    <section id="schedule" className="schedule">
      <div className="page">
        <div className="index-bar">
          <span>Â§ 02 â€” ChÆ°Æ¡ng trÃ¬nh</span>
          <span>Thá»© báº£y Â· 18.07.2026</span>
          <span>trang 03</span>
        </div>

        <div className="sched-head">
          <div className="section-number">Â§ 02</div>
          <h2 className="section-title">Má»™t ngÃ y<br/><em>trá»Ÿ vá»</em></h2>
          <p className="section-dek">Báº£y cung báº­c cáº£m xÃºc â€” tá»« cÃ¡i báº¯t tay Ä‘áº§u tiÃªn Ä‘áº¿n bÃ i hÃ¡t cuá»‘i Ä‘Ãªm.</p>
        </div>

        <div className="timeline">
          {d.schedule.map((item, i) => (
            <div key={i} className="tl-row reveal">
              <div className="tl-time">
                <div className="tl-time-val mono">{item.time}</div>
                <div className="tl-dot"/>
              </div>
              <div className="tl-content">
                <div className="tl-num mono caps">Má»¥c {String(i+1).padStart(2, '0')}</div>
                <h3 className="tl-title display">{item.title}</h3>
                <p className="tl-desc">{item.desc}</p>
              </div>
              <div className="tl-decor placeholder">
                áº¢nh Â· {item.title.split(' ').slice(0, 2).join(' ')}
              </div>
            </div>
          ))}
        </div>

        <div className="ornament">â‹   â‹   â‹</div>
      </div>

      <style>{`
        .schedule { padding: 40px 0 60px; background: linear-gradient(180deg, transparent 0%, rgba(232, 220, 192, 0.3) 100%); }
        .sched-head { padding: 40px 0 32px; }
        .timeline {
          border-top: 2px solid var(--ink);
          border-bottom: 2px solid var(--ink);
        }
        .tl-row {
          display: grid;
          grid-template-columns: 120px 1fr 180px;
          gap: 32px;
          padding: 28px 0;
          border-bottom: 0.5px solid var(--ink);
          align-items: center;
        }
        .tl-row:last-child { border-bottom: none; }
        .tl-time {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .tl-time-val {
          font-size: 22px;
          font-weight: 600;
          color: var(--accent);
          letter-spacing: 0.05em;
        }
        .tl-dot {
          width: 8px; height: 8px;
          background: var(--ink);
          border-radius: 50%;
          flex-shrink: 0;
        }
        .tl-num { color: var(--ink-soft); font-size: 10px; margin-bottom: 6px; }
        .tl-title { font-size: 28px; margin-bottom: 6px; font-weight: 700; }
        .tl-desc { font-size: 16px; color: var(--ink-soft); line-height: 1.55; font-style: italic; }
        .tl-decor { aspect-ratio: 4/3; font-size: 9px; }
        @media (max-width: 860px) {
          .tl-row { grid-template-columns: 80px 1fr; }
          .tl-decor { display: none; }
        }
      `}</style>
    </section>
  );
}

function Gallery() {
  const photos = [
    { then: "Lá»›p 12A1 Â· 2006", now: "Gáº·p láº¡i Â· 2026", caption: "Buá»•i tá»•ng káº¿t nÄƒm há»c cuá»‘i cáº¥p" },
    { then: "SÃ¢n trÆ°á»ng Â· 2005", now: "SÃ¢n trÆ°á»ng Â· 2026", caption: "Giá» ra chÆ¡i, gá»‘c phÆ°á»£ng Ä‘áº§u hÃ nh lang" },
    { then: "VÄƒn nghá»‡ Â· 2006", now: "Gala Â· 2026", caption: "ÄÃªm vÄƒn nghá»‡ chia tay khoÃ¡ 2006" },
    { then: "Há»™i tráº¡i Â· 2005", now: "Picnic Â· 2026", caption: "Há»™i tráº¡i chÃ o má»«ng 26/3 nÄƒm cuá»‘i" },
    { then: "Lá»›p 12A3 Â· 2006", now: "Mini reunion Â· 2024", caption: "NhÃ³m báº¡n 12A3 gáº·p láº¡i táº¡i ÄÃ  Náºµng" },
    { then: "Tá»‘t nghiá»‡p Â· 2006", now: "Há»™i ngá»™ Â· 2026", caption: "áº¢nh táº­p thá»ƒ ngÃ y phÃ¡t báº±ng tá»‘t nghiá»‡p" }
  ];
  return (
    <section id="gallery" className="gallery">
      <div className="page">
        <div className="index-bar">
          <span>Â§ 03 â€” Ká»· niá»‡m</span>
          <span>Then & Now</span>
          <span>trang 04</span>
        </div>

        <div className="gal-head">
          <div className="section-number">Â§ 03</div>
          <h2 className="section-title">Rá»“i & <em>bÃ¢y giá»</em></h2>
          <p className="section-dek">Di chuá»™t lÃªn má»—i bá»©c áº£nh Ä‘á»ƒ tháº¥y chÃºng ta cá»§a <em>hai mÆ°Æ¡i nÄƒm trÆ°á»›c</em> trá»Ÿ vá».</p>
        </div>

        <div className="gal-grid">
          {photos.map((p, i) => (
            <div key={i} className={"gal-item reveal" + (i % 3 === 1 ? " tall" : "")}>
              <div className="gal-flipper">
                <div className="gal-face gal-then placeholder">
                  {p.then}
                </div>
                <div className="gal-face gal-now placeholder" style={{background: 'var(--paper-dark)'}}>
                  <div>
                    <span className="pill" style={{marginBottom: 8, display: 'inline-block'}}>Now</span><br/>
                    {p.now}
                  </div>
                </div>
              </div>
              <div className="gal-caption">
                <span className="mono caps" style={{color: 'var(--ink-faint)', fontSize: 9}}>Fig. {String(i+2).padStart(2, '0')}</span>
                <span className="italic">{p.caption}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gal-upload">
          <h3 className="display" style={{fontSize: 32, marginBottom: 8}}>CÃ³ áº£nh cÅ© muá»‘n chia sáº»?</h3>
          <p style={{marginBottom: 20, color: 'var(--ink-soft)', fontStyle: 'italic'}}>
            Album chung cá»§a chÃºng ta má»Ÿ cá»­a cho táº¥t cáº£ báº¡n cÃ¹ng khoÃ¡. Gá»­i áº£nh scan, áº£nh chá»¥p nhanh, áº£nh ká»· yáº¿u â€” báº¥t cá»© thá»© gÃ¬ báº¡n cÃ²n giá»¯.
          </p>
          <UploadBox/>
        </div>

        <div className="ornament">â‹   â‹   â‹</div>
      </div>

      <style>{`
        .gallery { padding: 60px 0; }
        .gal-head { padding: 40px 0 32px; }
        .gal-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 64px;
        }
        .gal-item { display: flex; flex-direction: column; gap: 8px; }
        .gal-item.tall .gal-flipper { aspect-ratio: 3/4; }
        .gal-flipper {
          aspect-ratio: 4/3;
          position: relative;
          perspective: 1200px;
          cursor: pointer;
        }
        .gal-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .gal-then { transform: rotateY(0); }
        .gal-now { transform: rotateY(180deg); }
        .gal-item:hover .gal-then { transform: rotateY(-180deg); }
        .gal-item:hover .gal-now { transform: rotateY(0); }
        .gal-caption {
          display: flex;
          gap: 12px;
          font-size: 13px;
          color: var(--ink-soft);
          align-items: baseline;
        }
        .gal-upload {
          border-top: 2px solid var(--ink);
          padding-top: 40px;
          text-align: center;
          max-width: 640px;
          margin: 0 auto;
        }
        @media (max-width: 860px) {
          .gal-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 520px) {
          .gal-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

function UploadBox() {
  const [files, setFiles] = useState([]);
  const onDrop = (e) => {
    e.preventDefault();
    const list = Array.from(e.dataTransfer.files).map(f => f.name);
    setFiles(prev => [...prev, ...list]);
  };
  const onPick = (e) => {
    const list = Array.from(e.target.files).map(f => f.name);
    setFiles(prev => [...prev, ...list]);
  };
  return (
    <div>
      <label
        className="upload-area"
        onDragOver={e => e.preventDefault()}
        onDrop={onDrop}
      >
        <input type="file" multiple accept="image/*" onChange={onPick} style={{display: 'none'}}/>
        <div className="upload-inner">
          <div className="upload-plus">+</div>
          <div className="mono caps" style={{fontSize: 11, letterSpacing: '0.2em'}}>KÃ©o tháº£ hoáº·c chá»n áº£nh</div>
          <div style={{fontStyle: 'italic', fontSize: 14, color: 'var(--ink-soft)', marginTop: 8}}>
            JPG, PNG, HEIC â€” tá»‘i Ä‘a 20MB má»—i áº£nh
          </div>
        </div>
      </label>
      {files.length > 0 && (
        <div className="upload-list">
          <div className="mono caps" style={{fontSize: 10, marginBottom: 8}}>ÄÃ£ chá»n {files.length} áº£nh</div>
          {files.map((f, i) => <div key={i} className="upload-item">âœ“ {f}</div>)}
          <button className="btn btn-accent" style={{marginTop: 16}} onClick={() => alert('Cáº£m Æ¡n! BTC sáº½ duyá»‡t vÃ  thÃªm vÃ o album chung.')}>Gá»­i áº£nh</button>
        </div>
      )}
      <style>{`
        .upload-area {
          display: block;
          border: 2px dashed var(--ink);
          padding: 40px 20px;
          cursor: pointer;
          background: var(--paper-dark);
          transition: background 0.2s;
        }
        .upload-area:hover { background: rgba(184, 71, 42, 0.08); }
        .upload-plus {
          font-family: var(--font-display);
          font-size: 48px;
          font-weight: 300;
          line-height: 1;
          color: var(--accent);
          margin-bottom: 8px;
        }
        .upload-list { margin-top: 20px; text-align: left; }
        .upload-item { font-family: var(--font-mono); font-size: 13px; color: var(--moss); padding: 4px 0; }
      `}</style>
    </div>
  );
}

window.About = About;
window.Schedule = Schedule;
window.Gallery = Gallery;
