"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase-client"
import { Loader2, Github, Linkedin, Instagram, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

type Member = {
  id: string
  name: string
  role: string
  department: string
  bio: string
  image: string
  socials: {
    github?: string
    linkedin?: string
    instagram?: string
  }
}

export default function DbMembersPage() {
  const [members, setMembers] = useState<Member[]>([])
  const [departments, setDepartments] = useState<string[]>([])
  const [currentDepartment, setCurrentDepartment] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchMembers() {
      try {
        const { data, error } = await supabase
          .from("members")
          .select("*")
          .eq("approved", true)
          .order("created_at", { ascending: true })

        if (error) throw error

        const fetchedMembers = data || []
        setMembers(fetchedMembers)
        
        const depts = ["All", ...Array.from(new Set(fetchedMembers.map((m: any) => m.department)))]
        setDepartments(depts)
      } catch (err: any) {
        console.error(err)
        setError("Failed to load members. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchMembers()
  }, [])

  const searchedMembers = members.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.role.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (m.bio && m.bio.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const filteredMembers = currentDepartment === "All"
    ? searchedMembers
    : searchedMembers.filter((m) => m.department === currentDepartment)

  const adminTeam = filteredMembers.filter((m) => m.department === "Admin Team")
  const hasValidImage = (img: string | undefined | null) => {
    if (!img) return false;
    if (img === '/logo.png' || img.includes('logo.png')) return false;
    return true;
  }

  // Helper to sort by image presence first, then by provided secondary sort
  const sortByImageThen = <T extends Member>(arr: T[], secondarySort: (a: T, b: T) => number): T[] => {
    return [...arr].sort((a, b) => {
      const aValid = hasValidImage(a.image);
      const bValid = hasValidImage(b.image);
      if (aValid && !bValid) return -1;
      if (!aValid && bValid) return 1;
      return secondarySort(a, b);
    });
  }

  const execDirector = sortByImageThen(adminTeam.filter(m => m.role === "Executive Director"), (a, b) => a.name.localeCompare(b.name))
  const deputyExecDirectors = sortByImageThen(adminTeam.filter(m => m.role === "Deputy Executive Director"), (a, b) => a.name.localeCompare(b.name))
  const execAssistants = sortByImageThen(adminTeam.filter(m => m.role === "Executive Assistant"), (a, b) => a.name.localeCompare(b.name))
  const otherAdmin = sortByImageThen(
    adminTeam.filter(m => !["Executive Director", "Deputy Executive Director", "Executive Assistant"].includes(m.role)),
    (a, b) => a.name.localeCompare(b.name)
  )

  const others = filteredMembers.filter((m) => m.department !== "Admin Team")

  const rolePriority: Record<string, number> = {
    "Director": 1,
    "Chair of the Medical Student Advisory Council": 1,
    "Deputy Director": 2,
    "Coordinator": 3,
    "Member of the Medical Student Advisory Council": 4,
    "Member of Podcast": 5,
    "Organizational Ambassador": 6
  }

  const getRoleRank = (role: string) => {
    const baseRole = role.split(" - ")[0]
    return rolePriority[baseRole] || 99
  }

  const sortedOthers = sortByImageThen(others, (a, b) => {
    const rankA = getRoleRank(a.role)
    const rankB = getRoleRank(b.role)
    if (rankA !== rankB) return rankA - rankB
    return a.name.localeCompare(b.name)
  })

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-gray-600">
        <Loader2 className="w-8 h-8 animate-spin mb-4 text-[#4CAF7D]" />
        <p>Loading members...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container max-w-6xl mx-auto py-12 px-4 text-center text-gray-500">
        {error}
      </div>
    )
  }

  return (
    <div className="container max-w-6xl mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold font-bricolage text-[#1a1a1a]">Our Members</h1>
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF7D] transition-all"
          />
          <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-8 border-b-2 border-gray-200">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => { setCurrentDepartment(dept); setSearchTerm("") }}
            className={`px-6 py-3 font-medium text-[0.95rem] border-b-4 transition-colors -mb-[2px] ${
              currentDepartment === dept
                ? "text-[#4CAF7D] border-[#4CAF7D]"
                : "text-gray-500 border-transparent hover:text-[#4CAF7D]"
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {filteredMembers.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          {searchTerm ? `No members found matching "${searchTerm}"` : "No members yet in this department."}
        </div>
      ) : (
        <div className="space-y-12">
          {/* Admin Team Section */}
          {(currentDepartment === "All" || currentDepartment === "Admin Team") && adminTeam.length > 0 && (
            <section className="mb-16">
              <h2 className="font-bricolage text-3xl font-bold mb-8 text-[#1a1a1a] text-center border-b-2 border-gray-100 pb-4">Admin Team</h2>
              
              <div className="space-y-12">
                {execDirector.length > 0 && (
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center text-[#405862]">Executive Director</h3>
                    <div className="flex justify-center">
                      <div className="w-full max-w-md">
                        {execDirector.map((member) => (
                          <MemberCard key={member.id} member={member} isFeatured />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {deputyExecDirectors.length > 0 && (
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center text-[#405862]">Deputy Executive Directors</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto gap-6">
                      {deputyExecDirectors.map((member) => (
                        <MemberCard key={member.id} member={member} isFeatured />
                      ))}
                    </div>
                  </div>
                )}

                {execAssistants.length > 0 && (
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center text-[#405862]">Executive Assistants</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {execAssistants.map((member) => (
                        <MemberCard key={member.id} member={member} isFeatured />
                      ))}
                    </div>
                  </div>
                )}

                {otherAdmin.length > 0 && (
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center text-[#405862]">Team</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {otherAdmin.map((member) => (
                        <MemberCard key={member.id} member={member} isFeatured />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Others Section */}
          {sortedOthers.length > 0 && (
            <section>
              {currentDepartment === "All" ? (
                <div className="space-y-16">
                  {departments.filter(d => d !== "All" && d !== "Admin Team").map(dept => {
                    const deptMembers = sortedOthers.filter(m => m.department === dept);
                    if (deptMembers.length === 0) return null;
                    return (
                      <div key={dept}>
                        <h2 className="font-bricolage text-2xl font-semibold mb-8 text-[#1a1a1a] border-b-2 border-gray-100 pb-3">{dept}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                          {deptMembers.map(member => <MemberCard key={member.id} member={member} />)}
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div>
                  <h2 className="font-bricolage text-2xl font-semibold mb-8 text-[#1a1a1a] border-b-2 border-gray-100 pb-3">{currentDepartment}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {sortedOthers.map((member) => (
                      <MemberCard key={member.id} member={member} />
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}
        </div>
      )}
    </div>
  )
}

function MemberCard({ member, isFeatured = false }: { member: Member; isFeatured?: boolean }) {
  const [isBioExpanded, setIsBioExpanded] = useState(false)
  const MAX_BIO_LENGTH = 150
  const needsExpansion = member.bio && member.bio.length > MAX_BIO_LENGTH

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#4CAF7D] hover:shadow-[0_8px_24px_rgba(76,175,125,0.12)] transition-all flex flex-col group">
      <div className="relative w-full h-[200px] bg-gray-100">
        <Image
          src={member.image?.startsWith('http') ? member.image : (member.image?.startsWith('/') ? member.image : `/${member.image || 'logo.png'}`)}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        {isFeatured && (
          <div className="mb-2">
            <span className="inline-block bg-[#4CAF7D] text-white px-3 py-1 rounded text-xs font-bold tracking-wide uppercase">
              {member.department === "Admin Team" ? "ADMIN TEAM" : "LEADERSHIP"}
            </span>
          </div>
        )}
        <h3 className="font-bricolage text-[1.1rem] font-semibold text-[#1a1a1a] mb-1">{member.name}</h3>
        <p className="text-[#4CAF7D] font-medium text-sm mb-3">{member.role}</p>
        
        <div className="flex-grow flex flex-col">
          <p className="text-gray-600 text-sm leading-relaxed mb-1">
            {isBioExpanded ? member.bio : (needsExpansion ? `${member.bio.slice(0, MAX_BIO_LENGTH)}...` : member.bio)}
          </p>
          {needsExpansion && (
            <button 
              onClick={() => setIsBioExpanded(!isBioExpanded)}
              className="text-[#4CAF7D] text-xs font-semibold hover:text-[#2d8659] flex items-center gap-1 transition-colors self-start mb-4 mt-1"
            >
              {isBioExpanded ? (
                <>Read Less <ChevronUp className="w-3 h-3" /></>
              ) : (
                <>Read More <ChevronDown className="w-3 h-3" /></>
              )}
            </button>
          )}
          {!needsExpansion && <div className="mb-4"></div>}
        </div>
        
        {/* Socials */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-gray-50">
          {member.socials?.github && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 text-[#4CAF7D] hover:bg-[#4CAF7D] hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {member.socials?.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 text-[#4CAF7D] hover:bg-[#4CAF7D] hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {member.socials?.instagram && (
            <a
              href={member.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 text-[#4CAF7D] hover:bg-[#4CAF7D] hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
