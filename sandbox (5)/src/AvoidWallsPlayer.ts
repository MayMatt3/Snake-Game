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
      this.sc.snakePosition.y < this.sc.worldHeight
    ) {
      this.sc.turnSnakeLeft();
    } else if (
      this.sc.snakePosition.x === -1 &&
      this.sc.snakeDirection === "right" &&
      this.sc.snakePosition.y > this.sc.worldHeight
    ) {
      this.sc.turnSnakeRight();
    }
  }
}
export default AvoidWallsPlayer;
