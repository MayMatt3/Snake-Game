import Player from "./Player";
import SnakeController from "./SnakeController";

class AvoidWallsPlayer extends Player {
  constructor(sc: SnakeController) {
    super(sc);
  }

 makeTurn() {
    if (
      this.sc.snakePosition.x === 0 &&
      this.sc.snakeDirection === "left" &&
      this.sc.snakePosition.y < this.sc.worldHeight / 2
    ) {
      this.sc.turnSnakeLeft();
    } else if (
      this.sc.snakePosition.x === 0 &&
      this.sc.snakeDirection === "left"
    ) {
      this.sc.turnSnakeRight();
    } else if (
      this.sc.snakePosition.x === 50 &&
      this.sc.snakeDirection === "right" &&
      this.sc.snakePosition.y < this.sc.worldHeight / 2
    ) {
      this.sc.turnSnakeRight();
    } else if (
      this.sc.snakePosition.x === 50 &&
      this.sc.snakeDirection === "right"
    ) {
      this.sc.turnSnakeLeft();
    } else if (
      this.sc.snakePosition.y === 0 &&
      this.sc.snakeDirection === "down" &&
      this.sc.snakePosition.x < this.sc.worldWidth / 2
    ) {
      this.sc.turnSnakeLeft();
    } else if (
      this.sc.snakePosition.y === 0 &&
      this.sc.snakeDirection === "down"
    ) {
      this.sc.turnSnakeRight();
    } else if (
      this.sc.snakePosition.y === 50 &&
      this.sc.snakeDirection === "up" &&
      this.sc.snakePosition.y < this.sc.worldWidth / 2
    ) {
      this.sc.turnSnakeLeft();
    } else if (
      this.sc.snakePosition.y === 50 &&
      this.sc.snakeDirection === "up"
    ) {
      this.sc.turnSnakeRight();
    }
  }
}
export default AvoidWallsPlayer;
