import { describe, test, expect, jest } from "@jest/globals";
import jsdom from "jsdom";

import { Game } from "../src/Game";
import { DomController } from "../src/DomController";

const createGame = (board) => new Game(board);

const createInstance = (game = {}) => {
  return new DomController({
    game: game,
    root: "#root",
  });
};

const { JSDOM } = jsdom;
const dom = new JSDOM('<html><body id="root"></body></html>');

global.window = dom.window;
global.document = dom.window.document;

describe("DOM controller", () => {
  afterEach(() => {
    window.alert = jest.spyOn(window, "alert");
    document.body.innerHTML = "";
  });

  afterEach(() => {
    window.alert.mockReset();
  });

  afterAll(() => {
    window.alert.mockRestore();
  });

  test("creates empty table", () => {
    const domController = createInstance();

    domController.createTable();

    expect(document.querySelectorAll("table").length).toBe(1);
  });

  test("creates table with 3 rows and 3 columns", () => {
    const domController = createInstance();

    domController.createTable(3, 3);

    expect(document.querySelectorAll("table").length).toBe(1);
    expect(document.querySelectorAll("tr").length).toBe(3);
    expect(document.querySelectorAll("td").length).toBe(9);
  });

  test("remembers indices of last clicked cell", () => {
    const domController = createInstance();

    domController.createTable(3, 3);
    document.querySelector("table td").click();

    expect(domController.lastClickedIndices).toEqual([0, 0]);
  });

  test("makes user move in game on cell click", () => {
    const gameMock = { acceptUserMove: jest.fn() };
    const domController = createInstance(gameMock);

    domController.createTable(3, 3);
    document.querySelector("table td").click();

    expect(domController.game.acceptUserMove).toHaveBeenCalled();
  });

  test("gets an alert when user makes move in taken cell", () => {
    const game = createGame();
    const domController = createInstance(game);

    domController.init();
    document.querySelector("table td").click();
    document.querySelector("table td").click();

    expect(window.alert).toHaveBeenCalled();
  });

  test("redraws table on cell click", () => {
    const game = createGame();
    const domController = createInstance(game);

    domController.init();
    document.querySelector("table td").click();
    const text = document.querySelector("table td").textContent;

    expect(text).toEqual("x");
  });

  test("makes computer move right after users move", () => {
    const game = createGame();
    const domController = createInstance(game);

    domController.init();
    document.querySelector("table td").click();
    const text = document.querySelector("table").textContent;

    expect(text.indexOf("o") > -1).toBe(true);
  });
});
