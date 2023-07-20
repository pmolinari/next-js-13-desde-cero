import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("my-custom-header", "pepitoooooo");

  console.log("******************************************************");
  console.log("******************************************************");
  console.log("******************************************************");
  console.log("******************************************************");

  if (request.nextUrl.pathname.startsWith("/locations")) {
    const isAuthenticated = true;
    if (!isAuthenticated)
      return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/locations/:path*", "/characters/:path*"],
};
