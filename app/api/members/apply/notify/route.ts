import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, discord_username, department, role, bio, image, socials } = body

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL

    if (!webhookUrl) {
      console.warn("DISCORD_WEBHOOK_URL is not configured in the environment variables.")
      return NextResponse.json({ success: true, message: "Webhook not configured, notification skipped." })
    }

    // Build the Discord embed structure
    const embed = {
      title: "📋 New Member Application",
      description: `A new application has been submitted and is pending review.`,
      color: 5025661, // Decimal for #4CAF7D
      thumbnail: image ? { url: image } : undefined,
      fields: [
        {
          name: "Full Name",
          value: name || "N/A",
          inline: true
        },
        {
          name: "Discord Username",
          value: discord_username ? `@${discord_username}` : "N/A",
          inline: true
        },
        {
          name: "Email Address",
          value: email || "N/A",
          inline: false
        },
        {
          name: "Department",
          value: department || "N/A",
          inline: true
        },
        {
          name: "Role",
          value: role || "N/A",
          inline: true
        },
        {
          name: "Bio",
          value: bio || "No bio provided.",
          inline: false
        }
      ] as any[],
      timestamp: new Date().toISOString(),
      footer: {
        text: "Dr. Interested Portal"
      }
    }

    // Add socials if present
    if (socials) {
      const socialLinks = []
      if (socials.github) socialLinks.push(`[GitHub](${socials.github})`)
      if (socials.linkedin) socialLinks.push(`[LinkedIn](${socials.linkedin})`)
      if (socials.instagram) socialLinks.push(`[Instagram](${socials.instagram})`)
      
      if (socialLinks.length > 0) {
        embed.fields.push({
          name: "Social Links",
          value: socialLinks.join(" | "),
          inline: false
        })
      }
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
      console.error("Failed to send notification to Discord:", errorText)
      return NextResponse.json({ error: "Failed to send Discord notification" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error sending Discord notification:", error)
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 })
  }
}
