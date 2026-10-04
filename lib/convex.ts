import { ConvexReactClient, ConvexProvider } from "convex/react";

export const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL!,
);

export { ConvexProvider };
