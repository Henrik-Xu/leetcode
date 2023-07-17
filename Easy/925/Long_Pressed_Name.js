/**
 * Long Pressed Name
 */
let isLongPressedName = function(name, typed) {
    let i = 0, m = name.length, n = typed.length;
    for (let j = 0; j < n; ++j){
        if (i < m && name.charAt(i) == typed.charAt(j)){
            i++;
        }else if (j == 0 || typed.charAt(j) != typed.charAt(j - 1)){
            return false;
        }
    }
    return i == m;
};
let name = "abc", typed = "aabb";
let res=isLongPressedName(name,typed);
console.log(res);