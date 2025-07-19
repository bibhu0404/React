import { useState } from "react";

function App() {
  var count = 0;
  let [counter, setCounter] = useState(count);
  function addOne() {
      setCounter(counter + 1);
  }
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button
        onClick={addOne}
      >Add</button>
      <button
        onClick={() => setCounter(counter - 1)}
      >Remove</button>
    </>
  )
}

export default App
