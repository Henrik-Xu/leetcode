/**
 * Slowest Key
 */
var slowestKey = function(releaseTimes, keysPressed) {
  let arr=new Array(26).fill(0);
  for (let i = 0; i < keysPressed.length; i++) {
   if(i==0){
       arr[keysPressed.charCodeAt(i)-97]=releaseTimes[i];
   }else{
       arr[keysPressed.charCodeAt(i)-97]=Math.max(arr[keysPressed.charCodeAt(i)-97],releaseTimes[i]-releaseTimes[i-1]);
   }
  }
  let max=0;
  let res=-1;
  for (let i = 0; i < arr.length; i++) {
    if(max<=arr[i]){
        max=arr[i];
        res=String.fromCharCode(i+97);
    }
  }
  return res;
};
let releaseTimes = [9,29,49,50], keysPressed = "cbcd";
let res=slowestKey(releaseTimes,keysPressed);
console.log(res);