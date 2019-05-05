/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let arr1 = Array.from(a);
  let arr2 = Array.from(b);

  // let length = arr2.length - 1;
  let bit = 0;
  let newArr = [];
  let length = Math.max(arr1.length, arr2.length);
  while (length > 0) {
    let element = arr1.pop();
    let element2 = arr2.pop();

    element = element == undefined ? 0 : parseInt(element);
    element2 = element2 == undefined ? 0 : parseInt(element2);

    newArr.unshift((element + element2 + bit) % 2);
    bit = parseInt((element + element2 + bit) / 2);
    length--;
  }
  if (bit > 0) {
    newArr.unshift(bit);
  }

  return newArr.join('');
};

console.log(addBinary('1', '111'));
