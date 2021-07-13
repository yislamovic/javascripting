const talkingCalendar = function (date) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let year = '';
  let month = '';
  let day = '';
  let ordinalSuffix = function (days) {
    let ordinals = ['th', 'st', 'nd', 'rd'];
    let day = parseInt(days);
    if (day === 1 || day === 21 || day === 31) {
      return day += ordinals[1];
    }
    else if (day === 2 || day === 22) {
      return day += ordinals[2];
    }
    else if (day === 3 || day === 23) {
      return day += ordinals[3];
    }
    else {
      return day += ordinals[0];
    }
  };
  let count = 0;
  while (count < 4) {
    year += date[count];
    count++;
  }
  count++;
  while (count < 7) {
    month += date[count];
    count++;
  }
  count++;
  while (count <= 9) {
    day += date[count];
    count++;
  }
  return months[parseInt(month) - 1] + ' ' + ordinalSuffix(day) + ', ' + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));