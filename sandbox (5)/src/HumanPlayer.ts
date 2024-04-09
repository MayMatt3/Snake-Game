import Player from "./Player";
import SnakeController from "./SnakeController";
import IInputHandler from "./IInputHandler";

class HumanPlayer extends Player {
  private inputHandler: IInputHandler;
  private snakeController: SnakeController;

  constructor(snakeController: SnakeController, inputHandler: IInputHandler) {
    super(snakeController);
    this.inputHandler = inputHandler;
    this.snakeController = snakeController;
  }

  makeTurn(): void {
    if (this.inputHandler.madeLeftMove()) {
      this.snakeController.turnSnakeLeft();
      this.inputHandler.resetLeftMove();
    } else if (this.inputHandler.madeRightMove()) {
      this.snakeController.turnSnakeRight();
      this.inputHandler.resetRightMove();
    }
  }
}

export default HumanPlayer;
