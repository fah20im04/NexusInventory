export { default } from "next-auth/middleware";

export const config = {
  // Paths must start with "/"
  // This will now protect the Add Item page and the Items list
  matcher: ["/add-item"],
};
