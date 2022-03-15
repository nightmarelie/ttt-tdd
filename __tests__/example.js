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
});
