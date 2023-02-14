import { createStore } from "solid-js/store";

import { unwrap } from "solid-js/store";

function Reconcile() {
//   const store = createStore(0);

//   store.subscribe((state) => {
//     console.log("State changed:", state);
//   });

//   store.setState(1);
  // Output: State changed: 1
  const [state, setState] = createStore({
    numbers: [1, 2, 3, 4, 5]
  });
  const numbersObservable = () => state.numbers;
  const numbers = unwrap(numbersObservable);
  console.log('numbwr',numbers())

  return (
    <div>
      <h2>Reconcile</h2>
    </div>
  );
}

export default Reconcile;
