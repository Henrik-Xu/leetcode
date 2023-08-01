/**
 * Count Good Triplets
 */
var countGoodTriplets = function(arr, a, b, c) {
    let count = 0;
    let n = arr.length;
    for(let i = 0; i < n -2; i++) {
        for(let j = i + 1; j < n - 1; j++) {
            if(Math.abs(arr[i] - arr[j]) <= a) { // check if satisfy then loop for k
                for(let k = j + 1; k < n; k++) {
                    if(Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[k] - arr[i]) <= c)
                        count++;
                }
            }
        }
    }
    
    return count;
};