/**
 * K-th Smallest Prime Fraction
 */
let kthSmallestPrimeFraction = function (arr, k) {
  let l = 0, r = 1;
  let p = 0, q = 1;
  for (let n = arr.length, cnt = 0; true; cnt = 0, p = 0) {
    let middle = (l + r) / 2;
    for (let i = 0, j = n - 1; i < n; i++) {
      while (j >= 0 && arr[i] > middle * arr[n - 1 - j]) {
        j--;
      }
      cnt += (j + 1);
      if (j >= 0 && p * arr[n - 1 - j] < q * arr[i]) {
        p = arr[i];
        q = arr[n - 1 - j];
      }
    }
    if (cnt < k) {
      l = middle;
    } else if (cnt > k) {
      r = middle;
    } else {
      return [p, q];
    }
  }
};

let arr = [1, 2, 3, 5], k = 3;
let res = kthSmallestPrimeFraction(arr, k);
console.log(res);
