import * as trpc from '@trpc/server'
import {router,procedure} from '~/lib/trpc/init'

export const appRouter = router({
    hello: procedure.query((...args)=>{
        console.log(args)
        return "Hello"
    }),
    goodBye:procedure.query((...args)=>{
        console.log(args)
        return "Good bye"
    })
})

export type AppRouter =  typeof appRouter