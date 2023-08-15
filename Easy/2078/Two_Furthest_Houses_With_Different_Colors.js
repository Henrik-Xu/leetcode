/**
 * Two Furthest Houses With Different Colors
 */
var maxDistance = function(colors) {
    let n=colors.length,i=0,j=n-1;
    while (colors[0]==colors[j]) {
        j--;
    }
    while (colors[n-1]==colors[i]) {
        i++;
    }
    return Math.max(n-1-i,j);
};