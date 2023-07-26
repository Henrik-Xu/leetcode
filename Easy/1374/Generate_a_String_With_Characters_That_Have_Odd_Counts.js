/**
 * Generate a String With Characters That Have Odd Counts
 */
var generateTheString = function(n) {
    return n % 2 === 0 ? `${'a'.repeat(n - 1)}b` : 'a'.repeat(n);
  };