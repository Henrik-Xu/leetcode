/**
 * Roman to Integer
 */
let romanToInt = s =>
  [...s].reduce(
    (accumulator, currentValue, currentIndex, arr) =>
      accumulator + toNum(currentValue, arr[currentIndex + 1]), 0
  );

let toNum = (str, nextStr) => {
  if (str === 'M') {
    return 1000;
  } else if (str === 'D') {
    return 500;
  } else if (str === 'L') {
    return 50;
  } else if (str === 'V') {
    return 5;
  } else if (str === 'I') {
    return (nextStr === 'V' || nextStr === 'X') ? -1 : 1;
  } else if (str === 'X') {
    return (nextStr === 'L' || nextStr === 'C') ? -10 : 10;
  } else if (str === 'C') {
    return (nextStr === 'D' || nextStr === 'M') ? -100 : 100;
  }
}
let s = "MCMXCIV";
let res = romanToInt(s);
console.log(res);
