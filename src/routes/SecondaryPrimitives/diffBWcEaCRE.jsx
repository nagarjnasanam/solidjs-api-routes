import { createSignal, createEffect, createRenderEffect } from 'solid-js';

function diffCEandCRE() {
  const [count1, setCount1] = createSignal(0);
  const [count2, setCount2] = createSignal(0);

  createEffect(() => {
    console.log('Running createEffect');
    setTimeout(() => {
      setCount1(count1() + 1);
    }, 1000);
  });

  createRenderEffect(() => {
    console.log('Running createRenderEffect');
    setTimeout(() => {
      setCount2(count2() + 1);
    }, 500);
  });

  return (
    <div>
      <p>Counter 1: {count1()}</p>
      <p>Counter 2: {count2()}</p>
      <div>
        <p>
        In this example, the createEffect runs once every second and increments count1 by 1. The createRenderEffect, on the other hand, runs once every half-second and increments count2 by 1.
        </p>
        <p>
        Because the createEffect runs asynchronously, it does not block the rendering process, and the UI remains responsive even as the counter updates. In contrast, the createRenderEffect runs synchronously during the rendering phase and may cause the UI to slow down if it performs a computationally expensive operation.
        </p>
        <p>
        When you run this program, you'll see that the createEffect and createRenderEffect logs alternate, indicating that they are running on separate event loops. You'll also see that the counters update at different rates, with count2 updating more frequently than count1. This demonstrates the different behaviors of createEffect and createRenderEffect in SolidJS.
        </p>
      </div>
    </div>
  );
}

export default diffCEandCRE

