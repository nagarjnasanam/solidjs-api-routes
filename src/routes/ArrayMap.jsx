import { createSignal, indexArray, mapArray, onMount } from "solid-js";
function ArrayMap() {
  const initial = Array.from({ length: 10 }, (_, i) => i);
  const [list, setList] = createSignal(initial);
  const [l2,setL2]=createSignal([11,22,22]);
  function moveItems(array) {
    console.log(array);
    const [first, ...rest] = array;
    return [...rest, first];
  }
  setInterval(() => {
    setList((v) => moveItems(v));
  }, 1000);
  onMount(() => {
    console.log(list());
  });
  return (
    <div>
      <ul>{mapArray(l2, (item, index) => <li>{item}</li>)}</ul>
      <h2>ArrayMap</h2>
      <p>Using for</p>
      <For each={list()}>
        {(cat, i) => (
          <li>
           
              {i() + 1}: {cat}
          </li>
        )}
      </For>
      <h1>mapArray</h1>
      <ul>{mapArray(list, (item, index) => <li>{item}</li>)}</ul>
      <h1>IndexArray</h1>
      <ul>{indexArray(list, (item, index) => <li>{item}</li>)}</ul>

    </div>
  );
}

export default ArrayMap;
