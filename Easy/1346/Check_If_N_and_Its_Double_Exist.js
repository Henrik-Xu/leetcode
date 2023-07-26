/**
 * Check If N and Its Double Exist
 */
let checkIfExist = function(arr) {
    let seen=new Set();
    for (const a of arr) {
        if(seen.has(a*2) || a%2==0&&seen.has(a/2)){
            return true;
        }
        seen.add(a);
    }
    return false;
};