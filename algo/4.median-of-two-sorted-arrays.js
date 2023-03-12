/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let merged = [...nums1, ...nums2].sort((a, b) => a - b);
    let mid = Math.floor(merged.length / 2);
    if (merged.length % 2 == 0) {
        return (merged[mid] + merged[mid - 1]) / 2;
    } else {
        return merged[mid];
    }
};
// @lc code=end

