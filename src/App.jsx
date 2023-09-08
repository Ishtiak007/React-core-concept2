import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./counter";
import Player from "./player";
import Friends from "./friends";

function App() {
  function clickMe() {
    alert("Button is Clicked");
  }

  const addSUm = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h3>Explore-react-core-concept-2</h3>
      <button onClick={clickMe}>Click Me</button>
      <button onClick={() => alert("Click me 2 Clicked")}>Click Me 2</button>
      <button onClick={() => addSUm(5)}>Add sum</button>
      <Counter></Counter>
      <Player></Player>
      <Friends></Friends>
    </>
  );
}

export default App;
