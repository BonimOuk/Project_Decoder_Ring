// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar");

describe("caesar", () => {
  it("should return true if the caesar is correct", () => {
    const actual = caesar("abc", 3);
    expect(actual).to.equal("def")
    
  });
});