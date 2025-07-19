import { useState, useMemo } from 'react' //useMemo is used to memoize expensive calculations(values) and avoid unnecessary re-renders
import './App.css'

function App4() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);
  function cubeNum(num) {
    console.log("Calculation done");
    return Math.pow(num, 3);
  }
  // const result = cubeNum(number);
  const result = useMemo(()=>cubeNum(number), [number]);
  return (
    <>
      <h1>We will learn "useMemo" Here :- </h1>
      <input type= "number" value = {number} onChange={(e) => {setNumber(e.target.value)}}/>
      <h2>Cube of the number : {result}</h2>
      <button onClick={() => {setCount(count + 1)}}>Counter++</button>
      <h2>Counter : {count}</h2>
    </>
  )
}

export default App4