var longestPalindrome = function(s) {
    let longest='';
    for (let i = 0; i < s.length; i++) {
        let one=findPalindrome(s, i, i);
        let two=findPalindrome(s, i, i+1);
        let current=one.length>two.length?one:two;
        if(current.length>longest.length){
            longest=current;
        }
    }
    return longest;
};

const findPalindrome=(str,i,j)=>{
    while(i>=0 && j<str.length && str[i]==str[j]){
        i--;
        j++;
    }
    return str.substring(i+1, j);
}

let s = "babad";
let res=longestPalindrome(s);
console.log(res);