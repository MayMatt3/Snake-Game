import display from "./display";
import Snake from "./Snake";
import CanvasWorldView from "./CanvasWorldView";
import IWorldView from "./IWorldView";


class WorldModel {
  private snake_: Snake;
  public width_: number;
  public height_: number;
  private worldView: IWorldView;

  constructor(snake: Snake, passedHidth: number, passedHeight: number) {
    this.snake_ = snake;
    this.width_ = passedWidth;
    this.height_ = passedHeight;
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
