class Game {
  constructor() {
    this._userMoveSymbol = "x";
    this._computerMoveSymbol = "o";
    this._userName = "user";
    this._computerName = "computer";
    this._history = [];
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
    this._updateHistory(this._userName, x, y);
    this._updateBoard(x, y, {
      symbol: this._userMoveSymbol,
    });
  }

  createComputerMove() {
    const x = Math.floor(Math.random() * (3 - 0));
    const y = Math.floor(Math.random() * (3 - 0));

    this._updateHistory(this._computerName, x, y);
    this._updateBoard(x, y, {
      symbol: this._computerMoveSymbol,
    });
  }

  getMoveHistory(x, y) {
    return this._history;
  }

  _updateBoard(x, y, config) {
    if (this._isSellFree(x, y)) {
      this._throwException("Cell is already taken");
    }

    this._board[x][y] = config.symbol;
  }

  _isSellFree(x, y) {
    return this._board[x][y];
  }

  _throwException(msg) {
    throw new Error(msg);
  }

  _updateHistory(turn, x, y) {
    this._history.push({ turn, x, y });
  }
}

export { Game };
