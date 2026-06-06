import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { member_name, action, description, duration_minutes } = body

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL

    if (!webhookUrl) {
      console.warn("DISCORD_WEBHOOK_URL is not configured in the environment variables.")
      return NextResponse.json({ success: true, message: "Webhook not configured, notification skipped." })
    }

    const isClockIn = action === "in"
    const embed = {
      title: isClockIn ? "🟢 Shift Started (Clock-In)" : "🔴 Shift Completed (Clock-Out)",
      description: `**${member_name}** has updated their shift status.`,
      color: isClockIn ? 3066993 : 15158332, // Green for In, Red/Orange for Out
      fields: [] as any[],
      timestamp: new Date().toISOString(),
      footer: {
        text: "Dr. Interested Punch Card System"
      }
    }

    if (description) {
      embed.fields.push({
        name: isClockIn ? "Shift Objectives / Notes" : "Work Done / Description",
        value: description,
        inline: false
      })
    }

    if (!isClockIn && duration_minutes !== undefined) {
      const hours = Math.floor(duration_minutes / 60)
      const minutes = duration_minutes % 60
      const durationStr = hours > 0 ? `${hours}h ${minutes}m` : `${minutes} mins`
      
      embed.fields.push({
        name: "Shift Duration",
        value: durationStr,
        inline: true
      })
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [embed]
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Failed to send timecard notification to Discord:", errorText)
      return NextResponse.json({ error: "Failed to send Discord notification" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error sending timecard Discord notification:", error)
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 })
  }
}
