/**
 * Capitalize the Title
 */
var capitalizeTitle = function(title) {
    let words = title.split(' ');
    let sb='';
    for (const word of words) {
        if(word.length<=2)
            sb+=word.toLowerCase()+" ";
        else
            sb+=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()+" ";
    }
    return sb.trim();
};