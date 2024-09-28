import { describe, it, expect } from "vitest";
import binarySearch from "../search";

describe("Binary search", () => {
  it("Should find the index of an element in an array of numbers", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const index = binarySearch(arr, 5, (a, b) => a - b);
    expect(index).toBe(4);
  });

  it("Should find the index of an element in an array of strings", () => {
    const arr = ["apple", "banana", "cherry", "date", "elderberry"];
    const index = binarySearch(arr, "cherry", (a, b) => a.localeCompare(b));
    expect(index).toBe(2);
  });

  it("Should return -1 if the element is not in the array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const index = binarySearch(arr, 10, (a, b) => a - b);
    expect(index).toBe(-1);
  });

  it("Should return -1 if the array is empty", () => {
    const arr: number[] = [];
    const index = binarySearch(arr, 42, (a, b) => a - b);
    expect(index).toBe(-1);
  });

  it("Should return 0 if the array has one element that is the target", () => {
    const arr = [42];
    const index = binarySearch(arr, 42, (a, b) => a - b);
    expect(index).toBe(0);
  });
});
