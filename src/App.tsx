import { useState, type ChangeEvent, type MouseEvent } from "react";
import "./App.css";
import WelcomePage from "./components/WelcomePage";

function App() {
  const [count, setCount] = useState<number>(0);
  const handleBtnClick = (event:MouseEvent<HTMLButtonElement>) => {
    console.log(`btn id=${event.currentTarget.id} clicked!`)
    setCount((prev) => prev + 1);
  };

  const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
    console.log(`input is changed to ${event.currentTarget.value}!`)
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <WelcomePage name={"aria"} age={33} number={123} />
      <p>count: {count}</p>
      <button id="click-me" onClick={handleBtnClick}>click me</button>

      <input type="text" onChange={handleInputChange} />
    </>
  );
}

export default App;
