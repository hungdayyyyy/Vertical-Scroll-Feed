import Navigation from "@/components/Navigation";
import VideoFeed from "@/components/VideoFeed";

export default function Home() {
  return (
    <div className="app-layout">
      <Navigation />
      <main className="main-area">
        <VideoFeed />
      </main>
    </div>
  );
}
