import display from "./display";
import Snake from "./Snake";

class WorldModel {
  private snake: Snake;
  private width: number;
  private height: number;

  constructor(snake: Snake, width: number, height: number) {
    this.snake = snake;
    this.width = width;
    this.height = height;
  }

  update(steps: number) {
    this.snake.move(steps);
  }

  public get Snake() {
    return this.snake;
  }

  get width(): number {
    return this.width;
  }

  get height(): number {
    return this.height;
  }
}

export default WorldModel;
