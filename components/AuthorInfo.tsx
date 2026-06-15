import { VideoItem } from "@/types";

interface AuthorInfoProps {
  video: VideoItem;
}

export default function AuthorInfo({ video }: AuthorInfoProps) {
  return (
    <div className="author-info">
      <div className="author-name">{video.authorName}</div>
      <div className="author-handle">{video.authorHandle}</div>
      <div className="video-description">{video.description}</div>
      <div className="tags-row">
        {video.tags.map((tag) => (
          <span key={tag} className="tag">
            #{tag}
          </span>
        ))}
      </div>
      {/* Scrolling music ticker */}
      <div className="music-ticker">
        <svg viewBox="0 0 24 24" fill="white" width="14" height="14">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
        <span className="ticker-text">
          Nhạc gốc · {video.authorName} · ♪ trending sound ♪
        </span>
      </div>
    </div>
  );
}
