const { Penambahan, Pengurangan, Perkalian } = require("./Helper/Helper-HanselRicardo.js");
const assert = require('chai').assert;
const { Helper } = require('../src/Helper');

describe("Helper", () => {
  describe("Penambahan", () => {
    it("should return the sum of two numbers", () => {
      expect(Penambahan(2, 3)).toBe(5);
    });
  });

  describe("Pengurangan", () => {
    it("should return the difference of two numbers", () => {
      expect(Pengurangan(5, 3)).toBe(2);
    });
  });

  describe("Perkalian", () => {
    it("should return the product of two numbers", () => {
      expect(Perkalian(2, 3)).toBe(6);
    });
  });
});
