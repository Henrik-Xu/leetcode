/**
 * Maximum Number of Balloons
 */
let maxNumberOfBalloons = function(text) {
    let chars = new Array(26).fill(0); 
    let a='a'.charCodeAt(0);
    for (let c of [...text]) {
        chars[c.charCodeAt(0)-a]++;
    }
    let min = chars[1];
    min = Math.min(min, chars[0]);
    min = Math.min(min, Math.floor(chars[11] / 2)); 
    min = Math.min(min, Math.floor(chars[14] / 2));
    min = Math.min(min, chars[13]);
    return min;        
};
let text = "nlaebolko";
let res=maxNumberOfBalloons(text);
console.log(res);