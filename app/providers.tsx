"use client";

import { ConvexProvider, convex } from "@/lib/convex";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
