import { jest } from "@jest/globals";
import { Game } from "../src/game";

const userMoveSymbol = "x";
const computerMoveSymbol = "o";
const userName = "user";
const computerName = "computer";
const initialGameBoardState = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const fillCells = (game) => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i !== 2 || j !== 2) game.acceptUserMove(i, j);
    }
  }
};

const count = (arr, symbol) =>
  arr.reduce((result, row) => {
    return row.reduce((count, el) => {
      return el === symbol ? ++count : count;
    }, result);
  }, 0);

describe("Game", () => {
  let game;
  beforeEach(() => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.5);

    game = new Game();
  });

  afterEach(() => {
    jest.spyOn(global.Math, "random").mockRestore();
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

  it("saves users move in history", () => {
    const x = 1,
      y = 1;

    game.acceptUserMove(x, y);
    const history = game.getMoveHistory();

    expect(history).toEqual([{ turn: userName, x, y }]);
  });

  it("saves computers move in history", () => {
    game.createComputerMove();
    const history = game.getMoveHistory();

    expect(history).toEqual([{ turn: computerName, x: 1, y: 1 }]);
  });

  it("saves 1 users move and 1 computers move in history", () => {
    const uX = 2,
      uY = 2;

    game.acceptUserMove(uX, uY);
    game.createComputerMove();
    const history = game.getMoveHistory();

    expect(history.length).toEqual(2);
    expect(history[0].turn).toEqual(userName);
    expect(history[1].turn).toEqual(computerName);
  });

  it("computer moves in randomly choosen cell", () => {
    game.createComputerMove();
    const board = game.getState();

    expect(board[1][1]).toEqual(computerMoveSymbol);
  });

  test("computer moves in cell that is not taken", () => {
    fillCells(game);

    game.createComputerMove();
    const board = game.getState();

    expect(count(board, userMoveSymbol)).toBe(8);
    expect(count(board, computerMoveSymbol)).toBe(1);
    expect(board[2][2]).toEqual(computerMoveSymbol);
  });
});
