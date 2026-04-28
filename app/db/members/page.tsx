"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supaBaseclient"
import { Loader2 } from "lucide-react"

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

  const filteredMembers = currentDepartment === "All"
    ? members
    : members.filter((m) => m.department === currentDepartment)

  const leadership = filteredMembers.filter((m) => m.department === "Leadership")
  const others = filteredMembers.filter((m) => m.department !== "Leadership")

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
      <h1 className="text-3xl font-bold font-bricolage mb-8 text-[#1a1a1a]">Our Members</h1>

      <div className="flex flex-wrap gap-4 mb-8 border-b-2 border-gray-200">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setCurrentDepartment(dept)}
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
        <div className="text-center py-12 text-gray-500">No members yet in this department.</div>
      ) : (
        <div className="space-y-12">
          {/* Leadership Section */}
          {(currentDepartment === "All" || currentDepartment === "Leadership") && leadership.length > 0 && (
            <section>
              <h2 className="font-bricolage text-xl font-semibold mb-6 text-[#1a1a1a]">Leadership</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {leadership.map((member) => (
                  <MemberCard key={member.id} member={member} isFeatured />
                ))}
              </div>
            </section>
          )}

          {/* Others Section */}
          {others.length > 0 && (
            <section>
              {currentDepartment === "All" && (
                <h2 className="font-bricolage text-xl font-semibold mb-6 text-[#1a1a1a]">Team</h2>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {others.map((member) => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  )
}

function MemberCard({ member, isFeatured = false }: { member: Member; isFeatured?: boolean }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#4CAF7D] hover:shadow-[0_8px_24px_rgba(76,175,125,0.12)] transition-all flex flex-col group">
      <img
        src={member.image || "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22280%22 height=%22200%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22280%22 height=%22200%22/%3E%3C/svg%3E"}
        alt={member.name}
        className="w-full h-[200px] object-cover bg-gray-100"
      />
      <div className="p-6 flex flex-col flex-grow">
        {isFeatured && (
          <div className="mb-2">
            <span className="inline-block bg-[#4CAF7D] text-white px-3 py-1 rounded text-xs font-bold tracking-wide">
              LEADERSHIP
            </span>
          </div>
        )}
        <h3 className="font-bricolage text-[1.1rem] font-semibold text-[#1a1a1a] mb-1">{member.name}</h3>
        <p className="text-[#4CAF7D] font-medium text-sm mb-3">{member.role}</p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-4">{member.bio}</p>
        
        {/* Socials */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-gray-50">
          {member.socials?.github && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 text-[#4CAF7D] hover:bg-[#4CAF7D] hover:text-white transition-colors text-xs font-bold"
            >
              GH
            </a>
          )}
          {member.socials?.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 text-[#4CAF7D] hover:bg-[#4CAF7D] hover:text-white transition-colors text-xs font-bold"
            >
              IN
            </a>
          )}
          {member.socials?.instagram && (
            <a
              href={member.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 text-[#4CAF7D] hover:bg-[#4CAF7D] hover:text-white transition-colors text-xs font-bold"
            >
              IG
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
