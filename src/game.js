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

  getSize() {
    return this._fieldSize;
  }

  acceptUserMove(x, y) {
    this._updateHistory(this._userName, x, y);
    this._updateBoard(x, y, {
      symbol: this._userMoveSymbol,
    });
  }

  createComputerMove() {
    if (this._getFreeCellsCount() === 0) {
      return this._throwException("no cells available");
    }
    const [x, y] = this._getFreeRandomCoordinates();

    this._updateHistory(this._computerName, x, y);
    this._updateBoard(x, y, {
      symbol: this._computerMoveSymbol,
    });
  }

  getMoveHistory(x, y) {
    return this._history;
  }

  isWinner(player) {
    const symbol = this._getSymbolForPlayer(player);
    const range = [...Array(this._fieldSize).keys()];
    const isEqual = this._checkCellEqual(symbol);

    const horizontal = range.reduce(
      (res, i) => (isEqual(i, 0) && isEqual(i, 1) && isEqual(i, 2)) || res,
      false
    );

    const vertical = range.reduce(
      (res, i) => (isEqual(0, i) && isEqual(1, i) && isEqual(2, i)) || res,
      false
    );

    const diagonal =
      (isEqual(0, 0) && isEqual(1, 1) && isEqual(2, 2)) ||
      (isEqual(0, 2) && isEqual(1, 1) && isEqual(2, 0));

    return horizontal || vertical || diagonal || false;
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

  _getFreeRandomCoordinates() {
    let x = this._getRandomCoordinate();
    let y = this._getRandomCoordinate();

    while (!!this._board[x][y]) {
      x = this._getRandomCoordinate();
      y = this._getRandomCoordinate();
    }

    return [x, y];
  }

  _getFreeCellsCount() {
    return this._board.reduce(
      (total, row) =>
        row.reduce((count, el) => (el === "" ? ++count : count), total),
      0
    );
  }

  _getSymbolForPlayer(player) {
    return player === this._userName
      ? this._userMoveSymbol
      : this._computerMoveSymbol;
  }

  _checkCellEqual(symbol) {
    return (i, j) => this._board[i][j] === symbol;
  }
}

export { Game };
