// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

describe("substitution", () => {
  it("should return true if the caesar is correct", () => {
    const actual = substitution("xoy", "xoyqmcgrukswaflnthdjpzibev", false);
    expect(actual).to.equal("abc")
    
  });
});
