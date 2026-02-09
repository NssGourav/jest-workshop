const { calculateFinalAmount } = require("../src/pricing");

test("returns subtotal when no coupon is provided", () => {
  expect(calculateFinalAmount(200)).toBe(200);
});

test("applies 5% discount for subtotal >= 1000", () => {
  expect(calculateFinalAmount(1000)).toBe(950);
});

test("SAVE10", () => {
  expect(calculateFinalAmount(500, "save10")).toBe(450);
});

test("FLAT50", () => {
  expect(calculateFinalAmount(40, "FLAT50")).toBe(0);
});

test("throws error for invalid subtotal", () => {
  expect(() => calculateFinalAmount(-10)).toThrow("Invalid subtotal");
});
