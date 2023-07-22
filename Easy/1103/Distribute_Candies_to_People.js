/**
 * Distribute Candies to People
 */
let distributeCandies = function(candies, num_people) {
    let arr=new Array(num_people).fill(0);
    for (let give = 0; candies>0; candies-=give) {
       arr[give%num_people]+=candies>give?give+1:candies;
       give++;
    }
    return arr;
};
let candies = 60, num_people = 4;
let res=distributeCandies(candies,num_people);
console.log(res);