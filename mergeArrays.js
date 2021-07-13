let merge = function (array1, array2) {
  let sortedArray = array2.concat(array1);
  sortedArray.sort(function (a, b) { return a - b; });
  return sortedArray;
}
console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);