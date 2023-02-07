import { createSignal } from "solid-js";
import "./Counter.css";
import styles from "./Card.module.css";
export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <div>
      <p class={styles.heading}>Solid Js</p>
      <button class="increment" onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </button>
    </div>
  );
}
