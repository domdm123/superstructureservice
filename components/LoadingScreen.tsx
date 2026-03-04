"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  const dismiss = () => {
    setFading(true);
    setTimeout(() => setVisible(false), 500);
  };

  useEffect(() => {
    // Find the hero video and wait for it to be ready to play
    const video = document.querySelector("video") as HTMLVideoElement | null;

    if (video) {
      // If already ready, dismiss after a short minimum delay
      if (video.readyState >= 3) {
        const t = setTimeout(dismiss, 400);
        return () => clearTimeout(t);
      }
      // Otherwise wait for canplay event
      const onCanPlay = () => {
        setTimeout(dismiss, 200);
      };
      video.addEventListener("canplay", onCanPlay, { once: true });
      // Fallback: dismiss after 4s regardless
      const fallback = setTimeout(dismiss, 4000);
      return () => {
        video.removeEventListener("canplay", onCanPlay);
        clearTimeout(fallback);
      };
    } else {
      // No video found, dismiss after 800ms
      const t = setTimeout(dismiss, 800);
      return () => clearTimeout(t);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0d1b2e] flex items-center justify-center transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <Image
        src="/logo-light.png"
        alt="Superstructure Services"
        width={320}
        height={74}
        className="w-64 md:w-80 h-auto object-contain"
        priority
      />
    </div>
  );
}
