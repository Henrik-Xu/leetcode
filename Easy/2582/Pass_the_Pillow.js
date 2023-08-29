/**
 * Pass the Pillow
 */
var passThePillow = function(n, time) {
    let rounds=Math.floor(time/(n-1));
    let step=time % (n-1);
    return rounds%2==0?step+1:n-step;
};