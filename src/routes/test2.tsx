import {  createRoot, getOwner,onMount } from "solid-js"

const Test2 = () => {
  const comp = getOwner();
  let root;
  onMount(() => {
    console.log("getOenwewee",comp)
  })

  createRoot((dispose) => {
    console.log("dispode",dispose)
    root = getOwner();
  });

  // the rootOwner has an owner field set to the compOwner
  console.log("owner of root:", root.owner);
  // but the compOwner's "owned" haven't beed updated
  console.log("owned by component:", comp.owned);

  return "";
};

export default Test2