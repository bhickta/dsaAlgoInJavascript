 /*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const com = nums.indexOf(target - nums[i])
        if (com !== -1 && com !== i) { return [com, i] }
    }
};
// @lc code=end

