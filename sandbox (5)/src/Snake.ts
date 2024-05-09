// eslint-disable-next-line
import display from "./display";
import Point from "./Point";

// place your code on line 5 above the export statement below

/**
 * Class represents a snake in the game
 */
class Snake {
  private direction_: string;
  private size: number;
  private startPosition_: Point;
  private currentParts: Point[];

  /**
   * create a snake
   */
  constructor(startPoistion: Point = new Point(0, 0), size: number = 10) {
    //this.currentPosition = 0;
    //this.currentDirection = 1;
    this.startPosition_ = startPoistion; //the starting position of the snake's head.
    this.size = size; //the length of the snake
    this.currentParts = [this.startPosition_];
    this.direction_ = "right";

    /**
     * An array of points representing the snake's body segments
     * The first element represents the head
     */

    for (let i = 1; i < this.size; i++) {
      this.currentParts[i] = new Point(
        this.currentParts[i - 1].x - 1,
        this.currentParts[i - 1].y,
      );
    }
  }

  /**
   * moves the snake by updating the head position based on its direction and then shifting the tail segments.
   */
  move(squares: number) {
    for (let i = this.size - 1; i > 0; i--) {
      this.currentParts[i] = this.currentParts[i - 1];
    }

    if (this.direction_ === "up")
      this.currentParts[0] = new Point(
        this.position.x,
        this.position.y - squares,
      );
    else if (this.direction_ === "down")
      this.currentParts[0] = new Point(
        this.position.x,
        this.position.y + squares,
      );
    else if (this.direction_ === "left")
      this.currentParts[0] = new Point(
        this.position.x - squares,
        this.position.y,
      );
    else if (this.direction_ === "right")
      this.currentParts[0] = new Point(
        this.position.x + squares,
        this.position.y,
      );
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
    } else {
      this.currentDirection = 1;
    }
  }*/

  didCollide(s: Snake) {
    // Check collision with other snake's body parts. (occurs if the head of the snake overlaps with any part of another snake.)
    for (const part of s.currentParts.slice(1)) {
      if (this.position.equals(part)) {
        return true;
      }
    }

    // Check collision with its own tail
    for (const part of this.currentParts.slice(1)) {
      if (this.position.equals(part)) {
        return true;
      }
    }

    return false;
  }

  /**
   * gets the current position of the snake's head (the first element in currentParts).
   */
  public get position() {
    return this.currentParts[0];
  }

  /**
   * gets the current direction of the snake
   */
  public get direction() {
    return this.direction_;
  }
}

export default Snake;
