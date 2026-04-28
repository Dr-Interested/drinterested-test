"use client"

import Link from "next/link"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function JoinPage() {
  return (
    <section className="hero-section py-8 bg-white">
      <div className="container justify-center">
        {/* Tabs header */}
        <div className="flex justify-center  mt-4 mb-8">
          <Tabs value="join">
            <TabsList className="grid grid-cols-4 h-12 p-1 max-w-xl">
              <Link href="/members">
                <TabsTrigger value="leadership">Leadership</TabsTrigger>
              </Link>
              <Link href="/members">
                <TabsTrigger value="departments">Departments</TabsTrigger>
              </Link>
              <Link href="/members">
                <TabsTrigger value="advisors">Advisors</TabsTrigger>
              </Link>

              {/* Active Join tab */}
              <TabsTrigger
  value="join"
  className="
    bg-[#405862]
    text-[#F7F7F7]
    font-semibold
    px-6
    h-10
  "
>
  Join Us
</TabsTrigger>

            </TabsList>
          </Tabs>
        </div>

        {/* Join Content */}
        <div className="py-8 bg-[#f5f1eb]/50 rounded-lg text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4 text-[#405862]">
              Join Our Executive Team
            </h2>

            <p className="mb-6 text-[#405862]/90">
              Applications are open year-round and reviewed on an ongoing basis.
              We&apos;re looking for passionate, driven students to join our
              leadership team and help inspire the next generation of healthcare
              professionals.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Card className="border-[#405862]/20 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-[#405862] mb-3">
                    General Executive
                  </h3>
                  <p className="text-sm text-[#405862]/80 mb-4">
                    Join our core leadership team and help shape the future of
                    Dr. Interested.
                  </p>
                  <Link
                    href="https://forms.gle/e9etoCnFMPhgeujD9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-[#405862] hover:bg-[#334852] text-white">
                      Apply Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-[#405862]/20 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-[#405862] mb-3">
                    Org Ambassador
                  </h3>
                  <p className="text-sm text-[#405862]/80 mb-4">
                    Represent Dr. Interested in your community and help us grow
                    our reach.
                  </p>
                  <Link
                    href="https://forms.gle/89v6zXtrdfGvMUBJ8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-[#405862] hover:bg-[#334852] text-white">
                      Apply Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-[#405862]/20 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-[#405862] mb-3">
                    Podcast Team
                  </h3>
                  <p className="text-sm text-[#405862]/80 mb-4">
                    Help create engaging podcast content and share healthcare
                    stories.
                  </p>
                  <Link
                    href="https://forms.gle/WX7P4Vypq4ZHMEEDA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-[#405862] hover:bg-[#334852] text-white">
                      Apply Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <p className="text-sm text-[#405862]/80">
              Have questions about joining our team?{" "}
              <Link
                href="mailto:hr@drinterested.org"
                className="text-[#4ecdc4] hover:text-[#405862] font-medium transition-colors"
              >
                Contact us at hr@drinterested.org
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
