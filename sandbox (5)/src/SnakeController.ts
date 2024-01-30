import display from "./display";
import WorldModel from "./WorldModel";
import Snake from "./Snake";

class SnakeController {
  private snakeWorld: WorldModel;
  private slitherer: Snake;

  constructor(world: WorldModel, snake: Snake) {
    this.snakeWorld = world;
    this.slitherer = snake;
  }

  turnSnakeLeft() {
    this.slitherer.turnLeft();
  }

  turnSnakeRight() {
    this.slitherer.turnRight();
  }

  public get snakePosition() {
    return this.slitherer.position;
  }

  public get snakeDirection() {
    return this.slitherer.direction;
  }

  public get worldWidth() {
    return this.snakeWorld.width;
  }

  public get worldHeight() {
    return this.snakeWorld.height;
  }
}

export default SnakeController;
