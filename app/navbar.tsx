"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Instagram, Linkedin } from "lucide-react"
import DiscordIcon from "@/components/icons/discord-icon"

const routes = [
  { href: "/", label: "Home" },
  { href: "/our-work", label: "Our Work" },
  { href: "/events", label: "Events" },
  { href: "/members", label: "Members" },
  { href: "/sponsorships", label: "Sponsorships" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <div className="flex flex-col gap-4 py-4">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <Image src="/logo.png" alt="Dr. Interested Logo" width={100} height={100} />
                </Link>
                <nav className="flex flex-col gap-2">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center px-2 py-1.5 text-sm font-medium transition-colors hover:text-[#405862]",
                        pathname === route.href ? "text-[#405862] font-bold" : "text-muted-foreground",
                      )}
                    >
                      {pathname === route.href && <div className="w-1 h-4 bg-[#405862] mr-2 rounded-full"></div>}
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Dr. Interested Logo" width={40} height={40} className="hidden md:block" />
            <div className="font-semibold text-lg">
              <span className="text-[#405862]">Dr.</span> Interested
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#405862] relative py-1",
                pathname === route.href ? "text-[#405862] font-bold" : "text-muted-foreground",
              )}
            >
              {route.label}
              {pathname === route.href && (
                <span className="absolute -bottom-[5px] left-0 w-full h-0.5 bg-[#405862]"></span>
              )}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="https://forms.gle/i3Y6vazF5TErGBxG7"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex bg-[#405862] text-white hover:bg-[#334852] px-4 py-2 rounded-md text-sm font-medium transition-all hover:shadow-md"
          >
            Interested?
          </Link>
          <Link
            href="https://discord.gg/pzbGRgsGXY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#405862] hover:text-[#334852] transition-colors"
            aria-label="Discord"
          >
            <DiscordIcon className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.instagram.com/dr.interested/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#405862] hover:text-[#334852] transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/dr-interested"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#405862] hover:text-[#334852] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </header>
  )
}
