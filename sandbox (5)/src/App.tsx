import "./App.css";
import "./App.css";
import Snake from "./Snake";
import display from "./display";
import { useEffect } from "react";

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
    const redSnake = new Snake();
    const blueSnake = new Snake();
    redSnake.move(1);
    redSnake.move(3);
    redSnake.turn();
    blueSnake.move(4);
    blueSnake.move(2);
    blueSnake.turn();
    display("Red snake moved a total of:", redSnake.positions, "squares");
    display("Blue snake moved a total of:", blueSnake.positions, "squares");
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre id="output">
        OUTPUT: <br />
      </pre>
    </div>
  );
}
