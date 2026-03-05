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
          <p className="text-gray-500 text-sm mb-8">Last updated: 5 March 2026</p>

          <h2>1. Who We Are</h2>
          <p>
            Superstructure Services Ltd (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is a
            building and construction company registered in England and Wales (Company No. 4775585),
            based in Canterbury, Kent. Our website is <a href={DOMAIN}>{DOMAIN}</a>.
          </p>
          <p>
            We are the data controller for the personal data collected through this website. You can
            reach us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or{" "}
            <a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>.
          </p>

          <h2>2. What Personal Data We Collect</h2>
          <p>We may collect and process the following personal data:</p>
          <ul>
            <li><strong>Contact data</strong> — your name, email address and phone number when you submit an enquiry or request a quote</li>
            <li><strong>Message content</strong> — the details of your project or question</li>
            <li><strong>Technical data</strong> — your IP address, browser type, device type and operating system, collected automatically when you visit our site</li>
            <li><strong>Usage data</strong> — pages you visit, time spent on the site and how you arrived (collected via analytics tools)</li>
          </ul>
          <p>We do not collect any special category data (such as health, financial or biometric data).</p>

          <h2>3. How We Use Your Data</h2>
          <p>We use your personal data to:</p>
          <ul>
            <li>Respond to your enquiries and provide quotes for building work</li>
            <li>Communicate with you throughout your project</li>
            <li>Improve our website and understand how visitors use it</li>
            <li>Comply with our legal and regulatory obligations</li>
          </ul>

          <h2>4. Legal Basis for Processing (UK GDPR)</h2>
          <p>We only process your personal data where we have a lawful basis to do so:</p>
          <ul>
            <li><strong>Contract</strong> — processing is necessary to take steps at your request before entering into a contract (e.g. providing a quote)</li>
            <li><strong>Legitimate interests</strong> — we have a legitimate interest in running and improving our business, provided this does not override your rights</li>
            <li><strong>Legal obligation</strong> — where we are required to process data to comply with UK law</li>
            <li><strong>Consent</strong> — where you have given us explicit consent (e.g. subscribing to updates). You can withdraw consent at any time by contacting us</li>
          </ul>

          <h2>5. Cookies &amp; Analytics</h2>
          <p>Our website uses cookies — small text files stored on your device. We use:</p>
          <ul>
            <li><strong>Essential cookies</strong> — necessary for the website to function. These cannot be switched off</li>
            <li><strong>Analytics cookies</strong> — we may use Google Analytics to understand how visitors use our site (pages visited, session duration, traffic sources). This data is anonymised and aggregated. Google may process this data on servers outside the UK; Google LLC is certified under the UK–US Data Bridge</li>
          </ul>
          <p>
            You can control or disable non-essential cookies through your browser settings. Disabling
            analytics cookies will not affect your ability to use the site.
          </p>

          <h2>6. Data Retention</h2>
          <p>We keep your personal data only as long as necessary:</p>
          <ul>
            <li><strong>Enquiry and quote data</strong> — up to 3 years from last contact, in case you return with a follow-up project</li>
            <li><strong>Project and contractual records</strong> — up to 7 years to comply with HMRC and legal requirements</li>
            <li><strong>Analytics data</strong> — typically 26 months as set by Google Analytics defaults</li>
          </ul>
          <p>After these periods, data is securely deleted or anonymised.</p>

          <h2>7. Sharing Your Data</h2>
          <p>
            We do not sell or rent your personal data to any third party. We may share your data with:
          </p>
          <ul>
            <li><strong>Email and communication tools</strong> — service providers who help us manage enquiries (e.g. email hosting), bound by data processing agreements</li>
            <li><strong>Google</strong> — for analytics purposes (see Cookies section above)</li>
            <li><strong>Legal or regulatory bodies</strong> — if required to do so by law or a court order</li>
          </ul>

          <h2>8. International Transfers</h2>
          <p>
            Some of our third-party providers (such as Google) may process your data outside the UK.
            Where this occurs, we ensure appropriate safeguards are in place, such as the UK adequacy
            regulations or the UK–US Data Bridge, to protect your data to an equivalent standard as
            required under UK GDPR.
          </p>

          <h2>9. Your Rights Under UK GDPR</h2>
          <p>You have the following rights regarding your personal data:</p>
          <ul>
            <li><strong>Right of access</strong> — request a copy of the data we hold about you</li>
            <li><strong>Right to rectification</strong> — ask us to correct inaccurate or incomplete data</li>
            <li><strong>Right to erasure</strong> — ask us to delete your data where there is no compelling reason to continue processing</li>
            <li><strong>Right to restrict processing</strong> — ask us to pause processing of your data in certain circumstances</li>
            <li><strong>Right to data portability</strong> — request your data in a structured, machine-readable format</li>
            <li><strong>Right to object</strong> — object to processing based on legitimate interests or for direct marketing</li>
            <li><strong>Rights related to automated decision-making</strong> — we do not carry out any automated decision-making or profiling</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We will respond within one calendar month.
          </p>

          <h2>10. How to Complain</h2>
          <p>
            If you are unhappy with how we have handled your personal data, please contact us first
            and we will do our best to resolve the issue.
          </p>
          <p>
            You also have the right to lodge a complaint with the UK&apos;s supervisory authority,
            the <strong>Information Commissioner&apos;s Office (ICO)</strong>:
          </p>
          <ul>
            <li>Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a></li>
            <li>Helpline: 0303 123 1113</li>
          </ul>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes will be posted on this
            page with an updated &ldquo;last updated&rdquo; date. We encourage you to review this
            policy periodically.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            For any questions about this policy or your personal data, please contact us:
          </p>
          <ul>
            <li>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li>Phone: <a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a></li>
            <li>Address: Superstructure Services Ltd, Canterbury, Kent</li>
          </ul>
        </div>
      </section>
    </>
  );
}
