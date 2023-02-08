import { Outlet, A } from "solid-start";
import { client } from "~/lib/trpc/client";
 export default function Bread(props){
    client.hello.query().then(res=>console.log(res))
    client.goodBye.query().then(res=>console.log(res))
    return (
        <div>
            <h1>Abovw</h1>
            <Outlet />
            <h1>Below</h1>
        </div>
    )
}