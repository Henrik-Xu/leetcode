/**
 * 1-bit and 2-bit Characters
 */
let isOneBitCharacter = function (bits) {
  let ones = 0;
  for (let i = bits.length - 2; i >= 0 && bits[i] != 0; i--) {
    ones++;
  }
  return ones % 2 == 0;
};
let bits = [0, 1, 0, 1, 0];
let res = isOneBitCharacter(bits);
console.log(res);
