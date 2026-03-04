import Image from "next/image";

const accreditations = [
  {
    src: "/images/accreditations/gas-safe.jpg",
    alt: "Gas Safe Certified Plumber in Canterbury Kent",
    label: "Gas Safe Registered",
    desc: "Certified gas & heating engineers",
  },
  {
    src: "/images/accreditations/mcs.webp",
    alt: "MCS Certified Heat Pump and Solar Panel Installer Canterbury Kent",
    label: "MCS Certified",
    desc: "Heat pump & solar panel installers",
  },
  {
    src: "/images/accreditations/niceic.png",
    alt: "NICEIC Certified Electrician in Canterbury Kent",
    label: "NICEIC Approved",
    desc: "Certified electrical contractors",
  },
];


export default function TrustBadges() {
  return (
    <section className="py-10 sm:py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Fully Accredited. Fully Insured. Fully Local.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Trusted by homeowners and businesses across Canterbury and Kent.
          </p>
        </div>

        {/* Accreditation logos */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-0">
          {accreditations.map((a) => (
            <div
              key={a.label}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#4a9ebb]/30 hover:shadow-md transition-all"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <Image
                  src={a.src}
                  alt={a.alt}
                  width={140}
                  height={56}
                  className="object-contain max-h-14 w-auto"
                />
              </div>
              <p className="text-gray-500 text-xs leading-snug">{a.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
