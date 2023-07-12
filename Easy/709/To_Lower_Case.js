/**
 * To Lower Case
 */
let toLowerCase = function(s) {
   let arr=[...s];
   let A='A'.charCodeAt(0),Z='Z'.charCodeAt(0);
   for (let i = 0; i < arr.length; i++) {
    if(arr[i].charCodeAt(0)>=A && arr[i].charCodeAt(0)<=Z){
        arr[i]=String.fromCharCode(arr[i].charCodeAt(0)+32);
    }
   }
   return arr.join('');
};
let s="Hello";
let res=toLowerCase(s);
console.log(res);