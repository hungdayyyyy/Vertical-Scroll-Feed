"use client";

import { useState } from "react";
import { mockProfile } from "@/data/mockPages";

export default function ProfilePage() {
  const [tab, setTab] = useState<"videos" | "liked">("videos");

  return (
    <div className="page-scroll">
      {/* Cover + Avatar */}
      <div className="profile-cover">
        <div className="profile-cover-bg" />
        <div className="profile-avatar-ring">
          <div className="profile-avatar">{mockProfile.initial}</div>
        </div>
      </div>

      {/* Info */}
      <div className="profile-info">
        <h1 className="profile-name">{mockProfile.name}</h1>
        <p className="profile-handle">{mockProfile.handle}</p>
        <p className="profile-bio">{mockProfile.bio}</p>

        {/* Stats */}
        <div className="profile-stats">
          <div className="stat">
            <span className="stat-number">{mockProfile.following}</span>
            <span className="stat-label">Đang follow</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">{mockProfile.followers}</span>
            <span className="stat-label">Người theo dõi</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">{mockProfile.likes}</span>
            <span className="stat-label">Lượt thích</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="profile-actions">
          <button type="button" className="profile-btn profile-btn--primary">
            Chỉnh sửa hồ sơ
          </button>
          <button
            type="button"
            className="profile-btn profile-btn--secondary"
            aria-label="Chia sẻ"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              width="18"
              height="18"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </button>
        </div>
      </div>

      {/* Video tabs */}
      <div className="profile-tabs">
        <button
          type="button"
          className={`profile-tab ${tab === "videos" ? "profile-tab--active" : ""}`}
          onClick={() => setTab("videos")}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
          Video
        </button>
        <button
          type="button"
          className={`profile-tab ${tab === "liked" ? "profile-tab--active" : ""}`}
          onClick={() => setTab("liked")}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          Đã thích
        </button>
      </div>

      {/* Video grid */}
      <div className="video-grid">
        {mockProfile.videos.map((v) => (
          <div
            key={v.id}
            className="video-thumb"
            style={{ background: v.thumbnailColor }}
          >
            <div className="video-thumb-overlay">
              <svg
                viewBox="0 0 24 24"
                fill="white"
                width="20"
                height="20"
                style={{ opacity: 0.8 }}
              >
                <polygon points="5,3 19,12 5,21" />
              </svg>
              <span className="video-thumb-views">{v.views}</span>
            </div>
          </div>
        ))}
        {tab === "liked" &&
          [...mockProfile.videos].reverse().map((v) => (
            <div
              key={"l" + v.id}
              className="video-thumb"
              style={{
                background: v.thumbnailColor,
                filter: "brightness(0.7)",
              }}
            >
              <div className="video-thumb-overlay">
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  width="20"
                  height="20"
                  style={{ opacity: 0.8 }}
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span className="video-thumb-views">{v.views}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
