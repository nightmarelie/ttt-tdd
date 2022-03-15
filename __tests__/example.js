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
});
