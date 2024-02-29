import IWorldView from "./IWorldView";
import WorldModel from "./WorldModel";

class CanvasWorldView implements IWorldView {
  private scalingFactor: number;
  private worldCanvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(scalingFactor: number) {
    this.scalingFactor = scalingFactor;
    this.worldCanvas = document.createElement("canvas");
    this.context = this.worldCanvas.getContext("2d")!;
    document.body.appendChild(this.worldCanvas);
  }

  display(worldModel: WorldModel): void {
    this.worldCanvas.width = worldModel.width * this.scalingFactor;
    this.worldCanvas.height = worldModel.height * this.scalingFactor;

    const snake = worldModel.snake();
    this.context.fillStyle = "red"; // color of the snake
    this.context.fillRect(
      snake.position.x() * this.scalingFactor,
      snake.position.y() * this.scalingFactor,
      this.scalingFactor,
      this.scalingFactor,
    );
  }
}

export default CanvasWorldView;
