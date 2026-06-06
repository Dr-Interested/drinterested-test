import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL

    if (!webhookUrl) {
      console.warn("DISCORD_WEBHOOK_URL is not configured in the environment variables.")
      return NextResponse.json({ success: true, message: "Webhook not configured, notification skipped." })
    }

    const embed = {
      title: "✉️ New Contact Inquiry",
      description: `A visitor has submitted a message via the website contact form.`,
      color: 5158340, // Decimal for #4ECDC4
      fields: [
        {
          name: "Sender Name",
          value: name || "N/A",
          inline: true
        },
        {
          name: "Sender Email",
          value: email || "N/A",
          inline: true
        },
        {
          name: "Subject",
          value: subject || "N/A",
          inline: false
        },
        {
          name: "Message",
          value: message || "No message content.",
          inline: false
        }
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: "Dr. Interested Contact Service"
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
      console.error("Failed to send contact notification to Discord:", errorText)
      return NextResponse.json({ error: "Failed to send Discord notification" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error sending contact Discord notification:", error)
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 })
  }
}
