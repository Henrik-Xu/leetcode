/**
 * Container With Most Water
 */
var maxArea = function(height) {
    let i=0,j=height.length-1,max=0;
    while (i<j) {
        max=Math.max(max,(j-i)*Math.min(height[i],height[j]));
        if (height[i]<height[j]) {
            i++;
        }else{
            j--;
        }
    }
    return max;
};
let height = [1,8,6,2,5,4,8,3,7];
let res=maxArea(height);
console.log(res);