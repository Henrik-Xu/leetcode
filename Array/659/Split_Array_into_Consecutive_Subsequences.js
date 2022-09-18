/**
 * Split Array into Consecutive Subsequences
 */
let isPossible = function (nums) {
  let avaliableMap = new Map();
  let wantMap = new Map();
  for (const num of nums) {
    if (avaliableMap.has(num)) {
      avaliableMap.set(num, avaliableMap.get(num) + 1);
    } else {
      avaliableMap.set(num, 1);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (avaliableMap.get(nums[i]) <= 0) continue;

    if (wantMap.has(nums[i]) && wantMap.get(nums[i]) > 0) {
      avaliableMap.set(nums[i], avaliableMap.get(nums[i]) - 1);

      wantMap.set(nums[i], wantMap.get(nums[i]) - 1);

      if (wantMap.has(nums[i] + 1)) {
        wantMap.set(nums[i] + 1, wantMap.get(nums[i] + 1) + 1);
      } else {
        wantMap.set(nums[i] + 1, 1);
      }
    } else if (avaliableMap.has(nums[i] + 1) && avaliableMap.get(nums[i] + 1) > 0 && avaliableMap.has(nums[i] + 2) && avaliableMap.get(nums[i] + 2) > 0) {
      avaliableMap.set(nums[i], avaliableMap.get(nums[i]) - 1);
      avaliableMap.set(nums[i] + 1, avaliableMap.get(nums[i] + 1) - 1);
      avaliableMap.set(nums[i] + 2, avaliableMap.get(nums[i] + 2) - 1);

      if (wantMap.has(nums[i] + 3)) {
        wantMap.set(nums[i] + 3, wantMap.get(nums[i] + 3) + 1);
      } else {
        wantMap.set(nums[i] + 3, 1);
      }
    } else {
      return false;
    }
  }
  return true;
};
let nums = [1, 2, 3, 4, 4, 5];
let res = isPossible(nums);
console.log(res);
