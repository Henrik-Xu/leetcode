/**
 * Chunk Array
 */
var chunk = function(arr, size) {
    let res=[];
    for (let i = 0; i < arr.length;) {
        let chunkArr=[],start=i;
        while (i<arr.length && i-start<size) {
            chunkArr.push(arr[i]);
            i++;
        }
        res.push(chunkArr);
    }
    return res;
};
let arr = [1,9,6,3,2], size = 3;
let res=chunk(arr,size);
console.log(res);