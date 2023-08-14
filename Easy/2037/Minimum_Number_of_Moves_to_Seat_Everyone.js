/**
 * Minimum Number of Moves to Seat Everyone
 */
var minMovesToSeat = function(seats, students) {
    seats.sort((a, b) => { return a - b})
    students.sort((a, b) => { return a - b})
    return seats.reduce((a, b, i) => a += Math.abs(seats[i] - students[i]), 0)
};