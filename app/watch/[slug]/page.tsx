"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import type { Webinar } from "@/data/webinars"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Pause, Volume2, VolumeX, Maximize, Calendar, Clock, Eye, ChevronRight } from "lucide-react"
import Script from "next/script"

interface WatchPageClientProps {
  webinar: Webinar
}

export default function WatchPageClient({ webinar }: WatchPageClientProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showControls, setShowControls] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateTime = () => setCurrentTime(video.currentTime)
    const updateDuration = () => setDuration(video.duration)

    video.addEventListener("timeupdate", updateTime)
    video.addEventListener("loadedmetadata", updateDuration)

    return () => {
      video.removeEventListener("timeupdate", updateTime)
      video.removeEventListener("loadedmetadata", updateDuration)
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoRef.current.requestFullscreen()
      }
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number.parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: webinar.title,
    description: webinar.description,
    thumbnailUrl: `https://www.drinterested.org${webinar.thumbnailPath}`,
    uploadDate: new Date(webinar.date).toISOString(),
    duration: `PT${webinar.duration.replace(":", "M")}S`,
    contentUrl: `https://www.drinterested.org${webinar.videoPath}`,
    embedUrl: `https://www.drinterested.org/watch/${webinar.slug}`,
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: { "@type": "WatchAction" },
      userInteractionCount: webinar.views,
    },
    publisher: {
      "@type": "Organization",
      name: "Dr. Interested",
      logo: {
        "@type": "ImageObject",
        url: "https://www.drinterested.org/logo.png",
      },
    },
  }

  return (
    <>
      <Script id="video-structured-data" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Video Player Section */}
        <div className="relative w-full bg-[#f5f1eb] pt-6 pb-8">
          <div className="container mx-auto max-w-7xl">
            <div
              className="relative aspect-video bg-[#405862] group rounded-lg overflow-hidden shadow-lg"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(isPlaying ? false : true)}
            >
              {/* Video Element */}
              <video
                ref={videoRef}
                className="w-full h-full"
                poster={webinar.thumbnailPath}
                onClick={togglePlay}
                playsInline
              >
                <source src={webinar.videoPath} type="video/mp4" />
                <track kind="captions" src={webinar.transcript} srcLang="en" label="English" />
                Your browser does not support the video tag.
              </video>

              {/* Custom Video Controls */}
              <div
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#405862]/95 to-transparent p-4 transition-opacity duration-300 ${
                  showControls ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Progress Bar */}
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1 mb-3 bg-white/30 rounded-lg appearance-none cursor-pointer accent-[#4ecdc4]"
                />

                {/* Control Buttons */}
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="hover:text-[#4ecdc4] transition-colors"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="hover:text-[#4ecdc4] transition-colors"
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
                    </button>
                    <span className="text-sm">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>
                  <button
                    onClick={toggleFullscreen}
                    className="hover:text-[#4ecdc4] transition-colors"
                    aria-label="Fullscreen"
                  >
                    <Maximize className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white">
          <div className="container mx-auto max-w-7xl py-8 px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-balance text-[#405862]">{webinar.title}</h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-[#405862]/70 mb-6">
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4 text-[#4ecdc4]" />
                    {webinar.views} views
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-[#4ecdc4]" />
                    {webinar.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-[#4ecdc4]" />
                    {webinar.duration}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {webinar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-[#4ecdc4]/20 text-[#405862] px-3 py-1 rounded-full font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <Card className="bg-[#f5f1eb]/50 border-[#405862]/10 mb-6">
                  <CardContent className="p-6">
                    <p className="text-[#405862] mb-4 leading-relaxed">{webinar.description}</p>
                    <p className="text-[#405862]/80 text-sm leading-relaxed">{webinar.longDescription}</p>
                    {webinar.speaker && (
                      <p className="text-[#405862]/80 text-sm mt-4">
                        <span className="text-[#405862] font-semibold">Speaker:</span> {webinar.speaker}
                      </p>
                    )}
                    {webinar.host && (
                      <p className="text-[#405862]/80 text-sm">
                        <span className="text-[#405862] font-semibold">Hosted by:</span> {webinar.host}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Watch on Other Platforms */}
                <Card className="bg-[#f5f1eb]/50 border-[#405862]/10 mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 text-[#405862]">Watch on Other Platforms</h3>
                    <div className="space-y-3">
                      <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white justify-start" size="lg">
                        <a href={webinar.youtubeUrl} target="_blank" rel="noopener noreferrer">
                          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                          Watch on YouTube
                        </a>
                      </Button>
                      {webinar.spotifyUrl && (
                        <Button
                          asChild
                          className="w-full bg-green-600 hover:bg-green-700 text-white justify-start"
                          size="lg"
                        >
                          <a href={webinar.spotifyUrl} target="_blank" rel="noopener noreferrer">
                            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                            </svg>
                            Listen on Spotify
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Back to Main Site */}
                <Card className="bg-[#f5f1eb]/50 border-[#405862]/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 text-[#405862]">Explore More</h3>
                    <div className="space-y-3">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full justify-start border-[#405862]/20 bg-white hover:bg-[#f5f1eb] text-[#405862] hover:text-[#405862]"
                        size="lg"
                      >
                        <Link href="/">
                          <ChevronRight className="h-5 w-5 mr-2 rotate-180" />
                          Dr. Interested Home
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full justify-start border-[#405862]/20 bg-white hover:bg-[#f5f1eb] text-[#405862] hover:text-[#405862]"
                        size="lg"
                      >
                        <Link href="/blog">
                          <ChevronRight className="h-5 w-5 mr-2 rotate-180" />
                          Read Our Blog
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full justify-start border-[#405862]/20 bg-white hover:bg-[#f5f1eb] text-[#405862] hover:text-[#405862]"
                        size="lg"
                      >
                        <Link href="/events">
                          <ChevronRight className="h-5 w-5 mr-2 rotate-180" />
                          View Events
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
