import { describe, test, expect } from "@jest/globals";
import jsdom from "jsdom";

import { Game } from "../src/Game";

const { JSDOM } = jsdom;
const dom = new JSDOM('<html><body id="root"></body></html>');

global.window = dom.window;
global.document = dom.window.document;

describe("DOM controller", () => {
  test("creates empty table", () => {
    const domController = new DomController("#root");

    domController.createTable();

    expect(document.querySelectorAll("table").length).toBe(1);
  });
});

class DomController {
  constructor(root) {
    this.rootNode = document.querySelector(root);
  }

  createTable() {
    const child = document.createElement("table");
    this.rootNode.appendChild(child);
  }
}
