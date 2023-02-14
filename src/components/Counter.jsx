import { createSignal,createRenderEffect ,createEffect,createReaction } from "solid-js";
import "./Counter.css";
import { isServer } from "solid-js/web";
import styles from "./Card.module.css";
import { DEV } from "solid-js";
export default function Counter() {
  const [count, setCount] = createSignal(0);
  // const [count,setCount]=createSignal(10)
  createEffect(()=>{console.log('Efffffffffffffect',count())})
  createRenderEffect(() => console.log(" Renderesssssssscount =" , count()));
  setCount(1); // effect won't run yet
  setCount(2);//effect not run



  const [s, set] = createSignal("start");
  const [num,setNum] = createSignal(99)


  const track = createReaction(() => console.log("something"));

  // next time s changes run the reaction
track(() => s());

// set("end"); // "something"

// set("final"); // no-op as reaction only runs on first update, need to call track again.

if (DEV &!isServer) {
  // I will never make it to the browser bundle
  console.log("notServer")
} else {
  console.log('is server')
  // won't be run on the server;
}

// var num=10


  return (
    <div>
      <p>{num()}</p>
      <input value={num()} onInput={(e) => setNum(e.target.value)} />
      <p class={styles.heading}>Solid Js</p>
      <button class="increment" onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </button>
    <button class="increment" onClick={()=>set('end')}>Track0</button>
    <button class="increment" onClick={()=>set('final')}>Track1</button>
    </div>
  );
}
