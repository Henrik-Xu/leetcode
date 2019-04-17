var countAndSay = function(n) {
  let result = '1';
  for (let i = 1; i < n; i++) {
    let count = 1;
    /*
     * let arr=Array.from(result); Memory Usage: 36.3 MB, less than 17.60% of JavaScript online submissions for Count and Say.
     * let arr = result.split(''); Memory Usage: 35.2 MB, less than 82.40% of JavaScript online submissions for Count and Say.
     * compare ?
     */
    let arr = result.split('');

    result = '';
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == arr[i + 1]) {
        count++;
      } else {
        result += count.toString() + arr[i];
        count = 1;
      }
    }
  }
  return result;
};
