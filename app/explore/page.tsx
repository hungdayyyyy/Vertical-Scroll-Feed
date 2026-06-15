import { trendingTags, suggestedUsers } from "@/data/mockPages";

export default function ExplorePage() {
  return (
    <div className="page-scroll">
      {/* Search bar */}
      <div className="explore-search-wrap">
        <div className="explore-search">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            width="18"
            height="18"
            style={{ flexShrink: 0, opacity: 0.5 }}
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span className="explore-search-placeholder">Tìm kiếm</span>
        </div>
      </div>

      {/* Trending tags */}
      <section className="page-section">
        <h2 className="section-title">Xu hướng hôm nay</h2>
        <div className="tag-grid">
          {trendingTags.map((t) => (
            <button
              key={t.tag}
              className="tag-card"
              style={{ "--tag-color": t.coverColor } as React.CSSProperties}
            >
              <div className="tag-card-bg" />
              <div className="tag-card-content">
                <span className="tag-card-name">#{t.tag}</span>
                <span className="tag-card-count">{t.videoCount}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Suggested accounts */}
      <section className="page-section">
        <h2 className="section-title">👥 Tài khoản gợi ý</h2>
        <div className="user-list">
          {suggestedUsers.map((u) => (
            <div key={u.id} className="user-row">
              <div className="user-avatar" style={{ background: u.color }}>
                {u.initial}
              </div>
              <div className="user-meta">
                <span className="user-name">{u.name}</span>
                <span className="user-handle">
                  {u.handle} · {u.followers} người theo dõi
                </span>
              </div>
              <button className="follow-btn">Theo dõi</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
