/**
 * Account Balance After Rounded Purchase
 */
var accountBalanceAfterPurchase = function(purchaseAmount) {
    let remain=purchaseAmount%10;
    if(remain>=5){
        purchaseAmount=purchaseAmount-remain+10;
    }else{
        purchaseAmount-=remain;
    }
    return 100 - purchaseAmount;
};