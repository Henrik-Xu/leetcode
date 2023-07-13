/**
 * Rotate String
 */
let rotateString = function(s, goal) {
    let length=s.length;
    while (length>0) {
        let oneshift=oneShift(s);
        if(oneshift==goal){
            return true;
        }
        s=oneshift;
        length--;
    }
    return false;
};
let oneShift=function(s){
    let first=s[0];
    return s.substring(1)+first;
}