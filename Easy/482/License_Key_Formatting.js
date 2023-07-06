/**
 * License Key Formatting
 */
let licenseKeyFormatting = function(s, k) {
    let sb = '';
    let a='a'.charCodeAt(0);
    let z='z'.charCodeAt(0)
    for (let i = s.length - 1; i >= 0; i--)
        if (s.charAt(i) != '-'){
            if(sb.length%(k+1)==k){
                sb='-'+sb;
            }
            let c=s.charCodeAt(i);
            if(c>=a && c<=z){
                sb=String.fromCharCode(c-32)+sb;
            }else{
                sb=s.charAt(i)+sb;
            }            
        }            
   return sb;
};