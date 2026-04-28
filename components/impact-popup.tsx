"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Globe, ChevronDown, ChevronUp, ExternalLink, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ImpactPopupProps {
  onClose?: () => void
}

export function ImpactPopup({ onClose }: ImpactPopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [language, setLanguage] = useState<"en" | "fr">("en")
  const [isNewsletterExpanded, setIsNewsletterExpanded] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      onClose?.()
    }, 300)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail("")

    // Auto close after success
    setTimeout(() => {
      handleClose()
    }, 2000)
  }

  const content = {
    en: {
      badge: "2025 Impact Released",
      title: "2025 Annual Impact Report",
      subtitle: "Celebrating Our Global Impact",
      description:
        "Discover how Dr. Interested has empowered 160,000+ youth across 106 countries to explore healthcare careers through mentorship, education, and community programs.",
      stats: [
        { number: "160K+", label: "Youth Impacted" },
        { number: "106", label: "Countries" },
        { number: "1.4K+", label: "Members" },
        { number: "3.7M+", label: "Impressions" },
      ],
      button: "View Full Report",
      newsletter: {
        title: "Stay Updated",
        subtitle: "Get the latest healthcare opportunities & insights",
        placeholder: "Enter your email address",
        button: "Subscribe Now",
        submitting: "Subscribing...",
        success: "Welcome to our community!",
      },
    },
    fr: {
      badge: "Impact 2025 Publié",
      title: "Rapport d'Impact Annuel 2025",
      subtitle: "Célébrer Notre Impact Global",
      description:
        "Découvrez comment Dr. Interested a autonomisé plus de 160 000 jeunes dans 106 pays à explorer les carrières en santé par le mentorat, l'éducation et les programmes communautaires.",
      stats: [
        { number: "160K+", label: "Jeunes Impactés" },
        { number: "106", label: "Pays" },
        { number: "1.4K+", label: "Membres" },
        { number: "3.7M+", label: "Impressions" },
      ],
      button: "Voir le Rapport Complet",
      newsletter: {
        title: "Restez Informé",
        subtitle: "Recevez les dernières opportunités et insights en santé",
        placeholder: "Entrez votre adresse e-mail",
        button: "S'abonner Maintenant",
        submitting: "Abonnement...",
        success: "Bienvenue dans notre communauté!",
      },
    },
  }

  const currentContent = content[language]

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Enhanced Backdrop */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-md"
        onClick={handleClose}
      />

      {/* Popup Container */}
      <div
        className={`relative transform transition-all duration-500 ease-out ${
          isVisible ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
        }`}
      >
        {/* Language Toggle - Floating */}
        <div className="absolute -top-16 right-0 z-10">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLanguage(language === "en" ? "fr" : "en")}
            className="bg-white/95 backdrop-blur-sm border-white/20 shadow-lg hover:bg-white hover:scale-105 transition-all duration-200"
          >
            <Globe className="h-3 w-3 mr-1.5" />
            <span className="font-medium">{language === "en" ? "FR" : "ENG"}</span>
          </Button>
        </div>

        {/* Main Card */}
        <Card className="w-full max-w-lg mx-auto overflow-hidden shadow-2xl border-0">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="absolute right-3 top-3 z-10 h-8 w-8 p-0 rounded-full bg-white/80 hover:bg-white/90 shadow-sm"
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Main Content - Enhanced Beige Section */}
          <CardContent className="p-0">
            <div className="bg-gradient-to-br from-[#f5f1eb] to-[#f0ebe3] p-8 pt-12 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4ecdc4]/10 rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#405862]/10 rounded-full translate-y-12 -translate-x-12" />

              <div className="relative z-10 text-center space-y-6">
                {/* Badge */}
                <div className="flex justify-center">
                  <Badge className="bg-[#4ecdc4] hover:bg-[#4ecdc4] text-white px-3 py-1 text-xs font-medium shadow-sm">
                    <Sparkles className="h-3 w-3 mr-1" />
                    {currentContent.badge}
                  </Badge>
                </div>

                {/* Title */}
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-[#405862] leading-tight">{currentContent.title}</h2>
                  <p className="text-sm font-medium text-[#405862]/70">{currentContent.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-sm text-[#405862]/80 leading-relaxed max-w-md mx-auto">
                  {currentContent.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 py-4">
                  {currentContent.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xl font-bold text-[#405862]">{stat.number}</div>
                      <div className="text-xs text-[#405862]/60 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  className="bg-gradient-to-r from-[#405862] to-[#4a6570] hover:from-[#4a6570] hover:to-[#405862] text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <a href="https://impact.drinterested.org/2025/annual" target="_blank" rel="noopener noreferrer">
                    {currentContent.button}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Newsletter Section - Enhanced Dark Section */}
            <div className="bg-gradient-to-br from-[#405862] to-[#4a6570] text-white relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-white/5 rounded-full -translate-y-10 -translate-x-10" />
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 translate-x-8" />

              {/* Toggle Button */}
              <button
                onClick={() => setIsNewsletterExpanded(!isNewsletterExpanded)}
                className="w-full p-5 flex items-center justify-between hover:bg-white/5 transition-all duration-200 relative z-10"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm">{currentContent.newsletter.title}</div>
                    <div className="text-xs opacity-80">{currentContent.newsletter.subtitle}</div>
                  </div>
                </div>
                <div className="p-1">
                  {isNewsletterExpanded ? (
                    <ChevronUp className="h-4 w-4 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                  )}
                </div>
              </button>

              {/* Newsletter Form */}
              {isNewsletterExpanded && (
                <div className="px-6 pb-6 relative z-10 animate-in slide-in-from-top-2 duration-300">
                  {isSubmitted ? (
                    <div className="text-center py-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mb-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      </div>
                      <div className="text-green-300 font-medium text-sm">{currentContent.newsletter.success}</div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="relative">
                        <Input
                          type="email"
                          placeholder={currentContent.newsletter.placeholder}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/15 focus:border-white/40 rounded-lg h-11"
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting || !email}
                        className="w-full bg-white text-[#405862] hover:bg-white/90 font-semibold rounded-lg h-11 disabled:opacity-50 transition-all duration-200"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-4 h-4 border-2 border-[#405862]/30 border-t-[#405862] rounded-full animate-spin" />
                            <span>{currentContent.newsletter.submitting}</span>
                          </div>
                        ) : (
                          currentContent.newsletter.button
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
