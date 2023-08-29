/**
 * Distribute Money to Maximum Children
 */
var distMoney = function(money, children) {
    if(money<children)return -1;
    if(money > children * 8) return children - 1;
    let ans=0;
    while(money > 0 && money - 8 >= children - 1){
        ans++; 
        money -= 8; 
        children--;
    }
    if(money == 4 && children == 1) ans--;
    return ans;
};
let money = 20, children = 3;
let res=distMoney(money,children);
console.log(res);