//your JS code here. If required.
function daysOfAYear(year) {
	const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
	return isLeapYear ? 366 : 365;
}