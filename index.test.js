// NOTE - Tulis kode pengujian disini
// Path: test.index.js
// ! Dont change this code
const { capitalize, filterOddNumber, epochDateToUTC } = require("./index");
const { expect, describe, test } = require("@jest/globals");

// @ Capitalize
// ! Write Minimum 4 different test case, with different matcher for capitalize
/**
 * Example input param = "hello"
 * Expected output = "Hello"
 */
describe("Capitalize", () => {
  test("should return uppercased Hello", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  test("should capitalize a single letter", () => {
    expect(capitalize("a")).toEqual("A");
  });
  test("should handle strings with leading/trailing spaces", () => {
    expect(capitalize("   test   ")).toEqual("   test   ");
  });
  test("should return empty string for empty input", () => {
    expect(capitalize("")).toBe("");
  });
});

// @ FilterOddNumber
// ! Try to check the filterOddNumber function, and repair the function  done

describe("FilterOddNumber", () => {
  it("should return [2,4]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });

  it("should return []", () => {
    expect(filterOddNumber([1, 3, 5, 7, 9])).toEqual([]);
  });
  it("should return an empty array for an empty input array", () => {
    expect(filterOddNumber([])).toEqual([]);
  });
  it("should return the same array if all elements are even", () => {
    expect(filterOddNumber([2, 4, 6, 8, 10])).toEqual([2, 4, 6, 8, 10]);
  });
});

// @ EpochDateToUTC
// ! Write Minimum 4 different test case for epochDateToUTC
/**
 * Example input param = 0
 * Expected output = Thu, 01 Jan 1970 00:00:00 GMT
 */
describe("EpochDateToUTC", () => {
  it("should return Thu, 01 Jan 1970 00:00:00 GMT", () => {
    expect(epochDateToUTC(0)).toEqual("Thu, 01 Jan 1970 00:00:00 GMT");
  });
  it("should return Sat, 13 Mar 2021 12:34:56 GMT", () => {
    expect(epochDateToUTC(1615637696)).toMatch("Sat, 13 Mar 2021");
  });
  it("should return Tue, 27 Nov 2018 18:45:30 GMT", () => {
    expect(epochDateToUTC(1543327530)).toMatch("Tue, 27 Nov 2018");
  });
  it("should return Fri, 23 Sep 2016 09:45:30 GMT", () => {
    expect(epochDateToUTC(1474616730)).toMatch("Fri, 23 Sep 2016");
  });

  // write another 3 test case here!
});

