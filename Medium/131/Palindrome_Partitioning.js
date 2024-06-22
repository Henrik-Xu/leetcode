/**
 * Palindrome Partitioning
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let isPalindrome=function(s){
        let low=0,high=s.length-1;
        while (low<high) {
            if(s[low]!=s[high]){
                return false;
            }
            low++;
            high--;
        }
        return true;
    }
    let res=[];
    let backtracking=function(temp,start){
        if(start==s.length){
            res.push([...temp]);
            return;
        }
        for (let i = start; i < s.length; i++) {
            if(isPalindrome(s.substring(start,i+1))){
                temp.push(s.substring(start,i+1));
                backtracking(temp,i+1);
                temp.pop();
            }
            
        }
    }
    backtracking([],0);
    return res;
};