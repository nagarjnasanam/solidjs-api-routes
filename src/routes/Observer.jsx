import { Observable } from "rxjs";

function Observer() {
    const MyPromise =  new Promise((resolve, reject) => {
        resolve("man")
        resolve("man")
        resolve("man")
        resolve("man")

        // setTimeout(() => {
        //     resolve("man")
        //     resolve("human")

        // },1000)
    })

    MyPromise.then((res) => console.log("promise", res))

  let observable = new Observable((observer) => {
    observer.next("Dog");
    observer.next("Dog");
      observer.next("cat");
      observer.next("ox");

    // setTimeout(() => {
    //   observer.next("Dog");
    //   observer.next("cat");
    //   observer.next("ox");
    // }, 3000);
    console.log('Observables invoked!');
  });
//   observable.then((value) => {
//     console.log("observabke",value)
//   })
  observable.subscribe((value)=>{
    console.log(value)
  })

  const ArrayToObservableWrap = array => {
    return new Observable(subscriber => {
    for (let i of array) {
    subscriber.next(i);
    }
    });
    };
    const arrVal = [6, 7, 5, 4, 3, 2, 9];
    const observable2 = ArrayToObservableWrap(arrVal);
    observable2.subscribe(value => console.log('Subscriber1: ' + value));
    observable2.subscribe(value => console.log('Subscriber2: ' + value));    
    
  return (
    <div>
      <h2>Observer</h2>
    </div>
  );
}

export default Observer;
