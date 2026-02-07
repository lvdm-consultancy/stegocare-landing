import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Stegocare",
  description: "Privacy policy and data protection information for Stegocare, compliant with GDPR and Belgian data protection laws.",
  robots: {
    index: true,
    follow: true,
  },
};

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-black mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Stegocare, operated by LVDM Consultancy, is committed to protecting your privacy and personal data.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
              use our healthcare management platform and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect several types of information to provide and improve our services:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and organization details</li>
              <li><strong>Healthcare Data:</strong> Patient information, care records, and medical schedules (processed under strict GDPR compliance)</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our platform, including IP address, browser type, and access times</li>
              <li><strong>Technical Data:</strong> Device information, log data, and cookies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">3. Legal Basis for Processing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We process your personal data based on the following legal grounds under GDPR:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Contractual Necessity:</strong> To perform our services under our agreement with you</li>
              <li><strong>Legal Obligation:</strong> To comply with Belgian healthcare regulations and data protection laws</li>
              <li><strong>Legitimate Interests:</strong> To improve our services and ensure security</li>
              <li><strong>Consent:</strong> Where explicitly provided for specific processing activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">4. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Providing and maintaining our healthcare management platform</li>
              <li>Processing scheduling, billing, and administrative tasks</li>
              <li>Communicating with you about services, updates, and support</li>
              <li>Improving our platform and developing new features</li>
              <li>Ensuring security and preventing fraud</li>
              <li>Complying with legal and regulatory requirements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">5. Data Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal data. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our platform (e.g., cloud hosting, payment processors)</li>
              <li><strong>Healthcare Partners:</strong> Integrated systems like BelRAI, VESTA, and eHealth (with your consent and as required by law)</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights and safety</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">6. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your data against unauthorized
              access, alteration, disclosure, or destruction. This includes encryption, secure data centers, access
              controls, and regular security assessments.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">7. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain personal data only for as long as necessary to fulfill the purposes outlined in this Privacy
              Policy, unless a longer retention period is required by law. Healthcare data is retained in accordance
              with Belgian medical record retention requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">8. Your Rights Under GDPR</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a data subject, you have the following rights:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Right to Access:</strong> Request a copy of your personal data we hold</li>
              <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your data (subject to legal obligations)</li>
              <li><strong>Right to Restriction:</strong> Limit how we use your data</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Right to Object:</strong> Object to certain processing of your data</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for processing where applicable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">9. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns,
              and personalize content. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">10. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your data is primarily stored and processed within the European Economic Area (EEA). If we transfer
              data outside the EEA, we ensure appropriate safeguards are in place as required by GDPR.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">11. Children&apos;s Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not directed to individuals under the age of 16. We do not knowingly collect personal
              information from children. If you believe we have collected information from a child, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by
              posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">13. Data Protection Officer</h2>
            <p className="text-gray-700 leading-relaxed">
              For any questions about this Privacy Policy or to exercise your rights, please contact our Data
              Protection Officer through our contact form or reach out to LVDM Consultancy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">14. Supervisory Authority</h2>
            <p className="text-gray-700 leading-relaxed">
              You have the right to lodge a complaint with the Belgian Data Protection Authority (Gegevensbeschermingsautoriteit/
              Autorité de protection des données) if you believe your data protection rights have been violated.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
