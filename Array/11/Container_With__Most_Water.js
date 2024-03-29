/**
 *  Container With Most Water
 *  Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the
 *  two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container
 *  contains the most water.
 *  Notice that you may not slant the container.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function(height) {
  let start = 0;
  let end = height.length - 1;
  let max = 0;
  while (start < end) {
    max = Math.max(max, Math.min(height[start], height[end]) * (end - start));
    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }
  return max;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let res = maxArea(height);
console.log(res);
