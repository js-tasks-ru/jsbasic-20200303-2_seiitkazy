/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let resultArr = [];
  arr.map((item) => { if (item < b && item >= a) resultArr.push(item) });
  return  resultArr;
}
