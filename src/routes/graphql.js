// import { buildSchema, graphql } from "graphql";
import { json } from "solid-start";
import { APIEvent } from "solid-start";

const graphql = (schema,resolvers)=>
(event)=>{return new Response("GraphQl Response")}

 
// Define GraphQL Schema



const schema = `


type Message{
    message String
}
type Query{
    hello:Message
}
`
 

const handler = graphql(schema,{
    Query:{
        hello:()=>{msg:"Hello world"}
    }
})
 
export const GET = handler;
 
export const POST = handler;
