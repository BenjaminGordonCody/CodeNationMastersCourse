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

  test('Array of names only contains "Stepahnie"', () => {
    success = ["Stephanie"];
    expect(
      app.onlyItemsOfnLength(["cath", "jess", "gorb", "Stephanie"])
    ).toEqual(success);
  });
});

describe("slide 3", () => {
  test("1705 was in the 17th century", () => {
    expect(app.centuryOf(1705)).toBe(17);
  });

  test("[0,1,0,0] translates to 4", () => {
    expect(app.binaryArrayToInt([0, 1, 0, 0])).toBe(4);
  });
});
