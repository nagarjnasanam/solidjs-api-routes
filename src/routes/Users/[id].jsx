import { useParams } from "solid-start";
import { onMount } from "solid-js";
export default function UserPage() {
  const params = useParams();
  onMount(()=>{
    console.log("params",params.id)
  })
  return <div>
    <img src="/images/img.jfif" alt="image"/>
   <p> User {params.id}</p>
    </div>;
}