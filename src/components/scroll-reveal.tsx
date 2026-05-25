"use client";

import { useEffect, useRef, ReactNode } from "react";

export function ScrollReveal({
  children,
  className = "",
  delay,
}: {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4 | 5;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${delay ? `reveal-delay-${delay}` : ""} ${className}`}
    >
      {children}
    </div>
  );
}
