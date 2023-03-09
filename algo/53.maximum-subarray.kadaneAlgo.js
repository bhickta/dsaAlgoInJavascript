/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let n = nums.length;
    let currSumSubArray = 0;
    let maxSum = -Infinity; // updated to negative infinity to handle arrays with negative values   
    if (n == 1) {
        return nums[0];
    } else {
        for (let i = 0; i < n; i++) {
            currSumSubArray += nums[i];
            maxSum = Math.max(maxSum, currSumSubArray);
            currSumSubArray = Math.max(currSumSubArray, 0);
        }
        return maxSum;
    }
};

// @lc code=end

