import display from "./display";
import Snake from "./Snake";
import IWorldView from "./IWorldView";

/**
 * Class representing a worldModel
 */
class WorldModel {
  private snake_: Snake;
  private width_: number;
  private height_: number;
  private worldView: IWorldView | null = null;

  /**
   * Creates a worldModel
   * @param snake - the snake representing a player
   * @param width - the width of the world
   * @param height - the height of the world
   */
  constructor(snake: Snake, width: number, height: number) {
    this.snake_ = snake;
    this.width_ = 100;
    this.height_ = 100;
  }

  /**
   * Updates the worldModel for a number of steps
   * Moves the snake and updates the world view if not null
   * @param steps - the number of steps to update the worldModel
   */
  update(steps: number) {
    this.snake.move(steps);

    if (this.worldView !== null) {
      this.worldView.display(this);
    }
  }

  /**
   * Gets the snake representing the player
   */
  public get snake() {
    return this.snake_;
  }

  /**
   * gets the width of the world
   */
  get width(): number {
    return this.width_;
  }

  /**
   * gets the height of the world
   */
  get height(): number {
    return this.height_;
  }

  /**
   * Sets the world view for displaying the game world
   */
  set view(worldView: IWorldView | null) {
    this.worldView = worldView;
  }
}

export default WorldModel;
