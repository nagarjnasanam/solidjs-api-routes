import { observable,onMount,createUniqueId } from "solid-js";
import { from } from "rxjs";
import { createSignal } from "solid-js";
import { mapArray } from "solid-js";
import { array } from "zod";
export default function Test() {
  const [s, setSignal] = createSignal(0);
  const array1 = [1, 4, 9, 16]
onMount(()=>{
    const id = createUniqueId()
    console.log("id",id)

})
  
  const obsv$ = from(observable(s));

  const sub = () => {
    console.log('Hiiiiiiiiiii')
    obsv$.subscribe((v) => {
        console.log(v+5)
    });
  };
  

  return (
    <div>
      <p>Test page</p>
      <button onclick={sub}> click</button>
    </div>
  );
}
