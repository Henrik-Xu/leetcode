/**
 * Two Sum II - Input Array Is Sorted
 */
var twoSum = function(numbers, target) {
    let low=0,high=numbers.length-1;
    while (low<high) {
        if(numbers[low]+numbers[high]==target){
            return [low+1,high+1];
        }else if(numbers[low]+numbers[high]>target){
            high--;
        }else{
            low++;
        }
    }
};