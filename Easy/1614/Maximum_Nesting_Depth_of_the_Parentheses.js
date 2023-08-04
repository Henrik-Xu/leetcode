/**
 * Maximum Nesting Depth of the Parentheses
 */
var maxDepth = function (s) {
    let res = 0, cur = 0;
    for (let i = 0; i < s.length; ++i) {
        if (s.charAt(i) == '(')
            res = Math.max(res, ++cur);
        if (s.charAt(i) == ')')
            cur--;
    }
    return res;
};