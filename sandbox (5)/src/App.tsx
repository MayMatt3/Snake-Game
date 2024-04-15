import "./App.css";
import "./App.css";
import Snake from "./Snake";
import display from "./display";
import { useEffect } from "react";
import WorldModel from "./WorldModel";
import CanvasWorldView from "./CanvasWorldView";
import SnakeController from "./SnakeController";
import HumanPlayer from "./HumanPlayer";
import AvoidWallsPlayer from "./AvoidWallsPlayer";
import LRKeyInputHandler from "./LRKeyInputHandler";
import GameController from "./GameController";

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    const redSnake = new Snake();
    const blueSnake = new Snake();
    redSnake.move(1);
    redSnake.move(3);
    redSnake.turnRight();
    blueSnake.move(6);
    blueSnake.move(2);
    blueSnake.turnLeft();
    const worldModel = new WorldModel(redSnake, 50, 50);
    const snakeController = new SnakeController(worldModel, redSnake);
    const player1 = new HumanPlayer(snakeController, new LRKeyInputHandler());
    const player2 = new AvoidWallsPlayer(snakeController);
    const canvasWorldView = new CanvasWorldView(10);
    worldModel.view = canvasWorldView;

    worldModel.update(1);

    const gameController = new GameController(worldModel);
    gameController.player1(player1);
    gameController.player2(player2);
    gameController.run();

    display(
      "Red snake's position is:",
      redSnake.position.x + "," + redSnake.position.y,
    );
    display("Red snake direction is:", redSnake.direction);
    display(
      "Blue snake's position is:",
      blueSnake.position.x + "," + blueSnake.position.y,
    );
    display("Blue snake direction is:", blueSnake.direction);
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
