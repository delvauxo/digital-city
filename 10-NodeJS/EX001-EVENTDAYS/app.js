// prochain vendredi 13
// get 

// get current date
// get month
// for each month get 13th and the correspondant day of the week
// if getDate
// return date and day of the week 

const date = new Date();
console.log(date);

const currentDate = date.getDate();

const currentDay = date.getDay();
console.log(currentDay);

let currentMonth = date.getMonth();
console.log(currentMonth);

let currentYear = date.getFullYear();
console.log(currentYear);

let dateToCheck = new Date(currentYear, currentMonth, date);

while (currentMonth < 11) {

    if (currentDate === 13 && currentDay === 5) {
        console.log('Le prochain vendredi 13 est ' + );
    }
    currentMonth++;
}


new Date(2022, currentMonth, 13);