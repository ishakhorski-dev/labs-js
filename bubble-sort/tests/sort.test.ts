import { describe, it, expect } from "vitest";
import bubbleSort from "../sort";

describe("Bubble sort", () => {
  it("Should sort an array of numbers in ascending order", () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const sortedArr = bubbleSort(arr, (a, b) => a - b);
    expect(sortedArr).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
  });

  it("Should sort an array of strings in ascending order", () => {
    const arr = ["apple", "banana", "cherry", "date", "elderberry"];
    const sortedArr = bubbleSort(arr, (a, b) => a.localeCompare(b));
    expect(sortedArr).toEqual([
      "apple",
      "banana",
      "cherry",
      "date",
      "elderberry",
    ]);
  });

  it("Should sort an array of numbers in descending order", () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const sortedArr = bubbleSort(arr, (a, b) => b - a);
    expect(sortedArr).toEqual([9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]);
  });

  it("Should sort an array of strings in descending order", () => {
    const arr = ["apple", "banana", "cherry", "date", "elderberry"];
    const sortedArr = bubbleSort(arr, (a, b) => b.localeCompare(a));
    expect(sortedArr).toEqual([
      "elderberry",
      "date",
      "cherry",
      "banana",
      "apple",
    ]);
  });
});
