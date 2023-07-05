/**
 * Fizz Buzz
 */
let fizzBuzz = function(n) {
    let res=[];
    for (let i = 1,fizz=0,buzz=0; i <=n; i++) {
        fizz++;
        buzz++;
        if(fizz==3&&buzz==5){
            res.push('FizzBuzz');
            fizz=0;
            buzz=0;
        }else if(fizz==3){
            res.push('Fizz');
            fizz=0;
        }else if(buzz==5){
            res.push('Buzz');
            buzz=0;
        }else{
            res.push(''+i);
        }
    }
    return res;
};
let n=15;
let res=fizzBuzz(n);
console.log(res);