/* Function to reverse arr[] from start to end*/
function reverseArray(arr, start, end) {
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    // Recursive Function calling
    if (start + 1 < end - 1) {
        reverseArray(arr, start + 1, end - 1);
    }
}
/* Utility function to print an array */
function printArray(arr, size) {
    for (var i = 0; i < size; i++) {
        console.log(arr[i]);
    }
}
/* Driver function to test above functions */
var arr = [1, 2, 3, 4, 5, 6];

// To print original array
printArray(arr, 6);

// Function calling
reverseArray(arr, 0, 5);

console.log("Reversed array is");

// To print the Reversed array
printArray(arr, 6);