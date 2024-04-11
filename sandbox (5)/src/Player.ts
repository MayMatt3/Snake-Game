import display from "./display";
import SnakeController from "./SnakeController";

/**
 * Represents a player in the game
 */
abstract class Player {
  protected sc: SnakeController;

  /**
   * Creates a new player
   * @param snakecontroller - the snake controller represents the player's interaction with the game
   */
  constructor(sc: SnakeController) {
    this.sc = sc;
  }

  abstract makeTurn(): void;
}

export default Player;
