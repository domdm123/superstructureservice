"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";

interface ObfuscatedEmailProps {
  subject?: string;
  className?: string;
  showIcon?: boolean;
  label?: string;
}

// Email split into parts — never assembled in static HTML, only in the browser
const E_USER = "enquiries";
const E_DOMAIN = "superstructureservices";
const E_TLD = "co.uk";

export default function ObfuscatedEmail({
  subject = "Free Quote Enquiry - Superstructure Services",
  className = "",
  showIcon = true,
  label,
}: ObfuscatedEmailProps) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    // Only assembled client-side — invisible to scrapers parsing static HTML
    setEmail(`${E_USER}@${E_DOMAIN}.${E_TLD}`);
  }, []);

  if (!email) {
    return (
      <span className={`inline-flex items-center gap-2 ${className}`}>
        {showIcon && <Mail size={15} className="text-white flex-shrink-0" />}
        <span className="text-sm text-gray-300">Loading contact...</span>
      </span>
    );
  }

  return (
    <a
      href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
      className={className}
    >
      {showIcon && <Mail size={15} className="text-white flex-shrink-0" />}
      <span>{label ?? email}</span>
    </a>
  );
}
