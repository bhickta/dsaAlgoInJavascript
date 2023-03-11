/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const MAX_INT = 2147483647;
    const MIN_INT = -MAX_INT;
    let isNegative = x < 0;
    let result = 0;
    x = Math.abs(x);
    while (x > 0) {
        let lsd = x % 10;
        result = result * 10 + lsd;
        x = Math.floor(x / 10);
    }
    result = isNegative ? -result : result;
    if (result > MAX_INT || result < MIN_INT) {
        return 0;
    }
    return result;
};
// @lc code=end

