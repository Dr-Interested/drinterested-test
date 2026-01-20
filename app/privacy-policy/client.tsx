"use client"

import { useEffect } from "react"
import Link from "next/link"
import { FileText } from "lucide-react"
import ScrollToTop from "@/components/scroll-to-top"

export default function PrivacyPolicyClientPage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="hero-section container py-16 max-w-4xl">
      <ScrollToTop />
      <div className="bg-[#405862] text-white p-6 rounded-lg mb-8 shadow-md">
        <h1 className="text-3xl font-bold mb-2 text-center">Privacy Policy</h1>
        <p className="text-center mb-0">Last updated: May 31, 2025</p>
      </div>

      <div className="space-y-8 bg-white p-8 rounded-lg shadow-md">
        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">1. Introduction</h2>
          <p className="text-slate-600">
            Dr. Interested ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when you visit our website or use our
            services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy
            policy, please do not access the site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">2. Information We Collect</h2>
          <p className="text-slate-600">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-600">
            <li>Register for our newsletter</li>
            <li>Sign up for events or webinars</li>
            <li>Apply to join our organization</li>
            <li>Contact us with inquiries</li>
            <li>Participate in our surveys or competitions</li>
          </ul>
          <p className="text-slate-600 mt-4">
            The personal information we may collect includes names, email addresses, phone numbers, school information,
            and other details you provide when interacting with our services.
          </p>
          <p className="text-slate-600 mt-4">
            In some cases, we may also collect demographic information through voluntary forms. This data is only used
            in combined (aggregated) formats for reporting and analysis. If used individually, all data will remain
            strictly anonymous and will never be linked to personally identifiable information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">3. How We Use Your Information</h2>
          <p className="text-slate-600">We may use the information we collect for various purposes, including:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-600">
            <li>Providing, maintaining, and improving our services</li>
            <li>Sending newsletters, updates, and promotional materials</li>
            <li>Responding to your comments, questions, and requests</li>
            <li>Analyzing usage patterns to enhance user experience</li>
            <li>Protecting against unauthorized access and legal liability</li>
            <li>Reporting impact and trends through aggregate demographic data</li>
          </ul>
          <p className="text-slate-600 mt-4">
            We take privacy seriously and ensure that demographic data is either combined with other responses or
            stripped of identifiable details to maintain full anonymity.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">4. Email Communications</h2>
          <p className="text-slate-600">
            If you choose to provide us with your email address, you consent to receive emails from us. You can
            unsubscribe from our marketing emails at any time by clicking the "unsubscribe" link included in these
            emails or by contacting us directly. However, we may still send you non-promotional emails that are
            essential to your use of our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">5. Third-Party Service Providers</h2>
          <p className="text-slate-600">
            We may share your information with third-party service providers who perform services on our behalf, such as
            email delivery, hosting services, and analytics. These service providers have access to your personal
            information only to perform these tasks on our behalf and are obligated not to disclose or use it for any
            other purpose.
          </p>
          <p className="text-slate-600 mt-2">
            We use ConvertKit as our email marketing platform. By subscribing to our newsletter, your information will
            be transferred to ConvertKit for processing in accordance with their Privacy Policy and Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">6. Cookies and Tracking Technologies</h2>
          <p className="text-slate-600">
            We may use cookies and similar tracking technologies to track activity on our website and hold certain
            information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">7. Data Security</h2>
          <p className="text-slate-600">
            We have implemented appropriate technical and organizational security measures designed to protect the
            security of any personal information we process. However, please also remember that we cannot guarantee that
            the internet itself is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">8. Children's Privacy</h2>
          <p className="text-slate-600">
            Our services are intended for users who are at least 13 years of age. We do not knowingly collect personal
            information from children under 13. If you are a parent or guardian and believe your child has provided us
            with personal information, please contact us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">9. Your Rights</h2>
          <p className="text-slate-600">
            Depending on your location, you may have certain rights regarding your personal information, such as the
            right to access, correct, or delete your personal information. To exercise these rights, please contact us
            using the information provided below.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">10. Changes to This Privacy Policy</h2>
          <p className="text-slate-600">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy
            Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">11. Contact Us</h2>
          <p className="text-slate-600">
            If you have any questions about this Privacy Policy, please contact us at admin@drinterested.org.
          </p>
        </section>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="inline-flex items-center text-[#405862] hover:text-[#4ecdc4] transition-colors">
          <FileText className="h-4 w-4 mr-2" />
          Return Home
        </Link>
      </div>
    </div>
  )
}
