import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PHONE, EMAIL, DOMAIN } from "@/lib/services";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Free Quote | Superstructure Services Canterbury",
  description:
    "Get a free, no-obligation quote from Superstructure Services. Call 07931 686596 or email us. Based in Canterbury, serving all of Kent.",
  alternates: { canonical: `${DOMAIN}/contact` },
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: PHONE,
    href: `tel:${PHONE.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: MapPin,
    label: "Based In",
    value: "Canterbury, Kent",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get a Free Quote"
        subtitle="Tell us about your project and we'll be in touch within 24 hours with a free, no-obligation quote."
        breadcrumbs={[{ label: "Contact" }]}
        badge="📞 Free Consultation"
        showCTA={false}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact details */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#1a2e44] mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We&apos;re here to help with any building project, big or small. Contact us today
                for expert advice and a free, no-obligation quote.
              </p>

              <div className="flex flex-col gap-5 mb-10">
                {contactDetails.map((d) => (
                  <div key={d.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <d.icon size={20} className="text-[#1e3a5f]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                        {d.label}
                      </div>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="font-semibold text-[#1a2e44] hover:text-[#1e3a5f] transition-colors"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <span className="font-semibold text-[#1a2e44]">{d.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Coverage note */}
              <div className="bg-[#1a2e44] rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Areas We Cover</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We are based in Canterbury and serve clients throughout Kent, including
                  Whitstable, Faversham, Sandwich, Folkestone, Chartham, Harbledown, Sturry
                  and all surrounding villages.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100">
              <h2 className="text-2xl font-bold text-[#1a2e44] mb-2">
                Send Us Your Enquiry
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Fill in the form below and we&apos;ll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40096.44!2d1.0780!3d51.2802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decb6c3bfffffd%3A0x78e8a1d97b7a1d6e!2sCanterbury!5e0!3m2!1sen!2suk!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Superstructure Services - Canterbury, Kent"
            />
          </div>
        </div>
      </section>
    </>
  );
}
