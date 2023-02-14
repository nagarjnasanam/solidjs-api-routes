import { createMutable } from "solid-js/store";
import { onMount, createSignal,batch } from "solid-js";
import { modifyMutable } from "solid-js/store";
import { reconcile,produce } from "solid-js/store";

const MyComponent = () => {
  const [count, setCount] = createSignal(0);

  const state = createMutable({ count: 0 });

//   const increment = () => {
//     modifyMutable(state, (prev) => ({ count: prev.count + 1 }));
//   };
//   console.log(state); // { count: 0 }
//   increment();
//   console.log(state);
  const user = createMutable({
    firstName: "John",
    lastName: "Smith",
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
      [this.firstName, this.lastName] = value.split(" ");
    },
  });
  console.log(user.firstName, user.lastName, user.fullName);
  const changeName = () => {
    user.lastName = "Nagarjuna";
    console.log(user.firstName, user.lastName, user.fullName);
  };
  const Increase = () => {
    setCount(count() + 1);
  };
  onMount(() => {
    console.log("onMonitor");
  });


  //useMutable
  const Names= createMutable({
    user: {
      firstName: "John",
      lastName: "Smith",
      age:"22"
    },
  });
  const changeNames = () => {
 
     // using batch

    //   batch(()=>{
    //     Names.user.firstName = "Jake";
    //     Names.user.lastName = "Johnson";
    //   })

    //using reconcile with modifyMutable
    
    // modifyMutable(Names.user, reconcile({
    //     firstName: "Jake",
    //     lastName: "Johnson",
    //     age:"676"
    //   })
    // )

    modifyMutable(Names.user, produce((u) => {
        u.firstName = "Jake";
        u.lastName = "Johnson";
      })
    )
      
  }
  
  

  return (
    <div>
        <h1>Hello {Names.user.firstName + ' ' + Names.user.lastName + ' ' + Names.user.age}</h1>

      <p>{state.count}</p>
      <p>create Mutable</p>
      <p>Count: {count()}</p>
      <button onClick={changeName}>ChangeName</button>
      <button onClick={Increase}>Increase</button>
      <button onClick={changeNames}>Names</button>
    </div>
  );
};
export default MyComponent;
