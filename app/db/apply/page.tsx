"use client"

import { useState } from "react"
import { supabase } from "@/lib/supaBaseclient"
import { Button } from "@/components/ui/button"

export default function DbApplyPage() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)
    
    const newMember = {
      name: formData.get("name") as string,
      role: formData.get("role") as string,
      department: formData.get("department") as string,
      bio: formData.get("bio") as string,
      image: (formData.get("image") as string).trim(),
      socials: {
        github: (formData.get("github") as string).trim() || null,
        linkedin: (formData.get("linkedin") as string).trim() || null,
        instagram: (formData.get("instagram") as string).trim() || null,
      },
      approved: false,
    }

    try {
      // Basic validation
      new URL(newMember.image)
      if (newMember.socials.github) new URL(newMember.socials.github)
      if (newMember.socials.linkedin) new URL(newMember.socials.linkedin)
      if (newMember.socials.instagram) new URL(newMember.socials.instagram)
      
      const { error } = await supabase.from("members").insert([newMember])

      if (error) throw error

      setMessage({ type: "success", text: "✓ Application submitted successfully! We'll review it soon." })
      ;(e.target as HTMLFormElement).reset()
    } catch (err: any) {
      console.error(err)
      setMessage({ type: "error", text: `Error: ${err.message || "Invalid input"}` })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container max-w-2xl py-12 mx-auto px-4">
      <h1 className="text-3xl font-bold font-bricolage mb-2 text-[#1a1a1a]">Apply to Join</h1>
      <p className="text-gray-600 mb-8">Help us build an interesting community. Tell us about yourself.</p>

      {message && (
        <div
          className={`p-4 rounded-lg mb-6 ${
            message.type === "success" ? "bg-[#e8f5e9] text-[#2e7d32] border border-[#81c784]" : "bg-[#ffebee] text-[#c62828] border border-[#ef5350]"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-medium mb-1 text-[#1a1a1a]">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF7D] focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label htmlFor="role" className="block font-medium mb-1 text-[#1a1a1a]">Role *</label>
          <input
            type="text"
            id="role"
            name="role"
            placeholder="e.g., Designer, Developer, Researcher"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF7D] focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label htmlFor="department" className="block font-medium mb-1 text-[#1a1a1a]">Department *</label>
          <select
            id="department"
            name="department"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF7D] focus:border-transparent transition-all bg-white"
          >
            <option value="">Select a department</option>
            <option value="Leadership">Leadership</option>
            <option value="Engineering">Engineering</option>
            <option value="Design">Design</option>
            <option value="Research">Research</option>
            <option value="Operations">Operations</option>
            <option value="Community">Community</option>
          </select>
        </div>

        <div>
          <label htmlFor="bio" className="block font-medium mb-1 text-[#1a1a1a]">Bio *</label>
          <textarea
            id="bio"
            name="bio"
            placeholder="Tell us about yourself, your interests, and what you'd like to contribute..."
            required
            className="w-full p-3 border border-gray-300 rounded-lg min-h-[100px] resize-y focus:outline-none focus:ring-2 focus:ring-[#4CAF7D] focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label htmlFor="image" className="block font-medium mb-1 text-[#1a1a1a]">Profile Image URL *</label>
          <input
            type="url"
            id="image"
            name="image"
            placeholder="https://example.com/image.jpg"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF7D] focus:border-transparent transition-all"
          />
        </div>

        <div className="space-y-4">
          <label className="block font-medium text-[#1a1a1a]">Social Links (optional)</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="github" className="block text-sm mb-1 text-gray-600">GitHub</label>
              <input
                type="url"
                id="github"
                name="github"
                placeholder="https://github.com/username"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF7D] focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label htmlFor="linkedin" className="block text-sm mb-1 text-gray-600">LinkedIn</label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                placeholder="https://linkedin.com/in/username"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF7D] focus:border-transparent transition-all"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="instagram" className="block text-sm mb-1 text-gray-600">Instagram</label>
              <input
                type="url"
                id="instagram"
                name="instagram"
                placeholder="https://instagram.com/username"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF7D] focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-[#4CAF7D] hover:bg-[#2d8659] text-white font-semibold text-lg rounded-lg transition-transform active:scale-95"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </div>
  )
}
