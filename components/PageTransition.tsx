"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [displayed, setDisplayed] = useState(children);
  const [fading, setFading] = useState(false);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (pathname === prevPathname.current) return;
    prevPathname.current = pathname;

    setFading(true);
    const t = setTimeout(() => {
      setDisplayed(children);
      setFading(false);
    }, 150); // fade out duration

    return () => clearTimeout(t);
  }, [pathname, children]);

  useEffect(() => {
    if (!fading) setDisplayed(children);
  }, [children]);

  return (
    <div
      className={`page-transition ${fading ? "page-transition--out" : "page-transition--in"}`}
    >
      {displayed}
    </div>
  );
}
