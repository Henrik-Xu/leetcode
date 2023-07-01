/**
 * First Bad Version
 */
let solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start=0,end=n;
        while (start<=end) {
            let middle=start+Math.floor((end-start)/2);
            let isBad=isBadVersion(middle);
            if (isBad) {
                end=middle-1;
            }else{
                start=middle+1;
            }
        }
        return start;
    };
};