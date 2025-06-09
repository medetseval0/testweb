// Cloudflare Pages Functions middleware
// This runs on Cloudflare's edge before serving requests

export async function onRequest(context: {
  request: Request;
  next: () => Promise<Response>;
  env: any;
}) {
  const { request, next } = context;
  
  // Get the response from the next function/page
  const response = await next();
  
  // Add security headers
  const newHeaders = new Headers(response.headers);
  
  // Security headers
  newHeaders.set('X-Frame-Options', 'DENY');
  newHeaders.set('X-Content-Type-Options', 'nosniff');
  newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  newHeaders.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // Performance headers
  newHeaders.set('Cache-Control', 'public, max-age=31536000, immutable');
  
  // CORS headers for API routes (if needed)
  if (request.url.includes('/api/')) {
    newHeaders.set('Access-Control-Allow-Origin', '*');
    newHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    newHeaders.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }
  
  // Return response with new headers
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
}