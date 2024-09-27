/**
 * Sorts an array using the bubble sort algorithm.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} arr - The array to be sorted.
 * @param {(a: T, b: T) => number} compare - A comparison function that defines the sort order.
 *   It should return a negative number if `a` should come before `b`, zero if they are equal,
 *   and a positive number if `a` should come after `b`.
 * @returns {T[]} A new array with the elements sorted.
 */
const bubbleSort = <T>(arr: T[], compare: (a: T, b: T) => number): T[] => {
  if (arr.length < 2) {
    return arr;
  }

  const arrCopy = arr.slice();

  for (let i = 0; i < arrCopy.length - 1; i++) {
    for (let j = 0; j < arrCopy.length - i - 1; j++) {
      if (compare(arrCopy[j], arrCopy[j + 1]) > 0) {
        [arrCopy[j], arrCopy[j + 1]] = [arrCopy[j + 1], arrCopy[j]];
      }
    }
  }

  return arrCopy;
};

export default bubbleSort;
