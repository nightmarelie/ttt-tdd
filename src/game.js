class Game {
  constructor() {
    this._userMoveSymbol = "x";
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
    this._updateBoard(x, y);
  }

  _updateBoard(x, y) {
    this._board[x][y] = this._userMoveSymbol;
  }
}

export { Game };
