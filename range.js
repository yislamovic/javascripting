let range = function range(start, end, step) {
  if (start < end && end >= 0 && step >= 0) {
    let array = [start];
    let i = 1;
    while (start < end) {
      array[i] = array[i - 1] + step;
      start = start + step;
      i++;
    }
    return array;
  }
  else {
    return [];
  }
};
console.log(range(-10, 30, 6));