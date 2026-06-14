import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
