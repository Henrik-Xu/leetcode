/**
 * Find the Array Concatenation Value
 */
const findTheArrayConcVal = nums => {
    let output = 0;
    let i = 0;
    let j = nums.length - 1;
  
    while (i <= j) {
      output += Number(i === j ? nums[i] : `${nums[i]}` + `${nums[j]}`);
      i++;
      j--;
    }
    return output;
  };
let nums =
[7,52,2,4];
let res=findTheArrayConcVal(nums);
console.log(res);