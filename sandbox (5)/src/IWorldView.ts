import WorldModel from "./WorldModel";
/**
 * Represents a view interface for displaying the game world
 * Defines a mehtod for displaying the game world based on a provided world model
 */
interface IWorldView {
  /**
   * Displays the game world based on the provided world model
   */
  display(worldModel: WorldModel): void;
}

export default IWorldView;
