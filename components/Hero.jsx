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
                <text fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2" fill="currentColor">
                  <textPath href="#arcTop" startOffset="50%" textAnchor="middle">THPT HUỲNH NGỌC HUỆ</textPath>
                </text>
                <text fontFamily="var(--font-mono)" fontSize="7" letterSpacing="2" fill="currentColor">
                  <textPath href="#arcBot" startOffset="50%" textAnchor="middle">KHOÁ 2003-2006</textPath>
                </text>
                <text x="60" y="55" fontFamily="var(--font-display)" fontSize="33" fontWeight="700" textAnchor="middle" fill="currentColor" fontStyle="italic">20</text>
                <text x="60" y="72" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="3" textAnchor="middle" fill="currentColor">NĂM</text>
              </svg>
            </div>
          </div>
          <div className="hero-meta">
            <div className="mono caps" style={{color: 'var(--ink-soft)'}}>Kỷ yếu bỏ túi · Số đặc biệt</div>
            <div className="mono caps" style={{color: 'var(--accent)', marginTop: 4}}>Tập 20 · Ấn bản 2026</div>
          </div>
        </div>

        <h1 className="hero-title display">
          <span className="hero-line-1">Hội ngộ</span>
          <span className="hero-line-2"><em>hai mươi</em> năm</span>
        </h1>

        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-serif-block">
              <p className="drop-cap">
                <span className="dc">M</span>ột buổi chiều tháng bảy, chúng ta lại gặp nhau dưới mái trường THPT Huỳnh Ngọc Huệ nơi đã giữ những tiếng cười, những trang vở, những lời hẹn còn dang dở của tuổi mười tám. Hai mươi năm đủ dài để tóc pha sương, nhưng chưa bao giờ đủ để quên nhau.
              </p>
              <div className="hero-byline">
                <span className="mono caps">Tập thể Lớp 12A5</span>
              </div>
            </div>
          </div>
          
        <div className="hero-right">
            <div className="hero-photo placeholder" style={{aspectRatio: '1162/802', overflow: 'hidden', border: '1.5px solid var(--ink)'}}>
              <img 
      src="images/cuoinam12.jpg" alt="Ảnh kỷ yếu lớp 12A5 năm 2006"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        filter: 'sepia(0.2) contrast(1.1)' // Tạo hiệu ứng ảnh cũ đồng bộ với web
      }}
      onError={(e) => { e.target.src = 'https://placehold.co/600x800/e8dcc0/2a2420?text=12A5+Huỳnh+Ngọc+Huệ'; }}
    />
            </div>
            <div className="hero-caption mono caps">Sân trường, tháng 5/2006</div>
          </div>
        </div> 
        
        <div className="hero-info-bar">
          <div className="info-cell">
            <div className="mono caps info-label">Thời gian</div>
            <div className="display info-value">12 · 07 · 2026</div>
            <div className="serif info-sub">Chủ nhật · 7:00</div>
          </div>
          <div className="info-cell">
            <div className="mono caps info-label">Địa điểm</div>
            <div className="display info-value">Trường THPT Huỳnh Ngọc Huệ</div>
            <div className="serif info-sub">Đại Lộc-Đà Nẵng</div>
          </div>
          <div className="info-cell">
            <div className="mono caps info-label">Chương trình</div>
            <div className="display info-value">Chạm lại Thanh Xuân</div>
            <div className="serif info-sub">Hội Khóa</div>
          </div>
        </div>

        <div className="countdown">
          <div className="mono caps cd-label">Còn lại đến ngày hội ngộ</div>
          <div className="cd-grid">
            <CDUnit value={c.days} label="Ngày"/>
            <span className="cd-sep">:</span>
            <CDUnit value={c.hours} label="Giờ"/>
            <span className="cd-sep">:</span>
            <CDUnit value={c.mins} label="Phút"/>
            <span className="cd-sep">:</span>
            <CDUnit value={c.secs} label="Giây"/>
          </div>
        </div>

        <div className="hero-cta">
          <a href="#rsvp" className="btn btn-accent">Đăng ký tham dự</a>
          <a href="#schedule" className="btn btn-ghost">Xem chương trình</a>
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
