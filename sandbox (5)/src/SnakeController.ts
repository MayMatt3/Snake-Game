import display from "./display";
import WorldModel from "./WorldModel";
import Snake from "./Snake";

/**
 * Represents the controller for the snake in the game
 */
class SnakeController {
  private snakeWorld: WorldModel;
  private slitherer: Snake;

  /**
   * Creates a new SnakeController
   * @param world - the world model representing the game world
   * @param snake - the snake representing the player
   */
  constructor(world: WorldModel, snake: Snake) {
    this.snakeWorld = world;
    this.slitherer = snake;
  }

  /**
   * Turns the snake left
   */
  turnSnakeLeft() {
    this.slitherer.turnLeft();
  }

  /**
   * Turns the snake right
   */
  turnSnakeRight() {
    this.slitherer.turnRight();
  }

  /**
   * Gets the position of the snake
   * @returns Point, the poisition of the snake
   */
  public get snakePosition() {
    return this.slitherer.position;
  }

  /**
   * Gets the direction of the snake
   * @returns The direction in which the snake is currently moving
   */
  public get snakeDirection() {
    return this.slitherer.direction;
  }

  /**
   * Gets the width of the game world
   */
  public get worldWidth() {
    return this.snakeWorld.width;
  }

  /**
   * Gets the height of the game world
   */
  public get worldHeight() {
    return this.snakeWorld.height;
  }
}

export default SnakeController;
