/**
 * Length of Last Word
 */
let lengthOfLastWord = function(s) {
   return s.trim().split(' ').pop().length; 
};