import WorldModel from "./WorldModel";

interface IWorldView {
  displayWorld(worldModel: WorldModel): void;
}

export default IWorldView;
