// Sections1.jsx - Phần About, Schedule và Gallery
import React from 'react';

function Stat({ n, label }) {
  return (
    <div className="stat-item">
      <div className="stat-n display">{n}</div>
      <div className="mono caps" style={{ fontSize: 10, letterSpacing: '0.1em' }}>{label}</div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <div className="page">
        <div className="index-bar">
          <span>§ 01 — Giới thiệu</span>
          <span>THPT Huỳnh Ngọc Huệ - Khóa 2003-2006</span>
          <span>trang 02</span>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <div className="section-number">§ 01</div>
            <h2 className="section-title">Hai mươi năm<br/><em>một lời hẹn</em></h2>
            <p className="section-dek">
              Lớp 12A5 Trường THPT Huỳnh Ngọc Huệ — 55 học sinh ra trường, toả đi khắp đất nước và thế giới. Năm nay, chúng ta về lại chốn xưa.
            </p>
          </div>
          <div className="about-right">
            <div className="about-stats">
              <Stat n="15" label="Lớp 12 khoá 2003–2006"/>
              <Stat n=">500" label="Cựu học sinh toàn khoá"/>
              <Stat n=">60" label="Thầy cô giáo"/>
              <Stat n="20" label="Năm kể từ ngày ra trường"/>
            </div>

            <div className="about-story">
              <p>Năm 2003, chúng ta bước vào cổng trường với chiếc cặp nặng trĩu sách và trái tim nhẹ tênh. Ba năm sau, rời đi với tấm bằng tú tài và những ước mơ dang dở.</p>
              <p>Hôm nay, sau hai thập kỷ lăn lộn với cuộc đời, chúng ta trở về đây không phải để khoe khoang thành tựu, mà để tìm lại những đứa trẻ ngây ngô năm ấy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  const d = window.REUNION_DATA;
  return (
    <section id="schedule" className="schedule">
      <div className="page">
        <div className="index-bar">
          <span>§ 02 — Chương trình</span>
          <span>Ngày 12 tháng 07, 2026</span>
          <span>trang 03</span>
        </div>

        <div className="s-head">
          <div className="section-number">§ 02</div>
          <h2 className="section-title">Lịch trình<br/><em>hội ngộ</em></h2>
        </div>

        <div className="s-list">
          {d.schedule.map((s, i) => (
            <div key={i} className="s-item reveal">
              <div className="s-time mono">{s.time}</div>
              <div className="s-info">
                <h3 className="display">{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const d = window.REUNION_DATA; // Khai báo lấy dữ liệu từ data.js
  
  return (
    <section id="gallery" className="gallery">
      <div className="page">
        <div className="index-bar">
          <span>§ 03 — Kỷ niệm</span>
          <span>Hình ảnh lớp 12A5</span>
          <span>trang 04</span>
        </div>

        <div className="g-head">
          <div className="section-number">§ 03</div>
          <h2 className="section-title">Những thước phim<br/><em>thanh xuân</em></h2>
        </div>

        <div className="g-body">
          {/* Tự động lặp qua mảng gallery trong data.js */}
          {d.gallery && d.gallery.map((item, i) => (
            <article key={i} className="g-item reveal">
              <div className="g-photo">
                <img 
                  src={item.url} 
                  alt={item.caption} 
                  style={{ width: '100%', display: 'block' }}
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Loi+Anh'; }}
                />
              </div>
              <div className="g-info">
                <div className="mono" style={{fontSize: 10, color: 'var(--accent)', marginBottom: 4}}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p style={{fontSize: 14, fontStyle: 'italic'}}>{item.caption}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="upload-zone reveal" style={{marginTop: 64}}>
            <h3 className="display" style={{fontSize: 28, marginBottom: 16}}>Gửi thêm kỷ niệm</h3>
            <p style={{marginBottom: 24}}>Bạn có những bức ảnh cũ muốn chia sẻ? Hãy gửi cho Ban liên lạc để cùng làm dày thêm album của lớp.</p>
            <button className="btn btn-accent" onClick={() => alert('Vui lòng gửi ảnh qua Zalo nhóm lớp hoặc Google Drive chung!')}>
                Gửi ảnh ngay
            </button>
        </div>
      </div>
    </section>
  );
}

export { About, Schedule, Gallery };
