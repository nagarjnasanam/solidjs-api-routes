import { createSignal, createComputed, onMount } from "solid-js";
function createComputation() {
  const [count, setCount] = createSignal(0);
  const doubleCount = createComputed(() => {
    console.log("computing doubleCount");
    return count() * 2;
  });

  setInterval(() => {
    console.log("incrementing count");
    setCount(count() + 1);
  }, 1000);

  onMount(() => {
    // console.log(doubleCount());
  });

  return (
    <div>
      <p>Counter: {count()}</p>
      <p>Double counter: {doubleCount()}</p>
    </div>
  );
  return (
    <div>
      <h2>createComputation</h2>
      <p>Counter: {count()}</p>
      <p>Double counter: {doubleCount()}</p> // this will always be 4
    </div>
  );
}

export default createComputation;
