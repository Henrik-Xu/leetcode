/**
 * Calculate Amount Paid in Taxes
 */
var calculateTax = function(brackets, income) {
    let res=0,prev=0;
    while (income>0 && brackets.length>0) {
        let [key,rate]=brackets.shift(); 
        if (income>=key) {
            res+=(key-prev)*rate/100;
        } else {
            res+=rate*(income-prev)/100;
            income=0;
        }
        prev=key;
    }
    return res;
};
let brackets = [[1,33]], income = 1;
let res=calculateTax(brackets,income);
console.log(res);