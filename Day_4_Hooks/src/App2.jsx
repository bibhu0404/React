import { useEffect, useState } from 'react' //useEffect is used to perform side effects in function components
import './App.css'

function App2() {
  //useEffect(callback, dependencies) runs the callback after the component renders and whenever the dependencies change
  const [count, setCount] = useState(0);

  //Use 1 : Without dependencies, runs after every render
  useEffect(() => {
    setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  });

  //Use 2 : With empty dependencies, runs only once after the initial render
  useEffect(() => {
    setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  }, []);

  //Use 3 : With specific dependencies, runs when those dependencies change
  useEffect(() => {
    setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  }, [count]);

  return (
    <>
      <h1>We will learn "useEffect" Here :- </h1>
      <h2>I have rendered {count} times!</h2>
    </>
  )
}

export default App2