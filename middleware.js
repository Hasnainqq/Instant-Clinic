import { NextResponse } from "next/server";

export function middleware(request) {
  // Generate a random nonce value
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  // Comprehensive CSP for GTM, GA4, and Google Ads
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 
      https://www.googletagmanager.com 
      https://www.google-analytics.com 
      https://googleads.g.doubleclick.net
      https://connect.facebook.net;
    script-src-elem 'self' 'nonce-${nonce}' 
      https://www.googletagmanager.com 
      https://www.google-analytics.com 
      https://googleads.g.doubleclick.net
      https://connect.facebook.net;
    style-src 'self' https: 'unsafe-inline';
    img-src 'self' data: blob: https: http:;
    connect-src 'self' 
      https://www.googletagmanager.com 
      https://www.google-analytics.com 
      https://*.analytics.google.com 
      https://googleads.g.doubleclick.net 
      https://dc.ads.linkedin.com
      https://connect.facebook.net;
    font-src 'self' data: https:;
    frame-src https://bid.g.doubleclick.net;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
  `
    .replace(/\s+/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

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
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.svg).*)",
  ],
};