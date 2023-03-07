/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let num = String(x)
    let i = 0
    let j = num.length - 1
    if (num >= 0 && num <= 9) {
        return true
    }
    while (i < j) {
        if (num[i] !== num[j]) {
            return false
        }
        ++i
        --j
    }
    return true
};
// @lc code=end

