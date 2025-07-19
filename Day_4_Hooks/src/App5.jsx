import {  useState, useCallback } from 'react' //useCallback is used to memoize functions and avoid unnecessary re-renders
import './App.css'
import Header from './components/Header';

function App5() {
  const [count, setCount] = useState(0);
  const newFun = useCallback(() => {}, []);

  return (
    <>  
      <h1>We will learn "useCallback" Here :- </h1>
      <Header newFun = {newFun}/>
      <h2>Counter: {count}</h2>
      <button onClick={() => {setCount(count => count+1)}}>Click</button>
      <h2>Using callBack to pass a function in header component without re-rendering</h2>
    </>
  )
}

export default App5