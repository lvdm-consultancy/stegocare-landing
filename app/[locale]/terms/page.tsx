import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Stegocare",
  description: "Terms and conditions for using the Stegocare healthcare management platform.",
  robots: {
    index: true,
    follow: true,
  },
};

interface TermsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="border-b border-ink/5 bg-mist">
        <div className="mx-auto max-w-3xl px-4 pb-12 pt-32 sm:px-6">
          <h1 className="text-4xl font-semibold tracking-tight text-ink">Terms &amp; Conditions</h1>
          <p className="mt-3 text-sm text-ink-soft">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div>

          <section className="mb-10">
            <h2 className="mb-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">1. Introduction</h2>
            <p className="leading-relaxed text-ink-soft">
              Welcome to Stegocare. These Terms and Conditions govern your use of our healthcare management platform
              and services. By accessing or using Stegocare, you agree to be bound by these terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">2. Services</h2>
            <p className="leading-relaxed text-ink-soft mb-4">
              Stegocare provides an integrated healthcare management platform designed for Belgian care organizations,
              including but not limited to:
            </p>
            <ul className="list-disc space-y-2 pl-6 leading-relaxed text-ink-soft marker:text-brand">
              <li>Planning and scheduling management</li>
              <li>HR and employee management</li>
              <li>Billing and invoicing automation</li>
              <li>Administrative tools and integrations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">3. User Accounts</h2>
            <p className="leading-relaxed text-ink-soft">
              You are responsible for maintaining the confidentiality of your account credentials and for all
              activities that occur under your account. You must notify us immediately of any unauthorized use
              of your account.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">4. Data Protection and Privacy</h2>
            <p className="leading-relaxed text-ink-soft">
              We are committed to protecting your data in accordance with GDPR and Belgian data protection laws.
              Please refer to our Privacy Policy for detailed information about how we collect, use, and protect
              your personal information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">5. Acceptable Use</h2>
            <p className="leading-relaxed text-ink-soft mb-4">
              You agree to use Stegocare only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc space-y-2 pl-6 leading-relaxed text-ink-soft marker:text-brand">
              <li>Use the service in any way that violates any applicable law or regulation</li>
              <li>Interfere with or disrupt the service or servers</li>
              <li>Attempt to gain unauthorized access to any portion of the service</li>
              <li>Use the service to transmit any malicious code or harmful materials</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">6. Intellectual Property</h2>
            <p className="leading-relaxed text-ink-soft">
              All content, features, and functionality of Stegocare are owned by LVDM Consultancy or its licensors
              and are protected by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">7. Service Availability</h2>
            <p className="leading-relaxed text-ink-soft">
              We strive to maintain high availability of our services but do not guarantee uninterrupted access.
              We reserve the right to modify, suspend, or discontinue any aspect of the service with or without notice.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">8. Limitation of Liability</h2>
            <p className="leading-relaxed text-ink-soft">
              To the maximum extent permitted by law, Stegocare and LVDM Consultancy shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages resulting from your use of or
              inability to use the service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">9. Termination</h2>
            <p className="leading-relaxed text-ink-soft">
              We may terminate or suspend your access to the service immediately, without prior notice or liability,
              for any reason, including breach of these Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">10. Changes to Terms</h2>
            <p className="leading-relaxed text-ink-soft">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes
              by posting the new Terms on this page and updating the &ldquo;Last updated&rdquo; date.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">11. Governing Law</h2>
            <p className="leading-relaxed text-ink-soft">
              These Terms shall be governed by and construed in accordance with the laws of Belgium, without regard
              to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">12. Contact Information</h2>
            <p className="leading-relaxed text-ink-soft">
              If you have any questions about these Terms, please contact us through our contact form or reach out
              to LVDM Consultancy.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
