/* 
 The createDeferred function in Solid.js is used to create a deferred value, which is a placeholder for a value that will be provided later. This can be useful in situations where the value of a signal is not immediately available, for example, when fetching data from a server or performing a time-consuming operation.
In addition, the createDeferred function allows you to specify a timeout duration for the deferred value, after which the value will be considered to be expired. This can be useful in situations where you want to ensure that your component always has the latest value, even if it takes some time to arrive.

Overall, the createDeferred function can be a useful tool for managing asynchronous or time-consuming operations in Solid.js components, by providing a simple and efficient way to handle values that are not immediately availableff


*/
import {
  createDeferred,
  createRenderEffect,
  onMount,
  createEffect,
} from "solid-js";
import { createSignal } from "solid-js";

function fetchValue() {
  return new Promise((resolve) => {
    // setTimeout(() => {
    resolve("Hello, world!!!!!!!!!!!!!!!!!!!");
    // }, 0);
  });
}

const getValues = () => {
  console.log("kk");
  return "Hi";
};

function createDefered() {
  const source = () => "Hello, Sanam!";
  const deferredValue1 = createDeferred(source);
  const [count, setCount] = createSignal(0);

  const [message, setMessage] = createSignal("");
  const [value, setValue] = createSignal("");

  // const MyPromise = new Promise((resolve, reject) => {

  //   setTimeout(() => {
  //       resolve("man")
  //       resolve("human")

  //   },1000)
  // });
  //  const val = fetchValue()

  const deferredValue2 = createDeferred(fetchValue);

  createEffect(() => {
    console.log('hjh')
    console.log("counter",count())
  });
  createRenderEffect(() => {
    console.log("onRender",count())

    setMessage(deferredValue1());
    setValue(deferredValue2());
  });
  setCount(5)
  setCount(6)
  setCount(8)
  setCount(0)
  setCount(78)

  onMount(() => {
    const val = getValues();
    // console.log(val);
    setTimeout(() => {
      setMessage("deferredValue");
    }, 1000);
  });
  return (
    <div>
      <h2>createDefered</h2>
      <p>{message()}</p>
      {value() ? value() : "Loading..."}
    </div>
  );
}

export default createDefered;




/*
In summary, createEffect is used for asynchronous side effects that don't need to run during the rendering phase, while createRenderEffect is used for synchronous side effects that need to run during the rendering phase.
 */