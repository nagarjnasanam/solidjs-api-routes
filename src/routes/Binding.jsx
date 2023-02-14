import { createSignal,createRenderEffect } from "solid-js";
const [name, setName] = createSignal("j");
const [email,setEmail] = createSignal("sanam@gmail.com")
function model(el, value) {
    console.log(el.value)
    console.log('el',el)
    console.log('value',value)
    const [field, setField] = value();
    createRenderEffect(() => (el.value = field()));
    el.addEventListener("input", (e) => setField(e.target.value));
  }
function Binding() {
    return (
        <div>
            <h2>Binding</h2>
            <p>{name()}</p>
  <p>{email()}</p>
  <input type="text" use:model={[name, setName]} />;
  <input type="text" use:model={[email, setEmail]} />;
        </div>
    )
}

export default Binding;
