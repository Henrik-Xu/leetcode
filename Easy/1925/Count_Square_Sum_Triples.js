/**
 * Count Square Sum Triples
 */
var countTriples = function(n) {
    let set=new Set();
    for (let i = 1; i <=n; i++) {
        set.add(i*i);
    }
    let res=0;
    for (let i = 1; i <=n; i++) {
        for (let j = i; i*i+j*j<=n*n; j++) {
            if(set.has(i*i+j*j)){
                res+=2;
            }   
        }
    }
    return res;
};
let n=5;
let res=countTriples(n);
console.log(res);