"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, Globe, ChevronDown, ChevronUp } from "lucide-react"
import { departments, advisors, executiveDirector, deputyexecdir } from "@/data/members"
import ScrollToTop from "@/components/scroll-to-top"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MembersClient() {
  const [expandedBios, setExpandedBios] = useState<Record<string, boolean>>({})
  const [visibleMembers, setVisibleMembers] = useState<Record<string, boolean>>({})

  const params = useParams() // { tab: 'leadership' | 'departments' | 'advisors' | 'join' }
  const router = useRouter()

  // Ensure URL tab is valid, fallback to 'leadership'
  const validTabs = ["leadership", "departments", "advisors", "join"]
  const tabParam = Array.isArray(params?.tab) ? params.tab[0] : params?.tab
  const initialTab = validTabs.includes(tabParam || "") ? tabParam! : "leadership"

  const [activeTab, setActiveTab] = useState(initialTab)

  // Update URL when active tab changes
  useEffect(() => {
    if (activeTab !== initialTab) {
      router.replace(`/members/${activeTab}`)
    }
  }, [activeTab, initialTab, router])

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const toggleBio = (id: string) => {
    setExpandedBios((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const toggleMembers = (id: string) => {
    setVisibleMembers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const truncateBio = (bio: string, maxLength = 150) => {
    if (bio.length <= maxLength) return bio
    return bio.substring(0, maxLength) + "..."
  }

  return (
    <div>
      <ScrollToTop />
      <section className="bg-[#f5f1eb] py-10">
        <div className="container">
          <h1 className="text-3xl font-bold text-center mb-2 text-[#405862]">Our Team</h1>
          <p className="text-center text-[#405862] mb-6 max-w-2xl mx-auto text-sm">
            Meet the talented team behind Dr. Interested, dedicated to inspiring the next generation of healthcare
            professionals.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Centered Tabs */}
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 gap-2 h-12 p-1 max-w-xl">
                <TabsTrigger value="leadership">Leadership</TabsTrigger>
                <TabsTrigger value="departments">Departments</TabsTrigger>
                <TabsTrigger value="advisors">Advisors</TabsTrigger>
                <TabsTrigger
                  value="join"
                  className="bg-[#EDFAF9] text-[#405862] font-semibold px-6 h-10 border border-[#4ecdc4] hover:bg-[#D0F3F0]"
                >
                  Join Us
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Leadership */}
            <TabsContent value="leadership" className="space-y-6">
              {/* Executive Director */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-center text-[#405862]">Executive Director</h3>
                <div className="max-w-2xl mx-auto">
                  <Card className="overflow-hidden border-[#405862]/20 shadow-sm hover:shadow-md transition-shadow">
                    <div className="grid md:grid-cols-3">
                      <div className="md:col-span-1 bg-[#f5f1eb] flex items-center justify-center">
                        <div className="relative h-full w-full aspect-square">
                          <Image src="/adil.png" alt={executiveDirector.name} fill className="object-cover" />
                        </div>
                      </div>
                      <CardContent className="md:col-span-2 p-4">
                        <h4 className="text-lg font-semibold text-[#405862]">{executiveDirector.name}</h4>
                        <p className="text-sm text-[#405862]/75 mb-2">{executiveDirector.role}</p>
                        <p className="text-sm text-[#405862] mb-3">
                          {expandedBios[executiveDirector.id] ? executiveDirector.bio : truncateBio(executiveDirector.bio)}
                        </p>
                        <button
                          onClick={() => toggleBio(executiveDirector.id)}
                          className="text-[#405862] text-sm font-medium hover:text-[#4ecdc4] transition-colors mb-3 flex items-center"
                        >
                          {expandedBios[executiveDirector.id] ? (
                            <>
                              Show Less <ChevronUp className="h-4 w-4 ml-1" />
                            </>
                          ) : (
                            <>
                              See More <ChevronDown className="h-4 w-4 ml-1" />
                            </>
                          )}
                        </button>
                        <div className="flex space-x-3">
                          {executiveDirector.socialLinks?.linkedin && (
                            <Link
                              href={executiveDirector.socialLinks.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                            >
                              <Linkedin className="h-5 w-5" />
                            </Link>
                          )}
                          {executiveDirector.socialLinks?.instagram && (
                            <Link
                              href={executiveDirector.socialLinks.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                            >
                              <Instagram className="h-5 w-5" />
                            </Link>
                          )}
                          {executiveDirector.socialLinks?.website && (
                            <Link
                              href={executiveDirector.socialLinks.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                            >
                              <Globe className="h-5 w-5" />
                            </Link>
                          )}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Deputy Exec Directors */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-center text-[#405862]">Deputy Executive Directors</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {deputyexecdir.map((vp) => (
                    <Card key={vp.id} className="overflow-hidden border-[#405862]/20 shadow-sm hover:shadow-md transition-shadow">
                      <div className="grid md:grid-cols-3">
                        <div className="md:col-span-1 bg-[#f5f1eb] flex items-center justify-center">
                          <div className="relative h-full w-full aspect-square">
                            <Image src={vp.image || "/placeholder.svg"} alt={vp.name} fill className="object-cover" />
                          </div>
                        </div>
                        <CardContent className="md:col-span-2 p-4">
                          <h4 className="text-base font-semibold text-[#405862]">{vp.name}</h4>
                          <p className="text-sm text-[#405862]/75 mb-2">{vp.role}</p>
                          <p className="text-sm text-[#405862] mb-3">
                            {expandedBios[vp.id] ? vp.bio : truncateBio(vp.bio, 120)}
                          </p>
                          {vp.bio.length > 120 && (
                            <button
                              onClick={() => toggleBio(vp.id)}
                              className="text-[#405862] text-sm font-medium hover:text-[#4ecdc4] transition-colors mb-3 flex items-center"
                            >
                              {expandedBios[vp.id] ? (
                                <>
                                  Show Less <ChevronUp className="h-4 w-4 ml-1" />
                                </>
                              ) : (
                                <>
                                  See More <ChevronDown className="h-4 w-4 ml-1" />
                                </>
                              )}
                            </button>
                          )}
                          <div className="flex space-x-3">
                            {vp.socialLinks?.linkedin && (
                              <Link href={vp.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-5 w-5" />
                              </Link>
                            )}
                            {vp.socialLinks?.instagram && (
                              <Link href={vp.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                                <Instagram className="h-5 w-5" />
                              </Link>
                            )}
                            {vp.socialLinks?.website && (
                              <Link href={vp.socialLinks.website} target="_blank" rel="noopener noreferrer">
                                <Globe className="h-5 w-5" />
                              </Link>
                            )}
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="departments" className="space-y-6">
              {departments.map((department) => (
                <div
                  key={department.id}
                  className="border rounded-lg overflow-hidden bg-white border-[#405862]/20 shadow-sm mb-4"
                >
                  <div className="p-4 border-b bg-[#f5f1eb]/30">
                    <h3 className="text-lg font-semibold text-[#405862]">{department.name}</h3>
                    <p className="text-[#405862]/80 text-sm">{department.description}</p>
                  </div>

                  <div className="p-4 border-b">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-base font-semibold text-[#405862]">Director</h4>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      {Array.isArray(department.director) ? (
                        department.director.map((director) => (
                          <Card
                            key={director.id}
                            className="overflow-hidden border-[#405862]/20 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <div className="grid grid-cols-3">
                              <div className="col-span-1 bg-[#f5f1eb]">
                                <div className="relative h-full w-full aspect-square">
                                  <Image
                                    src={director.image || "/placeholder.svg"}
                                    alt={director.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              </div>
                              <CardContent className="col-span-2 p-3">
                                <h5 className="font-semibold text-sm text-[#405862]">{director.name}</h5>
                                <p className="text-xs text-[#405862]/75 mb-1">{director.role}</p>
                                <p className="text-xs text-[#405862] mb-1">
                                  {expandedBios[director.id] ? director.bio : truncateBio(director.bio, 80)}
                                </p>
                                {director.bio.length > 80 && (
                                  <button
                                    onClick={() => toggleBio(director.id)}
                                    className="text-[#405862] text-xs font-medium hover:text-[#4ecdc4] transition-colors mb-1 flex items-center"
                                  >
                                    {expandedBios[director.id] ? (
                                      <>
                                        Show Less <ChevronUp className="h-3 w-3 ml-1" />
                                      </>
                                    ) : (
                                      <>
                                        See More <ChevronDown className="h-3 w-3 ml-1" />
                                      </>
                                    )}
                                  </button>
                                )}
                                <div className="flex space-x-2">
                                  {director.socialLinks?.linkedin && (
                                    <Link
                                      href={director.socialLinks.linkedin}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                                    >
                                      <Linkedin className="h-4 w-4" />
                                    </Link>
                                  )}
                                  {director.socialLinks?.instagram && (
                                    <Link
                                      href={director.socialLinks.instagram}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                                    >
                                      <Instagram className="h-4 w-4" />
                                    </Link>
                                  )}
                                </div>
                              </CardContent>
                            </div>
                          </Card>
                        ))
                      ) : (
                        <Card className="overflow-hidden border-[#405862]/20 shadow-sm hover:shadow-md transition-shadow">
                          <div className="grid grid-cols-3">
                            <div className="col-span-1 bg-[#f5f1eb]">
                              <div className="relative h-full w-full aspect-square">
                                <Image
                                  src={department.director.image || "/placeholder.svg"}
                                  alt={department.director.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </div>
                            <CardContent className="col-span-2 p-3">
                              <h5 className="font-semibold text-sm text-[#405862]">{department.director.name}</h5>
                              <p className="text-xs text-[#405862]/75 mb-1">{department.director.role}</p>
                              <p className="text-xs text-[#405862] mb-1">
                                {expandedBios[department.director.id]
                                  ? department.director.bio
                                  : truncateBio(department.director.bio, 80)}
                              </p>
                              {department.director.bio.length > 80 && (
                                <button
                                  onClick={() => toggleBio(department.director.id)}
                                  className="text-[#405862] text-xs font-medium hover:text-[#4ecdc4] transition-colors mb-1 flex items-center"
                                >
                                  {expandedBios[department.director.id] ? (
                                    <>
                                      Show Less <ChevronUp className="h-3 w-3 ml-1" />
                                    </>
                                  ) : (
                                    <>
                                      See More <ChevronDown className="h-3 w-3 ml-1" />
                                    </>
                                  )}
                                </button>
                              )}
                              <div className="flex space-x-2">
                                {department.director.socialLinks?.linkedin && (
                                  <Link
                                    href={department.director.socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                                  >
                                    <Linkedin className="h-4 w-4" />
                                  </Link>
                                )}
                                {department.director.socialLinks?.instagram && (
                                  <Link
                                    href={department.director.socialLinks.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                                  >
                                    <Instagram className="h-4 w-4" />
                                  </Link>
                                )}
                              </div>
                            </CardContent>
                          </div>
                        </Card>
                      )}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-base font-semibold text-[#405862]">Members</h4>
                      <Button
                        onClick={() => toggleMembers(department.id)}
                        variant="outline"
                        size="sm"
                        className="text-xs h-8"
                      >
                        {!visibleMembers[department.id] ? "Show Members" : "Hide Members"}
                      </Button>
                    </div>

                    {visibleMembers[department.id] && (
                      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        {department.members.map((member) => (
                          <Card
                            key={member.id}
                            className="overflow-hidden border-[#405862]/20 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <CardContent className="p-3">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="relative h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                                  <Image
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <h5 className="font-semibold text-sm text-[#405862]">{member.name}</h5>
                                  <p className="text-xs text-[#405862]/75">{member.role}</p>
                                </div>
                              </div>
                              <p className="text-xs text-[#405862] mb-1">
                                {expandedBios[member.id] ? member.bio : truncateBio(member.bio, 60)}
                              </p>
                              {member.bio.length > 60 && (
                                <button
                                  onClick={() => toggleBio(member.id)}
                                  className="text-[#405862] text-xs font-medium hover:text-[#4ecdc4] transition-colors mb-1 flex items-center"
                                >
                                  {expandedBios[member.id] ? (
                                    <>
                                      Show Less <ChevronUp className="h-3 w-3 ml-1" />
                                    </>
                                  ) : (
                                    <>
                                      See More <ChevronDown className="h-3 w-3 ml-1" />
                                    </>
                                  )}
                                </button>
                              )}
                              <div className="flex space-x-2 mt-1">
                                {member.socialLinks?.linkedin && (
                                  <Link
                                    href={member.socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                                  >
                                    <Linkedin className="h-4 w-4" />
                                  </Link>
                                )}
                                {member.socialLinks?.instagram && (
                                  <Link
                                    href={member.socialLinks.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                                  >
                                    <Instagram className="h-4 w-4" />
                                  </Link>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div className="mt-8 p-6 bg-[#4ecdc4]/10 border border-[#4ecdc4]/30 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-[#405862] mb-2">Interested in Joining Our Team?</h3>
                <p className="text-[#405862]/80 mb-3">
                  Check out the <span className="font-semibold text-[#4ecdc4]">Join Us</span> tab above to learn about
                  executive opportunities and apply to join our leadership team!
                </p>
                <p className="text-sm text-[#405862]/70">
                  Applications are open year-round and reviewed on an ongoing basis.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="advisors" className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-center text-[#405862]">Medical Student Advisors</h3>
                <p className="text-center text-[#405862]/80 mb-6 max-w-2xl mx-auto text-sm">
                  Our medical student advisors provide valuable guidance and mentorship, helping bridge the gap between
                  high school and medical education.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {advisors.map((advisor) => (
                    <Card
                      key={advisor.id}
                      className="overflow-hidden border-[#405862]/20 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="bg-[#f5f1eb] flex items-center justify-center p-4">
                        <div className="relative h-32 w-32 rounded-full overflow-hidden">
                          <Image
                            src={advisor.image || "/placeholder.svg"}
                            alt={advisor.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h4 className="text-base font-semibold text-[#405862]">{advisor.name}</h4>
                        <p className="text-sm text-[#405862]/75 mb-2">{advisor.role}</p>
                        <p className="text-sm text-[#405862] mb-3">
                          {expandedBios[advisor.id] ? advisor.bio : truncateBio(advisor.bio, 120)}
                        </p>
                        {advisor.bio.length > 120 && (
                          <button
                            onClick={() => toggleBio(advisor.id)}
                            className="text-[#405862] text-sm font-medium hover:text-[#4ecdc4] transition-colors mb-3 flex items-center"
                          >
                            {expandedBios[advisor.id] ? (
                              <>
                                Show Less <ChevronUp className="h-4 w-4 ml-1" />
                              </>
                            ) : (
                              <>
                                See More <ChevronDown className="h-4 w-4 ml-1" />
                              </>
                            )}
                          </button>
                        )}
                        <div className="flex space-x-3">
                          {advisor.socialLinks?.linkedin && (
                            <Link
                              href={advisor.socialLinks.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                            >
                              <Linkedin className="h-5 w-5" />
                            </Link>
                          )}
                          {advisor.socialLinks?.instagram && (
                            <Link
                              href={advisor.socialLinks.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                            >
                              <Instagram className="h-5 w-5" />
                            </Link>
                          )}
                          {advisor.socialLinks?.website && (
                            <Link
                              href={advisor.socialLinks.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                            >
                              <Globe className="h-5 w-5" />
                            </Link>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="mt-8 p-6 bg-[#4ecdc4]/10 border border-[#4ecdc4]/30 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-[#405862] mb-2">Interested in Joining Our Team?</h3>
                <p className="text-[#405862]/80 mb-3">
                  Check out the <span className="font-semibold text-[#4ecdc4]">Join Us</span> tab above to learn about
                  executive opportunities and apply to join our leadership team!
                </p>
                <p className="text-sm text-[#405862]/70">
                  Applications are open year-round and reviewed on an ongoing basis.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="join" className="space-y-6">
              <div className="py-8 bg-[#f5f1eb]/50 rounded-lg text-center">
                <div className="max-w-3xl mx-auto px-4">
                  <h2 className="text-2xl font-bold mb-4 text-[#405862]">Join Our Executive Team</h2>
                  <p className="mb-6 text-[#405862]/90">
                    Applications are open year-round and reviewed on an ongoing basis. We're looking for passionate,
                    driven students to join our leadership team and help inspire the next generation of healthcare
                    professionals.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <Card className="border-[#405862]/20 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6 text-center">
                        <h3 className="font-semibold text-[#405862] mb-3">General Executive</h3>
                        <p className="text-sm text-[#405862]/80 mb-4">
                          Join our core leadership team and help shape the future of Dr. Interested.
                        </p>
                        <Link
                          href="https://forms.gle/e9etoCnFMPhgeujD9"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full bg-[#405862] hover:bg-[#334852] text-white">Apply Now</Button>
                        </Link>
                      </CardContent>
                    </Card>

                    <Card className="border-[#405862]/20 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6 text-center">
                        <h3 className="font-semibold text-[#405862] mb-3">Org Ambassador</h3>
                        <p className="text-sm text-[#405862]/80 mb-4">
                          Represent Dr. Interested in your community and help us grow our reach.
                        </p>
                        <Link href="https://forms.gle/H5jZkekPubdtwcTS6" target="_blank" rel="noopener noreferrer">
                          <Button className="w-full bg-[#405862] hover:bg-[#334852] text-white">Apply Now</Button>
                        </Link>
                      </CardContent>
                    </Card>

                    <Card className="border-[#405862]/20 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6 text-center">
                        <h3 className="font-semibold text-[#405862] mb-3">Podcast Team</h3>
                        <p className="text-sm text-[#405862]/80 mb-4">
                          Help create engaging podcast content and share healthcare stories.
                        </p>
                        <Link href="https://forms.gle/fH2equ2mCwDX9PpH6" target="_blank" rel="noopener noreferrer">
                          <Button className="w-full bg-[#405862] hover:bg-[#334852] text-white">Apply Now</Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="text-center">
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
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
