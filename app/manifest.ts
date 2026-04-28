import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Interested - Healthcare Education for High School Students",
    short_name: "Dr. Interested",
    description:
      "Empowering high school students to explore careers in healthcare through education, research, and mentorship. Join our community for volunteer hours and leadership opportunities!",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f1eb",
    theme_color: "#405862",
    orientation: "portrait-primary",
    categories: ["education", "health", "medical"],
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
