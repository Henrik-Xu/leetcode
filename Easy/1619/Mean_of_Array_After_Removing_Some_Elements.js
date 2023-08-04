/**
 * Mean of Array After Removing Some Elements
 */
var trimMean = function(arr) {
    let n = arr.length, k = 0.05 * n;
    arr.sort((a, b) => a - b);
    let sum = 0;
    for (let i = k; i < n - k; i++) {
        sum += arr[i];
	}
    return sum / (n - 2 * k);
};