import { NextResponse } from "next/server";

export function middleware(request) {
  // Generate a random nonce value
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  // Different CSP for development vs production
  const isDevelopment = process.env.NODE_ENV === "development";

  // Development CSP - allows unsafe-eval for Next.js HMR (Fast Refresh)
  const devCSP = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval' 'unsafe-inline'
      https://www.googletagmanager.com 
      https://www.google-analytics.com 
      https://*.doubleclick.net
      https://connect.facebook.net;
    script-src-elem 'self' 'unsafe-inline' 'unsafe-eval'
      https://www.googletagmanager.com 
      https://www.google-analytics.com 
      https://*.doubleclick.net
      https://connect.facebook.net;
    style-src 'self' https: 'unsafe-inline';
    img-src 'self' data: blob: https: http:;
    connect-src * ws: wss: data: blob:;
    font-src 'self' data: https:;
    frame-src https:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
  `;

  // Production CSP - strict, no unsafe-eval
  const prodCSP = `
    default-src 'self';
  script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval' https:;
  script-src-elem 'self' 'unsafe-inline' 'unsafe-eval' https:;
  connect-src 'self' https: ws: wss:;
  img-src 'self' data: blob: https: http:;
  style-src 'self' https: 'unsafe-inline';
  font-src 'self' data: https:;
  frame-src https:;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  `;

  const cspHeader = (isDevelopment ? devCSP : prodCSP)
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