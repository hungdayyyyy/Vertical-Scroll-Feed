"use client";

import {
  useRef,
  useState,
  useEffect,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import { VideoItem } from "@/types";
import ActionBar from "./ActionBar";
import AuthorInfo from "./AuthorInfo";

interface VideoCardProps {
  video: VideoItem;
  isActive: boolean;
}

export interface VideoCardHandle {
  pause: () => void;
  play: () => void;
}

const VideoCard = forwardRef<VideoCardHandle, VideoCardProps>(
  ({ video, isActive }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPauseIcon, setShowPauseIcon] = useState(false);
    const [likes, setLikes] = useState(video.likesCount);
    const [isLiked, setIsLiked] = useState(false);
    const iconTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Expose play/pause to parent
    useImperativeHandle(ref, () => ({
      pause: () => {
        videoRef.current?.pause();
        setIsPlaying(false);
      },
      play: () => {
        videoRef.current?.play().catch(() => {});
        setIsPlaying(true);
      },
    }));

    // Auto play/pause
    useEffect(() => {
      if (isActive) {
        videoRef.current?.play().catch(() => {});
        setIsPlaying(true);
      } else {
        videoRef.current?.pause();
        setIsPlaying(false);
      }
    }, [isActive]);

    const handleVideoClick = useCallback(() => {
      if (!videoRef.current) return;

      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }

      // icon  feedback
      setShowPauseIcon(true);
      if (iconTimerRef.current) clearTimeout(iconTimerRef.current);
      iconTimerRef.current = setTimeout(() => setShowPauseIcon(false), 700);
    }, [isPlaying]);

    const handleLike = useCallback(() => {
      setIsLiked((prev) => {
        setLikes((count) => (prev ? count - 1 : count + 1));
        return !prev;
      });
    }, []);

    useEffect(() => {
      return () => {
        if (iconTimerRef.current) clearTimeout(iconTimerRef.current);
      };
    }, []);

    const formatCount = (n: number) => {
      if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "Tr";
      if (n >= 1_000) return (n / 1_000).toFixed(1) + "N";
      return String(n);
    };

    return (
      <div className="video-card">
        {/* Video element */}
        <video
          ref={videoRef}
          src={video.videoUrl}
          loop
          muted
          playsInline
          preload="metadata"
          onClick={handleVideoClick}
          className="video-element"
        />

        {/* Play/Pause icon overlay */}
        {showPauseIcon && (
          <div className="play-pause-overlay">
            <div className="play-pause-icon">
              {isPlaying ? (
                // Pause icon
                <svg viewBox="0 0 24 24" fill="white" width="64" height="64">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                // Play icon
                <svg viewBox="0 0 24 24" fill="white" width="64" height="64">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              )}
            </div>
          </div>
        )}

        <div className="gradient-overlay" />

        {/* Bottom info */}
        <div className="bottom-info">
          <AuthorInfo video={video} />
        </div>

        {/* Right action bar */}
        <div className="action-bar-container">
          <ActionBar
            likes={likes}
            commentsCount={video.commentsCount}
            sharesCount={video.sharesCount}
            isLiked={isLiked}
            onLike={handleLike}
            formatCount={formatCount}
            authorName={video.authorName}
          />
        </div>
      </div>
    );
  },
);

VideoCard.displayName = "VideoCard";
export default VideoCard;
