class DomController {
  constructor({ root, game }) {
    this.game = game;
    this.rootNode = document.querySelector(root);
  }

  createTable(rows = 0, cols = 0) {
    const child = document.createElement("table");
    this.rootNode.appendChild(child);

    const table = this.rootNode.querySelector("table");

    for (let i = 0; i < rows; i++) {
      const row = table.insertRow(i);

      for (let j = 0; j < cols; j++) {
        const cell = row.insertCell(j);
        cell.addEventListener("click", this._handleCellClick.bind(this, i, j));
      }
    }
  }

  _handleCellClick(row, col) {
    this.lastClickedIndices = [row, col];
    try {
      this._makeUserMove(row, col);
    } catch (e) {
      window.alert(e.message);
    }
  }

  _makeUserMove(row, col) {
    this.game.acceptUserMove(row, col);
  }
}

export { DomController };
