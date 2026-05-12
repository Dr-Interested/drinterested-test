"use client"

import HomePage from "./home-page"

export default function ClientPage({ recentPost }: { recentPost?: any }) {
  return <HomePage recentPost={recentPost} />
}