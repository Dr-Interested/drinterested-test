"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Instagram, Linkedin } from "lucide-react"

const routes = [
  { href: "/", label: "Home" },
  { href: "/our-work", label: "Our Work" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/members", label: "Members" },
  { href: "/sponsorships", label: "Sponsorships" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const sheetRef = useRef<HTMLDivElement>(null)

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sheetRef.current && !sheetRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === "/") return pathname === href
    return pathname === href || pathname?.startsWith(`${href}/`)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
        scrolled ? "bg-white/95 shadow-md py-1 border-b" : "bg-transparent py-3",
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] p-0" ref={sheetRef}>
              <SheetTitle className="sr-only">Main navigation</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="p-4 border-b flex items-center">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <Image
                      src="/circle-logo.png"
                      alt="Dr. Interested Logo"
                      width={40}
                      height={40}
                      className="rounded-full"
                      priority
                    />
                    <span className="font-semibold text-lg">
                      <span className="text-[#405862]">Dr.</span> Interested
                    </span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-1 p-4 flex-1 overflow-y-auto">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center px-3 py-3 text-sm font-medium transition-colors hover:text-[#405862] rounded-md",
                        isActive(route.href)
                          ? "text-[#405862] font-bold bg-[#f5f1eb]"
                          : "text-muted-foreground hover:bg-[#f5f1eb]/50",
                      )}
                    >
                      {isActive(route.href) && <div className="w-1 h-4 bg-[#4ecdc4] mr-2 rounded-full"></div>}
                      {route.label}
                    </Link>
                  ))}
                </nav>
                <div className="p-4 border-t mt-auto">
                  <Link
                    href="https://discord.gg/pzbGRgsGXY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full justify-center bg-[#405862] text-white hover:bg-[#334852] px-4 py-3 rounded-md text-sm font-medium transition-all hover:shadow-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Interested?
                  </Link>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <Link
                      href="https://discord.gg/pzbGRgsGXY"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                      aria-label="Discord"
                      onClick={() => setIsOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="9" cy="12" r="1" />
                        <circle cx="15" cy="12" r="1" />
                        <path d="M7.5 7.2c.3-.1.6-.2.8-.2h7.4c.2 0 .5.1.8.2M7.5 16.8c.3.1.6.2.8.2h7.4c.2 0 .5-.1.8-.2" />
                        <path d="M16 3h-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2H4a2 2 0 0 0-2 2v3a8 8 0 0 0 4 7v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a8 8 0 0 0 4-7V5a2 2 0 0 0-2-2z" />
                      </svg>
                    </Link>
                    <Link
                      href="https://www.instagram.com/dr.interested/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                      aria-label="Instagram"
                      onClick={() => setIsOpen(false)}
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/dr-interested"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                      aria-label="LinkedIn"
                      onClick={() => setIsOpen(false)}
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 md:w-9 md:h-9 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
              <Image src="/circle-logo.png" alt="Dr. Interested Logo" fill className="rounded-full" priority />
            </div>
            <div className="font-semibold text-base md:text-lg">
              <span className="text-[#405862]">Dr.</span>{" "}
              <span className="text-[#4ecdc4] group-hover:underline decoration-wavy decoration-[#4ecdc4] underline-offset-4 transition-all duration-300">
                Interested
              </span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#405862] relative py-1 px-2 rounded-md",
                isActive(route.href) ? "text-[#405862] font-bold" : "text-muted-foreground hover:bg-[#f5f1eb]/50",
              )}
            >
              {route.label}
              {isActive(route.href) && (
                <span className="absolute -bottom-[5px] left-0 w-full h-0.5 bg-[#4ecdc4] rounded-full"></span>
              )}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="https://discord.gg/pzbGRgsGXY"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex bg-[#405862] text-white hover:bg-[#334852] px-3 py-1.5 rounded-md text-sm font-medium transition-all hover:shadow-md hover:scale-105 duration-300"
          >
            Interested?
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="https://discord.gg/pzbGRgsGXY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#405862] hover:text-[#4ecdc4] transition-colors hover:scale-110 duration-200"
              aria-label="Discord"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="12" r="1" />
                <circle cx="15" cy="12" r="1" />
                <path d="M7.5 7.2c.3-.1.6-.2.8-.2h7.4c.2 0 .5.1.8.2M7.5 16.8c.3.1.6.2.8.2h7.4c.2 0 .5-.1.8-.2" />
                <path d="M16 3h-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2H4a2 2 0 0 0-2 2v3a8 8 0 0 0 4 7v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a8 8 0 0 0 4-7V5a2 2 0 0 0-2-2z" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/dr.interested/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#405862] hover:text-[#4ecdc4] transition-colors hover:scale-110 duration-200"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/dr-interested"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#405862] hover:text-[#4ecdc4] transition-colors hover:scale-110 duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
