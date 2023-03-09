/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target, low = 0, high = nums.length - 1) => {
    if (low > high) {
        return -1;
    }
    const middle = Math.floor((low + high) / 2);
    if (nums[middle] == target) {
        return middle;
    }
    if (nums[low] <= nums[middle]) {
        if (target >= nums[low] && target < nums[middle]) {
            return search(nums, target, low, middle - 1);
        } else {
            return search(nums, target, middle + 1, high);
        }
    } else {
        if (target > nums[middle] && target <= nums[high]) {
            return search(nums, target, middle + 1, high);
        } else {
            return search(nums, target, low, middle - 1);
        }
    }
};
// @lc code=end

