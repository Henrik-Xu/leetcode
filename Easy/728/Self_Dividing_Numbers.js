/**
 * Self Dividing Numbers
 */
let selfDividingNumbers = function(left, right) {
    let res = [];
    for (let i = left; i <= right; i++) {
      let isSelf=isSelfDividing(i);
      if(isSelf){
          res.push(i);
      }
    }
    return res;
};
function isSelfDividing(digits){
    let s=digits.toString();
    for (let i = 0; i < s.length; i++) {
        if(s[i]=='0' || digits% parseInt(s[i])!=0){
            return false;
        }        
    }
    return true;
}