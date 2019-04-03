/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const map = new Map();
  map.set('(', ')');
  map.set('[', ']');
  map.set('{', '}');

  const array = [];

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      array.push(s[i]);
    } else {
      if (map.get(array[array.length - 1]) !== s[i]) {
        return false;
      }
      array.pop();
    }
  }
  return array.length === 0;
};
