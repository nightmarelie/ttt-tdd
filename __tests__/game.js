import { Game } from "../src/game";

const userMoveSymbol = "x";
const computerMoveSymbol = "o";
const userName = "user";
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

  it("throws an exception if user moves in taken cell", () => {
    const x = 2,
      y = 2;

    game.acceptUserMove(x, y);
    const func = game.acceptUserMove.bind(game, x, y);

    expect(func).toThrow("Cell is already taken");
  });

  it("computer moves in a cell with given coordinates", () => {
    const x = 0,
      y = 0;

    game.createComputerMove(x, y);
    const board = game.getState();

    expect(board[x][y]).toEqual(computerMoveSymbol);
  });

  it("saves users move in history", () => {
    const x = 1,
      y = 1;

    game.acceptUserMove(x, y);
    const history = game.getMoveHistory();

    expect(history).toEqual([{ turn: userName, x, y }]);
  });
});
