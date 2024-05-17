import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  apiUrl: "/api/webhooks/clerk",
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};