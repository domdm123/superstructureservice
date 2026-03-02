"use client";

import { useEffect, useState } from "react";

const SERVICES = [
  "Kitchen Installation",
  "Flooring & Underfloor Heating",
  "Facilities Management",
  "Electrical Work",
  "Air Source Heat Pumps",
  "Solar Panels",
  "Air Conditioning",
  "New Bathrooms",
  "Refurbishments",
  "Plumbing & Drainage",
  "Carpentry",
  "Garage Conversions",
  "Roofing",
  "Home Offices",
  "Cinema Rooms",
  "Driveways & Paving",
];

export default function AnimatedService() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % SERVICES.length);
        // Fade back in
        setVisible(true);
      }, 400);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        display: "inline-block",
        transition: "opacity 0.45s ease, transform 0.45s ease",
        fontSize: "inherit",
        fontWeight: "inherit",
        lineHeight: "inherit",
        color: "#4a9ebb",
        minWidth: "2ch",
      }}
    >
      {SERVICES[index]}
    </span>
  );
}
