import { A } from "@solidjs/router"
import { json, useRouteData,useSearchParams,useParams } from "solid-start"
import { createRouteData, createRouteAction } from "solid-start"
// import {useParams, useSearchParams, json} from "solid-start"
import { For } from "solid-js"
import CreateCheese from "~/components/CreateCheese"

export function routeData(){

  

    const cheeses = createRouteData(async () => {
        const response = await fetch("http://localhost:3000/Cheese/Cheeses")
        const data = await response.json()
        return data
    })

    return cheeses
}

export default function Cheese(props){
    // const params = useParams()
   
    const routeData = useRouteData()
    console.log("hghgc",routeData())
    return(
        <div>
            <h1>Cheese page</h1>
           
            <For each={routeData()}>
                {
                    (item,i)=> {
                        return <div>
                         
                           
                            <A href={`/Cheese/${item.name}`}>{item.name}</A>
                        
                        </div>
                    }
                }
            </For>
            <CreateCheese />
           
        </div>
    )
}

export async function POST({request}){
    // console.log(stuff)
    const body = await new Response(request.body).json()
    console.log(body)
    return json({
        message:'this is the post route',
        body:body
    })

}
export async function PUT(){
    return json({
        message:'this is the pt route'
    })

}
export async function DELETE(){
    return json({
        message:'this is the delete route'
    })

}