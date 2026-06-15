"use client";

interface ActionBarProps {
  likes: number;
  commentsCount: number;
  sharesCount: number;
  isLiked: boolean;
  onLike: () => void;
  formatCount: (n: number) => string;
  authorName: string;
}

export default function ActionBar({
  likes,
  commentsCount,
  sharesCount,
  isLiked,
  onLike,
  formatCount,
  authorName,
}: ActionBarProps) {
  return (
    <div className="action-bar">
      {/* Avatar */}
      <div className="avatar-wrapper">
        <div className="avatar">{authorName.charAt(0).toUpperCase()}</div>
        <div className="avatar-plus">+</div>
      </div>

      {/* Like button */}
      <button className="action-btn" onClick={onLike} aria-label="Thích">
        <div
          className={`action-circle ${isLiked ? "action-circle--liked" : ""}`}
        >
          <svg
            viewBox="0 0 24 24"
            fill={isLiked ? "#ff2d55" : "white"}
            stroke={isLiked ? "none" : "white"}
            strokeWidth={isLiked ? 0 : 1.5}
            width="24"
            height="24"
            className={`heart-icon ${isLiked ? "liked" : ""}`}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
        <span className={`action-count ${isLiked ? "liked-count" : ""}`}>
          {formatCount(likes)}
        </span>
      </button>

      {/* Comment button */}
      <button className="action-btn" aria-label="Bình luận">
        <div className="action-circle">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.8"
            width="24"
            height="24"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <span className="action-count">{formatCount(commentsCount)}</span>
      </button>

      {/* Share button */}
      <button className="action-btn" aria-label="Chia sẻ">
        <div className="action-circle">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.8"
            width="24"
            height="24"
          >
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        </div>
        <span className="action-count">{formatCount(sharesCount)}</span>
      </button>

      {/* Music disc */}
      <div className="music-disc" aria-label="Nhạc nền">
        <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
          <circle cx="12" cy="12" r="10" fill="rgba(255,255,255,0.15)" />
          <circle cx="12" cy="12" r="3" fill="white" />
          <path d="M12 2 L14 8 L12 7 L10 8 Z" fill="white" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}
