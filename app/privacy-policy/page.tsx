import type { Metadata } from "next";
import { DOMAIN, COMPANY, EMAIL, PHONE } from "@/lib/services";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | Superstructure Services",
  description: "Privacy Policy for Superstructure Services Ltd, Canterbury, Kent.",
  alternates: { canonical: `${DOMAIN}/privacy-policy` },
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use and protect your personal information."
        breadcrumbs={[{ label: "Privacy Policy" }]}
        showCTA={false}
      />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray prose-lg">
          <p className="text-gray-500 text-sm mb-8">Last updated: July 2021</p>

          <h2>1. Who We Are</h2>
          <p>
            Superstructure Services Ltd (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is a
            building and construction company based in Canterbury, Kent. Our website is{" "}
            <a href={DOMAIN}>{DOMAIN}</a>. You can contact us at{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or call us on{" "}
            <a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>.
          </p>

          <h2>2. What Data We Collect</h2>
          <p>We may collect the following personal data when you use our website:</p>
          <ul>
            <li>Your name, email address and phone number (via our contact form)</li>
            <li>Your message or project description</li>
            <li>Technical data such as your IP address, browser type and operating system</li>
            <li>Usage data including pages visited and time spent on our site</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>We use the data we collect to:</p>
          <ul>
            <li>Respond to your enquiries and provide quotes</li>
            <li>Communicate with you about your project</li>
            <li>Improve our website and services</li>
            <li>Comply with our legal obligations</li>
          </ul>

          <h2>4. Legal Basis for Processing</h2>
          <p>
            We process your personal data on the basis of your consent (when you submit a contact
            form) and our legitimate interests in operating our business.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfil the purposes for
            which it was collected, or as required by law.
          </p>

          <h2>6. Third Parties</h2>
          <p>
            We do not sell or rent your personal data to third parties. We may share data with
            trusted service providers (such as email platforms) who process data on our behalf
            under strict data processing agreements.
          </p>

          <h2>7. Your Rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request erasure of your data</li>
            <li>Object to processing of your data</li>
            <li>Request restriction of processing</li>
            <li>Lodge a complaint with the ICO (Information Commissioner&apos;s Office)</li>
          </ul>

          <h2>8. Cookies</h2>
          <p>
            Our website may use cookies to enhance your browsing experience. You can control cookie
            settings through your browser preferences.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or how we handle your personal
            data, please contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
