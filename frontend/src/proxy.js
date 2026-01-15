import { withAuth } from "next-auth/middleware";

// This explicitly exports a function, which fixes the build error
export default withAuth(
  function middleware(req) {
    // This function can be empty; withAuth handles the redirect logic
  },
  {
    callbacks: {
      // This ensures the middleware only allows users with a valid token
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  // Protecting these specific routes
  matcher: ["/add-item"],
};
