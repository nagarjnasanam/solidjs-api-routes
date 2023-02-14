import { createDeferred } from "solid-js";
function createDefere() {
  const [name, setName] = createDeferred("John");

//   function handleClick() {
//     console.log('clicked',name())
//     setName("Jane");
//   }
  return (
    <div>
      <h2>createDefered</h2>
      {/* <h1>Hello, {name.read()}!</h1> */}
      {/* <button onClick={handleClick}>Change name</button> */}
    </div>
  );
}

export default createDefere;
