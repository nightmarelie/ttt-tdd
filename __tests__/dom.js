import { describe, test, expect } from "@jest/globals";
import jsdom from "jsdom";

import { Game } from "../src/Game";
import { DomController } from "../src/DomController";

const createInstance = () => new DomController("#root");

const { JSDOM } = jsdom;
const dom = new JSDOM('<html><body id="root"></body></html>');

global.window = dom.window;
global.document = dom.window.document;

describe("DOM controller", () => {
  test("creates empty table", () => {
    const domController = createInstance();

    domController.createTable();

    expect(document.querySelectorAll("table").length).toBe(1);
  });
});
