export default function CreatePage() {
  return (
    <div className="page-scroll page-center">
      <div className="empty-state">
        <div className="empty-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="56" height="56">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
        </div>
        <h2 className="empty-title">Đăng video</h2>
        <p className="empty-desc">Tính năng đăng video sẽ sớm ra mắt. Hãy theo dõi để cập nhật nhé!</p>
        <button className="profile-btn profile-btn--primary" style={{ marginTop: 24 }}>
          Sắp ra mắt
        </button>
      </div>
    </div>
  );
}
