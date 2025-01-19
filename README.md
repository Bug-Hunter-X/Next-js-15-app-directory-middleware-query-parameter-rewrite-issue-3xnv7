# Next.js 15 App Directory Middleware Query Parameter Rewrite Issue

This repository demonstrates an unexpected behavior in Next.js 15's App Directory when using middleware to rewrite URLs containing query parameters.  The issue occurs when attempting to rewrite a URL containing query parameters, sometimes losing parts of the query string. 

## Bug Description:
The middleware correctly rewrites the base URL, but inconsistently handles or drops parts of the query string during redirection. This leads to unexpected routing and missing data.

## How to Reproduce:
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Access the application via `http://localhost:3000/?param1=value1&param2=value2`.
5. Observe the inconsistent behavior in how the query parameters are handled in the rewritten URL.

## Potential Solutions:

The solution involves careful examination of how the URL rewriting is performed within the middleware function.  Ensuring all query parameters are handled properly, and the correct redirection is performed, may resolve the issue.   More investigation is needed to understand the underlying root cause in Next.js 15.
