import WorldModel from "./WorldModel";
import Player from "./Player";

/**
 * Represents the controller for the game
 */
class GameController {
  private world: WorldModel;
  private player1_: Player | null;
  private player2_: Player | null;

  constructor(world: WorldModel) {
    /**
     * Creates a GameController
     */
    this.world = world;
    this.player1_ = null;
    this.player2_ = null;
  }

  /**
   * Sets the first player of the game
   * @param player - The player representing the first player
   */
  set player1(player: Player) {
    this.player1_ = player;
  }

  /**
   * Sets the second player of the game
   * @param player - The player object representing the second player
   */
  set player2(player: Player) {
    this.player2_ = player;
  }

  private lastTime: number = 0;

  /**
   * Runs the game loop, updating game state and player actions
   */
  run(): void {
    let lastTime = 0;
    let updateFrame = (milliseconds: number) => {
      this.player1_!.makeTurn();
      this.player2_!.makeTurn();
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
