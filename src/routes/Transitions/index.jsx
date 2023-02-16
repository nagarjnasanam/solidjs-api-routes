import { useTransition, createSignal } from "solid-js";
function index() {
  const [items, setItems] = createSignal(["apple", "banana", "orange"]);

  const transitions = useTransition(
    items(),
    {
      key: (item) => item,
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      delay: 1000,
    },
    (item) => <div>{item}</div>
  );

  const [visible, setVisible] = createSignal(false);
  const transition = useTransition(
    visible(),
    {
      key: (item) => item,
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      delay: 500,
    },
    (item) => (
      <div style="background-color: yellow; padding: 10px; margin: 10px;">
        Hello, world!
      </div>
    )
  );

  function handleAddItem() {
    setItems([...items(), "pear"]);
  }

  function handleRemoveItem(item) {
    setItems(items().filter((i) => i !== item));
  }

  function handleClick() {
    setVisible(!visible());
  }

  return (
    <div>
      <h2>Transitions</h2>
      <div>
        <button onClick={handleClick}>Toggle</button>
        { transition}
      </div>
      <div>
        { transitions}
        <button onClick={handleAddItem}>Add Item</button>
        {items().map((item) => (
          <div>
            {item}
            <button onClick={() => handleRemoveItem(item)}>Remove Item</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
