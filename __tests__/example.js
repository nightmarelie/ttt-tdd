describe("Using mathers", () => {
  it("two plus two is four", () => {
    expect(2 + 2).toBe(4);
  });

  it("object assigment", () => {
    const data = { one: 1 };
    data["two"] = 2;

    expect(data).toEqual({
      one: 1,
      two: 2,
    });
  });

  it("null", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  it("zero", () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  it("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(5);

    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  it("adding floating point numbers", () => {
    const value = 0.1 + 0.2;

    expect(value).toBeCloseTo(0.3);
  });

  it("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });

  it("but there is a 'stop' in Christoph", () => {
    expect("Christop").toMatch(/stop/);
  });

  it("array and iterables", () => {
    const list = ["diapers", "kleenex", "trash bags", "paper towels", "milk"];

    expect(list).toContain("milk");
    expect(new Set(list)).toContain("milk");
  });
});
