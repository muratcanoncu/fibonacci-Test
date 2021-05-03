const fib = require("./index");
const { expect } = require("chai");

describe("fibonacci", () => {
  it("should return 0 for fibonacci of 0", () => {
    expect(fib(0)).to.equal(0);
  });
  it("should return 1 for fibonacci of 1", () => {
    expect(fib(1)).to.equal(1);
  });
  it("should return 21 for fibonacci of 8", () => {
    expect(fib(8)).to.equal(21);
  });
  it("should return 2 for fibonacci of 3", () => {
    expect(fib(3)).to.equal(2);
  });
  it("should return Error for fibonacci of hello", () => {
    expect(fib("hello")).to.equal("Error Message");
  });
  it("should return error message for fibonacci of 1.3", () => {
    expect(fib(1.3)).to.equal("Error Message");
  });
  it("should return error message for fibonacci of -2", () => {
    expect(fib(-2)).to.equal("Error Message");
  });
  it("should return error message for fibonacci of ()=>{}", () => {
    expect(fib(() => {})).to.equal("Error Message");
  });
  it("should return error message for fibonacci of null", () => {
    expect(fib(null)).to.equal("Error Message");
  });
  it("should return error message for fibonacci of bool", () => {
    expect(fib(Boolean)).to.equal("Error Message");
  });
  it("should return 10 for fibonacci of 100", () => {
    expect(fib(100)).to.equal(354224848179262000000);
  });
});
