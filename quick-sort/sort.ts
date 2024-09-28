/**
 * Sorts an array using the Quick Sort algorithm.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} arr - The array to be sorted.
 * @param {(a: T, b: T) => number} compare - A comparison function that defines the sort order.
 *        It should return a negative number if `a` should come before `b`,
 *        zero if `a` and `b` are equal, and a positive number if `a` should come after `b`.
 * @returns {T[]} - The sorted array.
 */
const quickSort = <T>(arr: T[], compare: (a: T, b: T) => number): T[] => {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left: T[] = [];
  const right: T[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (compare(arr[i], pivot) < 0) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left, compare), pivot, ...quickSort(right, compare)];
};

export default quickSort;
