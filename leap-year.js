let yearGiven = 2020;

function leapYear (year){
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
      return "its leapyear";
    } else {
      return "its not";
    }

};

 console.log(leapYear(yearGiven));