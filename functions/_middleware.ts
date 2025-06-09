interface Env {
  ASSETS: Fetcher;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url);
  
  // Handle SPA routing - redirect all non-asset requests to index.html
  if (
    !url.pathname.startsWith('/assets/') &&
    !url.pathname.startsWith('/api/') &&
    !url.pathname.includes('.') &&
    context.request.method === 'GET'
  ) {
    const response = await context.env.ASSETS.fetch(
      new Request(`${url.origin}/index.html`, context.request)
    );
    
    return new Response(response.body, {
      ...response,
      headers: {
        ...response.headers,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Content-Type': 'text/html;charset=UTF-8'
      }
    });
  }

  // Let other requests pass through
  return context.next();
};