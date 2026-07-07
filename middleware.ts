import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This middleware redirects the root path ("/") to the default language path ("/en").
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/en";
    return NextResponse.redirect(url);
  }
  // If the request is not for the root path, continue processing the request.
  return NextResponse.next();
}

// This configuration ensures that the middleware only runs for the root path ("/").
export const config = {
  matcher: ["/"]
};
