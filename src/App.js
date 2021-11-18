import React, { useState } from "react";
import classes from "./App.module.css";

const App = () => {
  const [count, setCount] = useState(100);
  const glass = document.getElementById("glass");
  const handleDrink = () => {
    setCount(count - 10);
    if (count <= 10) {
      glass.style.backgroundColor = "white";
      setCount(0);
    } else {
      glass.style.background = "red";
    }
  };

  const handleRefill = () => {
    setCount(100);
    glass.style.background = "red";
  };

  return (
    <div>
      <div className={classes.glass} id="glass"></div>
      {count === 100 ? "Full!" : count === 0 ? "Empty!" : `${count}%`}
      <br />
      <br />
      <button onClick={() => handleDrink()}>Drink</button>
      <button onClick={() => handleRefill()}>Refill</button>
    </div>
  );
};

export default App;
