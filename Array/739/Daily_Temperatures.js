/**
 * Daily Temperatures
 */
let dailyTemperatures = function(temperatures) {
    let ans = new Array(temperatures.length).fill(0);
    let s=[];
    for (let i = 0; i < temperatures.length; i++) {
        while (s.length!=0 && temperatures[i]>temperatures[s[s.length-1]]) {
            let idx=s.pop();
            ans[idx]=i-idx;
        }
        s.push(i);
    }
    return ans;
};
let temperatures = [73,74,75,71,69,72,76,73];
let res=dailyTemperatures(temperatures);
console.log(res );