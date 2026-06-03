import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Globe, Award, Sparkles, FileText, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Join Our Team",
  description:
    "Join our leadership team and help inspire the next generation of healthcare professionals. Executive applications are open year-round.",
  keywords: [
    "Join Dr. Interested",
    "healthcare youth leadership",
    "pre-med student executive",
    "volunteer opportunities healthcare",
  ],
  openGraph: {
    title: "Join Our Team | Dr. Interested",
    description:
      "Join our leadership team and help inspire the next generation of healthcare professionals. Executive applications are open year-round.",
    url: "https://www.drinterested.org/members/join",
    siteName: "Dr. Interested",
    type: "website",
    images: [
      {
        url: "/websitebanner.jpg",
        width: 1920,
        height: 1080,
        alt: "Join Dr. Interested Team",
      },
    ],
  },
  alternates: {
    canonical: "https://www.drinterested.org/members/join",
  },
}

export default function JoinPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero / Banner Section */}
      <section className="bg-[#f5f1eb] py-12 md:py-16 border-b border-[#405862]/10">
        <div className="container max-w-5xl px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#405862] font-bricolage tracking-tight">
            Join Our Executive Team
          </h1>
          <div className="mt-6 space-y-4 max-w-3xl mx-auto text-base md:text-lg text-[#405862]/90 leading-relaxed font-sans">
            <p>
              Dr. Interested is a global youth organization active in <strong>106 countries</strong>, 
              reaching <strong>160,000+ students</strong> worldwide. We operate fully online through Discord, 
              with optional in-person opportunities depending on your city.
            </p>
            <p>
              We’re recruiting across nearly every field right now — Finance, Tech, Coding, Design, 
              Outreach, Events, and Healthcare Careers Education. If you like building things that matter, 
              there’s a seat for you.
            </p>
            <p className="font-medium text-[#405862]">
              This isn’t busywork. You’ll be part of a global team that moves fast, 
              leads real projects, and creates impact you can point to proudly.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits and Opportunities Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container max-w-5xl px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column: What You Get & Canada Opportunities */}
            <div className="space-y-8 md:space-y-10">
              
              {/* What You Get */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#405862] font-bricolage mb-6 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#4ecdc4]" />
                  What You Get
                </h2>
                <ul className="space-y-4">
                  {[
                    "Experience working with an international organization that strengthens your résumé",
                    "Letters of recommendation from medical students",
                    "Free tickets to represent us at conferences (merit-based)",
                    "Verified volunteer hours",
                    "Real skill growth in leadership, collaboration, and execution"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#4ecdc4] shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-[#405862]/90 font-medium">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Extra Opportunities (Canada) */}
              <div className="p-6 bg-[#f5f1eb]/30 rounded-xl border border-[#405862]/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h2 className="text-lg md:text-xl font-bold text-[#405862] font-bricolage">
                    Extra Opportunities <span className="text-xs font-semibold px-2 py-0.5 bg-[#405862]/10 rounded text-[#405862] ml-1">Canada · Under 18</span>
                  </h2>
                  <div className="relative w-24 h-8 shrink-0">
                    <Image 
                      src="/glocal.webp" 
                      alt="GLOCAL Foundation Logo" 
                      fill 
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-xs text-[#405862]/70 mb-4 italic">
                  Canadian youth opportunities are provided with support from the GLOCAL Foundation of Canada.
                </p>
                <ul className="space-y-3">
                  {[
                    "Apply for microgrants or travel grants to grow your ideas and showcase your work",
                    "Access 100+ virtual workshops and in-person events every year with civic leaders and mentors across Canada",
                    "After 120 service hours, earn a National Service Recognition Certificate signed by the Honourable Patty Hajdu, Minister of Employment, Workforce Development and Official Languages of Canada"
                  ].map((opp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Award className="h-4.5 w-4.5 text-[#4ecdc4] shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-[#405862]/90 leading-relaxed">
                        {opp}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Column: UN Opportunity & Time Commitment */}
            <div className="space-y-6">
              
              {/* UN Policy Opportunity Card */}
              <Card className="border-[#4ecdc4]/35 shadow-sm hover:shadow-md transition-all duration-300 bg-[#EDFAF9]/25 overflow-hidden">
                <div className="h-1.5 bg-[#4ecdc4] w-full" />
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#4ecdc4]/20 text-[#405862] font-bold text-xs uppercase px-2 py-1 rounded tracking-wide">
                      New Opportunity
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#405862] font-bricolage mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-[#4ecdc4]" />
                    Policy & Global Research
                  </h3>
                  <div className="space-y-4 text-sm text-[#405862]/95 leading-relaxed">
                    <p>
                      As an executive, you’ll have the opportunity to contribute directly to our policy and research reports. 
                      One of our current projects is a report for the <strong>United Nations High Commissioner on Human Rights</strong>.
                    </p>
                    <p>
                      Executives who contribute will be credited by name, and the final report will be published on the 
                      official United Nations Human Rights website.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Time Commitment Card */}
              <Card className="border-[#405862]/10 shadow-sm bg-[#f5f1eb]/20">
                <CardContent className="p-6 flex items-start gap-4">
                  <Clock className="h-8 w-8 text-[#405862] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#405862] text-sm md:text-base font-bricolage mb-1">
                      Time Commitment
                    </h4>
                    <p className="text-sm text-[#405862]/90 font-medium">
                      6 months &bull; ~2 hours/week
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>

          </div>
        </div>
      </section>

      {/* Role Grid Cards Section */}
      <section className="py-12 md:py-16 bg-[#f5f1eb]/30 border-t border-[#405862]/10">
        <div className="container max-w-5xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#405862] font-bricolage text-center mb-10">
            Open Application Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {/* General Executive Card */}
            <Card className="border-[#405862]/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full bg-white">
              <CardContent className="p-6 text-center flex flex-col flex-1 justify-between gap-6">
                <div>
                  <h3 className="font-bold text-lg text-[#405862] mb-3 font-bricolage">
                    General Executive
                  </h3>
                  <p className="text-xs md:text-sm text-[#405862]/80 leading-relaxed">
                    Join our core leadership team and help shape the future of
                    Dr. Interested at a global scale.
                  </p>
                </div>
                <Link
                  href="https://forms.gle/e9etoCnFMPhgeujD9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-[#405862] hover:bg-[#334852] text-white py-5 font-semibold transition-colors">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Org Ambassador Card */}
            <Card className="border-[#405862]/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full bg-white">
              <CardContent className="p-6 text-center flex flex-col flex-1 justify-between gap-6">
                <div>
                  <h3 className="font-bold text-lg text-[#405862] mb-3 font-bricolage">
                    Org Ambassador
                  </h3>
                  <p className="text-xs md:text-sm text-[#405862]/80 leading-relaxed">
                    Represent Dr. Interested in your community and help expand our impact worldwide.
                  </p>
                </div>
                <Link
                  href="https://forms.gle/89v6zXtrdfGvMUBJ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-[#405862] hover:bg-[#334852] text-white py-5 font-semibold transition-colors">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Podcast Team Card */}
            <Card className="border-[#405862]/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full bg-white">
              <CardContent className="p-6 text-center flex flex-col flex-1 justify-between gap-6">
                <div>
                  <h3 className="font-bold text-lg text-[#405862] mb-3 font-bricolage">
                    Podcast Team
                  </h3>
                  <p className="text-xs md:text-sm text-[#405862]/80 leading-relaxed">
                    Create engaging podcast content and amplify healthcare stories from around the world.
                  </p>
                </div>
                <Link
                  href="https://forms.gle/WX7P4Vypq4ZHMEEDA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-[#405862] hover:bg-[#334852] text-white py-5 font-semibold transition-colors">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

          </div>

          {/* Contact Support */}
          <div className="text-center mt-12">
            <p className="text-sm text-[#405862]/80">
              Have questions about joining our team?{" "}
              <Link
                href="mailto:hr@drinterested.org"
                className="text-[#4ecdc4] hover:text-[#405862] font-semibold transition-colors underline underline-offset-4"
              >
                Contact us at hr@drinterested.org
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
