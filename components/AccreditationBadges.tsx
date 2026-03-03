"use client";

import Image from "next/image";

const accreditations = [
  {
    name: "Gas Safe Registered",
    logo: "/images/gas-safe-certified-plumber-in-canterbury-kent.jpg",
    description: "Gas Safe registered engineers for all gas work",
  },
  {
    name: "NICEIC Approved",
    logo: "/images/niccic-certified-electrician-in-canterbury-kent.jpg",
    description: "NICEIC approved electrical contractors",
  },
  {
    name: "MCS Certified",
    logo: "/images/MCS-certified-heat-pump-and-solar-panel-installer-canterbury-kent.jpg",
    description: "MCS certified for heat pumps & solar",
  },
];

export default function AccreditationBadges() {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-[#4a9ebb] font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">
            Trusted & Accredited
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Certified Professionals You Can Trust
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accreditations.map((acc) => (
            <div 
              key={acc.name}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#4a9ebb]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-24 w-full mb-4">
                <Image
                  src={acc.logo}
                  alt={acc.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-gray-900 text-center mb-2">{acc.name}</h3>
              <p className="text-gray-500 text-sm text-center">{acc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
