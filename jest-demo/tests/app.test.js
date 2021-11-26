const app = require("../app");

describe("slide one", () => {
  test("add 2 + 3 = 5?", () => {
    expect(app.add(2, 3)).toBe(5);
  });

  test("returns a non null value", () => {
    expect(app.notNull()).not.toBeNull;
  });

  test("returns True", () => {
    expect(app.isTrue()).toBeTruthy;
  });

  test("Object contains two expected values (hi, hello)", () => {
    expect(app.twoProps("hi", "hello")).toHaveProperty("val1", "hi");
    expect(app.twoProps("hi", "hello")).toHaveProperty("val2", "hello");
  });
});

describe("slide two", () => {
  test(`5 becomes "5"`, () => {
    expect(app.numToString(5)).toBe("5");
  });

  test("third planet is earth", () => {
    expect(app.returnPlanet(3)).toBe("Earth");
  });

  test("there are five students in class", () => {
    expect(app.countStudents([true, true, true, true, false, true])).toBe(5);
  });
  test("sqrDigits 251 = 4251", () => {
    expect(app.sqrDigits(251)).toBe(4251);
  });
});
