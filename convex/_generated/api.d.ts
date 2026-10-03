/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as auth from "../auth.js";
import type * as chat_mutations from "../chat/mutations.js";
import type * as chat_queries from "../chat/queries.js";
import type * as experience_mutations from "../experience/mutations.js";
import type * as experience_queries from "../experience/queries.js";
import type * as knowledge_mutations from "../knowledge/mutations.js";
import type * as knowledge_queries from "../knowledge/queries.js";
import type * as knowledge_rag from "../knowledge/rag.js";
import type * as projects_mutations from "../projects/mutations.js";
import type * as projects_queries from "../projects/queries.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  auth: typeof auth;
  "chat/mutations": typeof chat_mutations;
  "chat/queries": typeof chat_queries;
  "experience/mutations": typeof experience_mutations;
  "experience/queries": typeof experience_queries;
  "knowledge/mutations": typeof knowledge_mutations;
  "knowledge/queries": typeof knowledge_queries;
  "knowledge/rag": typeof knowledge_rag;
  "projects/mutations": typeof projects_mutations;
  "projects/queries": typeof projects_queries;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
