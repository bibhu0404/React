import { useState, useRef, useEffect } from 'react' //useRef is used to create a mutable object that persists for the full lifetime of the component and is used to access DOM elements or store mutable values
import './App.css'

function App3() {
  const [value, setValue] = useState(0);
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   setCount(prevCount => prevCount + 1);
  // }, [value]);

  // Use 1 : useRef to keep track of the number of renders
  const count = useRef(0);
  useEffect(() => {
    count.current += 1;
  }, [value]);

  // Use 2 : useRef to access a DOM element
  const inputRef = useRef(null);
  const btnClicked = () => {
    
    inputRef.current.style.background = "gray";
    alert(`Input Value: ${inputRef.current.value}`);
  }

  return (
    <>
      <h1>We will learn "useRef" Here :- </h1>

      <h2>Use 1 : useRef to keep track of the number of renders</h2>
      <button onClick={ () => {setValue(value => value - 1)}}> -1 </button>
      <h2>{value}</h2>
      <button onClick={ () => {setValue(value => value + 1)}}> +1 </button>
      <h2>Render Count : {count.current}</h2>

      <h2>Use 2 : useRef to access a DOM element</h2>
      <input type="text" ref={inputRef}/>
      <button onClick={btnClicked}>Click Here</button>
    </>
  )
}
 
export default App3