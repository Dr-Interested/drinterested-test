"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supaBaseclient"
import { Loader2 } from "lucide-react"

const ADMIN_PASSWORD = "Dr.Interested@0123.HaroonRyan!"

type Member = {
  id: string
  name: string
  role: string
  department: string
  bio: string
  image: string
  approved: boolean
  created_at: string
  socials: {
    github?: string
    linkedin?: string
    instagram?: string
  }
}

export default function DbAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [authError, setAuthError] = useState(false)

  const [members, setMembers] = useState<Member[]>([])
  const [activeTab, setActiveTab] = useState<"pending" | "approved">("pending")
  const [loading, setLoading] = useState(true)

  // Auth Effect
  useEffect(() => {
    const isAuth = sessionStorage.getItem("adminAuth") === "1"
    if (isAuth) setIsAuthenticated(true)
  }, [])

  // Data Fetching Effect
  useEffect(() => {
    if (!isAuthenticated) return

    fetchMembers()
  }, [isAuthenticated])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem("adminAuth", "1")
      setIsAuthenticated(true)
    } else {
      setAuthError(true)
      setPassword("")
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuth")
    setIsAuthenticated(false)
  }

  const fetchMembers = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from("members")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) throw error
      setMembers(data || [])
    } catch (err: any) {
      console.error(err)
      alert("Error loading members")
    } finally {
      setLoading(false)
    }
  }

  const handleApprove = async (id: string) => {
    try {
      const { error } = await supabase.from("members").update({ approved: true }).eq("id", id)
      if (error) throw error
      fetchMembers()
    } catch (error) {
      console.error(error)
      alert("Failed to approve.")
    }
  }

  const handleRejectOrRemove = async (id: string, isRemove = false) => {
    if (!confirm(isRemove ? "Are you sure you want to remove this approved member?" : "Are you sure you want to reject this pending application?")) return

    try {
      const { error } = await supabase.from("members").delete().eq("id", id)
      if (error) throw error
      fetchMembers()
    } catch (error) {
      console.error(error)
      alert("Failed to process request.")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl p-8 w-full max-w-sm shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
          <h2 className="text-2xl font-bold font-bricolage mb-6 text-[#1a1a1a]">Access Required</h2>
          
          {authError && (
            <p className="text-[#c62828] text-sm mb-4">Invalid password</p>
          )}

          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setAuthError(false)
              }}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF7D] mb-4"
              autoFocus
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#4CAF7D] hover:bg-[#2d8659] text-white font-semibold rounded-lg transition-colors"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    )
  }

  const pendingMembers = members.filter((m) => !m.approved)
  const approvedMembers = members.filter((m) => m.approved)
  const displayMembers = activeTab === "pending" ? pendingMembers : approvedMembers

  return (
    <div className="container max-w-6xl mx-auto py-12 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold font-bricolage text-[#1a1a1a]">Manage Members</h1>
        <button
          onClick={handleLogout}
          className="text-[#c62828] hover:text-[#a01a1a] font-medium transition-colors"
        >
          Logout Admin
        </button>
      </div>

      <div className="flex gap-4 border-b-2 border-gray-200 mb-8">
        <button
          onClick={() => setActiveTab("pending")}
          className={`flex items-center gap-2 px-6 py-3 font-medium text-[0.95rem] border-b-4 transition-colors -mb-[2px] ${
            activeTab === "pending"
              ? "text-[#4CAF7D] border-[#4CAF7D]"
              : "text-gray-500 border-transparent hover:text-[#4CAF7D]"
          }`}
        >
          Pending
          <span className="bg-[#4CAF7D] text-white px-2 py-0.5 rounded-full text-xs font-bold">
            {pendingMembers.length}
          </span>
        </button>
        <button
          onClick={() => setActiveTab("approved")}
          className={`flex items-center gap-2 px-6 py-3 font-medium text-[0.95rem] border-b-4 transition-colors -mb-[2px] ${
            activeTab === "approved"
              ? "text-[#4CAF7D] border-[#4CAF7D]"
              : "text-gray-500 border-transparent hover:text-[#4CAF7D]"
          }`}
        >
          Approved
          <span className="bg-[#4CAF7D] text-white px-2 py-0.5 rounded-full text-xs font-bold">
            {approvedMembers.length}
          </span>
        </button>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
          <Loader2 className="w-8 h-8 animate-spin mb-4 text-[#4CAF7D]" />
          <p>Loading members...</p>
        </div>
      ) : displayMembers.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          No {activeTab} members
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayMembers.map((member) => (
            <div key={member.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col">
              <img
                src={member.image || "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22280%22 height=%22200%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22280%22 height=%22200%22/%3E%3C/svg%3E"}
                alt={member.name}
                className="w-full h-[200px] object-cover bg-gray-100"
              />
              <div className="p-5 flex flex-col flex-grow">
                <div className="mb-3">
                  {member.approved ? (
                    <span className="inline-block bg-[#d4edda] text-[#155724] px-2 py-1 rounded text-xs font-bold">
                      APPROVED
                    </span>
                  ) : (
                    <span className="inline-block bg-[#fff3cd] text-[#856404] px-2 py-1 rounded text-xs font-bold">
                      PENDING
                    </span>
                  )}
                </div>

                <h3 className="font-bricolage text-[1.1rem] font-semibold text-[#1a1a1a] mb-1">{member.name}</h3>
                <p className="text-[#4CAF7D] font-medium text-sm mb-1">{member.role}</p>
                <p className="text-gray-400 text-xs mb-3">{member.department}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{member.bio}</p>

                <div className="text-xs text-gray-400 mb-4">
                  Applied {new Date(member.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </div>

                <div className="mt-auto flex gap-3 pt-4 border-t border-gray-50">
                  {!member.approved ? (
                    <>
                      <button
                        onClick={() => handleApprove(member.id)}
                        className="flex-1 py-2 bg-[#4CAF7D] hover:bg-[#2d8659] text-white text-sm font-semibold rounded transition-colors"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleRejectOrRemove(member.id, false)}
                        className="flex-1 py-2 bg-[#f5f5f5] hover:bg-[#ffebee] text-[#c62828] border border-gray-200 text-sm font-semibold rounded transition-colors"
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleRejectOrRemove(member.id, true)}
                      className="flex-1 py-2 bg-[#f5f5f5] hover:bg-[#ffebee] text-[#c62828] border border-gray-200 text-sm font-semibold rounded transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
