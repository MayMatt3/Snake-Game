import display from "./display";
import Snake from "./Snake";
import IWorldView from "./IWorldView";

/**
 * Class representing a worldModel of the game
 */
class WorldModel {
  private allSnakes_: Snake[];
  private width_: number;
  private height_: number;
  private allViews_: IWorldView[];

  /**
   * Creates a worldModel
   * @param snake - the snake representing a player
   * @param width - the width of the world
   * @param height - the height of the world
   */
  constructor(snake: Snake, width: number, height: number) {
    this.allSnakes_ = [];
    this.allViews_ = [];
    this.width_ = 100;
    this.height_ = 100;
  }

  addSnake(snake: Snake) {
    this.allSnakes_.push(snake);
  }

  addView(view: IWorldView) {
    this.allViews_.push(view);
  }

  /**
   * Updates the worldModel for a number of steps
   * Moves the snake and updates the world view if not null
   * @param steps - the number of steps to update the worldModel
   */
  update(steps: number): void {
    for (let i = 0; i < this.allSnakes.length; i++) {
      this.allSnakes_[i].move(steps);
    }

    // Update all views with reference to this WorldModel
    for (const view of this.allViews_) {
      view.display(this);
    }
  }

  /**
   * Gets an array containing all the snake objects representing players.
   */
  get allSnakes() {
    return this.allSnakes_;
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
  /*set view(worldView: IWorldView | null) {
    this.worldView = worldView;
  }*/
}

export default WorldModel;
