// Teachers, Classmates, RSVP, Fund, Messages, Contact, FAQ
function Teachers() {
  const d = window.REUNION_DATA;
  return (
    <section id="teachers" className="teachers">
      <div className="page">
        <div className="index-bar">
          <span>Â§ 04 â€” Tri Ã¢n</span>
          <span>Tháº§y cÃ´ giÃ¡o</span>
          <span>trang 05</span>
        </div>

        <div className="t-head">
          <div className="section-number">Â§ 04</div>
          <h2 className="section-title">Nhá»¯ng ngÆ°á»i<br/><em>gieo chá»¯</em></h2>
          <p className="section-dek">
            "Nháº¥t tá»± vi sÆ°, bÃ¡n tá»± vi sÆ°." â€” Hai mÆ°Æ¡i nÄƒm sau, báº£ng Ä‘en Ä‘Ã£ láº·ng, nhÆ°ng tá»«ng lá»i dáº¡y váº«n cÃ²n vang.
          </p>
        </div>

        <div className="t-grid">
          {d.teachers.map((t, i) => (
            <article key={i} className="t-card reveal">
              <div className="t-photo placeholder">ChÃ¢n dung<br/>{t.name.split(' ').slice(-2).join(' ')}</div>
              <div className="t-body">
                <div className="mono caps" style={{fontSize: 9, color: 'var(--accent)', marginBottom: 6}}>{String(i+1).padStart(2, '0')}</div>
                <h3 className="display" style={{fontSize: 22, marginBottom: 4}}>{t.name}</h3>
                <div style={{fontStyle: 'italic', color: 'var(--ink-soft)', fontSize: 15}}>{t.role}</div>
                {t.years && <div className="mono" style={{fontSize: 11, color: 'var(--ink-faint)', marginTop: 6, letterSpacing: '0.1em'}}>{t.years}</div>}
              </div>
            </article>
          ))}
        </div>

        <div className="t-tribute">
          <div className="quote-mark">"</div>
          <p>
            Cáº£m Æ¡n tháº§y cÃ´ Ä‘Ã£ nÃ¢ng chÃºng em qua nhá»¯ng bÃ i toÃ¡n khÃ³, nhá»¯ng trang vÄƒn dÃ i, nhá»¯ng chiá»u thá»ƒ dá»¥c má»‡t nhoÃ i. HÃ´m nay chÃºng em Ä‘á»©ng Ä‘Ã¢y â€” nhá»¯ng ngÆ°á»i thá»£, tháº§y thuá»‘c, tháº§y giÃ¡o, ngÆ°á»i máº¹, ngÆ°á»i cha â€” Ä‘á»u mang trong mÃ¬nh má»™t pháº§n cá»§a tháº§y cÃ´.
          </p>
          <div className="mono caps" style={{marginTop: 16, color: 'var(--ink-soft)', fontSize: 10}}>
            â€” Thay máº·t khoÃ¡ 2006
          </div>
        </div>

        <div className="ornament">â‹   â‹   â‹</div>
      </div>

      <style>{`
        .teachers { padding: 60px 0; }
        .t-head { padding: 40px 0 32px; }
        .t-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 64px;
        }
        .t-card {
          border: 1.5px solid var(--ink);
          padding: 16px;
          background: var(--paper);
          box-shadow: 3px 3px 0 var(--ink);
        }
        .t-photo { aspect-ratio: 1; margin-bottom: 16px; font-size: 9px; }
        .t-tribute {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          padding: 48px 24px;
          border-top: 0.5px solid var(--ink);
          border-bottom: 0.5px solid var(--ink);
        }
        .quote-mark {
          font-family: var(--font-display);
          font-size: 120px;
          line-height: 0.5;
          color: var(--accent);
          font-style: italic;
          margin-bottom: -20px;
        }
        .t-tribute p { font-size: 20px; font-style: italic; line-height: 1.6; color: var(--ink); }
        @media (max-width: 860px) {
          .t-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 520px) {
          .t-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

function Classmates() {
  const d = window.REUNION_DATA;
  const [q, setQ] = useState('');
  const [filterClass, setFilterClass] = useState('all');

  const classes = ['all', ...new Set(d.classmates.map(m => m.class))];
  const filtered = d.classmates.filter(m => {
    const matchQ = !q || m.name.toLowerCase().includes(q.toLowerCase()) || m.now.toLowerCase().includes(q.toLowerCase());
    const matchC = filterClass === 'all' || m.class === filterClass;
    return matchQ && matchC;
  });
  const confirmedCount = d.classmates.filter(m => m.confirmed).length;

  return (
    <section id="classmates" className="classmates">
      <div className="page">
        <div className="index-bar">
          <span>Â§ 05 â€” Danh báº¡</span>
          <span>{confirmedCount}/{d.classmates.length} Ä‘Ã£ xÃ¡c nháº­n</span>
          <span>trang 06</span>
        </div>

        <div className="c-head">
          <div className="section-number">Â§ 05</div>
          <h2 className="section-title">TÃ¬m láº¡i<br/><em>má»™t ngÆ°á»i báº¡n</em></h2>
          <p className="section-dek">Danh sÃ¡ch cá»±u há»c sinh Ä‘ang cáº­p nháº­t. GÃµ tÃªn hoáº·c nghá» nghiá»‡p Ä‘á»ƒ tÃ¬m.</p>
        </div>

        <div className="c-tools">
          <div className="c-search">
            <label>TÃ¬m kiáº¿m</label>
            <input type="text" value={q} onChange={e => setQ(e.target.value)} placeholder="TÃªn, nghá», thÃ nh phá»‘â€¦"/>
          </div>
          <div className="c-filter">
            <label>Lá»c theo lá»›p</label>
            <div className="c-chips">
              {classes.map(c => (
                <button key={c} className={"c-chip" + (filterClass === c ? " on" : "")} onClick={() => setFilterClass(c)}>
                  {c === 'all' ? 'Táº¥t cáº£' : c}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="c-list">
          {filtered.map((m, i) => (
            <div key={i} className="c-row">
              <div className="c-num mono">{String(i+1).padStart(3, '0')}</div>
              <div className="c-avatar placeholder" style={{fontSize: 8}}>áº¢nh</div>
              <div className="c-name display">{m.name}</div>
              <div className="c-class mono caps">{m.class}</div>
              <div className="c-now italic">{m.now}</div>
              <div className="c-status">
                {m.confirmed
                  ? <span className="pill">ÄÃ£ xÃ¡c nháº­n</span>
                  : <span className="mono caps" style={{color: 'var(--ink-faint)', fontSize: 9}}>Chá» liÃªn láº¡c</span>
                }
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div style={{padding: 40, textAlign: 'center', fontStyle: 'italic', color: 'var(--ink-soft)'}}>
              KhÃ´ng tÃ¬m tháº¥y â€” cÃ³ thá»ƒ há» chÆ°a cáº­p nháº­t. LiÃªn há»‡ BTC Ä‘á»ƒ bá»• sung.
            </div>
          )}
        </div>

        <div className="ornament">â‹   â‹   â‹</div>
      </div>

      <style>{`
        .classmates { padding: 60px 0; }
        .c-head { padding: 40px 0 32px; }
        .c-tools {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 32px;
          padding: 24px 0;
          border-top: 2px solid var(--ink);
          border-bottom: 0.5px solid var(--ink);
          margin-bottom: 24px;
          align-items: end;
        }
        .c-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px; }
        .c-chip {
          font-family: var(--font-mono);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          padding: 6px 12px;
          background: transparent;
          border: 1px solid var(--ink);
          cursor: pointer;
          transition: all 0.15s;
        }
        .c-chip:hover { background: var(--paper-dark); }
        .c-chip.on { background: var(--ink); color: var(--paper); }
        .c-list {
          border-top: 0.5px solid var(--ink);
          border-bottom: 2px solid var(--ink);
        }
        .c-row {
          display: grid;
          grid-template-columns: 40px 48px 1fr 70px 1.5fr 120px;
          gap: 16px;
          align-items: center;
          padding: 14px 0;
          border-bottom: 0.5px solid var(--ink-faint);
        }
        .c-num { font-size: 11px; color: var(--ink-faint); }
        .c-avatar { aspect-ratio: 1; }
        .c-name { font-size: 19px; font-weight: 600; }
        .c-class { font-size: 10px; color: var(--accent); }
        .c-now { font-size: 14px; color: var(--ink-soft); }
        .c-status { text-align: right; }
        @media (max-width: 860px) {
          .c-tools { grid-template-columns: 1fr; }
          .c-row { grid-template-columns: 32px 1fr 80px; gap: 12px; }
          .c-avatar, .c-now, .c-status { display: none; }
        }
      `}</style>
    </section>
  );
}

function RSVP() {
  const [form, setForm] = useState({
    name: '', class: '', phone: '', email: '', guests: 0, message: '', attend: 'yes'
  });
  const [submitted, setSubmitted] = useState(false);
  const update = (k, v) => setForm(p => ({...p, [k]: v}));
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSubmitted(true);
  };
  return (
    <section id="rsvp" className="rsvp">
      <div className="page">
        <div className="index-bar">
          <span>Â§ 06 â€” XÃ¡c nháº­n</span>
          <span>RSVP Â· Háº¡n 30.06.2026</span>
          <span>trang 07</span>
        </div>

        <div className="r-grid">
          <div className="r-left">
            <div className="section-number">Â§ 06</div>
            <h2 className="section-title">ÄÄƒng kÃ½<br/><em>cÃ³ máº·t</em></h2>
            <p className="section-dek">
              Vui lÃ²ng xÃ¡c nháº­n trÆ°á»›c <strong>30.06.2026</strong> Ä‘á»ƒ BTC sáº¯p xáº¿p chá»— ngá»“i, in huy hiá»‡u vÃ  ká»· yáº¿u riÃªng cho báº¡n.
            </p>
            <div className="r-info">
              <div className="r-info-row">
                <div className="mono caps">PhÃ­ tham dá»±</div>
                <div className="display" style={{fontSize: 28}}>800.000Ä‘<span style={{fontSize: 14, color: 'var(--ink-soft)', fontStyle: 'italic', marginLeft: 8}}>/ngÆ°á»i</span></div>
              </div>
              <div className="r-info-row">
                <div className="mono caps">Bao gá»“m</div>
                <div style={{fontSize: 15}}>Tiá»‡c tá»‘i, ká»· yáº¿u, huy hiá»‡u, áº£nh ká»· niá»‡m</div>
              </div>
              <div className="r-info-row">
                <div className="mono caps">Thanh toÃ¡n</div>
                <div style={{fontSize: 15}}>Sau khi BTC xÃ¡c nháº­n RSVP qua email</div>
              </div>
            </div>
          </div>

          <div className="r-right">
            {submitted ? (
              <div className="r-success">
                <div className="display" style={{fontSize: 64, color: 'var(--accent)'}}>âœ“</div>
                <h3 className="display" style={{fontSize: 32, marginBottom: 12}}>Háº¹n gáº·p láº¡i, {form.name.split(' ').slice(-1)}!</h3>
                <p style={{fontStyle: 'italic', color: 'var(--ink-soft)', marginBottom: 24}}>
                  BTC Ä‘Ã£ nháº­n Ä‘Äƒng kÃ½ cá»§a báº¡n. ChÃºng tÃ´i sáº½ gá»­i email xÃ¡c nháº­n kÃ¨m hÆ°á»›ng dáº«n thanh toÃ¡n trong vÃ²ng 48 giá».
                </p>
                <button className="btn btn-ghost" onClick={() => setSubmitted(false)}>ÄÄƒng kÃ½ thÃªm ngÆ°á»i</button>
              </div>
            ) : (
              <form onSubmit={submit} className="r-form">
                <div className="r-field">
                  <label>Há» vÃ  tÃªn *</label>
                  <input type="text" value={form.name} onChange={e => update('name', e.target.value)} required/>
                </div>
                <div className="r-row2">
                  <div className="r-field">
                    <label>Lá»›p 12 *</label>
                    <select value={form.class} onChange={e => update('class', e.target.value)}>
                      <option value="">â€” Chá»n lá»›p â€”</option>
                      {['12A1','12A2','12A3','12A4','12A5','12A6','12A7','12A8'].map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="r-field">
                    <label>Sá»‘ Ä‘iá»‡n thoáº¡i *</label>
                    <input type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} required/>
                  </div>
                </div>
                <div className="r-field">
                  <label>Email</label>
                  <input type="email" value={form.email} onChange={e => update('email', e.target.value)}/>
                </div>
                <div className="r-field">
                  <label>Tham dá»±</label>
                  <div className="r-radios">
                    {[
                      {v: 'yes', l: 'CÃ³, tÃ´i sáº½ Ä‘áº¿n'},
                      {v: 'maybe', l: 'Äang thu xáº¿p'},
                      {v: 'no', l: 'KhÃ´ng thá»ƒ, gá»­i lá»i chÃºc'}
                    ].map(opt => (
                      <label key={opt.v} className="r-radio">
                        <input type="radio" name="attend" checked={form.attend === opt.v} onChange={() => update('attend', opt.v)}/>
                        <span>{opt.l}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="r-field">
                  <label>Sá»‘ ngÆ°á»i Ä‘i cÃ¹ng (vá»£/chá»“ng/con)</label>
                  <input type="number" min="0" max="6" value={form.guests} onChange={e => update('guests', e.target.value)}/>
                </div>
                <div className="r-field">
                  <label>Lá»i nháº¯n cho BTC</label>
                  <textarea value={form.message} onChange={e => update('message', e.target.value)} placeholder="Dá»‹ á»©ng thá»©c Äƒn, yÃªu cáº§u Ä‘áº·c biá»‡t, báº¡n mong gáº·p aiâ€¦"/>
                </div>
                <button type="submit" className="btn btn-accent" style={{width: '100%', marginTop: 16}}>Gá»­i xÃ¡c nháº­n</button>
              </form>
            )}
          </div>
        </div>

        <div className="ornament">â‹   â‹   â‹</div>
      </div>

      <style>{`
        .rsvp { padding: 60px 0; background: var(--paper-dark); border-top: 2px solid var(--ink); border-bottom: 2px solid var(--ink); }
        .r-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 64px;
          padding: 40px 0;
        }
        .r-info {
          border-top: 2px solid var(--ink);
          margin-top: 32px;
        }
        .r-info-row {
          padding: 16px 0;
          border-bottom: 0.5px solid var(--ink);
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 16px;
          align-items: baseline;
        }
        .r-info-row .mono { font-size: 10px; color: var(--ink-soft); }
        .r-form {
          background: var(--paper);
          border: 1.5px solid var(--ink);
          padding: 32px;
          box-shadow: 6px 6px 0 var(--ink);
        }
        .r-field { margin-bottom: 20px; }
        .r-row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .r-radios { display: flex; flex-direction: column; gap: 8px; padding-top: 8px; }
        .r-radio { display: flex; align-items: center; gap: 10px; font-size: 15px; cursor: pointer; }
        .r-radio input { accent-color: var(--accent); }
        .r-success { background: var(--paper); border: 1.5px solid var(--ink); padding: 48px 32px; text-align: center; box-shadow: 6px 6px 0 var(--ink); }
        @media (max-width: 860px) {
          .r-grid { grid-template-columns: 1fr; gap: 32px; }
          .r-row2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

window.Teachers = Teachers;
window.Classmates = Classmates;
window.RSVP = RSVP;
