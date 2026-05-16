// About + Schedule + Gallery sections
const { useState: _useState2, useEffect: _useEffect2 } = React;
function Gallery2() {
  const d = window.REUNION_DATA;
  const [selectedImg, setSelectedImg] = _useState2(null);
  const [shuffledImages, setShuffledImages] = _useState2([]);
  // Trạng thái quản lý số lượng hình đang hiển thị (mặc định là 6)
  const [visibleCount, setVisibleCount] = _useState2(6);

  // 1. Xử lý trộn ảnh ngẫu nhiên khi tải trang
  _useEffect2(() => {
    if (d.gallery2 && d.gallery2.length > 0) {
      const images = [...d.gallery2].sort(() => Math.random() - 0.5);
      setShuffledImages(images);
    }
  }, [d.gallery2]);

  if (!d.gallery2 || shuffledImages.length === 0) return null;

  // 2. Hàm xử lý khi nhấn nút "Xem thêm"
  const showMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section id="gallery2" className="gallery-pro">
      <div className="page">
        <div className="index-bar">
          <span>§ 03 — Ký ức - Kỷ niệm</span>
          <span>Sắp xếp ngẫu hứng & Nghệ thuật</span>
          <span>trang 04</span>
        </div>

        <div className="g-header" style={{marginBottom: '40px'}}>
          <div className="section-number">§ 03.2</div>
          <h2 className="section-title">Ký ức<br/><em>kỷ niệm</em></h2>
          <p className="section-dek">
              "Có những bức ảnh, giá trị của nó không nằm ở màu sắc hay độ nét, mà ở chỗ nó giữ lại được một khoảng thời gian mà chúng ta chẳng thể quay về."
          </p>          
        </div>    
        
        {/* Lưới ảnh Masonry - Chỉ hiện số lượng theo visibleCount */}
        <div className="masonry-grid">
          {shuffledImages.slice(0, visibleCount).map((img, i) => (
            <div 
              key={i} 
              className="masonry-item reveal in" 
              onClick={() => setSelectedImg(img)}
            >
              <div className="masonry-content">
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  loading="lazy"
                  style={{ display: 'block', width: '100%' }}
                  onError={(e) => { e.target.src = 'https://placehold.co/600x400?text=Loi+anh'; }}
                />
                <div className="masonry-overlay">
                  <span>PHÓNG LỚN</span>
                </div>
              </div>
              <div className="masonry-meta">
                <p className="m-caption">{img.caption}</p>
                {img.date && <p className="m-date mono">{img.date}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Nút Xem thêm: Chỉ hiện khi còn hình ẩn bên dưới */}
        {visibleCount < shuffledImages.length && (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button className="load-more-btn display" onClick={showMore}>
              Xem thêm hình ảnh ↑
            </button>
          </div>
        )}
         
        {/* Khối lời nhắn gửi thành viên chia sẻ hình ảnh */}
        <br></br>
        <div className="t-tribute">
          <p>
            <strong>Bạn có ảnh cũ muốn chia sẻ? </strong>
            Vui lòng gởi cho Ban liên lạc Lớp!
          </p>
        </div>
        
      </div>

      {/* Lightbox - Xem ảnh đầy đủ */}
      {selectedImg && (
        <div className="lb-overlay" onClick={() => setSelectedImg(null)}>
          <button className="lb-close" onClick={() => setSelectedImg(null)}>&times;</button>
          
          <div className="lb-container" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImg.url} alt={selectedImg.caption} />
            <div className="lb-info">
              <h3 className="display">{selectedImg.caption}</h3>
              <p className="mono caps">{selectedImg.date || 'Kỷ niệm 12A5'}</p>
            </div>
          </div>
        </div>

      )}

      <style>{`
        .gallery-pro { padding: 80px 0; background: var(--paper); border-top: 1px solid var(--ink-faint); }
        
        .masonry-grid {
          column-count: 3;
          column-gap: 30px;
          width: 100%;
        }

        .masonry-item {
          break-inside: avoid;
          display: inline-block;
          width: 100%;
          margin-bottom: 30px;
          cursor: pointer;
          background: var(--paper-dark);
          padding: 10px;
          border: 1px solid var(--ink-faint);
          box-shadow: 4px 4px 0 rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .masonry-item:hover {
          transform: translateY(-5px);
          box-shadow: 12px 12px 0 rgba(42, 36, 32, 0.1);
        }

        .masonry-content { position: relative; overflow: hidden; border: 1px solid var(--ink); background: #eee; }
        .masonry-content img { transition: 0.6s ease; }
        .masonry-item:hover img { transform: scale(1.08); }

        .masonry-overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(184, 71, 42, 0.4);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: 0.3s;
        }
        .masonry-item:hover .masonry-overlay { opacity: 1; }
        .masonry-overlay span { color: white; border: 1px solid white; padding: 4px 10px; font-size: 10px; letter-spacing: 0.1em; }

        .masonry-meta { margin-top: 12px; text-align: center; }
        .m-caption { font-family: var(--font-serif); font-style: italic; font-size: 15px; color: var(--ink); }
        .m-date { font-size: 9px; color: var(--ink-soft); margin-top: 4px; }

        /* Nút Xem thêm */
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

        /* Lightbox CSS */
        .lb-overlay {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(20, 18, 16, 0.97);
          z-index: 10000; display: flex; align-items: center; justify-content: center;
          cursor: zoom-out; animation: fadeIn 0.3s ease;
        }

        .lb-container {
          position: relative; max-width: 90%; max-height: 90vh;
          display: flex; flex-direction: column; align-items: center;
          cursor: default;
        }

        .lb-container img {
          max-width: 100%; max-height: 75vh;
          border: 6px solid white;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
          object-fit: contain;
        }

        .lb-close {
          position: absolute; top: 20px; right: 30px;
          background: none; border: none;
          color: white; font-size: 60px; font-weight: 200;
          cursor: pointer; line-height: 1; z-index: 10001;
        }
        .lb-close:hover { color: var(--accent); }

        .lb-info { color: white; text-align: center; margin-top: 20px; }
        .lb-info h3 { font-size: 24px; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        @media (max-width: 900px) { .masonry-grid { column-count: 2; } }
        @media (max-width: 600px) { 
          .masonry-grid { column-count: 1; } 
          .lb-close { top: 10px; right: 20px; font-size: 50px; }
        }
      `}</style>
    </section>
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
              <p>Năm 2003, chúng ta bước vào cổng trường với chiếc cặp nặng trĩu sách và trái tim nhẹ tênh. Ba năm sau, rời đi với tấm bằng tú tài, vài cuốn lưu bút và một lời hẹn "sau này nhớ gặp lại".</p>
              <p>Hai mươi năm sau, lời hẹn ấy thành hình. Dù bạn đang ở Đà Nẵng, Sài Gòn, Hà Nội hay bên kia đại dương — chúng tôi mong một lần bạn quay về.</p>
              <p className="signoff mono caps">Ban liên lạc Lớp 12A5</p>
            </div>
          </div>
        </div>

        <div className="ornament">❋   ❋   ❋</div>
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
          <span>§ 02 — Chương trình</span>
          <span>Chủ nhật · 12.07.2026</span>
          <span>trang 03</span>
        </div>

        <div className="sched-head">
          <div className="section-number">§ 02</div>
          <h2 className="section-title">Chạm lại<br/><em>Thanh Xuân</em></h2>
          <p className="section-dek">Nhiều cung bậc cảm xúc — từ cái bắt tay đầu tiên đến bài hát cuối đêm.</p>
        </div>

        <div className="timeline">
          {d.schedule.map((item, i) => (
            <div key={i} className="tl-row reveal">
              <div className="tl-time">
                <div className="tl-time-val mono">{item.time}</div>
                <div className="tl-dot"/>
              </div>
              <div className="tl-content">
                <div className="tl-num mono caps">Mục {String(i+1).padStart(2, '0')}</div>
                <h3 className="tl-title display">{item.title}</h3>
                <p className="tl-desc">{item.desc}</p>
              </div>
              <div className="tl-decor placeholder">
                Ảnh · {item.title.split(' ').slice(0, 2).join(' ')}
              </div>
            </div>
          ))}
        </div>

        <div className="ornament">❋   ❋   ❋</div>
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
    { then: "Lớp 12A5 · 2006", now: "Gặp lại · 2026", caption: "Buổi tổng kết năm học cuối cấp cùng với thầy" },
    { then: "Sân trường · 2006", now: "Sân trường · 2026", caption: "Giờ ra chơi, gốc phượng đầu hành lang" },
    { then: "Văn nghệ · 2006", now: "Gặp lại · 2026", caption: "Đêm văn nghệ Mừng Đảng Đón Xuân năm 2006" },
    { then: "Hội trại · 2005", now: "Gặp lại · 2026", caption: "Hội trại chào mừng 26/3" },
    { then: "Lớp 12A5 · 2006", now: "Gặp lại · 2024", caption: "Nhóm bạn 12A5 gặp lại tại Đà Nẵng" },
    { then: "Lớp 12A5 · 2006", now: "Gặp lại · 2024", caption: "Nhóm bạn 12A5 gặp lại tại Sài Gòn" }
  ];
  return (
    <section id="gallery" className="gallery">
      <div className="page">
        <div className="index-bar">
          <span>§ 03 — Kỷ niệm</span>
          <span>Then & Now</span>
          <span>trang 04</span>
        </div>

        <div className="gal-head">
          <div className="section-number">§ 03</div>
          <h2 className="section-title">Rồi & <em>bây giờ</em></h2>
          <p className="section-dek">Di chuột lên mỗi bức ảnh để thấy chúng ta của <em>hai mươi năm trước</em> trở về.</p>
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
          <h3 className="display" style={{fontSize: 32, marginBottom: 8}}>Có ảnh cũ muốn chia sẻ?</h3>
          <p style={{marginBottom: 20, color: 'var(--ink-soft)', fontStyle: 'italic'}}>
            Album chung của chúng ta mở cửa cho tất cả bạn cùng khoá. Gửi ảnh scan, ảnh chụp nhanh, ảnh kỷ yếu — bất cứ thứ gì bạn còn giữ.
          </p>
          <UploadBox/>
        </div>

        <div className="ornament">❋   ❋   ❋</div>
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
          <div className="mono caps" style={{fontSize: 11, letterSpacing: '0.2em'}}>Kéo thả hoặc chọn ảnh</div>
          <div style={{fontStyle: 'italic', fontSize: 14, color: 'var(--ink-soft)', marginTop: 8}}>
            JPG, PNG, HEIC — tối đa 20MB mỗi ảnh
          </div>
        </div>
      </label>
      {files.length > 0 && (
        <div className="upload-list">
          <div className="mono caps" style={{fontSize: 10, marginBottom: 8}}>Đã chọn {files.length} ảnh</div>
          {files.map((f, i) => <div key={i} className="upload-item">✓ {f}</div>)}
          <button className="btn btn-accent" style={{marginTop: 16}} onClick={() => alert('Cảm ơn! Ban liên lạc của Lớp sẽ duyệt và thêm vào album chung.')}>Gửi ảnh</button>
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
window.Gallery2 = Gallery2;
