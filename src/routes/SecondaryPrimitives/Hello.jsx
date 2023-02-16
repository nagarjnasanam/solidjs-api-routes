// import { renderedString } from "solid-js/web";
// import { renderToString } from "solid-js/web";
import { createSignal } from "solid-js";
import { onMount } from "solid-js";
import { DEV } from "solid-js";
import Hi from "./Hi";
function Hello() {
  const [text, setText] = createSignal("hi ");

  function handleClick() {
    setText(" <div>  <h1>Heading1</h1> <h2>Heading</h2> </div>");
  }
  const handleDivClick = () => {
    console.log("Div clicked");
  };

  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  if (DEV) {
    console.log("Development mode enabled");
  }
  onMount(async () => {});
  //   const htmlString = renderToString(() => <Hi />);
  //   console.log(htmlString);
  return (
    <div>
      <h2>Hello</h2>
      <button on:click={handleClick}>Update text</button>
      <div innerHTML={text()}></div>
      <div textContent={text()}></div>

      <div onCapture:click={handleDivClick}>
        <p>hvkh</p>
        <button on:click={handleButtonClick}>Click me</button>
      </div>
    </div>
  );
}

export default Hello;
