import WorldModel from "./WorldModel";
import Player from "./Player";

class GameController {
  private world: WorldModel;
  private player1_: Player | null;
  private player2_: Player | null;

  constructor(world: WorldModel) {
    this.world = world;
    this.player1_ = null;
    this.player2_ = null;
  }

  set player1(player: Player) {
    this.player1_ = player;
  }
  set player2(player: Player) {
    this.player2_ = player;
  }

  private lastTime: number = 0;

  // runs the game
  run(): void {
    let lastTime = 0;
    let updateFrame = (milliseconds: number) => {
      this.player1.makeTurn();
      this.player2.makeTurn();
      if (milliseconds - lastTime > 250) {
        lastTime += 250;
        this.world.update(1);
      }
      requestAnimationFrame(updateFrame);
    };
    requestAnimationFrame(updateFrame);
  }
}

export default GameController;
