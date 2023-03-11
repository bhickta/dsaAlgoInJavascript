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
    let [reversed, base, remainder, dividend] = [0, 10, x, x]
    do {
        remainder = dividend % base;
        dividend = Math.floor(dividend / base);
        reversed = (reversed + remainder);
        if (dividend != 0) {
            reversed *= 10;
        }
    } while (dividend != 0)
    if (reversed > Math.pow(2, 31) || reversed < Math.pow(-2, 31)) {
        return 0;
    }
    return reversed;
};
// @lc code=end