/**
 * Performs a binary search on a sorted array and returns the found element or undefined if not found.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} arr - The sorted array to search.
 * @param {(a: T, b: T) => number} compare - A comparison function that takes two elements and returns:
 *   - A negative number if the first element is less than the second.
 *   - Zero if the first element is equal to the second.
 *   - A positive number if the first element is greater than the second.
 * @returns {T | undefined} - The found element or undefined if not found.
 */
const binarySearch = <T>(
  arr: T[],
  search: T,
  compare: (a: T, b: T) => number,
): number => {
  if (arr.length === 0) {
    return -1;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const comparison = compare(arr[middle], search);

    if (comparison < 0) {
      left = middle + 1;
    } else if (comparison > 0) {
      right = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
};

export default binarySearch;
