/**
 * Guess Number Higher or Lower
 */
let guessNumber = function(n) {
    let low=0,high=n;
    while (low<=high) {
        let middle=low+Math.floor((high-low)/2);
        let ans=guess(middle);
        if(ans==0){
            return middle;
        }else if(ans==1){
            low=middle+1;
        }else{
            high=middle-1;
        }
    }
};