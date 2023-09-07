/**
 * Check if Strings Can be Made Equal With Operations I
 */
var canBeEqual = function(s1, s2) {
    let evenCheck = (s1[0] == s2[0] && s1[2] == s2[2]) || (s1[0] == s2[2] && s1[2] == s2[0]);
    let oddCheck = (s1[1] == s2[1] && s1[3] == s2[3]) || (s1[1] == s2[3] && s1[3] == s2[1]);
    return evenCheck && oddCheck;
};
