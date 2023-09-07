/**
 * Faulty Keyboard
 */
var finalString = function(text) {
   let res='';
   for(let i=0;i<text.length;i++){
    if(text[i]=='i'){
        res=res.split('').reverse().join('');
    }else{
        res+=text[i];
    }
   }
   return res;
}