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
    if (this._isSellFree(x, y)) {
      this._throwException("Cell is already taken");
    }

    this._board[x][y] = this._userMoveSymbol;
  }

  _isSellFree(x, y) {
    return this._board[x][y];
  }

  _throwException(msg) {
    throw new Error(msg);
  }
}

export { Game };
