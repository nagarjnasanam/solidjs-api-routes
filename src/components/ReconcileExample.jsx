import { createSignal, createEffect, onCleanup } from 'solid-js';
import { reconcile } from 'solid-js/web';
import { createStore } from 'solid-js/store';

const [store, setStore] = createStore({ todos: [] });

function ReconcileExample() {
  const [todos, setTodos] = createSignal([]);

  createEffect(() => {
    const unsubscribe = store.subscribe(({ todos }) => {
      setTodos(reconcile(todos));
    });

    onCleanup(() => unsubscribe());
  });

  return (
    <ul>
      {todos().map((todo) => (
        <li>{todo.text}</li>
      ))}
    </ul>
  );
}

export default ReconcileExample