let talkingCalendar = function(date) {
  let year = '';
  let month = '';
  let day = '';
  let monthText = '';
  let dateText = '';
  for (let i = 0; i < 4; i++) {
     year += date[i];
  }
  for (let i = 5; i < 7; i++) {
    month += date[i];
  if (month === '01') {
      monthText = 'January';
    } else if (month === '02') {
      monthText = 'February';
    } else if (month === '03') {
      monthText = 'March';
    } else if (month === '04') {
      monthText = 'April';
    } else if (month === '05') {
      monthText = 'May';
    } else if (month === '06') {
      monthText = 'June';
    } else if (month === '07') {
      monthText = 'July';
    } else if (month === '08') {
      monthText = 'August';
    } else if (month === '09') {
      monthText = 'September';
    } else if (month === '10') {
      monthText = 'October';
    } else if (month === '11') {
      monthText = 'November';
    } else if (month === '12') {
      monthText = 'December';
    }
  }
  for (let i = 8; i <=9; i++) {
    day += date[i];
    if (day === '01') {
      dayText = '1st';
    } else if (day === '02') {
      dayText = '2nd';
    } else if (day === '03') {
      dayText = '3rd';
    } else {
      dayText = day + 'th';
    }
  }
  return monthText + ' ' + dayText + ', ' + year
}
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));