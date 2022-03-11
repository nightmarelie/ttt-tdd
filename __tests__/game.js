import { Game } from "../src/game";

const initialGameBoardState = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

describe("Game", () => {
  let game;
  beforeEach(() => {
    game = new Game();
  });

  it("should return empty game board", () => {
    const game = new Game();

    const board = game.getState();

    expect(board).toEqual(initialGameBoardState);
  });

  it("writes users symbol in top left cell", () => {
    const x = 0,
      y = 0;

    game.acceptUserMove(x, y);
    const board = game.getState();

    expect(board[x][y]).toEqual("x");
  });
});
