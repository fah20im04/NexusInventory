export { default } from "next-auth/middleware";

export const config = {
  // List all routes that require login here
  matcher: ["/add-item"],
};
