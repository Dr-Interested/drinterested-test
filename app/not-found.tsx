import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-16 text-center">
      <Image src="/logo.png" alt="Dr. Interested Logo" width={150} height={150} className="mb-8" />
      <h1 className="text-4xl font-bold text-[#405862] mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-[#405862] mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button className="bg-[#405862] hover:bg-[#334852]" asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}
