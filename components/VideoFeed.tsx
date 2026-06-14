"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import VideoCard, { VideoCardHandle } from "./VideoCard";
import { mockVideos } from "@/data/mockVideos";

export default function VideoFeed() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(VideoCardHandle | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // detect which video is in viewport
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            setActiveIndex(index);
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.6, // 60% visible triggers active
      },
    );

    itemRefs.current.forEach((el) => {
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const setItemRef = useCallback((el: HTMLDivElement | null, index: number) => {
    itemRefs.current[index] = el;
    if (el && observerRef.current) {
      observerRef.current.observe(el);
    }
  }, []);

  return (
    <div className="feed-container" ref={containerRef}>
      {mockVideos.map((video, index) => (
        <div
          key={video.id}
          className="feed-item"
          data-index={index}
          ref={(el) => setItemRef(el, index)}
        >
          <VideoCard
            video={video}
            isActive={activeIndex === index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
          />
        </div>
      ))}
    </div>
  );
}
