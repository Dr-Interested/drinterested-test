import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Deny /admin to everything — placed first so it is unambiguous
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard/"],
      },
      // ChatGPT and OpenAI crawlers
      {
        userAgent: ["ChatGPT-User", "GPTBot", "GPT-Actions", "OAI-SearchBot"],
        allow: "/",
        disallow: ["/dashboard/"],
      },
      // Major search engines
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "DuckDuckBot",
          "Yandex",
          "Slurp", // Yahoo
          "Baiduspider",
          "SeznamBot", // Seznam.cz
          "naverbot", // Naver
          "PetalBot", // Huawei Petal Search
        ],
        allow: "/",
        disallow: ["/dashboard/"],
      },
      // AI and assistant crawlers
      {
        userAgent: [
          "ClaudeBot",
          "Claude-SearchBot",
          "Claude-User",
          "PerplexityBot",
          "Perplexity-User",
          "DuckAssistBot",
          "ImagesiftBot",
          "meta-externalagent",
          "meta-externalfetcher",
        ],
        allow: "/",
        disallow: ["/dashboard/"],
      },
      // Social media crawlers
      {
        userAgent: [
          "FacebookExternalHit",
          "LinkedInBot",
          "Pinterest Bot",
          "Discord Bot",
          "MicrosoftPreview",
          "OpenGraphXYZBot",
        ],
        allow: "/",
        disallow: ["/dashboard/"],
      },
      // SEO and analytics tools
      {
        userAgent: [
          "AhrefsBot",
          "SemrushBot",
          "MJ12bot", // Majestic
          "DotBot", // Moz
          "DataForSeoBot",
          "ClarityBot", // seoClarity
          "ScreamingFrogBot",
          "Sitebulb",
          "ContentKingBot",
          "Lumar",
          "SeekportBot",
        ],
        allow: "/",
        disallow: ["/dashboard/"],
      },
      // Monitoring and uptime services
      {
        userAgent: [
          "Pingdom Bot",
          "Site24x7",
          "OhDearBot",
          "HetrixTools Uptime Monitoring Bot",
          "DigitalOceanUptimeBot",
          "Sentry Uptime Monitoring Bot",
          "SISTRIX Optimizer Uptime",
          "Hydrozen",
          "QA.tech",
          "Checkly",
          "NewRelic Minions",
          "Datadog Synthetic Monitoring Robot",
          "Amazon Route 53 Health Check Service",
        ],
        allow: "/",
        disallow: ["/dashboard/"],
      },
      // Feed readers and content services
      {
        userAgent: [
          "Feedfetcher", // Google News
          "Chrome Lighthouse",
          "Chrome Privacy Preserving Prefetch Proxy",
          "SemanticScholarBot",
          "Cotoyogi",
        ],
        allow: "/",
        disallow: ["/dashboard/"],
      },
      // Ad and marketing crawlers
      {
        userAgent: [
          "IASBot", // Integral Ad Science
          "CriteoBot",
          "ProximicBot",
          "PulsePoint Crawler",
          "GeedoProductSearchBot",
          "adsnaver", // Naver ads
          "naver-blueno", // Naver preview
        ],
        allow: "/",
        disallow: ["/dashboard/"],
      },
      // Security and compliance
      {
        userAgent: ["Detectify", "CookieScript", "Cookiebot", "SBIntuitionsBot"],
        allow: "/",
        disallow: ["/dashboard/"],
      },
      // Webhook and API services
      {
        userAgent: [
          "PayPal",
          "Stripe",
          "GitHub Hookshot",
          "GitHub Camo",
          "Facebook Webhooks",
          "Customer.io webhooks",
          "Sanity Webhook",
          "Razorpay-Webhook",
          "Inngest",
          "QStash",
          "Hookdeck",
        ],
        allow: "/",
        disallow: ["/dashboard/"],
      },
    ],
    sitemap: [
      "https://www.drinterested.org/sitemap.xml",
      "https://www.drinterested.org/rss.xml",
      "https://chess.drinterested.org/sitemap.xml",
    ],
  }
}
