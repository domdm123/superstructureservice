"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { SERVICES } from "@/lib/services";

interface ContactFormProps {
  prefilledService?: string;
  prefilledLocation?: string;
}

export default function ContactForm({ prefilledService, prefilledLocation }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: prefilledService || "",
    location: prefilledLocation || "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="text-green-600" size={40} />
        </div>
        <h3 className="text-2xl font-bold text-[#1a2e44] mb-3">Thank You!</h3>
        <p className="text-gray-600 max-w-md">
          We&apos;ve received your enquiry and will be in touch within 24 hours. For urgent matters,
          please call us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-[#1a2e44] mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4a9ebb] focus:border-transparent text-gray-800 placeholder-gray-400 bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#1a2e44] mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="Your phone number"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4a9ebb] focus:border-transparent text-gray-800 placeholder-gray-400 bg-white"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#1a2e44] mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4a9ebb] focus:border-transparent text-gray-800 placeholder-gray-400 bg-white"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-[#1a2e44] mb-1.5">Service Required</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4a9ebb] focus:border-transparent text-gray-800 bg-white"
          >
            <option value="">Select a service...</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.shortName}
              </option>
            ))}
            <option value="other">Other / Not Sure</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#1a2e44] mb-1.5">Your Location</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Town or postcode"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4a9ebb] focus:border-transparent text-gray-800 placeholder-gray-400 bg-white"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#1a2e44] mb-1.5">
          Tell Us About Your Project <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Describe your project, including any relevant details about your property and what you'd like to achieve..."
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4a9ebb] focus:border-transparent text-gray-800 placeholder-gray-400 bg-white resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2 px-8 py-4 bg-[#1e3a5f] text-white font-bold rounded-xl hover:bg-[#162d4a] transition-all shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending...
          </span>
        ) : (
          <>
            <Send size={18} /> Send Enquiry
          </>
        )}
      </button>
      <p className="text-xs text-gray-500 text-center">
        We respond to all enquiries within 24 hours. Your details are kept private and never shared.
      </p>
    </form>
  );
}
