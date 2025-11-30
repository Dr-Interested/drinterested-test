"use client"

import { useEffect } from "react"
import Link from "next/link"
import { FileText } from "lucide-react"
import ScrollToTop from "@/components/scroll-to-top"

export default function TermsClient() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container py-16 max-w-4xl">
      <ScrollToTop />
      <div className="bg-[#405862] text-white p-6 rounded-lg mb-8 shadow-md">
        <h1 className="text-3xl font-bold mb-2 text-center">Terms and Conditions</h1>
        <p className="text-center mb-0">
          Please read these terms carefully before accessing or using any of our services.
        </p>
      </div>

      <div className="space-y-8 bg-white p-8 rounded-lg shadow-md">
        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">1. Legal Disclaimer</h2>
          <p className="text-slate-600">
            Dr. Interested is a youth-led educational project intended to provide informational content to high school
            students interested in healthcare-related careers. It is not a registered business, nonprofit, or legal
            entity. All activities, content, and communications are provided on a voluntary, non-commercial basis.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">2. Acceptance of Terms</h2>
          <p className="text-slate-600">
            By accessing or using our website or services, you agree to be legally bound by these Terms and Conditions.
            If you do not agree with any part of these Terms, you must refrain from using our website or services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">3. Educational Purpose Only</h2>
          <p className="text-slate-600">
            All content, events, webinars, and resources provided by Dr. Interested are for educational and
            informational purposes only. They are not intended to serve as professional medical advice, diagnosis,
            treatment, or as a substitute for consulting a licensed medical professional.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">4. No Liability</h2>
          <p className="text-slate-600">
            To the fullest extent permitted by applicable law, Dr. Interested, its organizers, contributors, and
            affiliates disclaim all liability for any damages, direct or indirect, including but not limited to loss of
            data, loss of income, personal injury, or reputational harm arising from or related to your use or inability
            to use our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">5. User Responsibilities</h2>
          <p className="text-slate-600">When engaging with our services, you agree not to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-600">
            <li>Violate any local, national, or international laws or regulations</li>
            <li>Upload or transmit any harmful, misleading, or unlawful content</li>
            <li>Access or attempt to access unauthorized areas of the website</li>
            <li>Impersonate any individual or misrepresent your affiliation</li>
            <li>Exploit or misuse our resources for commercial purposes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">6. Privacy</h2>
          <p className="text-slate-600">
            Our{" "}
            <Link href="/privacy-policy" className="text-[#405862] font-medium underline hover:text-[#4ecdc4]">
              Privacy Policy
            </Link>{" "}
            outlines how personal data is collected, stored, and used. By using our services, you consent to the
            collection and use of information as outlined in our Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">7. Intellectual Property</h2>
          <p className="text-slate-600">
            All content made available through this project, including but not limited to text, graphics, logos, and
            digital materials, remains the intellectual property of the creators of Dr. Interested. No content may be
            copied, reproduced, or distributed without explicit written consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">8. Communications</h2>
          <p className="text-slate-600">
            By submitting your contact information, you agree to receive emails or messages from Dr. Interested,
            including but not limited to event updates and educational content. You may opt out of such communications
            at any time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">9. Modifications</h2>
          <p className="text-slate-600">
            We reserve the right to amend or modify these Terms at any time without prior notice. It is your
            responsibility to review the Terms periodically. Continued use of the website or services constitutes
            acceptance of any changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">10. Governing Law</h2>
          <p className="text-slate-600">
            These Terms and any disputes arising under them shall be governed by and interpreted in accordance with the
            laws of the Province of Ontario, Canada, without regard to conflict of laws principles.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">11. Contact Information</h2>
          <p className="text-slate-600">
            For questions or concerns regarding these Terms and Conditions, please contact us at:{" "}
            <a
              href="mailto:admin@drinterested.org"
              className="text-[#405862] font-medium underline hover:text-[#4ecdc4]"
            >
              admin@drinterested.org
            </a>
            .
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
