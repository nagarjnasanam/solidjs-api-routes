import { initTRPC } from "@trpc/server";

//creating trpc server

const t  = initTRPC.create()

//export router,middleware and procedure
export const router=t.router
export const middleware = t.middleware
export const procedure = t.procedure