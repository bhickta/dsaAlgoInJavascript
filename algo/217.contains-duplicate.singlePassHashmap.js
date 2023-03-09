/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let hash = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (hash.has(nums[i])) { return true }
        else (hash.set(nums[i]), true)
    }
    return false
}
// @lc code=end