/**
 * Categorize Box According to Criteria
 */
var categorizeBox = function(length, width, height, mass) {
    const volume = length * width * height;
    const isBulky =
      length >= 10 ** 4 ||
      width >= 10 ** 4 ||
      height >= 10 ** 4 ||
      mass >= 10 ** 4 ||
      volume >= 10 ** 9;
    let result = '';
  
    const isHeavy = mass >= 100;
    if (isBulky && isHeavy) {
      result = 'Both';
    } else if (!isBulky && !isHeavy) {
      result = 'Neither';
    } else if (isBulky) {
      result = 'Bulky';
    } else if (isHeavy) {
      return 'Heavy';
    }
  
    return result;
  };