/**
 * Percentage of Letter in String
 */
var percentageLetter = function(s, letter) {
    return Math.floor(s.split('').filter(x=>x==letter).length/s.length * 100);
};