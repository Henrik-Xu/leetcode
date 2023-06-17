/**
 * Boats to Save People
 */
let numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let low = 0, high = people.length - 1;
  let boat = 0;
  while (low <= high) {
    if (people[low] + people[high] <= limit) {
      low++;
      high--;
    } else {
      high--;
    }
    boat++;
  }
  return boat;
};
let people = [3, 2, 2, 1], limit = 3;
let res = numRescueBoats(people, limit);
console.log(res);
