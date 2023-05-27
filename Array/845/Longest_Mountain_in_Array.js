/**
 * Longest Mountain in Array
 */
// let longestMountain = function(arr) {
//     if(arr.length<3)return 0;
//     let up=new Array(arr.length).fill(0);
//     let down=new Array(arr.length).fill(0);
//     for (let i = arr.length-2; i>=0; i--) {
//         if(arr[i+1]<arr[i]){
//             down[i]=down[i+1]+1;
//         }
//     }
//     let res=0;
//     for (let i = 0 ; i < arr.length; i++) {
//         if(i>0 && arr[i]>arr[i-1]){
//             up[i]=up[i-1]+1;
//         }
//         if(up[i]>0&&down[i]>0){
//             res=Math.max(up[i]+down[i]+1,res);
//        }   
//     }
//     return res;
// };
let longestMountain = function(arr) {
 let down=0,up=0,res=0;
 for (let i = 1; i < arr.length; i++) {
    if((down>0&&arr[i-1]<arr[i])||arr[i-1]==arr[i]){
        up=down=0
    }
    if(arr[i-1]<arr[i])up++;
    if(arr[i-1]>arr[i])down++;
    if(up>0&&down>0 && up+down+1>res)res=up+down+1;
 }
 return res;
};
let arr = [2,1,4,7,3,2,5];
let res=longestMountain(arr);
console.log(res);