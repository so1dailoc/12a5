// Teachers, Classmates, RSVP, Fund, Messages, Contact, FAQ
function Teachers() {
  const d = window.REUNION_DATA;
  return (
    <section id="teachers" className="teachers">
      <div className="page">
        <div className="index-bar">
          <span>§ 04 — Tri ân</span>
          <span>Thầy cô giáo</span>
          <span>trang 05</span>
        </div>

        <div className="t-head">
          <div className="section-number">§ 04</div>
          <h2 className="section-title">Những người<br /><em>gieo chữ</em></h2>
          <p className="section-dek">
            "Nhất tự vi sư, bán tự vi sư." — Hai mươi năm sau, bảng đen đã lặng, nhưng từng lời dạy vẫn còn vang.
          </p>
        </div>

        <div className="t-grid">
          {d.teachers && d.teachers.map((t, i) => (
            <article key={i} className="t-card reveal">
              {/* Giữ nguyên cấu trúc ô tròn/ô vuông nguyên bản của anh */}
              {t.image ? (
                <div className="t-photo" style={{ overflow: 'hidden', background: 'var(--paper-dark)', border: '1px solid var(--ink)' }}>
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                  />
                </div>
              ) : (
                <div className="t-photo placeholder">
                  Chân dung<br/>{t.name.split(' ').slice(-2).join(' ')}
                </div>
              )}
              
              <div className="t-body">
                <div className="mono caps" style={{fontSize: 9, color: 'var(--accent)', marginBottom: 6}}>{String(i+1).padStart(2, '0')}</div>
                <h3 className="display" style={{fontSize: 22, marginBottom: 4}}>{t.name}</h3>
                <div style={{fontStyle: 'italic', color: 'var(--ink-soft)', fontSize: 15}}>{t.subject || t.role || "Giáo viên"}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="t-tribute">
          <div className="quote-mark">"</div>
          <p>
            Cảm ơn thầy cô đã nâng chúng em qua những bài toán khó, những trang văn dài, những chiều thể dục mệt nhoài. Hôm nay chúng em đứng đây — những người thợ, thầy thuốc, thầy giáo, người mẹ, người cha — đều mang trong mình một phần của thầy cô.
          </p>
          <div className="mono caps" style={{marginTop: 16, color: 'var(--ink-soft)', fontSize: 10}}>
            Tập thể lớp 10B11 - 11A5 - 12A5
          </div>
        </div>

        <div className="ornament">❋   ❋   ❋</div>
      </div>

      <style>{`
        /* CSS bổ sung để khung chứa ảnh Thầy Cô luôn vuông vắn, sắc nét */
        .t-photo {
          width: 100%;
          aspect-ratio: 3 / 4; /* Tạo tỷ lệ khung ảnh chân dung chuẩn */
          border: 1px solid var(--ink);
          background: var(--paper-dark);
          overflow: hidden;
          margin-bottom: 16px;
        }
        .t-photo.placeholder {
          font-family: var(--font-mono);
          font-size: 11px;
          text-transform: uppercase;
          color: var(--ink-faint);
        }
        .t-grid {
  display: grid;
  /* Tự động chia thành 3 cột đều nhau trên máy tính (mỗi cột chiếm 1 phần bằng nhau) */
  grid-template-columns: repeat(3, 1fr); 
  gap: 40px 24px;
}

/* Thêm đoạn mã Responsive này để khi xem trên điện thoại nhỏ, danh sách tự xếp dọc thành 1 cột */
@media (max-width: 768px) {
  .t-grid {
    grid-template-columns: 1fr; /* Về 1 cột trên điện thoại */
    gap: 24px;
  }
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
          <span>§ 05 — Danh bạ</span>
          <span>{confirmedCount}/{d.classmates.length} đã xác nhận</span>
          <span>trang 06</span>
        </div>

        <div className="c-head">
          <div className="section-number">§ 05</div>
          <h2 className="section-title">Tìm lại<br/><em>một người bạn</em></h2>
          <p className="section-dek">Danh sách cựu học sinh đang cập nhật. Gõ tên hoặc địa chỉ để tìm.</p>
        </div>

        <div className="c-tools">
          <div className="c-search">
            <label>Tìm kiếm</label>
            <input type="text" value={q} onChange={e => setQ(e.target.value)} placeholder="Tên, thành phố…"/>
          </div>
          <div className="c-filter">
            <label>Lọc theo lớp</label>
            <div className="c-chips">
              {classes.map(c => (
                <button key={c} className={"c-chip" + (filterClass === c ? " on" : "")} onClick={() => setFilterClass(c)}>
                  {c === 'all' ? 'Tất cả' : c}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="c-list">
          {filtered.map((m, i) => (
            <div key={i} className="c-row">
              <div className="c-num mono">{String(i+1).padStart(3, '0')}</div>
              <div className="c-avatar placeholder" style={{fontSize: 8}}>Ảnh</div>
              <div className="c-name display">{m.name}</div>
              <div className="c-class mono caps">{m.class}</div>
              <div className="c-now italic">{m.now}</div>
              <div className="c-status">
                {m.confirmed
                  ? <span className="pill">Đã xác nhận</span>
                  : <span className="mono caps" style={{color: 'var(--ink-faint)', fontSize: 9}}>Chờ liên lạc</span>
                }
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div style={{padding: 40, textAlign: 'center', fontStyle: 'italic', color: 'var(--ink-soft)'}}>
              Không tìm thấy — có thể họ chưa cập nhật. Liên hệ Ban liên lạc để bổ sung.
            </div>
          )}
        </div>

        <div className="ornament">❋   ❋   ❋</div>
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
          <span>§ 06 — Xác nhận</span>
          <span>Hội khóa · Hạn 01.06.2026</span>
          <span>trang 07</span>
        </div>

        <div className="r-grid">
          <div className="r-left">
            <div className="section-number">§ 06</div>
            <h2 className="section-title">Đăng ký<br/><em>có mặt</em></h2>
            <p className="section-dek">
              Vui lòng xác nhận trước <strong>01.06.2026</strong> để BTC sắp xếp chỗ ngồi, in áo huy hiệu và kỷ yếu riêng cho bạn.
            </p>
            <div className="r-info">
              <div className="r-info-row">
                <div className="mono caps">Phí tham dự</div>
                <div className="display" style={{fontSize: 28}}>600.000đ<span style={{fontSize: 14, color: 'var(--ink-soft)', fontStyle: 'italic', marginLeft: 8}}>/người</span></div>
              </div>
              <div className="r-info-row">
                <div className="mono caps"> </div>
                <div className="display" style={{fontSize: 28}}>6.000.000đ<span style={{fontSize: 14, color: 'var(--ink-soft)', fontStyle: 'italic', marginLeft: 8}}>/lớp</span></div>
              </div>
              <div className="r-info-row">
                <div className="mono caps">Bao gồm</div>
                <div style={{fontSize: 15}}>Tiệc, áo, kỷ yếu, huy hiệu, ảnh kỷ niệm</div>
              </div>
              <div className="r-info-row">
                <div className="mono caps">Thanh toán</div>
                <div style={{fontSize: 15}}>Chuyển khoản về Ban liên lạc Lớp 12A5, sau đó sẽ tổng hợp chuyển về cho BTC Hội khóa</div>
              </div>
            </div>
          </div>

          <div className="r-right">
            {submitted ? (
              <div className="r-success">
                <div className="display" style={{fontSize: 64, color: 'var(--accent)'}}>✓</div>
                <h3 className="display" style={{fontSize: 32, marginBottom: 12}}>Hẹn gặp lại, {form.name.split(' ').slice(-1)}!</h3>
                <p style={{fontStyle: 'italic', color: 'var(--ink-soft)', marginBottom: 24}}>
                  Ban liên lạc đã nhận đăng ký của bạn. Chúng tôi sẽ gửi email xác nhận kèm hướng dẫn thanh toán trong vòng 48 giờ.
                </p>
                <button className="btn btn-ghost" onClick={() => setSubmitted(false)}>Đăng ký thêm người</button>
              </div>
            ) : (
              <form onSubmit={submit} className="r-form">
                <div className="r-field">
                  <label>Họ và tên *</label>
                  <input type="text" value={form.name} onChange={e => update('name', e.target.value)} required/>
                </div>
                <div className="r-row2">
                  <div className="r-field">
                    <label>Lớp 12 *</label>
                    <select value={form.class} onChange={e => update('class', e.target.value)}>
                      <option value="">— Chọn lớp —</option>
                      {['10B11','11A5','12A5'].map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="r-field">
                    <label>Số điện thoại *</label>
                    <input type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} required/>
                  </div>
                </div>
                <div className="r-field">
                  <label>Email</label>
                  <input type="email" value={form.email} onChange={e => update('email', e.target.value)}/>
                </div>
                <div className="r-field">
                  <label>Tham dự</label>
                  <div className="r-radios">
                    {[
                      {v: 'yes', l: 'Có, tôi sẽ đến'},
                      {v: 'maybe', l: 'Đang thu xếp'},
                      {v: 'no', l: 'Không thể, gửi lời chúc'}
                    ].map(opt => (
                      <label key={opt.v} className="r-radio">
                        <input type="radio" name="attend" checked={form.attend === opt.v} onChange={() => update('attend', opt.v)}/>
                        <span>{opt.l}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="r-field">
                  <label>Số người đi cùng (vợ/chồng/con)</label>
                  <input type="number" min="0" max="6" value={form.guests} onChange={e => update('guests', e.target.value)}/>
                </div>
                <div className="r-field">
                  <label>Lời nhắn cho BTC</label>
                  <textarea value={form.message} onChange={e => update('message', e.target.value)} placeholder="Dị ứng thức ăn, yêu cầu đặc biệt, bạn mong gặp ai…"/>
                </div>
                <button type="submit" className="btn btn-accent" style={{width: '100%', marginTop: 16}}>Gửi xác nhận</button>
              </form>
            )}
          </div>
        </div>

        <div className="ornament">❋   ❋   ❋</div>
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
