/// <summary>
/// Complexity Analysis
/// Time Complexity : O(n^2)
/// Space Complexity: o(1)
/// </summary>
public class Solution {
  public int[] TwoSum (int[] nums, int target) {
    int length = nums.Length;
    for (int i = 0; i < length; i++) {
      int element = nums[i];
      for (int j = i + 1; j < length; j++) {
        if (target - element == nums[j]) {
          return new int[] { i, j };
        }
      }
    }
    return new int[] { 0, 0 };
  }
}
