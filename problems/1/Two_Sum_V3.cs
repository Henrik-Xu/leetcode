/// <summary>
/// Complexity Analysis
/// Time Complexity : O(n)
/// Space Complexity: o(n)
/// </summary>

using System.Collections.Generic;
public class Solution {
  public int[] TwoSum (int[] nums, int target) {
    int length = nums.Length;
    Dictionary<int, int> dic = new Dictionary<int, int> ();
    for (int i = 0; i < length; i++) {
      int element = target - nums[i];
      if (dic.ContainsKey (element)) {
        return new int[] { i, dic[element] };
      }
      if (!dic.ContainsKey (nums[i])) {
        dic.Add (nums[i], i);
      }
    }

    return new int[] { };
  }
}
