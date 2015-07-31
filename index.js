var leapYear = require('leap-year')

function leapDay(date) {
  return (
    leapYear(date.getFullYear()) &&
    date.getMonth() === 1 &&
    date.getDate() === 29 ) }

module.exports = leapDay
