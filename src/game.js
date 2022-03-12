class Game {
  constructor() {
    this._board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  }
  getState() {
    return this._board;
  }

  acceptUserMove(x, y) {
    this._board[x][y] = "x";
  }
}

export { Game };
