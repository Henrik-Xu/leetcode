/**
 * 4Sum
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i + 3 < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        for (let j = i + 1; j + 2 < nums.length; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) continue;
            let third = i + 2, fourth = nums.length - 1;
            while (third < fourth) {
                let sum = nums[i] + nums[j] + nums[third] + nums[fourth];
                if (sum == target) {
                    res.push([nums[i], nums[j], nums[third], nums[fourth]]);
                    third++;
                    fourth--;
                    while (third < fourth && nums[third] == nums[third - 1]) {
                        third++;
                    }
                    while (third < fourth && nums[fourth] == nums[fourth + 1]) {
                        fourth--;
                    }
                } else if (sum > target) {
                    fourth--;
                } else {
                    third++;
                }
            }
        }
    }
    return res;
};

let nums =
[2,2,2,2,2],target=8;
let res=fourSum(nums,target);
console.log(res);