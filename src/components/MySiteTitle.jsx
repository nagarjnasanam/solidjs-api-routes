import { Title } from "solid-start";
export default function MySiteTitle() {
    return <Title>{props.children} | My Site</Title>;
  }