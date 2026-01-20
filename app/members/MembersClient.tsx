"use client";

import { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Instagram,
  Linkedin,
  Globe,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  departments,
  advisors,
  executiveDirector,
  deputyexecdir,
  executiveAssistants,
  ambassadors,
} from "@/data/members";
import ScrollToTop from "@/components/scroll-to-top";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MembersClient() {
  const [expandedBios, setExpandedBios] = useState<Record<string, boolean>>({});
  const [scrolledDepartments, setScrolledDepartments] = useState<
    Record<string, boolean>
  >({});
  const coordinatorScrollPositions = useRef<Record<string, number>>({});
  const deputyScrollPositions = useRef<Record<string, number>>({});
  const scrollUnlockUntil = useRef<Record<string, number>>({});
  const scrollUnlockUsed = useRef<Record<string, boolean>>({});
  const departmentDirectors = departments.flatMap((department) =>
    Array.isArray(department.director)
      ? department.director
      : [department.director]
  );
  const ambassadorNames = ambassadors.map((ambassador) => ambassador.name);

  const params = useParams(); // { tab: 'leadership' | 'departments' | 'advisors' | 'join' }
  const router = useRouter();

  // Ensure URL tab is valid, fallback to 'leadership'
  const validTabs = ["leadership", "departments", "advisors", "join"];
  const tabParam = Array.isArray(params?.tab) ? params.tab[0] : params?.tab;
  const initialTab = validTabs.includes(tabParam || "")
    ? tabParam!
    : "leadership";

  const [activeTab, setActiveTab] = useState(initialTab);

  // Update URL when active tab changes
  useEffect(() => {
    if (activeTab !== initialTab) {
      router.replace(`/members/${activeTab}`);
    }
  }, [activeTab, initialTab, router]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (activeTab !== "departments" || typeof window === "undefined") {
      return;
    }

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey) return;
      const targets = Array.from(
        document.querySelectorAll<HTMLElement>("[data-scroll-lock]")
      );
      if (!targets.length) return;

      const pointerX = event.clientX;
      const pointerY = event.clientY;
      let activeTarget: HTMLElement | null = null;

      for (const target of targets) {
        const rect = target.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) continue;
        if (
          pointerX >= rect.left &&
          pointerX <= rect.right &&
          pointerY >= rect.top &&
          pointerY <= rect.bottom
        ) {
          activeTarget = target;
          break;
        }
      }

      if (!activeTarget) return;

      const maxScroll =
        activeTarget.scrollWidth - activeTarget.clientWidth;
      if (maxScroll <= 1) return;

      const lockKey =
        activeTarget.dataset.scrollLock || "scroll-lock-default";
      const delta =
        Math.abs(event.deltaY) > Math.abs(event.deltaX)
          ? event.deltaY
          : event.deltaX;

      if (delta === 0) return;

      const edgeThreshold = 16;
      const now = Date.now();
      const unlockUsed = scrollUnlockUsed.current[lockKey] || false;
      const canScrollLeft =
        activeTarget.scrollLeft > edgeThreshold;
      const canScrollRight =
        activeTarget.scrollLeft < maxScroll - edgeThreshold;

      const multiplier =
        event.deltaMode === 1
          ? 16
          : event.deltaMode === 2
            ? activeTarget.clientWidth
            : 1;
      const deltaPx = delta * multiplier;
      const next = Math.min(
        Math.max(0, activeTarget.scrollLeft + deltaPx),
        Math.max(0, maxScroll)
      );

      const canScroll =
        (delta < 0 && canScrollLeft) ||
        (delta > 0 && canScrollRight);

      if (canScroll) {
        if (event.cancelable) {
          event.preventDefault();
        }
        event.stopPropagation();
        activeTarget.scrollLeft = next;
        if (
          next > edgeThreshold &&
          next < maxScroll - edgeThreshold
        ) {
          scrollUnlockUsed.current[lockKey] = false;
        }
        return;
      }

      const atStart = activeTarget.scrollLeft <= edgeThreshold;
      const atEnd =
        activeTarget.scrollLeft >= maxScroll - edgeThreshold;
      if (!atStart && !atEnd) {
        scrollUnlockUsed.current[lockKey] = false;
      }

      const edgeActive =
        (delta > 0 && atEnd) || (delta < 0 && atStart);
      if (edgeActive && !unlockUsed) {
        scrollUnlockUsed.current[lockKey] = true;
        scrollUnlockUntil.current[lockKey] = now + 500;
      }

      if (edgeActive && now < (scrollUnlockUntil.current[lockKey] || 0)) {
        if (event.cancelable) {
          event.preventDefault();
        }
        event.stopPropagation();
        return;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeTab]);

  const toggleBio = (id: string) => {
    setExpandedBios((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const truncateBio = (bio: string, maxLength = 150) => {
    if (bio.length <= maxLength) return bio;
    return bio.substring(0, maxLength) + "...";
  };

  const markDepartmentComplete = useCallback((id: string) => {
    setScrolledDepartments((prev) =>
      prev[id] ? prev : { ...prev, [id]: true }
    );
  }, []);

  const CoordinatorScroller = ({
    departmentId,
    coordinators,
  }: {
    departmentId: string;
    coordinators: (typeof departments)[number]["coordinators"];
  }) => {
    const scrollerRef = useRef<HTMLDivElement | null>(null);
    const [scrollState, setScrollState] = useState({
      canLeft: false,
      canRight: false,
      hasOverflow: false,
    });
    const isComplete = scrolledDepartments[departmentId];
    const scrollPositions = coordinatorScrollPositions.current;

    const updateScrollState = useCallback(() => {
      const el = scrollerRef.current;
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const canLeft = el.scrollLeft > 0;
      const canRight = el.scrollLeft < maxScroll - 1;
      const hasOverflow = maxScroll > 1;
      setScrollState((prev) =>
        prev.canLeft === canLeft &&
        prev.canRight === canRight &&
        prev.hasOverflow === hasOverflow
          ? prev
          : { canLeft, canRight, hasOverflow }
      );
    }, []);

    const getScrollStep = useCallback(() => {
      const el = scrollerRef.current;
      if (!el) return 0;
      const track = el.querySelector<HTMLElement>("[data-scroll-track]");
      const item = el.querySelector<HTMLElement>("[data-scroll-item]");
      if (!track || !item) return el.clientWidth;
      const styles = getComputedStyle(track);
      const gapValue = parseFloat(styles.columnGap || styles.gap || "0");
      const itemWidth = item.getBoundingClientRect().width;
      const gap = Number.isNaN(gapValue) ? 0 : gapValue;
      return itemWidth + gap;
    }, []);

    const scrollByStep = (direction: "left" | "right") => {
      const el = scrollerRef.current;
      if (!el) return;
      const step = getScrollStep();
      if (step <= 0) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const next =
        direction === "left"
          ? Math.max(0, el.scrollLeft - step)
          : Math.min(maxScroll, el.scrollLeft + step);
      el.scrollTo({ left: next, behavior: "smooth" });
    };

    useLayoutEffect(() => {
      const el = scrollerRef.current;
      if (!el) return;
      const stored = scrollPositions[departmentId];
      if (typeof stored === "number") {
        el.scrollLeft = stored;
      }
      updateScrollState();
    }, [departmentId, coordinators.length, scrollPositions, updateScrollState]);

    useEffect(() => {
      const el = scrollerRef.current;
      if (!el) return;
      const onScroll = () => {
        scrollPositions[departmentId] = el.scrollLeft;
        const atEnd =
          el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
        if (!isComplete && atEnd) {
          markDepartmentComplete(departmentId);
        }
        updateScrollState();
      };

      onScroll();
      el.addEventListener("scroll", onScroll, { passive: true });
      const onResize = () => updateScrollState();
      const resizeObserver = new ResizeObserver(onResize);
      resizeObserver.observe(el);
      const track = el.querySelector<HTMLElement>("[data-scroll-track]");
      if (track) resizeObserver.observe(track);
      window.addEventListener("resize", onResize);
      return () => {
        el.removeEventListener("scroll", onScroll);
        resizeObserver.disconnect();
        window.removeEventListener("resize", onResize);
      };
    }, [
      departmentId,
      isComplete,
      scrollPositions,
      updateScrollState,
    ]);

    return (
      <div className="space-y-2">
        <div className="relative">
          {scrollState.hasOverflow && (
            <>
              <button
                type="button"
                onClick={() => scrollByStep("left")}
                disabled={!scrollState.canLeft}
                aria-label="Scroll coordinators left"
                className="absolute -left-2 md:-left-8 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-[#405862] transition hover:text-[#4ecdc4] disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronLeft className="h-6 w-6 scroll-arrow-left" />
              </button>
              <button
                type="button"
                onClick={() => scrollByStep("right")}
                disabled={!scrollState.canRight}
                aria-label="Scroll coordinators right"
                className="absolute -right-2 md:-right-8 top-1/2 z-10 flex h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center text-[#405862] transition hover:text-[#4ecdc4] disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronRight className="h-6 w-6 scroll-arrow-right" />
              </button>
            </>
          )}
          <div
            ref={scrollerRef}
            data-scroll-lock="coordinators"
            className="scrollbar-none overflow-x-auto overflow-y-hidden overscroll-x-contain"
          >
            <div
              className="flex gap-4 min-w-max pr-4"
              data-scroll-track
            >
              {coordinators.map((coordinator) => (
                <Card
                  key={coordinator.id}
                  data-scroll-item
                  className="w-64 shrink-0 border-[#405862]/20 shadow-sm"
                >
                  <CardContent className="p-4 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="relative h-14 w-14 rounded-full overflow-hidden bg-[#f1ece7]">
                        <Image
                          src={coordinator.image || "/placeholder.svg"}
                          alt={coordinator.name}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                    <h5 className="text-sm md:text-base font-semibold text-[#405862] leading-snug break-words mb-2">
                      {coordinator.name}
                    </h5>
                    {(coordinator.socialLinks?.linkedin ||
                      coordinator.socialLinks?.instagram ||
                      coordinator.socialLinks?.website) && (
                      <div className="flex items-center justify-center gap-3 mb-2">
                        {coordinator.socialLinks?.linkedin && (
                          <Link
                            href={coordinator.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                          >
                            <Linkedin className="h-4 w-4" />
                          </Link>
                        )}
                        {coordinator.socialLinks?.instagram && (
                          <Link
                            href={coordinator.socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                          >
                            <Instagram className="h-4 w-4" />
                          </Link>
                        )}
                        {coordinator.socialLinks?.website && (
                          <Link
                            href={coordinator.socialLinks.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                          >
                            <Globe className="h-4 w-4" />
                          </Link>
                        )}
                      </div>
                    )}
                    <p className="text-xs md:text-sm leading-relaxed text-[#405862]/80">
                      {expandedBios[coordinator.id]
                        ? coordinator.bio
                        : truncateBio(coordinator.bio, 120)}
                    </p>
                    {coordinator.bio.length > 120 && (
                      <button
                        onClick={() => toggleBio(coordinator.id)}
                        className="text-[#405862] text-xs md:text-sm font-medium hover:text-[#4ecdc4] transition-colors mt-2 flex items-center justify-center"
                      >
                        {expandedBios[coordinator.id] ? (
                          <>
                            Show Less <ChevronUp className="h-3 w-3 ml-1" />
                          </>
                        ) : (
                          <>
                            See More <ChevronDown className="h-3 w-3 ml-1" />
                          </>
                        )}
                      </button>
                    )}
                  </CardContent>
                </Card>
              ))}
              <div aria-hidden="true" className="w-4 shrink-0" />
            </div>
          </div>
        </div>
        {!isComplete && (
          <p className="text-xs text-[#405862]/70 text-center">
          </p>
        )}
      </div>
    );
  };

  const renderDeputy = (
    deputy: NonNullable<(typeof departments)[number]["deputyDirectors"]>[number]
  ) => {
    const showToggle = deputy.bio.length > 180;
    const clampStyle = expandedBios[deputy.id]
      ? undefined
      : {
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical" as const,
          overflow: "hidden",
        };
    return (
      <div
        key={deputy.id}
        className="w-full flex flex-col md:flex-row md:items-start md:justify-between gap-4"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 flex-1">
          <div className="relative h-24 w-24 rounded-full overflow-hidden bg-white shrink-0">
            <Image
              src={deputy.image || "/placeholder.svg"}
              alt={deputy.name}
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="text-center sm:text-left">
            <h5 className="text-lg font-semibold text-[#405862] leading-snug break-words">
              {deputy.name}
            </h5>
            <p className="text-sm md:text-base text-[#405862]/75 break-words">
              {deputy.role}
            </p>
            <p
              className="text-sm md:text-base leading-relaxed text-[#405862] mt-2"
              style={clampStyle}
            >
              {deputy.bio}
            </p>
            {showToggle && (
              <button
                onClick={() => toggleBio(deputy.id)}
                className="text-[#405862] text-xs md:text-sm font-medium hover:text-[#4ecdc4] transition-colors mt-2 flex items-center"
              >
                {expandedBios[deputy.id] ? (
                  <>
                    Show Less <ChevronUp className="h-3 w-3 ml-1" />
                  </>
                ) : (
                  <>
                    See More <ChevronDown className="h-3 w-3 ml-1" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end md:mt-1 gap-2 shrink-0">
          {deputy.socialLinks?.linkedin && (
            <Link
              href={deputy.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          )}
          {deputy.socialLinks?.instagram && (
            <Link
              href={deputy.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>
    );
  };

  const DeputyScroller = ({
    departmentId,
    deputies,
  }: {
    departmentId: string;
    deputies: NonNullable<(typeof departments)[number]["deputyDirectors"]>;
  }) => {
    const scrollerRef = useRef<HTMLDivElement | null>(null);
    const [scrollState, setScrollState] = useState({
      canLeft: false,
      canRight: false,
      hasOverflow: false,
    });
    const scrollPositions = deputyScrollPositions.current;

    const updateScrollState = useCallback(() => {
      const el = scrollerRef.current;
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const canLeft = el.scrollLeft > 0;
      const canRight = el.scrollLeft < maxScroll - 1;
      const hasOverflow = maxScroll > 1;
      setScrollState((prev) =>
        prev.canLeft === canLeft &&
        prev.canRight === canRight &&
        prev.hasOverflow === hasOverflow
          ? prev
          : { canLeft, canRight, hasOverflow }
      );
    }, []);

    const getScrollStep = useCallback(() => {
      const el = scrollerRef.current;
      if (!el) return 0;
      const track = el.querySelector<HTMLElement>("[data-scroll-track]");
      const item = el.querySelector<HTMLElement>("[data-scroll-item]");
      if (!track || !item) return el.clientWidth;
      const styles = getComputedStyle(track);
      const gapValue = parseFloat(styles.columnGap || styles.gap || "0");
      const itemWidth = item.getBoundingClientRect().width;
      const gap = Number.isNaN(gapValue) ? 0 : gapValue;
      return itemWidth + gap;
    }, []);

    const scrollByStep = (direction: "left" | "right") => {
      const el = scrollerRef.current;
      if (!el) return;
      const step = getScrollStep();
      if (step <= 0) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const next =
        direction === "left"
          ? Math.max(0, el.scrollLeft - step)
          : Math.min(maxScroll, el.scrollLeft + step);
      el.scrollTo({ left: next, behavior: "smooth" });
    };

    useLayoutEffect(() => {
      const el = scrollerRef.current;
      if (!el) return;
      const stored = scrollPositions[departmentId];
      if (typeof stored === "number") {
        el.scrollLeft = stored;
      }
      updateScrollState();
    }, [departmentId, deputies.length, scrollPositions, updateScrollState]);

    useEffect(() => {
      const el = scrollerRef.current;
      if (!el) return;
      const onScroll = () => {
        scrollPositions[departmentId] = el.scrollLeft;
        updateScrollState();
      };
      onScroll();
      el.addEventListener("scroll", onScroll, { passive: true });
      const onResize = () => updateScrollState();
      const resizeObserver = new ResizeObserver(onResize);
      resizeObserver.observe(el);
      const track = el.querySelector<HTMLElement>("[data-scroll-track]");
      if (track) resizeObserver.observe(track);
      window.addEventListener("resize", onResize);
      return () => {
        el.removeEventListener("scroll", onScroll);
        resizeObserver.disconnect();
        window.removeEventListener("resize", onResize);
      };
    }, [departmentId, scrollPositions, updateScrollState]);

    if (deputies.length <= 1) {
      return (
        <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
          {deputies.map((deputy) => renderDeputy(deputy))}
        </div>
      );
    }

    return (
      <div className="relative max-w-5xl mx-auto">
        {scrollState.hasOverflow && (
          <>
            <button
              type="button"
              onClick={() => scrollByStep("left")}
              disabled={!scrollState.canLeft}
              aria-label="Scroll deputy directors left"
              className="absolute -left-2 md:-left-8 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-[#405862] transition hover:text-[#4ecdc4] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft className="h-6 w-6 scroll-arrow-left" />
            </button>
            <button
              type="button"
              onClick={() => scrollByStep("right")}
              disabled={!scrollState.canRight}
              aria-label="Scroll deputy directors right"
              className="absolute -right-2 md:-right-8 top-1/2 z-10 flex h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center text-[#405862] transition hover:text-[#4ecdc4] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight className="h-6 w-6 scroll-arrow-right" />
            </button>
          </>
        )}
        <div
          ref={scrollerRef}
          data-scroll-lock="deputies"
          className="scrollbar-none overflow-x-auto overflow-y-hidden overscroll-x-contain pb-7"
        >
          <div className="flex gap-10 min-w-max pr-4" data-scroll-track>
            {deputies.map((deputy) => (
              <div
                key={deputy.id}
                data-scroll-item
                className="w-[80vw] max-w-[520px] shrink-0"
              >
                {renderDeputy(deputy)}
              </div>
            ))}
            <div aria-hidden="true" className="w-4 shrink-0" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="overflow-x-hidden">
      <ScrollToTop />
      <section className="hero-section py-8 md:py-10 bg-[#f5f1eb]">
        <div className="container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-[#405862]">
            Our Team
          </h1>
          <p className="text-center text-base md:text-lg mb-4 max-w-2xl mx-auto text-[#405862]/80">
            Meet the talented team behind Dr. Interested, dedicated to inspiring
            the next generation of healthcare professionals.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            {/* Centered Tabs */}
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 gap-2 h-12 p-1 max-w-xl">
                <TabsTrigger value="leadership">Leadership</TabsTrigger>
                <TabsTrigger value="departments">Departments</TabsTrigger>
                <TabsTrigger value="advisors">Advisors</TabsTrigger>
                <TabsTrigger
                  value="join"
                  className="bg-[#EDFAF9] text-[#405862] font-semibold px-6 h-10 border border-[#4ecdc4] hover:bg-[#D0F3F0] keep-light-theme"
                >
                  Join Us
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Leadership */}
            <TabsContent value="leadership" className="space-y-6">
              {/* Executive Director */}
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center text-[#405862]">
                  Executive Director
                </h3>
                <div className="max-w-2xl mx-auto">
                  <Card className="overflow-hidden border-[#405862]/20 shadow-sm hover:shadow-md transition-shadow">
                    <div className="grid md:grid-cols-3">
                      <div className="md:col-span-1 bg-[#f5f1eb] flex items-center justify-center">
                        <div className="relative h-full w-full aspect-square">
                          <Image
                            src="/adil.png"
                            alt={executiveDirector.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <CardContent className="md:col-span-2 p-4">
                        <h4 className="text-xl font-semibold text-[#405862]">
                          {executiveDirector.name}
                        </h4>
                        <p className="text-sm md:text-base text-[#405862]/75 mb-2">
                          {executiveDirector.role}
                        </p>
                        <p className="text-sm md:text-base leading-relaxed text-[#405862] mb-3">
                          {expandedBios[executiveDirector.id]
                            ? executiveDirector.bio
                            : truncateBio(executiveDirector.bio)}
                        </p>
                        <button
                          onClick={() => toggleBio(executiveDirector.id)}
                          className="text-[#405862] text-sm font-medium hover:text-[#4ecdc4] transition-colors mb-3 flex items-center"
                        >
                          {expandedBios[executiveDirector.id] ? (
                            <>
                              Show Less <ChevronUp className="h-4 w-4 ml-1" />
                            </>
                          ) : (
                            <>
                              See More <ChevronDown className="h-4 w-4 ml-1" />
                            </>
                          )}
                        </button>
                        <div className="flex space-x-3">
                          {executiveDirector.socialLinks?.linkedin && (
                            <Link
                              href={executiveDirector.socialLinks.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                            >
                              <Linkedin className="h-5 w-5" />
                            </Link>
                          )}
                          {executiveDirector.socialLinks?.instagram && (
                            <Link
                              href={executiveDirector.socialLinks.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                            >
                              <Instagram className="h-5 w-5" />
                            </Link>
                          )}
                          {executiveDirector.socialLinks?.website && (
                            <Link
                              href={executiveDirector.socialLinks.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                            >
                              <Globe className="h-5 w-5" />
                            </Link>
                          )}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Deputy Exec Directors */}
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center text-[#405862]">
                  Deputy Executive Directors
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {deputyexecdir.map((vp) => (
                    <Card
                      key={vp.id}
                      className="overflow-hidden border-[#405862]/20 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="grid md:grid-cols-3">
                        <div className="md:col-span-1 bg-[#f5f1eb] flex items-center justify-center">
                          <div className="relative h-full w-full aspect-square">
                            <Image
                              src={vp.image || "/placeholder.svg"}
                              alt={vp.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <CardContent className="md:col-span-2 p-4">
                          <h4 className="text-lg font-semibold text-[#405862]">
                            {vp.name}
                          </h4>
                          <p className="text-sm md:text-base text-[#405862]/75 mb-2">
                            {vp.role}
                          </p>
                          <p className="text-sm md:text-base leading-relaxed text-[#405862] mb-3">
                            {expandedBios[vp.id]
                              ? vp.bio
                              : truncateBio(vp.bio, 120)}
                          </p>
                          {vp.bio.length > 120 && (
                            <button
                              onClick={() => toggleBio(vp.id)}
                              className="text-[#405862] text-sm font-medium hover:text-[#4ecdc4] transition-colors mb-3 flex items-center"
                            >
                              {expandedBios[vp.id] ? (
                                <>
                                  Show Less{" "}
                                  <ChevronUp className="h-4 w-4 ml-1" />
                                </>
                              ) : (
                                <>
                                  See More{" "}
                                  <ChevronDown className="h-4 w-4 ml-1" />
                                </>
                              )}
                            </button>
                          )}
                          <div className="flex space-x-3">
                            {vp.socialLinks?.linkedin && (
                              <Link
                                href={vp.socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Linkedin className="h-5 w-5" />
                              </Link>
                            )}
                            {vp.socialLinks?.instagram && (
                              <Link
                                href={vp.socialLinks.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Instagram className="h-5 w-5" />
                              </Link>
                            )}
                            {vp.socialLinks?.website && (
                              <Link
                                href={vp.socialLinks.website}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Globe className="h-5 w-5" />
                              </Link>
                            )}
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Executive Assistants */}
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center text-[#405862]">
                  Executive Assistants
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {executiveAssistants.map((assistant) => (
                    <Card
                      key={assistant.id}
                      className="overflow-hidden border-[#405862]/20 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="grid md:grid-cols-3">
                        <div className="md:col-span-1 bg-[#f5f1eb] flex items-center justify-center">
                          <div className="relative h-full w-full aspect-square">
                            <Image
                              src={assistant.image || "/placeholder.svg"}
                              alt={assistant.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <CardContent className="md:col-span-2 p-4">
                          <h4 className="text-lg font-semibold text-[#405862]">
                            {assistant.name}
                          </h4>
                          <p className="text-sm md:text-base text-[#405862]/75 mb-2">
                            {assistant.role}
                          </p>
                          <p className="text-sm md:text-base leading-relaxed text-[#405862] mb-3">
                            {expandedBios[assistant.id]
                              ? assistant.bio
                              : truncateBio(assistant.bio, 100)}
                          </p>
                          {assistant.bio.length > 100 && (
                            <button
                              onClick={() => toggleBio(assistant.id)}
                              className="text-[#405862] text-sm font-medium hover:text-[#4ecdc4] transition-colors mb-3 flex items-center"
                            >
                              {expandedBios[assistant.id] ? (
                                <>
                                  Show Less{" "}
                                  <ChevronUp className="h-4 w-4 ml-1" />
                                </>
                              ) : (
                                <>
                                  See More{" "}
                                  <ChevronDown className="h-4 w-4 ml-1" />
                                </>
                              )}
                            </button>
                          )}
                          {(assistant.socialLinks?.linkedin ||
                            assistant.socialLinks?.instagram ||
                            assistant.socialLinks?.website) && (
                            <div className="flex space-x-3 mt-2">
                              {assistant.socialLinks?.linkedin && (
                                <Link
                                  href={assistant.socialLinks.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                                >
                                  <Linkedin className="h-5 w-5" />
                                </Link>
                              )}
                              {assistant.socialLinks?.instagram && (
                                <Link
                                  href={assistant.socialLinks.instagram}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                                >
                                  <Instagram className="h-5 w-5" />
                                </Link>
                              )}
                              {assistant.socialLinks?.website && (
                                <Link
                                  href={assistant.socialLinks.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                                >
                                  <Globe className="h-5 w-5" />
                                </Link>
                              )}
                            </div>
                          )}
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Directors */}
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center text-[#405862]">
                  Directors
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {departmentDirectors.map((director) => {
                    const showToggle = director.bio.length > 180;
                    const clampStyle = expandedBios[director.id]
                      ? undefined
                      : {
                          display: "-webkit-box",
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: "vertical" as const,
                          overflow: "hidden",
                        };
                    return (
                      <Card
                        key={director.id}
                        className="overflow-hidden border-[#405862]/20 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="grid md:grid-cols-3">
                          <div className="md:col-span-1 bg-[#f5f1eb] flex">
                            <div className="relative w-full aspect-square md:aspect-auto md:h-full">
                              <Image
                                src={director.image || "/placeholder.svg"}
                                alt={director.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <CardContent className="md:col-span-2 p-4 min-w-0">
                            <h4 className="text-base md:text-lg font-semibold text-[#405862] leading-snug break-words">
                              {director.name}
                            </h4>
                            <p className="text-sm md:text-base text-[#405862]/75 mb-2 break-words">
                              {director.role}
                            </p>
                            <p
                              className="text-sm md:text-base leading-relaxed text-[#405862] mb-3"
                              style={clampStyle}
                            >
                              {director.bio}
                            </p>
                            {showToggle && (
                              <button
                                onClick={() => toggleBio(director.id)}
                                className="text-[#405862] text-sm font-medium hover:text-[#4ecdc4] transition-colors mb-3 flex items-center"
                              >
                                {expandedBios[director.id] ? (
                                  <>
                                    Show Less{" "}
                                    <ChevronUp className="h-4 w-4 ml-1" />
                                  </>
                                ) : (
                                  <>
                                    See More{" "}
                                    <ChevronDown className="h-4 w-4 ml-1" />
                                  </>
                                )}
                              </button>
                            )}
                            {(director.socialLinks?.linkedin ||
                              director.socialLinks?.instagram ||
                              director.socialLinks?.website) && (
                              <div className="flex space-x-3 mt-2">
                                {director.socialLinks?.linkedin && (
                                  <Link
                                    href={director.socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                                  >
                                    <Linkedin className="h-5 w-5" />
                                  </Link>
                                )}
                                {director.socialLinks?.instagram && (
                                  <Link
                                    href={director.socialLinks.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                                  >
                                    <Instagram className="h-5 w-5" />
                                  </Link>
                                )}
                                {director.socialLinks?.website && (
                                  <Link
                                    href={director.socialLinks.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                                  >
                                    <Globe className="h-5 w-5" />
                                  </Link>
                                )}
                              </div>
                            )}
                          </CardContent>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="departments" className="space-y-8">
              {departments.map((department) => {
                const directorList = Array.isArray(department.director)
                  ? department.director
                  : [department.director];

                return (
                  <section key={department.id} className="space-y-6">
                    <div className="full-bleed w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#4ecdc4] py-4 md:py-5">
                      <div className="container text-center">
                        <h3 className="text-xl md:text-2xl font-semibold text-white">
                          {department.name}
                        </h3>
                        <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto">
                          {department.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex flex-col items-center gap-6 max-w-5xl mx-auto">
                          {directorList.map((director) => {
                            const showToggle = director.bio.length > 180;
                            const clampStyle = expandedBios[director.id]
                              ? undefined
                              : {
                                  display: "-webkit-box",
                                  WebkitLineClamp: 4,
                                  WebkitBoxOrient: "vertical" as const,
                                  overflow: "hidden",
                                };
                            return (
                              <div
                                key={director.id}
                                className="w-full flex flex-col items-center text-center gap-5"
                              >
                                <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden bg-white shrink-0">
                                  <Image
                                    src={director.image || "/placeholder.svg"}
                                    alt={director.name}
                                    fill
                                    className="object-cover object-center"
                                  />
                                </div>
                                <div className="max-w-3xl">
                                  <h5 className="text-xl font-semibold text-[#405862] leading-snug break-words">
                                    {director.name}
                                  </h5>
                                  <p className="text-sm md:text-base text-[#405862]/75 break-words">
                                    {director.role}
                                  </p>
                                  <div className="flex items-center justify-center gap-3 mt-2">
                                    {director.socialLinks?.linkedin && (
                                      <Link
                                        href={director.socialLinks.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                                      >
                                        <Linkedin className="h-5 w-5" />
                                      </Link>
                                    )}
                                    {director.socialLinks?.instagram && (
                                      <Link
                                        href={director.socialLinks.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                                      >
                                        <Instagram className="h-5 w-5" />
                                      </Link>
                                    )}
                                  </div>
                                  <p
                                    className="text-sm md:text-base leading-relaxed text-[#405862] mt-2"
                                    style={clampStyle}
                                  >
                                    {director.bio}
                                  </p>
                                  {showToggle && (
                                    <button
                                      onClick={() => toggleBio(director.id)}
                                      className="text-[#405862] text-xs md:text-sm font-medium hover:text-[#4ecdc4] transition-colors mt-2 flex items-center justify-center text-center w-full"
                                    >
                                      {expandedBios[director.id] ? (
                                        <>
                                          Show Less{" "}
                                          <ChevronUp className="h-3 w-3 ml-1" />
                                        </>
                                      ) : (
                                        <>
                                          See More{" "}
                                          <ChevronDown className="h-3 w-3 ml-1" />
                                        </>
                                      )}
                                    </button>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {department.deputyDirectors?.length ? (
                        <div className="flex justify-center">
                          <span className="h-0.5 w-16 rounded-full bg-[#4ecdc4]" />
                        </div>
                      ) : null}

                      {department.deputyDirectors?.length ? (
                        <div className="space-y-3">
                          <DeputyScroller
                            departmentId={department.id}
                            deputies={department.deputyDirectors}
                          />
                        </div>
                      ) : null}

                      <div className="space-y-3">
                        <h4 className="text-lg md:text-xl font-semibold text-center text-[#405862]">
                          Coordinators
                        </h4>
                        <div className="bg-[#f1ece7] rounded-lg px-4 py-2 md:px-6">
                          <div className="max-w-5xl mx-auto">
                            <CoordinatorScroller
                              departmentId={department.id}
                              coordinators={department.coordinators}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                );
              })}

              <div className="pt-2">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center text-[#405862]">
                  Ambassadors
                </h3>
                <p className="text-center text-[#405862]/80 mb-6 max-w-2xl mx-auto text-sm md:text-base">
                  Meet the ambassadors representing Dr. Interested around the
                  world.
                </p>
                <div className="ambassador-marquee">
                  <div className="ambassador-marquee__track">
                    {ambassadorNames.map((name, index) => (
                      <span
                        key={`ambassador-${index}`}
                        className="ambassador-marquee__name"
                      >
                        {name}
                      </span>
                    ))}
                    {ambassadorNames.map((name, index) => (
                      <span
                        key={`ambassador-dup-${index}`}
                        className="ambassador-marquee__name"
                        aria-hidden="true"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="advisors" className="space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center text-[#405862]">
                  Medical Student Advisors
                </h3>
                <p className="text-center text-[#405862]/80 mb-6 max-w-2xl mx-auto text-sm md:text-base">
                  Our medical student advisors provide valuable guidance and
                  mentorship, helping bridge the gap between high school and
                  medical education.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {advisors.map((advisor) => (
                    <Card
                      key={advisor.id}
                      className="overflow-hidden border-[#405862]/20 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="bg-[#f5f1eb] flex items-center justify-center p-4">
                        <div className="relative h-32 w-32 rounded-full overflow-hidden">
                          <Image
                            src={advisor.image || "/placeholder.svg"}
                            alt={advisor.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h4 className="text-lg font-semibold text-[#405862]">
                          {advisor.name}
                        </h4>
                        <p className="text-sm md:text-base text-[#405862]/75 mb-2">
                          {advisor.role}
                        </p>
                        <p className="text-sm md:text-base leading-relaxed text-[#405862] mb-3">
                          {expandedBios[advisor.id]
                            ? advisor.bio
                            : truncateBio(advisor.bio, 120)}
                        </p>
                        {advisor.bio.length > 120 && (
                          <button
                            onClick={() => toggleBio(advisor.id)}
                            className="text-[#405862] text-sm font-medium hover:text-[#4ecdc4] transition-colors mb-3 flex items-center"
                          >
                            {expandedBios[advisor.id] ? (
                              <>
                                Show Less <ChevronUp className="h-4 w-4 ml-1" />
                              </>
                            ) : (
                              <>
                                See More{" "}
                                <ChevronDown className="h-4 w-4 ml-1" />
                              </>
                            )}
                          </button>
                        )}
                        <div className="flex space-x-3">
                          {advisor.socialLinks?.linkedin && (
                            <Link
                              href={advisor.socialLinks.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                            >
                              <Linkedin className="h-5 w-5" />
                            </Link>
                          )}
                          {advisor.socialLinks?.instagram && (
                            <Link
                              href={advisor.socialLinks.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                            >
                              <Instagram className="h-5 w-5" />
                            </Link>
                          )}
                          {advisor.socialLinks?.website && (
                            <Link
                              href={advisor.socialLinks.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                            >
                              <Globe className="h-5 w-5" />
                            </Link>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="mt-8 p-6 bg-[#4ecdc4]/10 border border-[#4ecdc4]/30 rounded-lg text-center">
                <h3 className="text-xl md:text-2xl font-semibold text-[#405862] mb-2">
                  Interested in Joining Our Team?
                </h3>
                <p className="text-[#405862]/80 mb-3 text-sm md:text-base">
                  Check out the{" "}
                  <span className="font-semibold text-[#4ecdc4]">Join Us</span>{" "}
                  tab above to learn about executive opportunities and apply to
                  join our leadership team!
                </p>
                <p className="text-sm md:text-base text-[#405862]/70">
                  Applications are open year-round and reviewed on an ongoing
                  basis.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="join" className="space-y-6">
              <div className="py-8 bg-[#f5f1eb]/50 rounded-lg text-center">
                <div className="max-w-3xl mx-auto px-4">
                 <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#405862]">
  Join Our Executive Team
</h2>


<p className="mb-6 text-base md:text-lg text-[#405862]/90 max-w-3xl">
  <span className="font-semibold">Dr. Interested</span> is a global youth organization active in
  <span className="font-semibold"> 70+ countries</span>, reaching
  <span className="font-semibold"> 60,000+ students</span> worldwide. We operate fully online through
  Discord, with optional in-person opportunities depending on your city.
</p>

<p className="mb-6 text-base md:text-lg text-[#405862]/90 max-w-3xl">
  We’re recruiting across nearly every field right now — Finance, Tech, Coding, Design, Outreach,
  Events, and Healthcare Careers Education. If you like building things that matter, there’s a seat
  for you.
</p>

<p className="mb-6 text-base md:text-lg text-[#405862]/90 max-w-3xl">
  This isn’t busywork. You’ll be part of a global team that moves fast, leads real projects, and
  creates impact you can point to proudly.
</p>

{/* WHAT YOU GET */}
<div className="mb-6">
  <h3 className="text-lg md:text-xl font-semibold text-[#405862] mb-3">What you get</h3>

  <ul className="max-w-2xl mx-auto pl-4 space-y-2 text-sm md:text-base text-[#405862]/90 text-left">
    <li>✨ Experience working with an international organization that strengthens your résumé</li>
    <li>✨ Letters of recommendation from medical students</li>
    <li>✨ Free tickets to represent us at conferences (merit-based)</li>
    <li>✨ Verified volunteer hours</li>
    <li>
      ✨ Real skill growth in leadership, collaboration, and execution
    </li>
  </ul>
</div>

{/* CANADA-SPECIFIC */}
<div className="mb-6 flex flex-col md:flex-row items-start md:items-center gap-6">
  {/* Text content */}
  <div className="flex-1">
    <h3 className="text-lg md:text-xl font-semibold text-[#405862] mb-3">
      Extra opportunities (Canada · Under 18)
    </h3>

    <ul className="space-y-2 text-sm md:text-base text-[#405862]/90 pl-4 text-left">
      <li>
        ✨ Apply for microgrants or travel grants to grow your ideas and showcase your work
      </li>
      <li>
        ✨ Access 100+ virtual workshops and in-person events every year with civic leaders and mentors
        across Canada
      </li>
      <li>
        ✨ After 120 service hours, earn a National Service Recognition Certificate signed by the
        Honourable Patty Hajdu, Minister of Employment, Workforce Development and Official Languages of
        Canada
      </li>
    </ul>
  </div>

  {/* Image slot */}
  <div className="flex-shrink-0 w-full md:w-64 rounded-lg overflow-hidden shadow-sm border border-[#405862]/20">
    <Image
      src="/glocal.webp" // replace with your image path
      alt="Canadian youth opportunities"
      width={256}
      height={160}
      className="object-cover w-full h-full"
    />
    <p className="text-xs md:text-sm text-center text-[#405862]/70 mt-2 mb-0">
      With support from the GLOCAL Foundation of Canada
    </p>
  </div>
</div>

{/* NEW SECTION */}
<div className="mb-8 rounded-lg border border-[#405862]/20 bg-[#405862]/5 p-5">
  <h3 className="text-lg md:text-xl font-semibold text-[#405862] mb-3">
    NEW: Policy & Global Research Opportunities:
  </h3>

  <p className="text-sm md:text-base text-[#405862]/90 max-w-3xl">
    As an executive, you’ll have the opportunity to contribute directly to our
    <span className="font-medium"> policy and research reports</span>.
    One of our current projects is a report for the
    <span className="font-medium">
      {" "}
      United Nations High Commissioner on Human Rights
    </span>.
  </p>

  <p className="mt-2 text-sm md:text-base text-[#405862]/90 max-w-3xl">
    Executives who contribute will be credited by name, and the final report will be published on
    the official United Nations Human Rights website.
  </p>
</div>

<p className="mb-6 text-[#405862]/80 text-sm md:text-base">
  ⏳ <span className="font-medium">Time commitment:</span> 6 months · ~2 hours/week
</p>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <Card className="border-[#405862]/20 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6 text-center">
                        <h3 className="text-base md:text-lg font-semibold text-[#405862] mb-3">
                          General Executive
                        </h3>
                        <p className="text-sm md:text-base text-[#405862]/80 mb-4">
                          Join our core leadership team and help shape the
                          future of Dr. Interested at a global scale.
                        </p>
                        <Link
                          href="https://forms.gle/TrkdUpn2TtDrRAAH6"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full bg-[#405862] hover:bg-[#334852] text-white">
                            Apply Now
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>

                    <Card className="border-[#405862]/20 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6 text-center">
                        <h3 className="text-base md:text-lg font-semibold text-[#405862] mb-3">
                          Org Ambassador
                        </h3>
                        <p className="text-sm md:text-base text-[#405862]/80 mb-4">
                          Represent Dr. Interested in your community and help
                          expand our impact worldwide.
                        </p>
                        <Link
                          href="https://forms.gle/H5jZkekPubdtwcTS6"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full bg-[#405862] hover:bg-[#334852] text-white">
                            Apply Now
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>

                    <Card className="border-[#405862]/20 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6 text-center">
                        <h3 className="text-base md:text-lg font-semibold text-[#405862] mb-3">
                          Podcast Team
                        </h3>
                        <p className="text-sm md:text-base text-[#405862]/80 mb-4">
                          Create engaging podcast content and amplify healthcare
                          stories from around the world.
                        </p>
                        <Link
                          href="https://forms.gle/fH2equ2mCwDX9PpH6"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full bg-[#405862] hover:bg-[#334852] text-white">
                            Apply Now
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="text-center">
                    <p className="text-sm md:text-base text-[#405862]/80">
                      Have questions about joining our team?{" "}
                      <Link
                        href="mailto:hr@drinterested.org"
                        className="text-[#4ecdc4] hover:text-[#405862] font-medium transition-colors"
                      >
                        Contact us at hr@drinterested.org
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
