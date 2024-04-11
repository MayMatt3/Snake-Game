import IWorldView from "./IWorldView";
import WorldModel from "./WorldModel";

/**
 * Represents a world view using a canvas to display the game world
 * Implements the IWorldView interface
 */
class CanvasWorldView implements IWorldView {
  private scalingFactor: number;
  private worldCanvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  /**
   * Creates a new CanvasWorldView
   * @param scalingFactor - The scaling factor to adjust the size of elements on the canvas
   */
  constructor(scalingFactor: number) {
    this.scalingFactor = scalingFactor;
    this.worldCanvas = document.createElement("canvas");
    this.context = this.worldCanvas.getContext("2d")!;
    document.body.appendChild(this.worldCanvas);
  }

  /**
   * Displays the game world on the canvas based on the world model
   */
  display(worldModel: WorldModel): void {
    this.worldCanvas.width = worldModel.width * this.scalingFactor;
    this.worldCanvas.height = worldModel.height * this.scalingFactor;
    // Clear the canvas
    this.context.clearRect(
      0,
      0,
      this.worldCanvas.width,
      this.worldCanvas.height,
    );
    // Render the snake
    const snake = worldModel.snake;
    this.context.fillStyle = "red"; // color of the snake
    this.context.fillRect(
      snake.position.x * this.scalingFactor,
      snake.position.y * this.scalingFactor,
      this.scalingFactor,
      this.scalingFactor,
    );
  }
}

export default CanvasWorldView;
