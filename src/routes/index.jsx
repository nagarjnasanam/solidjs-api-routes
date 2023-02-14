import { Title } from "solid-start";
import Counter from "~/components/Counter";
import { useIsRouting } from "solid-start";
import { useLocation } from "solid-start";
import { useMatch } from "solid-start";
export default function Home() {
  const isRouting = useIsRouting();
  console.log(isRouting())
  const location = useLocation();
  const match = useMatch(() => "/");
  console.log(match())
console.log(location)
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
