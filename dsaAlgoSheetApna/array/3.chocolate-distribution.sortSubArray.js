function findMinDiff(arr, n, m) {
    if (m == 0 || n == 0)
        return 0;
    arr.sort(function (a, b) { return a - b });
    if (n < m)
        return -1;
    let min_diff = arr[n - 1] - arr[0];
    for (let i = 0; i + m - 1 < n; i++) {
        let current = arr[i]
        let last = arr[i + m - 1]
        let diff = last - current;
        if (diff < min_diff)
            min_diff = diff;
    }
    return min_diff;
}

// Driver code
let arr = [12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50];

// Number of students
let m = 7;
let n = arr.length;

console.log("Minimum difference is " + findMinDiff(arr, n, m));