import { useState } from 'react' // useState lets you add React state to function components
import './App.css'

function App() {
  /*
  let color = "Red";
  const changeColorToBlue = () => {
    color = "Blue";
  }
    It only change value not ui/state
  */
  
  const [color, setColor] = useState("Red");
  const [bcolor, setbColor] = useState("Blue");
  const changeColor = () => {
    if (color == "Red") setColor("Blue");
    else setColor("Red");
    if (bcolor == "Blue") setbColor("Red");
    else setbColor("Blue");
  }
  return (
    <>
      <h1>We will learn "useState" Here :- </h1>
      <h2>My Favourite Color Is {color}</h2>
      <button onClick={changeColor}>{bcolor}</button>
    </>
  )
}

export default App
