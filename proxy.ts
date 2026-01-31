import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/team" || pathname === "/team/") {
    const url = request.nextUrl.clone();
    url.pathname = "/teams";
    return NextResponse.redirect(url);
  }

  if (pathname.startsWith("/team/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/team\//, "/teams/");
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/team", "/team/:path*"],
};
