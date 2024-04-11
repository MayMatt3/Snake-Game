/**
 * Represents an interface for handling input in the game
 * Provides methods for detecting left and right moves, and resetting them
 */
interface IInputHandler {
  /**
   * Checks if a left or right move was made
   * @returns true if a left moves was made, false otherwise
   * resets the state of left and right move dectection
   */
  madeLeftMove(): boolean;
  madeRightMove(): boolean;
  resetLeftMove(): void;
  resetRightMove(): void;
}

export default IInputHandler;
