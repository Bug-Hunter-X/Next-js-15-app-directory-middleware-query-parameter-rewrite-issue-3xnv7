```javascript
// middleware.js

export function middleware(req) {
  const url = req.nextUrl.clone();
  const newUrl = new URL(url);

  // Preserving Query Parameters correctly in the new URL
  const params = new URLSearchParams(req.nextUrl.search);
  params.forEach((value, key) => newUrl.searchParams.append(key, value));

  url.pathname = '/new-page';

  return NextResponse.rewrite(newUrl);
}

export const config = {
  matcher: ['/']
};
```