/**
 * Find Smallest Letter Greater Than Target
 */
let nextGreatestLetter = function(letters, target) {
    let low = 0,high =letters.length-1;
    while (low<=high) {
        let mid = low+Math.floor((high-low)/2);
        if(target<letters[mid]){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return letters[low%letters.length];
};
let letters = ["x","x","y","y"], target = "z";
let res=nextGreatestLetter(letters,target);
console.log(res);