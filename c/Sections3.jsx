// Fund, Messages, Contact, FAQ, Footer
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwfthy4T7rxgUUeYQRZFFISuampMV8zL-7hqB4fUaWdIgDkIoRsL9hbH6-p90C_JWL0oQ/exec";

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
            <h2 className="section-title f-title">Một phần<br/><em>nhỏ bé</em></h2>
            <p className="section-dek">
             - Phần Nội dung Chuyển khoản [Nop tien Hoi Khoa] sẽ được tổng hợp và chuyển khoản về Quỹ Hội Khóa 20 của Trường.<br/>
             - Phần Nội dung Chuyển khoản [Nop tien Quy] sẽ được lưu ở Quỹ lớp và sử dụng vào Mục đích CHI đã thông qua (Thăm viếng Thầy cô và các Bậc phụ huynh, các hoàn cảnh khó khăn - hoàn cảnh...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Messages() {
  const [messages, setMessages] = React.useState([]);
  const [fetching, setFetching] = React.useState(true);
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [visibleCount, setVisibleCount] = React.useState(6);

  // HÀM TẢI LỜI NHẮN ĐÃ ĐƯỢC ĐƠN GIẢN HÓA TOÀN DIỆN ĐỂ TRÁNH LỖI PREFLIGHT CORS
  const loadData = () => {
    fetch(SCRIPT_URL, {
      method: "GET",
      redirect: "follow" // BẮT BUỘC SỐNG CÒN: Tự động đuổi theo link chuyển hướng 302 của Google
      // TUYỆT ĐỐI KHÔNG THÊM CẤU HÌNH HEADERS Ở ĐÂY ĐỂ TRÁNH TRÌNH DUYỆT ĐÁ LỖI PREFLIGHT OPTIONS
    })
      .then(res => {
        if (!res.ok) throw new Error("Mạng không ổn định");
        return res.json();
      })
      .then(data => {
        if (data && Array.isArray(data)) {
          // Đảo ngược mảng để tin nhắn mới viết luôn hiển thị lên đầu tiên
          setMessages(data.reverse());
        }
        setFetching(false);
      })
      .catch(err => {
        console.error("Lỗi tải lời nhắn mạng:", err);
        setFetching(false);
      });
  };

  // Tự động load dữ liệu ngay khi vừa tải xong trang web
  React.useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setSubmitting(true);

    // Gửi lời nhắn lên Google Sheets dạng một chiều an toàn
    fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", 
      headers: { "Content-Type": "text/plain" }, // Dùng text/plain để kích hoạt Simple Request, chặn đứng hoàn toàn lỗi CORS khi POST
      body: JSON.stringify({ name: name.trim(), message: message.trim(), type: "message" })
    })
      .then(() => {
        setName("");
        setMessage("");
        setSubmitting(false);
        setFetching(true);
        // Chờ 1.5 giây để Google Server xử lý lưu dòng rồi gọi tải lại bảng tin công khai
        setTimeout(() => {
          loadData();
        }, 1500);
      })
      .catch(err => {
        console.error("Lỗi gửi tin nhắn:", err);
        setSubmitting(false);
      });
  };

  const showMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section id="messages" className="messages-section">
      <div className="page">
        <div className="index-bar">
          <span>§ 08 — Lưu bút</span>
          <span>Những dòng gửi lại</span>
          <span>trang 09</span>
        </div>

        <div className="m-grid">
          <div>
            <div className="section-number">§ 08</div>
            <h2 className="section-title">Dòng lưu bút<br/><em>gửi lại</em></h2>
            <p className="section-dek">
              Hai mươi năm xa cách, có những lời chưa kịp nói, có những kỷ niệm chưa kịp đặt tên. Hãy để lại vài dòng nhắn gửi cho nhau tại đây anh chị nhé.
            </p>

            <form className="m-form" onSubmit={handleSubmit}>
              <div className="r-field">
                <label className="mono caps" style={{fontSize: 10, display:'block', marginBottom:8}}>Họ và Tên</label>
                <input 
                  type="text" 
                  className="t-input" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                  disabled={submitting}
                />
              </div>
              <div className="r-field">
                <label className="mono caps" style={{fontSize: 10, display:'block', marginBottom:8}}>Lời nhắn gửi</label>
                <textarea 
                  className="t-input" 
                  rows="4" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  required
                  disabled={submitting}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-accent" style={{width: '100%', marginTop: 8}} disabled={submitting}>
                {submitting ? "Đang gửi dòng lưu bút..." : "Gửi lời nhắn"}
              </button>
            </form>
          </div>

          <div>
            {fetching ? (
              <div className="mono text-center" style={{padding: '40px 0', color: 'var(--ink-soft)'}}>
                正在 Tải danh sách lưu bút...
              </div>
            ) : messages.length === 0 ? (
              <div className="mono text-center" style={{padding: '40px 0', color: 'var(--ink-soft)', border: '1.5px dashed var(--ink)'}}>
                Chưa có lời nhắn nào. Hãy là người đầu tiên để lại dòng lưu bút!
              </div>
            ) : (
              <>
                <div className="m-wall">
                  {messages.slice(0, visibleCount).map((m, i) => (
                    <div key={i} className={"m-card m-var-" + (i % 4)}>
                      {/* Đảm bảo đọc khớp linh hoạt cả hai định dạng trường .message và .text trả về */}
                      <div className="m-text">"{m.message || m.text || "Lời nhắn trống"}"</div>
                      <div className="m-meta">
                        <div className="mono caps" style={{fontSize: 12, color: 'var(--accent)'}}>{m.name}</div>
                        <div className="mono" style={{fontSize: 10, color: 'var(--ink-faint)'}}>{m.date || ""}</div>
                      </div>
                    </div>
                  ))}
                </div>
                {messages.length > visibleCount && (
                  <div style={{textAlign: 'center', marginTop: 32}}>
                    <button className="btn" onClick={showMore}>Xem thêm lời nhắn ↓</button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="page">
        <div className="index-bar">
          <span>§ 09 — Kết nối</span>
          <span>Ban liên lạc lớp 12A5</span>
          <span>trang 10</span>
        </div>
        <div className="c-grid">
          <div>
            <div className="section-number">§ 09</div>
            <h2 className="section-title">Liên hệ với<br/><em>chúng tôi</em></h2>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="faq">
      <div className="page">
        <div className="index-bar">
          <span>§ 10 — Hỏi đáp</span>
          <span>Những điều cần lưu ý</span>
          <span>trang 11</span>
        </div>
        <div className="faq-grid">
          <div>
            <div className="section-number">§ 10</div>
            <h2 className="section-title">Câu hỏi<br/><em>thường gặp</em></h2>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="page">
        <div className="fo-top">
          <div>
            <div className="display" style={{fontSize: 48, lineHeight: 0.95}}>Hội Ngộ<br/><em style={{color: 'var(--accent)'}}>20 Ngược dòng</em></div>
            <div className="mono caps" style={{marginTop: 16, color: 'var(--ink-soft)', fontSize: 10}}>Khoá 2006 — THPT Huỳnh Ngọc Huệ - Đại Lộc - Quảng Nam</div>
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
    </footer>
  );
}

window.Fund = Fund;
window.Messages = Messages;
window.Contact = Contact;
window.Faq = Faq;
window.Footer = Footer;
