/**
 * Count Items Matching a Rule
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count=0;
    for (const [type,color,name] of items) {
        if(ruleKey==="type" && type===ruleValue) count++;
        if(ruleKey==="color" && color===ruleValue) count++;
        if(ruleKey==="name" && name===ruleValue) count++;
    } 
    return count; 
};