import display from "./display";

/**
 * Represents a point
 */
class Point {
  private xcoord: number;
  private ycoord: number;

  /**
   * Creates a new point with coordinates
   * @param x - the x-coordinate of the point
   * @param y - the y-coordinate of the point
   */
  constructor(x: number, y: number) {
    this.xcoord = x;
    this.ycoord = y;
  }

  /**
   * Gets the x-coordinate of the point
   */
  public get x() {
    return this.xcoord;
  }

  /**
   * Gets the y-coordinate of the point
   */
  public get y() {
    return this.ycoord;
  }
}

export default Point;
