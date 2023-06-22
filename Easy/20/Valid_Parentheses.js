/**
 * Valid Parentheses
 */
let isValid = function (s) {
  let map = new Map();
  map.set('(', ')');
  map.set('{', '}');
  map.set('[', ']');
  let queue = [];
  for (const str of s) {
    if (map.has(str)) {
      queue.push(str);
    } else {
      if (map.get(queue[queue.length - 1]) != str) {
        return false;
      }
      queue.pop();
    }
  }
  return queue.length === 0;
};
let s = '(]';
let res = isValid(s);
console.log(res);
