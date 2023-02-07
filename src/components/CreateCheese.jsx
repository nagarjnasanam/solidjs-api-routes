import { createRouteAction } from "solid-start";
export default function CreateCheese(props) {
  const [_, { Form }] = createRouteAction(async (formData) => {
    console.log("hello");
    await fetch("http://localhost:3000/Cheese/Cheeses", {
      method: "POST",
      body: JSON.stringify({ name: formData.get("name") }),
    });
  });
  return (
    <Form>
      <input type="text" name="name" />
    </Form>
  );
}
