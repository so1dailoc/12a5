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
  const [msgs, setMsgs] = React.useState([]); // Toàn bộ tin nhắn đã được trộn ngẫu nhiên
  const [visibleCount, setVisibleCount] = React.useState(6); // Số lượng hiển thị (mặc định 6)
  const [form, setForm] = React.useState({ name: "", class: "12A5", text: "" });
  const [loading, setLoading] = React.useState(false);
  const [fetching, setFetching] = React.useState(true);

  // 1. Hàm lấy dữ liệu từ Google Sheets và trộn ngẫu nhiên (Random)
  const fetchMessages = () => {
    fetch(SCRIPT_URL)
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          // Thực hiện thuật toán trộn ngẫu nhiên danh sách câu lưu bút khi tải trang
          const shuffled = [...data].sort(() => Math.random() - 0.5);
          setMsgs(shuffled);
        }
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

  // 2. Hàm xử lý khi nhấn nút "Xem thêm"
  const showMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  // 3. Hàm xử lý gửi lời nhắn từ Form lên Google Sheets
  const post = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) return;

    setLoading(true);
    fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: form.name, class: form.class, message: form.text })
    })
    .then(() => {
      // Đặt lại ô nhập text sau khi gửi thành công
      setForm({ ...form, text: "" });
      setLoading(false);
      setFetching(true);
      // Tải lại dữ liệu để cập nhật danh sách mới
      setTimeout(fetchMessages, 1000);
    })
    .catch(err => {
      alert("Có lỗi xảy ra khi gửi lời nhắn, vui lòng thử lại!");
      setLoading(false);
    });
  };

  return (
    <section id="messages" className="messages">
      <div className="page">
        <div className="index-bar">
          <span>§ 08 — Lưu bút</span>
          <span>Lời nhắn của các bạn</span>
          <span>trang 09</span>
        </div>

        <div className="m-head">
          <div className="section-number">§ 08</div>
          <h2 className="section-title">Sổ <em>lưu bút</em><br/>ấn bản 2026</h2>
          <p className="section-dek">Để lại một dòng — cho bản thân, cho bạn cũ, cho thầy cô. Ai cũng sẽ đọc được.</p>
        </div>

        {/* Khung viết lưu bút */}
        <div className="m-compose">
          <form onSubmit={post}>
            <div className="m-compose-row">
              <input 
                type="text" 
                placeholder="Tên của bạn" 
                value={form.name} 
                onChange={e => setForm({...form, name: e.target.value})}
                required
                disabled={loading}
              />
            </div>
            <textarea 
              placeholder="Viết một lời nhắn…" 
              value={form.text} 
              onChange={e => setForm({...form, text: e.target.value})} 
              rows={3}
              required
              disabled={loading}
            />
            <button type="submit" className="btn btn-accent" style={{marginTop: 12}} disabled={loading}>
              {loading ? "Đang gửi đi..." : "Để lại lời nhắn"}
            </button>
          </form>
        </div>

        {/* Bức tường hiển thị lời nhắn */}
        {fetching ? (
          <div style={{ textAlign: 'center', fontStyle: 'italic', color: 'var(--ink-soft)' }}>
            Đang mở trang lưu bút xưa...
          </div>
        ) : msgs.length === 0 ? (
          <div style={{ textAlign: 'center', fontStyle: 'italic', color: 'var(--ink-soft)', padding: '20px 0' }}>
            Chưa có lời nhắn nào. Hãy là người đầu tiên để lại dòng lưu bút!
          </div>
        ) : (
          <>
              
            <div className="m-wall">
              {msgs.slice(0, visibleCount).map((m, i) => (
                <div key={i} className={"m-card m-var-" + (i % 4)}>
                  <div className="m-text">"{m.message || m.text}"</div>
                  <div className="m-meta">
                    <div>
                      <div className="mono caps" style={{fontSize: 12, color: 'var(--accent)'}}>{m.name}</div>
                    </div>
                    <div className="mono" style={{fontSize: 10, color: 'var(--ink-faint)'}}>{m.date || ""}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Nút xem thêm thiết kế đồng bộ phong cách */}
            {visibleCount < msgs.length && (
              <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <button className="load-more-btn display" onClick={showMore}>
                  Xem thêm lưu bút ↑
                </button>
              </div>
            )}
          </>
        )}

        <div className="ornament">❋   ❋   ❋</div>
      </div>

      <style>{`
        .messages { padding: 60px 0; background: var(--paper); }
        .m-head { padding: 40px 0 32px; }
        .m-compose {
          background: var(--paper-dark);
          border: 1.5px solid var(--ink);
          padding: 24px;
          margin-bottom: 48px;
          max-width: 720px;
          box-shadow: 4px 4px 0 var(--ink);
        }
        .m-compose input, .m-compose textarea {
          background: var(--paper);
          border: 1px solid var(--ink-soft);
          padding: 12px;
          font-family: var(--font-serif);
          font-size: 16px;
          color: var(--ink);
          transition: border 0.2s;
        }
        .m-compose input:focus, .m-compose textarea:focus {
          outline: none;
          border-color: var(--accent);
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
        .m-text { font-size: 17px; font-style: italic; line-height: 1.6; margin-bottom: 16px; color: var(--ink); white-space: pre-line; }
        .m-meta { display: flex; justify-content: space-between; align-items: flex-end; padding-top: 12px; border-top: 0.5px solid var(--ink-faint); }
        
        /* CSS cho nút Xem Thêm đồng bộ phong cách báo cũ */
        .load-more-btn {
          background: transparent;
          border: 1px solid var(--ink);
          color: var(--ink);
          padding: 12px 40px;
          font-size: 20px;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 5px 5px 0 var(--ink);
        }
        .load-more-btn:hover {
          background: var(--ink);
          color: var(--paper);
          box-shadow: 0px 0px 0 var(--ink);
          transform: translate(3px, 3px);
        }

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
