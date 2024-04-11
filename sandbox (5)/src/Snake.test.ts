import Snake from "./Snake";
import Point from "./Point";

describe("Snake class", () => {
  let snake: Snake;

  beforeEach(() => {
    snake = new Snake();
  });

  it("should initialize with default position and direction", () => {
    expect(snake.position).toEqual(new Point(0, 0));
    expect(snake.direction).toBe("right");
  });

  it("should move up when turning left", () => {
    snake.turnLeft();
    snake.move(1);
    expect(snake.position).toEqual(new Point(0, -1));
    expect(snake.direction).toBe("up");
  });

  it("should move down when turning right", () => {
    snake.turnRight();
    snake.move(1);
    expect(snake.position).toEqual(new Point(0, 1));
    expect(snake.direction).toBe("down");
  });
});

/**const moveSnakes = (times: number, turn: boolean = false) => {
  const redSnake = new Snake();
  const blueSnake = new Snake();
  let totalSquares = 0;

  for (let i = 0; i < times; i++) {
    const numSquares1 = Math.floor(Math.random() * 100);
    const numSquares2 = Math.floor(Math.random() * 100);
    redSnake.move(numSquares1);
    blueSnake.move(numSquares2);
    redSnake.move(5);
    totalSquares += numSquares2;
    if (turn) {
      const numSquares3 = Math.floor(Math.random() * 100);
      const numSquares4 = Math.floor(Math.random() * 10);
      redSnake.turnLeft();
      blueSnake.turnLeft();
      blueSnake.move(numSquares3);
      totalSquares -= numSquares3;
      redSnake.move(numSquares3);
      blueSnake.turnRight();
      blueSnake.turnRight();
      blueSnake.turnLeft();
      blueSnake.move(numSquares4);
      totalSquares += numSquares4;
    }
  }

  return { actual: blueSnake.position, expected: totalSquares };
};

describe("Snake Tests", function () {
  const tests = [0, 3, 10, 4].map((num, index) => moveSnakes(num, index > 2));

  const testDescriptions = [
    "starts with the correct position of 0",
    "has the correct position after 3+ random moves",
    "has the correct position after 10+ random moves",
    "has the correct position after 4+ random moves with turns",
  ];

  testDescriptions.forEach((description, index) => {
    it(description, () =>
      expect(tests[index].expected).toBe(tests[index].actual),
    );
  });
});

describe("Addition", function () {
  it("sums numbers", () => {
    expect(1 + 1).toEqual(2);
  });
});
*/

export {};
