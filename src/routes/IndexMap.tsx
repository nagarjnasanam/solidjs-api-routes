import { createSignal, For, Index } from 'solid-js';

// function ForCats() {
//   const [cats, setCats] = createSignal([
//     'Keyboard Cat',
//     'Maru',
//     'Henri The Existential Cat'
//   ]);
  
//      setTimeout(() => setCats(['Maru', 'Keyboard Cat', 'Keyboard Cat', 'New Cat']), 2000)

//   return (
//     <ul>
//     <For each={cats()}>{name => {

//         console.log(`For: rendered ${name} whole cat`);

//       return <li>
//         <a target="_blank" href="">
//           1: {name}
//         </a>
//       </li>
//     }}</For>
//     </ul>
//   );
// }
function IndexCats() {
    const [cats, setCats] = createSignal([
      'Keyboard Cat',
      'Maru',
      'Henri The Existential Cat'
    ]);
    
       setTimeout(() => setCats(['Maru', 'Keyboard Cat', 'Keyboard Cat', 'New Cat']), 2000)
  
    return (
      <ul>
      <Index each={cats()}>{name => {
  
          console.log(`Index: rendered ${name()} whole cat`);
  
        return <li>
          <a target="_blank" href="">
            1: {name()}
          </a>
        </li>
      }}</Index>
      </ul>
    );
}
export default IndexCats;