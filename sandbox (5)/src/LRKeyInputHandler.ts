import IInputHandler from "./IInputHandler";

/**
 * Represents an input handler for left and right arrow keys
 * Implements the IInputHandler interface
 */
class LRKeyInputHandler implements IInputHandler {
  private wasLeftArrowPushed: boolean;
  private wasRightArrowPushed: boolean;

  /**
   * Creates a LRKeyInputHandler
   * Initializes the state of left and right arrow key presses
   */
  constructor() {
    this.wasLeftArrowPushed = false;
    this.wasRightArrowPushed = false;
    window.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        this.wasLeftArrowPushed = true;
      } else if (event.key === "ArrowRight") {
        this.wasRightArrowPushed = true;
      }
    });
  }

  /**
   * Checks if a left arrow key was pressed
   * @returns True if a key was pressed, false otherwise
   */
  madeLeftMove() {
    return this.wasLeftArrowPushed;
  }

  /**
   * Checks if a right arrow key was pressed
   */
  madeRightMove() {
    return this.wasRightArrowPushed;
  }

  /**
   * Resets the state of left or right arrow key detection
   */
  resetLeftMove() {
    this.wasLeftArrowPushed = false;
  }

  resetRightMove() {
    this.wasRightArrowPushed = false;
  }
}

export default LRKeyInputHandler;
