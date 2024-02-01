import display from "./display";
import Snake from "./Snake";

class WorldModel {
  private snake: Snake;
  public width: number;
  public height: number;

  constructor(snake: Snake, passedHidth: number, passedHeight: number) {
    this.snake = snake;
    this.width = passedWidth;
    this.height = passedHeight;
  }

  update(steps: number) {
    this.snake.move(steps);
  }

  public get Snake() {
    return this.snake;
  }

  get passedWidth(): number {
    return this.width;
  }

  get passedHeight(): number {
    return this.height;
  }
}

export default WorldModel;
