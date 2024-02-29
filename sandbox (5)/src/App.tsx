import "./App.css";
import "./App.css";
import Snake from "./Snake";
import display from "./display";
import { useEffect } from "react";
import WorldModel from "./WorldModel";
import CanvasWorldView from "./CanvasWorldView";

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    const worldModel = new WorldModel(redSnake, 100, 50);
    const canvasWorldView = new CanvasWorldView(10);
    worldModel.view = canvasWorldView;
    worldModel.update(1);
    const redSnake = new Snake();
    const blueSnake = new Snake();
    redSnake.move(1);
    redSnake.move(3);
    redSnake.turn();
    blueSnake.move(4);
    blueSnake.move(2);
    blueSnake.turn();
    
    display("Red snake's x position is:", redSnake.position.x);
    display("Red snake direction is:", redSnake.directions);
    display("Blue snake's x position is:", blueSnake.position.x);
    display("Blue snake direction is:", blueSnake.directions);
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
