
// get the current date
let current_date = new Date()
// get the current year
let current_year = new Date().getFullYear()
let christmas_date = new Date(current_year, 11, 25) // date index starts from 0, so 11 is December

// if the current date is after christmas, then set the christmas date to next year
if (current_date > christmas_date) {
    christmas_date.setFullYear(christmas_date.getFullYear() + 1)
}

// compute days till next Christmas
let days_till_christmas = Math.ceil((christmas_date - current_date) / (1000 * 60 * 60 * 24))    // 1000 milliseconds in a second, 60 seconds in a minute, 60 minutes in an hour, 24 hours in a day
console.log(days_till_christmas)

