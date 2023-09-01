/**
 * Number of Senior Citizens
 */
var countSeniors = function(details) {
    return details.filter((a)=>parseInt(a.substring(11,13))>60).length;;
};