import { createSignal, createComputed, createReaction } from 'solid-js';

function diffCEandCRE() {
  const [count, setCount] = createSignal(0);

  // Create a computed value that doubles the count
  const doubleCount = createComputed(() => count() * 2);

  // Create a reaction that logs the count and the double count to the console
  createReaction(() => {
    console.log(`count = ${count()}, doubleCount = ${doubleCount()}`);
  }, [count]);

  setInterval(() => {
    setCount(count() + 1);
  }, 1000);

  return (
    <div>
        <p>
        In this example, doubleCount is a computed value that doubles the value of count. Whenever count changes, doubleCount is automatically updated.

On the other hand, the createReaction function logs the values of count and doubleCount to the console whenever count changes. Note that it does not create a new reactive value, but simply performs a side effect.

So, the key difference is that createComputed is used to create a new reactive value, while createReaction is used to perform a side effect or update an existing reactive value based on changes in other values.
        </p>
      <p>Counter: {count()}</p>
      <p>Double counter: {doubleCount()}</p>
      <div>
        <p>

        createComputed is used to create a reactive value that is derived from one or more other reactive values. When any of the dependent reactive values change, the computed value is automatically updated
        </p>

<p>

createReaction is used to perform a side effect or update a reactive value based on one or more other reactive values. When any of the dependent reactive values change, the reaction function is called.
</p>
<h4>

So, the main difference is that createComputed is used to create a derived value, while createReaction is used to perform a side effect or update a value based on the changes in other values.

</h4>
      </div>
    </div>
  );
}

export default diffCEandCRE