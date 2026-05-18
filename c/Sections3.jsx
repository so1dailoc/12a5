// Fund, Messages, Contact, FAQ, Footer
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwfthy4T7rxgUUeYQRZFFISuampMV8zL-7hqB4fUaWdIgDkIoRsL9hbH6-p90C_JWL0oQ/exec";
const fetchMessages = () => {
  fetch(SCRIPT_URL)
    .then(res => res.json()) // Yêu cầu phản hồi từ Script phải là định dạng JSON hợp lệ
    .then(data => {
      setMessages(data.reverse()); // data buộc phải là một Mảng (Array)
      setFetching(false);
    })
    .catch(err => {
      console.error("Lỗi tải lời nhắn:", err);
      setFetching(false);
    });
};

function Fund() {
  const d = window.REUNION_DATA;
  const pct = Math.round((d.fundRaised / d.fundGoal) * 100);
  const fmt = (n) => n.toLocaleString('vi-VN') + 'đ';
  return (
    <section id="fund" className="fund">
      <div className="page">
        <div className="index-bar">
          <span>§ 07 — Quỹ lớp</span>
          <span>Hội khóa và Hoạt động thường niên của Lớp</span>
          <span>trang 08</span>
        </div>

        <div className="f-grid">
          <div>
            <div className="section-number">§ 07</div>
            <h2 className="section-title">Một phần<br/><em>nhỏ bé</em></h2>
            <p className="section-dek">
             - Phần Nội dung Chuyển khoản [Nop tien Hoi Khoa] sẽ được tổng hợp và chuyển khoản về Quỹ Hội Khóa 20 của Trường.
             - Phần Nội dung Chuyển khoản [Nop tien Quy] sẽ được lưu ở Quỹ lớp và sử dụng vào Mục đích CHI đã thông qua (Thăm viếng Thầy cô và các Bậc phụ huynh, các hoàn cảnh khó khăn - hoàn cảnh đặc biệt của lớp chúng ta...)`
 `           </p>
          </div>

          <div className="f-meter">
            <div className="f-meter-head">
              <div>
                <div className="mono caps" style={{fontSize: 10, color: 'var(--ink-soft)'}}>Đã gây quỹ</div>
                <div className="display" style={{fontSize: 44, color: 'var(--accent)', fontWeight: 900}}>{fmt(d.fundRaised)}</div>
              </div>
              <div style={{textAlign: 'right'}}>
                <div className="mono caps" style={{fontSize: 10, color: 'var(--ink-soft)'}}>Mục tiêu</div>
                <div className="display" style={{fontSize: 28}}>{fmt(d.fundGoal)}</div>
              </div>
            </div>
            <div className="f-bar">
              <div className="f-bar-fill" style={{width: pct + '%'}}/>
              <div className="f-bar-label mono caps">{pct}% — cảm ơn các bạn</div>
            </div>
            <div className="f-allocs">
                <Alloc label="Mỗi lớp phải đóng" pct="6.000.000đ" color="var(--accent)"/>
                <Alloc label="Mỗi bạn phải đóng" pct="600.000đ" color="var(--moss)"/>
                <Alloc label="Quỹ Lớp" pct="Còn lại" color="var(--ink)"/>
            </div>
            <div className="f-bank">
              <div className="mono caps" style={{fontSize: 10, marginBottom: 8, color: 'var(--ink-soft)'}}>Chuyển khoản</div>
              <div className="mono" style={{fontSize: 14, lineHeight: 1.8}}>
                Vietcombank · 7775664346<br/>
                HUYNH THI MINH NGUYET<br/>
                <span style={{color: 'var(--ink-soft)'}}>Nội dung: [Ten]+[Nop tien Hoi Khoa] hoặc [Ten]+[Nop tien Quy]</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ornament">❋   ❋   ❋</div>
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
      <div className="alloc-pct" style={{color}}>{pct}</div>
      <div className="alloc-label">{label}</div>
    </div>
  );
}

function Messages() {
  const [messages, setMessages] = React.useState([]);
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [fetching, setFetching] = React.useState(true);

  const fetchMessages = () => {
    fetch(SCRIPT_URL)
      .then(res => res.json())
      .then(data => {
        setMessages(data.reverse());
        setFetching(false);
      })
      .catch(err => {
        console.error("Lỗi tải lời nhắn:", err);
        setFetching(false);
      });
  };

  React.useEffect(() => {
    fetchMessages();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setLoading(true);
    fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, message })
    })
    .then(() => {
      setMessage("");
      setLoading(false);
      setFetching(true);
      setTimeout(fetchMessages, 1000); 
    })
    .catch(err => {
      alert("Có lỗi xảy ra khi gửi lời nhắn, vui lòng thử lại!");
      setLoading(false);
    });
  };

  return (
    <section id="messages" className="messages-section">
      <div className="page">
        <div className="index-bar">
          <span>§ 04 — Lưu bút 12A5</span>
          <span>Hai mươi năm — Những lời chưa nói</span>
          <span>trang 05</span>
        </div>

        <div className="msg-header" style={{ marginBottom: '40px', paddingTop: '40px' }}>
          <div className="section-number">§ 04</div>
          <h2 className="section-title">Lưu bút<br /><em>ngày trở về</em></h2>
          <p className="section-dek">
            Hãy gửi lại những lời chúc, những dòng tâm sự hoặc những kỷ niệm dang dở của tuổi 18 dưới hộc bàn năm xưa tại đây nhé!
          </p>
        </div>

        <div className="msg-form-wrapper">
          <form onSubmit={handleSubmit} className="msg-form">
            <div className="form-group">
              <label className="mono caps">Tên của bạn:</label>
              <input 
                type="text" 
                value={name} 
                onChange={e => setName(e.target.value)} 
                placeholder="Ví dụ: Mỹ Dung, Thịnh Văn..." 
                required 
                disabled={loading}
              />
            </div>
            <div className="form-group">
              <label className="mono caps">Lời nhắn gửi:</label>
              <textarea 
                rows="4" 
                value={message} 
                onChange={e => setMessage(e.target.value)} 
                placeholder="Viết những dòng tâm sự của bạn tại đây..." 
                required
                disabled={loading}
              ></textarea>
            </div>
            <div style={{ textAlign: 'right' }}>
              <button type="submit" className="msg-submit-btn" disabled={loading}>
                {loading ? "Đang gửi..." : "Gửi vào Lưu Bút ↑"}
              </button>
            </div>
          </form>
        </div>

        <div className="msg-board-title mono caps">Bức tường kỷ niệm ({messages.length})</div>
        
        {fetching ? (
          <div style={{ textAlign: 'center', fontStyle: 'italic', color: 'var(--ink-soft)' }}>
            Đang mở trang lưu bút xưa...
          </div>
        ) : messages.length === 0 ? (
          <div style={{ textAlign: 'center', fontStyle: 'italic', color: 'var(--ink-soft)', padding: '40px 0' }}>
            Chưa có lời nhắn nào. Hãy là người đầu tiên để lại dòng lưu bút!
          </div>
        ) : (
          <div className="msg-grid">
  {messages.map((m, i) => (
    <div key={i} className="msg-card">
      <div className="msg-body">“{m.message}”</div>
      <div className="msg-author" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
        <span>— {m.name}</span>
        {m.date && <span className="mono" style={{ fontSize: '10px', color: 'var(--ink-soft)', fontWeight: 'normal' }}>{m.date}</span>}
      </div>
    </div>
  ))}
</div>
        )}
      </div>

      <style>{`
        .messages-section { padding: 60px 0 80px; background: var(--paper); border-top: 1px solid var(--ink-faint); }
        .msg-form-wrapper {
          max-width: 600px;
          margin: 0 auto 60px;
          background: var(--paper-dark);
          border: 1px solid var(--ink);
          padding: 30px;
          box-shadow: 6px 6px 0 var(--ink);
        }
        .form-group { margin-bottom: 20px; display: flex; flex-direction: column; gap: 8px; }
        .form-group label { font-size: 11px; letter-spacing: 0.1em; color: var(--ink); font-weight: bold; }
        .form-group input, .form-group textarea {
          background: var(--paper);
          border: 1px solid var(--ink-soft);
          padding: 12px;
          font-family: var(--font-serif);
          font-size: 16px;
          color: var(--ink);
          transition: border 0.2s;
        }
        .form-group input:focus, .form-group textarea:focus { outline: none; border-color: var(--accent); }
        .msg-submit-btn {
          background: var(--accent); color: var(--paper); border: 1px solid var(--ink);
          padding: 12px 28px; font-family: var(--font-display); font-size: 15px;
          font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em;
          cursor: pointer; transition: all 0.2s ease; box-shadow: 4px 4px 0 var(--ink);
        }
        .msg-submit-btn:hover { background: var(--paper); color: var(--ink); transform: translate(-2px, -2px); box-shadow: 6px 6px 0 var(--ink); }
        .msg-submit-btn:disabled { background: var(--ink-faint); cursor: not-allowed; transform: none; box-shadow: none; }
        .msg-board-title { font-size: 12px; border-bottom: 2px solid var(--ink); padding-bottom: 10px; margin-bottom: 30px; letter-spacing: 0.15em; font-weight: bold; }
        .msg-grid { column-count: 3; column-gap: 24px; }
        .msg-card { break-inside: avoid; display: inline-block; width: 100%; background: var(--paper-dark); border: 1px solid var(--ink-faint); padding: 20px; margin-bottom: 24px; box-shadow: 4px 4px 0 rgba(0,0,0,0.03); position: relative; }
        .msg-card::before { content: "•"; position: absolute; top: 8px; left: 12px; color: var(--accent); font-size: 18px; }
        .msg-body { font-family: var(--font-serif); font-style: italic; font-size: 16px; line-height: 1.6; color: var(--ink); white-space: pre-line; }
        .msg-author { margin-top: 14px; text-align: right; font-family: var(--font-sans); font-size: 13px; font-weight: bold; color: var(--accent); letter-spacing: 0.05em; }
        @media (max-width: 900px) { .msg-grid { column-count: 2; } }
        @media (max-width: 600px) { .msg-grid { column-count: 1; } .msg-form-wrapper { padding: 20px; } }
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
          <span>§ 09 — Ban Liên lạc</span>
          <span>Liên hệ</span>
          <span>trang 10</span>
        </div>

        <div className="ct-head">
          <div className="section-number">§ 09</div>
          <h2 className="section-title">Ban <em>liên lạc</em></h2>
          <p className="section-dek">Có thắc mắc, góp ý, hoặc muốn giúp một tay? Gọi ngay.</p>
        </div>

        <div className="ct-grid">
          {d.organizers.map((o, i) => (
            <div key={i} className="ct-card">
              <div className="ct-num mono caps">№ {String(i+1).padStart(2, '0')}</div>
              <h3 className="display" style={{fontSize: 24, marginBottom: 4}}>{o.name}</h3>
              <div style={{fontStyle: 'italic', color: 'var(--ink-soft)', marginBottom: 16}}>{o.role}</div>
              <div className="mono" style={{fontSize: 13, lineHeight: 1.9}}>
                📞 {o.phone}<br/>
                ✉ {o.email}
              </div>
            </div>
          ))}
        </div>

        <div className="ornament">❋   ❋   ❋</div>
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
          <span>§ 10 — FAQ</span>
          <span>Thường gặp</span>
          <span>trang 11</span>
        </div>

        <div className="fq-head">
          <div className="section-number">§ 10</div>
          <h2 className="section-title">Hỏi & <em>đáp</em></h2>
        </div>

        <div className="fq-list">
          {d.faqs.map((f, i) => (
            <div key={i} className={"fq-row" + (open === i ? " open" : "")}>
              <button className="fq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="mono caps" style={{color: 'var(--accent)', marginRight: 16, fontSize: 11}}>Q{String(i+1).padStart(2, '0')}</span>
                <span className="display" style={{fontSize: 22}}>{f.q}</span>
                <span className="fq-mark">{open === i ? '−' : '+'}</span>
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
            <div className="display" style={{fontSize: 48, lineHeight: 0.95}}>Hội Ngộ<br/><em style={{color: 'var(--accent)'}}>20 Năm</em></div>
            <div className="mono caps" style={{marginTop: 16, color: 'var(--ink-soft)', fontSize: 10}}>Khoá 2006 — THPT Huỳnh Ngọc Huệ - Đại Lộc - Đà Nẵng</div>
          </div>
          <div className="fo-nav">
            <a href="#top">Trở lại đầu trang ↑</a>
          </div>
        </div>
        <div className="fo-bottom">
          <div className="mono" style={{fontSize: 11}}>© 2026 · vanduongphucthinh </div>
          <div className="mono caps" style={{fontSize: 10, color: 'var(--ink-faint)'}}>Ban liên lạc Lớp 12A5 Huỳnh Ngọc Huệ</div>
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
