/**
 * Shortest Completing Word
 */
let shortestCompletingWord = function(licensePlate, words) {
    let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103];
    licensePlate=licensePlate.toLowerCase();
    let shortest ='aaaaaaaaaaaaaaaa';
    let plateProduct=getCharProduct(primes,licensePlate);
    for (const word of words) {
        if(word.length<shortest.length && getCharProduct(primes,word)%plateProduct==0){
            shortest=word;
        }
    }
    return shortest;
};
let getCharProduct=function(primes,word){
    let product=1;
    for (const w of Array.from(word)) {
        let index=w.charCodeAt(0)-'a'.charCodeAt(0);
        if(0<=index && index<=25){
            product*=primes[index];
        }
    }
    return product;
}
let licensePlate = "1s3 456", words = ["looks","pest","stew","show"];
let res = shortestCompletingWord(licensePlate,words);
console.log(res);