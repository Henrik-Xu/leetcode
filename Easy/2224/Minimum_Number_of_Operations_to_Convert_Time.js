/**
 * Minimum Number of Operations to Convert Time
 */
var convertTime = function(current, correct) {
    let a = Number(current.split(':').at(0)) * 60 + Number(current.split(':').at(1));
    let b = Number(correct.split(':').at(0)) * 60 + Number(correct.split(':').at(1));
    let diff = b - a,ops=[60,15,5,1];
    let res=0;
    for (const o of ops) {
        res += Math.floor(diff / o);
        diff %= o;
    } 
    return res;
};