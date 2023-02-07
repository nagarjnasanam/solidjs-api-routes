import { redirect, createServerData$ } from "solid-start/server";
 
export default function User() {
  const data = createServerData$((_, { request }) => {
    if (!isLoggedIn(request)) {
      throw redirect("/Name");
    }
 
    return { id: 1 }
  });
 
  return <div>User {data()?.id}</div>;
}