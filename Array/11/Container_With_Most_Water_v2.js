/**
 * Two Pinter(for better performance)
 */

let maxArea = function(height) {
  let i = 0;
  let j = height.length - 1;
  let max = (j - i) * Math.min(height[i], height[j]);
  while (i < j) {
    if (height[i] > height[j]) {
      let right = height[j];
      j--;
      while (i < j && height[j] < right) {
        j--;
      }
    } else {
      let left = height[i];
      i++;
      while (i < j && height[i] < left) {
        i++;
      }
    }
    max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
  }
  return max;
};
