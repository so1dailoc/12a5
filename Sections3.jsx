// Fund, Messages, Contact, FAQ, Footer
function Fund() {
  const d = window.REUNION_DATA;
  const pct = Math.round((d.fundRaised / d.fundGoal) * 100);
  const fmt = (n) => n.toLocaleString('vi-VN') + 'Ä‘';
  return (
    <section id="fund" className="fund">
      <div className="page">
        <div className="index-bar">
          <span>Â§ 07 â€” Quá»¹ lá»›p</span>
          <span>Tri Ã¢n tháº§y cÃ´ Â· Há»c bá»•ng</span>
          <span>trang 08</span>
        </div>

        <div className="f-grid">
          <div>
            <div className="section-number">Â§ 07</div>
            <h2 className="section-title">Má»™t pháº§n<br/><em>nhá» bÃ©</em></h2>
            <p className="section-dek">
              Quá»¹ lá»›p nÄƒm nay dÃ nh cho ba má»¥c Ä‘Ã­ch: tri Ã¢n tháº§y cÃ´, há»c bá»•ng há»c sinh khÃ³ khÄƒn táº¡i trÆ°á»ng, vÃ  chi phÃ­ tá»• chá»©c há»™i ngá»™.
            </p>
          </div>

          <div className="f-meter">
            <div className="f-meter-head">
              <div>
                <div className="mono caps" style={{fontSize: 10, color: 'var(--ink-soft)'}}>ÄÃ£ gÃ¢y quá»¹</div>
                <div className="display" style={{fontSize: 44, color: 'var(--accent)', fontWeight: 900}}>{fmt(d.fundRaised)}</div>
              </div>
              <div style={{textAlign: 'right'}}>
                <div className="mono caps" style={{fontSize: 10, color: 'var(--ink-soft)'}}>Má»¥c tiÃªu</div>
                <div className="display" style={{fontSize: 28}}>{fmt(d.fundGoal)}</div>
              </div>
            </div>
            <div className="f-bar">
              <div className="f-bar-fill" style={{width: pct + '%'}}/>
              <div className="f-bar-label mono caps">{pct}% â€” cáº£m Æ¡n cÃ¡c báº¡n</div>
            </div>
            <div className="f-allocs">
              <Alloc label="Tri Ã¢n tháº§y cÃ´" pct={40} color="var(--accent)"/>
              <Alloc label="Há»c bá»•ng HS" pct={35} color="var(--moss)"/>
              <Alloc label="Tá»• chá»©c sá»± kiá»‡n" pct={25} color="var(--ink)"/>
            </div>
            <div className="f-bank">
              <div className="mono caps" style={{fontSize: 10, marginBottom: 8, color: 'var(--ink-soft)'}}>Chuyá»ƒn khoáº£n</div>
              <div className="mono" style={{fontSize: 14, lineHeight: 1.8}}>
                Vietcombank Â· 0123 4567 8901<br/>
                HOI KHOA 2006 PPT<br/>
                <span style={{color: 'var(--ink-soft)'}}>Ná»™i dung: [TÃªn] [Lá»›p] [SÄT]</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ornament">â‹   â‹   â‹</div>
      </div>

      <style>{`
        .fund { padding: 60px 0; }
        .f-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 64px;
          padding: 40px 0;
          align-items: start;
        }
        .f-meter {
          border: 1.5px solid var(--ink);
          padding: 28px;
          background: var(--paper);
          box-shadow: 6px 6px 0 var(--ink);
        }
        .f-meter-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 20px; }
        .f-bar {
          height: 28px;
          background: var(--paper-dark);
          border: 1px solid var(--ink);
          position: relative;
          overflow: hidden;
          margin-bottom: 24px;
        }
        .f-bar-fill {
          height: 100%;
          background: repeating-linear-gradient(45deg, var(--accent), var(--accent) 8px, var(--accent-dark) 8px, var(--accent-dark) 16px);
          transition: width 1s ease;
        }
        .f-bar-label {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 10px;
          color: var(--ink);
          mix-blend-mode: difference;
          color: var(--paper);
        }
        .f-allocs { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 24px; padding-top: 16px; border-top: 0.5px solid var(--ink-faint); }
        .alloc { text-align: center; padding: 8px; }
        .alloc-pct { font-family: var(--font-display); font-size: 32px; font-weight: 700; line-height: 1; }
        .alloc-label { font-family: var(--font-mono); font-size: 9px; text-transform: uppercase; letter-spacing: 0.15em; color: var(--ink-soft); margin-top: 4px; }
        .f-bank {
          border-top: 2px solid var(--ink);
          padding-top: 16px;
        }
        @media (max-width: 860px) {
          .f-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>
    </section>
  );
}

function Alloc({ label, pct, color }) {
  return (
    <div className="alloc">
      <div className="alloc-pct" style={{color}}>{pct}%</div>
      <div className="alloc-label">{label}</div>
    </div>
  );
}

function Messages() {
  const [msgs, setMsgs] = useState([
    { name: 'Nguyá»…n Minh Anh', class: '12A1', text: 'KhÃ´ng thá»ƒ tin 20 nÄƒm Ä‘Ã£ trÃ´i. Mong gáº·p láº¡i táº¥t cáº£ má»i ngÆ°á»i!', date: '12 Â· 04 Â· 2026' },
    { name: 'Tráº§n Thá»‹ BÃ­ch', class: '12A1', text: 'Gá»­i lá»i chÃ o thÃ¢n thÆ°Æ¡ng Ä‘áº¿n tháº§y cÃ´. Con sáº½ vá»!', date: '10 Â· 04 Â· 2026' },
    { name: 'HoÃ ng VÄƒn Em', class: '12A2', text: 'CÃ²n nhá»› chiá»u mÆ°a cuá»‘i cáº¥p Ä‘á»©ng á»Ÿ hÃ nh lang nhÃ¬n sÃ¢n trÆ°á»ng ngáº­p. Háº¹n gáº·p láº¡i cÃ¡c báº¡n.', date: '08 Â· 04 Â· 2026' },
    { name: 'Äinh Quang Nam', class: '12A5', text: 'Sáº½ mang mÃ¡y áº£nh vá» ghi láº¡i cáº£ ngÃ y cho má»i ngÆ°á»i. Bao nhiÃªu nÄƒm rá»“i khÃ´ng chá»¥p Ä‘Æ°á»£c áº£nh cá»§a khoÃ¡ mÃ¬nh.', date: '05 Â· 04 Â· 2026' }
  ]);
  const [form, setForm] = useState({ name: '', class: '', text: '' });
  const post = (e) => {
    e.preventDefault();
    if (!form.name || !form.text) return;
    const now = new Date();
    const date = `${String(now.getDate()).padStart(2,'0')} Â· ${String(now.getMonth()+1).padStart(2,'0')} Â· ${now.getFullYear()}`;
    setMsgs([{ ...form, date }, ...msgs]);
    setForm({ name: '', class: '', text: '' });
  };
  return (
    <section id="messages" className="messages">
      <div className="page">
        <div className="index-bar">
          <span>Â§ 08 â€” LÆ°u bÃºt</span>
          <span>Lá»i nháº¯n cá»§a cÃ¡c báº¡n</span>
          <span>trang 09</span>
        </div>

        <div className="m-head">
          <div className="section-number">Â§ 08</div>
          <h2 className="section-title">Sá»• <em>lÆ°u bÃºt</em><br/>áº¥n báº£n 2026</h2>
          <p className="section-dek">Äá»ƒ láº¡i má»™t dÃ²ng â€” cho báº£n thÃ¢n, cho báº¡n cÅ©, cho tháº§y cÃ´. Ai cÅ©ng sáº½ Ä‘á»c Ä‘Æ°á»£c.</p>
        </div>

        <div className="m-compose">
          <form onSubmit={post}>
            <div className="m-compose-row">
              <input type="text" placeholder="TÃªn cá»§a báº¡n" value={form.name} onChange={e => setForm({...form, name: e.target.value})}/>
              <input type="text" placeholder="Lá»›p (VD 12A1)" value={form.class} onChange={e => setForm({...form, class: e.target.value})} style={{maxWidth: 160}}/>
            </div>
            <textarea placeholder="Viáº¿t má»™t lá»i nháº¯nâ€¦" value={form.text} onChange={e => setForm({...form, text: e.target.value})} rows={3}/>
            <button type="submit" className="btn btn-accent" style={{marginTop: 12}}>Äá»ƒ láº¡i lá»i nháº¯n</button>
          </form>
        </div>

        <div className="m-wall">
          {msgs.map((m, i) => (
            <div key={i} className={"m-card m-var-" + (i % 4)}>
              <div className="m-text">"{m.text}"</div>
              <div className="m-meta">
                <div>
                  <div className="display" style={{fontSize: 18}}>{m.name}</div>
                  <div className="mono caps" style={{fontSize: 9, color: 'var(--accent)'}}>{m.class}</div>
                </div>
                <div className="mono" style={{fontSize: 10, color: 'var(--ink-faint)'}}>{m.date}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="ornament">â‹   â‹   â‹</div>
      </div>

      <style>{`
        .messages { padding: 60px 0; }
        .m-head { padding: 40px 0 32px; }
        .m-compose {
          background: var(--paper-dark);
          border: 1.5px solid var(--ink);
          padding: 24px;
          margin-bottom: 48px;
          max-width: 720px;
        }
        .m-compose-row { display: grid; grid-template-columns: 1fr auto; gap: 16px; margin-bottom: 16px; }
        .m-wall {
          columns: 2;
          column-gap: 24px;
        }
        .m-card {
          break-inside: avoid;
          padding: 20px 22px;
          margin-bottom: 24px;
          border: 1px solid var(--ink);
          display: inline-block;
          width: 100%;
        }
        .m-var-0 { background: var(--paper); transform: rotate(-0.5deg); box-shadow: 3px 3px 0 var(--ink); }
        .m-var-1 { background: #f5e6c8; transform: rotate(0.4deg); box-shadow: 3px 3px 0 var(--ink); }
        .m-var-2 { background: var(--paper-dark); transform: rotate(-0.3deg); box-shadow: 3px 3px 0 var(--ink); }
        .m-var-3 { background: #efe4cb; transform: rotate(0.6deg); box-shadow: 3px 3px 0 var(--ink); }
        .m-text { font-size: 17px; font-style: italic; line-height: 1.6; margin-bottom: 16px; color: var(--ink); }
        .m-meta { display: flex; justify-content: space-between; align-items: flex-end; padding-top: 12px; border-top: 0.5px solid var(--ink-faint); }
        @media (max-width: 640px) {
          .m-wall { columns: 1; }
          .m-compose-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

function Contact() {
  const d = window.REUNION_DATA;
  return (
    <section id="contact" className="contact">
      <div className="page">
        <div className="index-bar">
          <span>Â§ 09 â€” Ban Tá»• Chá»©c</span>
          <span>LiÃªn há»‡</span>
          <span>trang 10</span>
        </div>

        <div className="ct-head">
          <div className="section-number">Â§ 09</div>
          <h2 className="section-title">Ban <em>liÃªn láº¡c</em></h2>
          <p className="section-dek">CÃ³ tháº¯c máº¯c, gÃ³p Ã½, hoáº·c muá»‘n giÃºp má»™t tay? Gá»i ngay.</p>
        </div>

        <div className="ct-grid">
          {d.organizers.map((o, i) => (
            <div key={i} className="ct-card">
              <div className="ct-num mono caps">â„– {String(i+1).padStart(2, '0')}</div>
              <h3 className="display" style={{fontSize: 24, marginBottom: 4}}>{o.name}</h3>
              <div style={{fontStyle: 'italic', color: 'var(--ink-soft)', marginBottom: 16}}>{o.role}</div>
              <div className="mono" style={{fontSize: 13, lineHeight: 1.9}}>
                ðŸ“ž {o.phone}<br/>
                âœ‰ {o.email}
              </div>
            </div>
          ))}
        </div>

        <div className="ornament">â‹   â‹   â‹</div>
      </div>

      <style>{`
        .contact { padding: 60px 0; background: var(--paper-dark); border-top: 2px solid var(--ink); border-bottom: 2px solid var(--ink); }
        .ct-head { padding: 40px 0 32px; }
        .ct-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border-top: 2px solid var(--ink);
          border-left: 0.5px solid var(--ink);
        }
        .ct-card {
          padding: 28px 24px;
          border-right: 0.5px solid var(--ink);
          border-bottom: 2px solid var(--ink);
          background: var(--paper);
        }
        .ct-num { font-size: 10px; color: var(--accent); margin-bottom: 12px; }
        @media (max-width: 860px) {
          .ct-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 520px) {
          .ct-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

function FAQ() {
  const d = window.REUNION_DATA;
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="faq">
      <div className="page">
        <div className="index-bar">
          <span>Â§ 10 â€” FAQ</span>
          <span>ThÆ°á»ng gáº·p</span>
          <span>trang 11</span>
        </div>

        <div className="fq-head">
          <div className="section-number">Â§ 10</div>
          <h2 className="section-title">Há»i & <em>Ä‘Ã¡p</em></h2>
        </div>

        <div className="fq-list">
          {d.faqs.map((f, i) => (
            <div key={i} className={"fq-row" + (open === i ? " open" : "")}>
              <button className="fq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="mono caps" style={{color: 'var(--accent)', marginRight: 16, fontSize: 11}}>Q{String(i+1).padStart(2, '0')}</span>
                <span className="display" style={{fontSize: 22}}>{f.q}</span>
                <span className="fq-mark">{open === i ? 'âˆ’' : '+'}</span>
              </button>
              <div className="fq-a">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .faq { padding: 60px 0; }
        .fq-head { padding: 40px 0 32px; }
        .fq-list {
          border-top: 2px solid var(--ink);
          border-bottom: 2px solid var(--ink);
        }
        .fq-row { border-bottom: 0.5px solid var(--ink); }
        .fq-row:last-child { border-bottom: none; }
        .fq-q {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 24px 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          color: var(--ink);
        }
        .fq-q .display { flex: 1; font-weight: 600; }
        .fq-mark {
          font-family: var(--font-display);
          font-size: 32px;
          color: var(--accent);
          line-height: 1;
          transition: transform 0.3s;
        }
        .fq-a {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }
        .fq-a p {
          padding: 0 0 24px 48px;
          font-size: 17px;
          line-height: 1.65;
          color: var(--ink-soft);
          max-width: 780px;
        }
        .fq-row.open .fq-a { max-height: 400px; }
      `}</style>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="page">
        <div className="fo-top">
          <div>
            <div className="display" style={{fontSize: 48, lineHeight: 0.95}}>Há»™i Ngá»™<br/><em style={{color: 'var(--accent)'}}>20 NÄƒm</em></div>
            <div className="mono caps" style={{marginTop: 16, color: 'var(--ink-soft)', fontSize: 10}}>KhoÃ¡ 2006 â€” THPT Pháº¡m PhÃº Thá»© â€” ÄÃ  Náºµng</div>
          </div>
          <div className="fo-nav">
            <a href="#top">Trá»Ÿ láº¡i Ä‘áº§u trang â†‘</a>
          </div>
        </div>
        <div className="fo-bottom">
          <div className="mono" style={{fontSize: 11}}>Â© 2026 Â· Ban liÃªn láº¡c khoÃ¡ 2006</div>
          <div className="mono caps" style={{fontSize: 10, color: 'var(--ink-faint)'}}>In áº¥n pháº©m sá»‘ â€” áº¥n báº£n giá»›i háº¡n</div>
        </div>
      </div>

      <style>{`
        .footer { padding: 60px 0 40px; border-top: 3px double var(--ink); }
        .fo-top { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 32px; }
        .fo-nav a { color: var(--ink); font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; text-decoration: none; border-bottom: 1px solid var(--ink); padding-bottom: 2px; }
        .fo-bottom { display: flex; justify-content: space-between; padding-top: 20px; border-top: 0.5px solid var(--ink-faint); }
      `}</style>
    </footer>
  );
}

window.Fund = Fund;
window.Messages = Messages;
window.Contact = Contact;
window.FAQ = FAQ;
window.Footer = Footer;
