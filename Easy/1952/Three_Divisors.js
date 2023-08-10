/**
 * Three Divisors
 */
var isThree = function(n) {
    let set= [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101 ];
    for(let i=0;i<set.length;i++){
        if(n%set[i]==0){
            if(n/set[i]==set[i])
                return true;
        }
    }
    return false;
};