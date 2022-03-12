import { Game } from "../src/game";

const userMoveSymbol = "x";
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

  it("writes users symbol in cell with given coordinates", () => {
    const x = 1,
      y = 1;

    game.acceptUserMove(x, y);
    const board = game.getState();

    expect(board[x][y]).toEqual(userMoveSymbol);
  });
});
