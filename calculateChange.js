const calculateChange = function (total, cash) {
  let change = {};
  let difference = cash - total;
  if (difference % 2000 >= 0 && difference % 2000 !== difference) {
    let count = 0;
    do {
      difference -= 2000;
      count++;
    } while (difference >= 2000)
    change.twentyDollar = count;
  }
  if (difference % 1000 >= 0 && difference % 1000 !== difference) {
    let count = 0;
    do {
      difference -= 1000;
      count++;
    } while (difference >= 1000)
    change.tenDollar = count;
  }
  if (difference % 500 >= 0 && difference % 500 !== difference) {
    let count = 0;
    do {
      difference -= 500;
      count++;
    } while (difference >= 500)
    change.fiveDollar = count;
  }
  if (difference % 200 >= 0 && difference % 200 !== difference) {
    let count = 0;
    do {
      difference -= 200;
      count++;
    } while (difference >= 200)
    change.twoDollar = count;
  }
  if (difference % 100 >= 0 && difference % 100 !== difference) {
    let count = 0;
    do {
      difference -= 100;
      count++;
    } while (difference >= 100)
    change.oneDollar = count;
  }
  if (difference % 25 >= 0 && difference % 25 !== difference) {
    let count = 0;
    do {
      difference -= 25;
      count++;
    } while (difference >= 25)
    change.quarter = count;
  }
  if (difference % 10 >= 0 && difference % 10 !== difference) {
    let count = 0;
    do {
      difference -= 10;
      count++;
    } while (difference >= 10)
    change.dime = count;
  }
  if (difference % 5 >= 0 && difference % 5 !== difference) {
    let count = 0;
    do {
      difference -= 5;
      count++;
    } while (difference >= 5)
    change.nickel = count;
  }
  if (difference % 1 === 0 && difference % 1 !== difference) {
    let count = 0;
    do {
      difference -= 1;
      count++;
    } while (difference >= 1)
    change.penny = count;
  }
  return change;
};
console.log(calculateChange(1989, 4000));
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));