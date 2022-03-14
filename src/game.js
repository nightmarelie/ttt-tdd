class Game {
  constructor() {
    this._userMoveSymbol = "x";
    this._computerMoveSymbol = "o";
    this._userName = "user";
    this._computerName = "computer";
    this._history = [];
    this._fieldSize = 3;
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
    const freeCells = this._board.reduce(
      (total, row) =>
        row.reduce((count, el) => (el === "" ? ++count : count), total),
      0
    );

    if (!freeCells) return;

    let x = this._getRandomCoordinate();
    let y = this._getRandomCoordinate();

    while (!!this._board[x][y]) {
      x = this._getRandomCoordinate();
      y = this._getRandomCoordinate();
    }

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

  _getRandomCoordinate() {
    return Math.floor(Math.random() * (this._fieldSize - 0));
  }
}

export { Game };
