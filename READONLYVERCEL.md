# multipage routing not working

tutorial:
https://www.youtube.com/watch?v=9V5F-OnPsms


Adding a `vercel.json` file with rewrite rules like `{"rewrites": [{ "source": "/(.*)", "destination": "/" }]}` tells Vercel how to handle routing for your application. Here's why you needed to add it:

1. **Single Page Application (SPA) Behavior**: React applications, especially those using client-side routing libraries like React Router, are typically SPAs. In SPAs, the server serves a single HTML file (usually `index.html`), and routing is handled on the client-side by JavaScript.

2. **Fallback to Index.html**: When a user navigates to a specific route in your React application (e.g., `https://example.com/about`), the server needs to serve `index.html` regardless of the route requested. This allows the client-side routing to take over and render the appropriate component based on the route.

3. **Vercel Rewrites**: By default, Vercel tries to serve the requested file directly from the specified route. However, in SPAs, all routes should be handled by `index.html`, so you need to configure Vercel to rewrite all routes to `index.html`. 

   - The `source` in the rewrite rule (`/(.*)`) matches any URL path.
   - The `destination` specifies where to redirect these requests, which is `/` (the root directory where `index.html` is located).

4. **Preventing 404 Errors**: Without the rewrite rule, Vercel would try to find a file corresponding to the requested route and return a 404 error if it doesn't exist. By adding the rewrite rule, you ensure that all routes are handled by your React application, preventing 404 errors and allowing client-side routing to work correctly.

In summary, adding the `vercel.json` file with rewrite rules tells Vercel to serve `index.html` for all routes, enabling client-side routing to function properly in your React application deployed on Vercel.