import { json,useSearchParams,useParams } from "solid-start"
export default function CheeseParam(param){
    // console.log(param)
    const params = useParams()
    const [searchParams,setSearchParams] = useSearchParams()
    console.log(params,searchParams.hello)
    return(
        <di>
            <h1>Cheese param  {params.param}</h1>
        </di>
    )
}


export async function POST({request,params,fetch}){
    const query = new URLSearchParams(request.url.split("?")[1])
    console.log('request',query.get('bread'))
    // const response = await fetch('/Cheese',{method:"POST"})
    // const data = await response.json()
    console.log("dataaaa",fetch)
return json({
    params:params,
    query:{
        bread:query.get('bread'),
        vegetables:query.get('vegetables'),
        
    },
    // data:data
})
}