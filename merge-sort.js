//merge-sort pseudo-code by chatgpt
/*function mergeSort(arr):
    if length of arr <= 1:
        return arr
    
    // Divide the array into two halves
    mid = floor(length of arr / 2)
    left = arr[0...mid]
    right = arr[mid...end]

    // Recursively sort each half
    left = mergeSort(left)
    right = mergeSort(right)

    // Merge the sorted halves and return
    return merge(left, right)


function merge(left, right):
    result = []
    while left and right are not empty:
        if left[0] < right[0]:
            append left[0] to result
            remove the first element from left
        else:
            append right[0] to result
            remove the first element from right

    // If any elements are left in either left or right, append them to the result
    append the remaining elements of left to result
    append the remaining elements of right to result

    return result
*/

//code written by me:
function mergeSort(arr) {
    let arrLen = arr.length;

    if (arrLen <= 1)
        return arr
    
    mid = Math.floor(arrLen / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    // Recursively sort each half
    left = mergeSort(left)
    right = mergeSort(right)

    // Merge the sorted halves and return
    return merge(left, right)
}


function merge(left, right) {    
    let result = []
    let leftArrayIndex = 0;
    let rightArrayIndex = 0;
    while ((leftArrayIndex < left.length) && (rightArrayIndex < right.length)) {
        if (left[leftArrayIndex] < right[rightArrayIndex]) {
            result.push(left[leftArrayIndex]);
            leftArrayIndex++;
        }
        else {
            result.push(right[rightArrayIndex]);
            rightArrayIndex++;
        }
    }

    if (leftArrayIndex < left.length) {
        result = result.concat(left.slice(leftArrayIndex));
    } else if (rightArrayIndex < right.length) {
        result = result.concat(right.slice(rightArrayIndex));
    }
    return result

}

let arr = [5, 3, 4, 2, 1, 7];
let sortedArr = mergeSort(arr);
console.log(sortedArr);
