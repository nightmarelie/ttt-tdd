import { Game } from "../src/game";

describe("Game", () => {
  it("should return empty game board", () => {
    const game = new Game();

    const board = game.getState();

    expect(board).toEqual([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });
});
