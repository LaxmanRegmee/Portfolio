import { query } from "../_generated/server";
import { v } from "convex/values";

export const getExperience = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("experience").order("asc").collect();
  },
});

export const getExperienceByCompany = query({
  args: { company: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("experience")
      .filter((q) => q.eq(q.field("company"), args.company))
      .unique();
  },
});
