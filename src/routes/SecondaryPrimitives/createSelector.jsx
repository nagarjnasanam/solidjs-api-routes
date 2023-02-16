import { createSelector, createSignal, createMemo } from "solid-js";
const [firstName, setFirstName] = createSignal("John");
const [lastName, setLastName] = createSignal("Doe");

function createSelectorPage() {
  // Create a memoized selector function that computes the full name
  const fullName = createSelector(
    () => firstName(),
    () => lastName(),
    (first, last) => `${first} ${last}`
  );
  const greeting = createSelector(
    () => fullName(),
    (name) => `Hello, ${name}!`
  );
  const myName = createMemo(() => `${firstName()} ${lastName()}`);
  return (
    <div>
      <div>
        In Solid.js, createSelector is a function that allows you to create a
        memoized selector function. A selector function is a function that
        computes a derived value based on one or more other values. It's similar
        to createComputed, but the key difference is that a selector function
        only recomputes its value if any of its dependencies have changed.
        <br />
        The use of createSelector is to optimize the performance of your
        application by avoiding unnecessary recomputations. By using a memoized
        selector function, you can ensure that your application only updates the
        parts that have actually changed, rather than re-rendering the entire
        component tree.
      </div>
      <h2>createSelector</h2>
      <p>First name: {firstName()}</p>
      <p>Last name: {lastName()}</p>
      <p>Full name: {fullName()}</p>
      <p>Greeting: {greeting()}</p>
      <p>myName is : {myName()}</p>
    </div>
  );
}

export default createSelectorPage;
