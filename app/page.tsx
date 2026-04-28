import type { Metadata } from "next"
import ClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Dr. Interested - Inspiring Future Healthcare Leaders",
  description:
    'Dr. Interested supports youth in finding their unique "spark" in medicine through programs & opportunities. Earn volunteer hours while building your future!',
}

export default function Page() {
  return <ClientPage />
}
