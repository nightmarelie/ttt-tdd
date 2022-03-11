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
});
