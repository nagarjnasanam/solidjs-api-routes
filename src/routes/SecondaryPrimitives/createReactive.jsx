import { createSignal, createReaction, onMount } from "solid-js";

function createReactive() {
  const [count, setCount] = createSignal(0);
  const [factor, setFactor] = createSignal(2);

  // Define a reaction that depends on count and factor
  const reaction = createReaction(() => {
    console.log("count * factor =", count() * factor());
  }, [count, factor]);
  // Define a reaction that depends on count and factor and returns a reactive value

  const doubleCount = createReaction(() => {
    return count() * 2;
  }, [count]);

  // Define a reaction that updates factor when count is a multiple of 5
  createReaction(() => {
    if (count() % 5 === 0) {
      setFactor(factor() + 1);
    }
  }, [count]);
  setInterval(() => {
    setCount(count() + 1);
  }, 1000);

  return (
    <div>
      <div>
        <h2>createReactive</h2>
        <p>Counter: {count()}</p>
        <p>Factor: {factor()}</p>
        {/* <p>Double counter: {doubleCount()}</p> */}
        {/* <button onClick={reaction}>Reaction</button> */}
        <button onClick={() => setFactor(factor() + 1)}>Increase factor</button>
      </div>
    </div>
  );
}

export default createReactive;
