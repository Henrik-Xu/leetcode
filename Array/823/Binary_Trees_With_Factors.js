/**
 * Binary Trees With Factors
 */
let numFactoredBinaryTrees = function (arr) {
  arr.sort((a, b) => a - b);
  let dp = new Map();
  let mod = 1e9 + 7;
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    dp.set(arr[i], 1);
    for (let j = 0; j < i; j++) {
      let temp = 0;
      if (arr[i] % arr[j] == 0) {
        if (dp.has(arr[i] / arr[j])) {
          temp = dp.get(arr[i] / arr[j]);
        }
        dp.set(arr[i], (dp.get(arr[i]) + dp.get(arr[j]) * temp) % mod);
      }
    }
    res = (res + dp.get(arr[i])) % mod;
  }
  return res;
};
let arr = [15, 13, 22, 7, 11];
let res = numFactoredBinaryTrees(arr);
console.log(res);
