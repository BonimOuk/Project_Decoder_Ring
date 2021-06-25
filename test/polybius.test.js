// Write your tests here!

const expect = require("chai").expect;
const {polybius} = require("../src/polybius");

describe("polybius", () => {
  it("should return true if polybius is correct", () => {
    const actual = polybius("abc");
    expect(actual).to.equal("112131")
    
  });
});