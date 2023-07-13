/**
 * Number of Lines To Write String
 */
let numberOfLines = function(widths, s) {
    let cur=0,res=1;
    let a='a'.charCodeAt(0);
   for (const c of s) {
     let width=widths[c.charCodeAt(0)-a];
     res=cur+width>100?res+1:res;
     cur=cur+width>100?width:cur+width;
   }
   return [res,cur];
 };