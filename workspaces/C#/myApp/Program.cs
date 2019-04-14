using System;

namespace myApp {
    class Program {
        static void Main (string[] args) {
            int[] result = TwoSum (new int[] { 2, 7, 11, 15 }, 9);
            Console.WriteLine (TwoSum (new int[] { 2, 7, 11, 15 }, 9));
        }

        static int[] TwoSum (int[] nums, int target) {
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

}
