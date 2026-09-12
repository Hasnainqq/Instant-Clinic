import { NextResponse } from "next/server";

export function middleware(request) {
  // 1. Generate a random nonce value
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  // 2. Define your CSP directives including Google Analytics & Tag Manager
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net;
    script-src-elem 'self' 'nonce-${nonce}' https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net;
    img-src 'self' data: blob: https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://googleads.g.doubleclick.net https://www.google.com;
    connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://googleads.g.doubleclick.net https://www.google.com;
    style-src 'self' 'unsafe-inline';
    font-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
  `
    .replace(/\s{2,}/g, " ")
    .trim(); // Clean up formatting spaces

  // 3. Set headers on the request and response
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", cspHeader);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set("Content-Security-Policy", cspHeader);
  return response;
}

export const config = {
  matcher: [
    // Apply this to all paths except static files, api routes, and images
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
