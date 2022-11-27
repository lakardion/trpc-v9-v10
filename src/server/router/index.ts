// src/server/router/index.ts
import { createRouter } from "./context";

import { exampleRouter } from "./example";
import { mergeRouters, publicProcedure, router } from "./trpc";

const legacyRouter = createRouter().merge("example.", exampleRouter).interop();

const v10Router = router({
  test: publicProcedure.query(async () => `Hello from v10`),
});

export const appRouter = mergeRouters(legacyRouter, v10Router);

// export type definition of API
export type AppRouter = typeof appRouter;
