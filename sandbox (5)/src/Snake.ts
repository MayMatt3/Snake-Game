// eslint-disable-next-line
import display from "./display";
import Point from "./Point";

// place your code on line 5 above the export statement below

/**
 * Class represents a snake
 */
class Snake {
  //private currentPosition: number;
  //private currentDirection: number;
  private position_: Point;
  private direction_: string;
  /**
   * Create a snake
   */
  constructor() {
    //this.currentPosition = 0;
    //this.currentDirection = 1;
    this.position_ = new Point(0, 0);
    this.direction_ = "right";
  }

  /**
   * moves the snake by a number of squares based on its current direction
   */
  move(squares: number) {
    if (this.direction_ === "up")
      this.position_ = new Point(this.position.x, this.position.y - 1);
    else if (this.direction_ === "down")
      this.position_ = new Point(this.position.x, this.position.y + 1);
    else if (this.direction_ === "left")
      this.position_ = new Point(this.position.x - 1, this.position.y);
    else if (this.direction_ === "right")
      this.position_ = new Point(this.position.x + 1, this.position.y);
  }

  /**
   * turns the snake left
   */
  turnLeft() {
    if (this.direction_ === "up") this.direction_ = "left";
    else if (this.direction_ === "left") this.direction_ = "down";
    else if (this.direction_ === "down") this.direction_ = "right";
    else if (this.direction_ === "right") this.direction_ = "up";
  }

  /**
   * turns the snake right
   */
  turnRight() {
    if (this.direction_ === "up") this.direction_ = "right";
    else if (this.direction_ === "right") this.direction_ = "down";
    else if (this.direction_ === "down") this.direction_ = "left";
    else if (this.direction_ === "left") this.direction_ = "up";
  }

  /**turn() {
    if (this.currentDirection === 1) {
      this.currentDirection = -1;
    } else if (this.currentDirection === -1) {
      this.currentDirection = 1;
    }
  }*/

  /**
   * gets the current position of the snake
   */
  public get position() {
    return this.position_;
  }

  /**
   * gets the current direction of the snake
   */
  public get direction() {
    return this.direction_;
  }
}

export default Snake;
