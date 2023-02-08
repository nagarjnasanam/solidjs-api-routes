import { buildSchema, graphql } from "graphql";
import { json } from "solid-start";
import { APIEvent } from "solid-start";
 
// Define GraphQL Schema
const schema = buildSchema(`
  type Message {
      message: String
  }
 
  type Query {
    hello(input:String): Message
    goodbye: String
  }
`);
 
// Define GraphQL Resolvers
const rootValue = {
    hello: (...args) => {
        console.log(args)
        return {
            message: "Hellooooooooooooooo World"
          }
  },
  goodbye: () => {
      return "Goodbye"
  }
};
 
// request handler
const handler = async (event) => {  
 
  // get request body
  const body = await new Response(event.request.body).json()

 
  // pass query and save results
  const result = await graphql({rootValue, schema, source: body.query})
 
  // send query results as response
  return json(result);
};
 
export const GET = handler;
 
export const POST = handler;