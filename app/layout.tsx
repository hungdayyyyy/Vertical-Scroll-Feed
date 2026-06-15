import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "VerTok – Video Feed",
  description: "Vertical scroll video feed built with Next.js & TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <div className="app-layout">
          <Navigation />
          <main className="main-area">
            <PageTransition>{children}</PageTransition>
          </main>
        </div>
      </body>
    </html>
  );
}
