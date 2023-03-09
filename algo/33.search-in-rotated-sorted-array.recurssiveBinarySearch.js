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

function search(nums, target) {
    // Define the recursive search function
    function searchHelper(low, high) {
        // Base case: the search range has been exhausted
        if (low > high) {
            return -1;
        }

        // Calculate the middle index of the search range
        const middle = Math.floor((low + high) / 2);

        // Base case: the middle element is the target
        if (nums[middle] === target) {
            return middle;
        }

        // Determine which side of the array is ordered and search that side
        if (nums[low] <= nums[middle]) {
            // Left side is ordered
            if (target >= nums[low] && target < nums[middle]) {
                return searchHelper(low, middle - 1);
            } else {
                return searchHelper(middle + 1, high);
            }
        } else {
            // Right side is ordered
            if (target > nums[middle] && target <= nums[high]) {
                return searchHelper(middle + 1, high);
            } else {
                return searchHelper(low, middle - 1);
            }
        }
    }

    // Call the recursive search function with the initial search range
    return searchHelper(0, nums.length - 1);
}

// @lc code=end

