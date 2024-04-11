import Player from "./Player";
import SnakeController from "./SnakeController";
import IInputHandler from "./IInputHandler";

/**
 * Represents a human player in the game
 * Inherits from the Player class
 */
class HumanPlayer extends Player {
  private inputHandler: IInputHandler;
  private snakeController: SnakeController;

  /**
   * Creates a HumanPlayer
   * @param snakeController - The snake controller representing the player's interaction with the game
   * @param inputhandler - The input handler for detecting player moves
   */
  constructor(snakeController: SnakeController, inputHandler: IInputHandler) {
    super(snakeController);
    this.inputHandler = inputHandler;
    this.snakeController = snakeController;
  }

  /**
   * Makes a turn based on the player's input
   * Turns a snake left or right if corresponding input was detected
   */
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
