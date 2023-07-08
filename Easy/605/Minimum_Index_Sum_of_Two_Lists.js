/**
 * Minimum Index Sum of Two Lists
 */
let canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if(flowerbed[i] == 0){
            let left = (i==0) || flowerbed[i-1]==0;
            let right = (i==flowerbed.length-1) || flowerbed[i+1] == 0;
            if(left && right){
                flowerbed[i] = 1;
                count++;
                if(count==n){
                    return true;
                }
            }
        }
    }
    return count>=n;
};
let flowerbed = [1,0,0,0,1], n = 2;
let res=canPlaceFlowers(flowerbed,n);
console.log(res);