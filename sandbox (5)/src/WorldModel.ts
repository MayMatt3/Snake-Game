import display from "./display";
import Snake from "./Snake";
import IWorldView from "./IWorldView";

class WorldModel {
  private snake_: Snake;
  private width_: number;
  private height_: number;
  private worldView: IWorldView | null = null;

  constructor(snake: Snake, width: number, height: number) {
    this.snake_ = snake;
    this.width_ = 50;
    this.height_ = 50;
  }

  update(steps: number) {
    this.snake.move(steps);

    if (this.worldView !== null) {
      // display world if it's not null
      this.worldView.display(this);
    }
  }

  public get snake() {
    return this.snake_;
  }

  get width(): number {
    return this.width_;
  }

  get height(): number {
    return this.height_;
  }

  set view(worldView: IWorldView | null) {
    this.worldView = worldView;
  }
}

export default WorldModel;
