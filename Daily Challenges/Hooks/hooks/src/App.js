import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [x, setX] = useState(0);

  return (
    <div>
      <h1>X is {x}</h1>
      <button
        onClick={() => {
          setX(x + 1);
        }}
      >
        X go up
      </button>
      <button
        onClick={() => {
          setX(x - 1);
        }}
      >
        X go down
      </button>
    </div>
  );
}

export default App;
