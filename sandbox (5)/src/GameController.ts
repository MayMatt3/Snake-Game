import WorldModel from "./WorldModel";
import Player from "./Player";

class GameController {
  private world: WorldModel;
  public player1: Player;
  public player2: Player;

  constructor(world: WorldModel) {
    this.world = world;
  }

  setPlayer1(player: Player) {
    this.player1 = player;
  }
  setPlayer2(player: Player) {
    this.player2 = player;
  }

  private lastTime: number = 0;

  run(): void {
    let lastTime = 0;
  }
}

export default GameController;
